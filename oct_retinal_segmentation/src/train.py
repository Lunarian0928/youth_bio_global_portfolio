import argparse
import os

import albumentations as A
import pandas as pd
import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from tqdm import tqdm

from .dataset import NUM_CLASSES, OCTRetinalDataset
from .model import build_model
from .utils import dice_score, iou_score, set_seed


def get_train_transform():
    return A.Compose([
        A.HorizontalFlip(p=0.5),
        A.RandomBrightnessContrast(p=0.3),
        A.GaussNoise(p=0.2),
        A.ShiftScaleRotate(shift_limit=0.05, scale_limit=0.1, rotate_limit=10, p=0.3),
    ])


def train_one_epoch(model, dataloader, optimizer, criterion, device):
    model.train()
    total_loss = 0.0
    for images, masks in tqdm(dataloader, desc="train", leave=False):
        images, masks = images.to(device), masks.to(device)

        optimizer.zero_grad()
        logits = model(images)
        loss = criterion(logits, masks)
        loss.backward()
        optimizer.step()

        total_loss += loss.item() * images.size(0)

    return total_loss / len(dataloader.dataset)


def evaluate(model, dataloader, criterion, device):
    model.eval()
    total_loss = 0.0
    total_dice = 0.0
    total_iou = 0.0

    with torch.no_grad():
        for images, masks in tqdm(dataloader, desc="eval", leave=False):
            images, masks = images.to(device), masks.to(device)

            logits = model(images)
            loss = criterion(logits, masks)
            preds = logits.argmax(dim=1)

            batch_size = images.size(0)
            total_loss += loss.item() * batch_size
            total_dice += dice_score(preds, masks, NUM_CLASSES) * batch_size
            total_iou += iou_score(preds, masks, NUM_CLASSES) * batch_size

    n = len(dataloader.dataset)
    return total_loss / n, total_dice / n, total_iou / n


def run_training(
    train_csv,
    val_csv,
    run_name,
    checkpoint_dir="checkpoints",
    epochs=30,
    batch_size=8,
    lr=1e-4,
    weight_decay=0.0,
    seed=42,
    device=None,
    epoch_callback=None,
):
    """학습 1회 실행. train.py CLI와 tune.py(Optuna) 양쪽에서 공유하는 핵심 로직.

    epoch_callback(epoch, val_dice) -> bool 을 넘기면 매 epoch 끝에 호출되고,
    True를 반환하면 학습을 조기 종료한다 (Optuna pruning 등에 사용).
    """
    device = device or ("cuda" if torch.cuda.is_available() else "cpu")
    set_seed(seed)
    os.makedirs(checkpoint_dir, exist_ok=True)

    train_dataset = OCTRetinalDataset.from_csv(train_csv, transform=get_train_transform())
    val_dataset = OCTRetinalDataset.from_csv(val_csv)

    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False)

    model = build_model().to(device)
    optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay=weight_decay)
    criterion = nn.CrossEntropyLoss()

    history = []
    best_val_dice = -1.0
    best_path = os.path.join(checkpoint_dir, f"{run_name}_best.pt")

    for epoch in range(1, epochs + 1):
        train_loss = train_one_epoch(model, train_loader, optimizer, criterion, device)
        val_loss, val_dice, val_iou = evaluate(model, val_loader, criterion, device)

        print(
            f"[{run_name}] epoch {epoch}/{epochs} "
            f"train_loss={train_loss:.4f} val_loss={val_loss:.4f} "
            f"val_dice={val_dice:.4f} val_iou={val_iou:.4f}"
        )
        history.append(
            {
                "epoch": epoch,
                "train_loss": train_loss,
                "val_loss": val_loss,
                "val_dice": val_dice,
                "val_iou": val_iou,
            }
        )

        if val_dice > best_val_dice:
            best_val_dice = val_dice
            torch.save(model.state_dict(), best_path)

        if epoch_callback is not None and epoch_callback(epoch, val_dice):
            print(f"[{run_name}] epoch {epoch}에서 조기 종료")
            break

    history_path = os.path.join(checkpoint_dir, f"{run_name}_history.csv")
    pd.DataFrame(history).to_csv(history_path, index=False)
    print(f"[{run_name}] 최고 val_dice={best_val_dice:.4f} -> {best_path}")
    print(f"[{run_name}] 학습 기록 저장: {history_path}")

    return history, best_val_dice, best_path


def parse_args():
    parser = argparse.ArgumentParser(description="U-Net + ResNet-50 OCT5k Segmentation 학습")
    parser.add_argument("--train-csv", required=True, help="02_preprocessing에서 저장한 train split csv")
    parser.add_argument("--val-csv", required=True, help="02_preprocessing에서 저장한 val split csv")
    parser.add_argument("--run-name", default="run", help="체크포인트/기록 파일에 붙는 이름 (예: fixed, fold0)")
    parser.add_argument("--checkpoint-dir", default="checkpoints")
    parser.add_argument("--epochs", type=int, default=30)
    parser.add_argument("--batch-size", type=int, default=8)
    parser.add_argument("--lr", type=float, default=1e-4)
    parser.add_argument("--weight-decay", type=float, default=0.0)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--device", default="cuda" if torch.cuda.is_available() else "cpu")
    return parser.parse_args()


def main():
    args = parse_args()
    run_training(
        train_csv=args.train_csv,
        val_csv=args.val_csv,
        run_name=args.run_name,
        checkpoint_dir=args.checkpoint_dir,
        epochs=args.epochs,
        batch_size=args.batch_size,
        lr=args.lr,
        weight_decay=args.weight_decay,
        seed=args.seed,
        device=args.device,
    )


if __name__ == "__main__":
    main()
