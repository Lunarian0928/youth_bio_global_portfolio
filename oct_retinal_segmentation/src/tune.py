import argparse
import os

import optuna
import pandas as pd

from .train import run_training


def build_objective(args):
    def objective(trial):
        lr = trial.suggest_float("lr", 1e-5, 1e-3, log=True)
        batch_size = trial.suggest_categorical("batch_size", [4, 8, 16])
        weight_decay = trial.suggest_float("weight_decay", 1e-6, 1e-3, log=True)

        def epoch_callback(epoch, val_dice):
            trial.report(val_dice, epoch)
            return trial.should_prune()

        _, best_val_dice, _ = run_training(
            train_csv=args.train_csv,
            val_csv=args.val_csv,
            run_name=f"trial{trial.number}",
            checkpoint_dir=args.search_checkpoint_dir,
            epochs=args.search_epochs,
            batch_size=batch_size,
            lr=lr,
            weight_decay=weight_decay,
            seed=args.seed,
            data_root=args.data_root,
            epoch_callback=epoch_callback,
        )

        if trial.should_prune():
            raise optuna.TrialPruned()

        return best_val_dice

    return objective


def parse_args():
    parser = argparse.ArgumentParser(description="Optuna로 OCT5k Segmentation 하이퍼파라미터 탐색")
    parser.add_argument("--train-csv", required=True)
    parser.add_argument("--val-csv", required=True)
    parser.add_argument("--n-trials", type=int, default=20)
    parser.add_argument("--search-epochs", type=int, default=10, help="trial 1회당 학습 epoch 수")
    parser.add_argument("--final-epochs", type=int, default=30, help="최적 파라미터로 재학습할 epoch 수")
    parser.add_argument("--search-checkpoint-dir", default="checkpoints/search")
    parser.add_argument("--final-checkpoint-dir", default="checkpoints")
    parser.add_argument("--run-name", default="best", help="최종 재학습 결과에 붙는 이름")
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--data-root", default=None, help="OCT5k 루트 경로 (csv 절대경로를 현재 환경에 맞게 재구성)")
    return parser.parse_args()


def main():
    args = parse_args()
    os.makedirs(args.search_checkpoint_dir, exist_ok=True)
    os.makedirs(args.final_checkpoint_dir, exist_ok=True)

    study = optuna.create_study(direction="maximize", pruner=optuna.pruners.MedianPruner())
    study.optimize(build_objective(args), n_trials=args.n_trials)

    print("Best trial:")
    print(f"  val_dice = {study.best_value:.4f}")
    print(f"  params   = {study.best_params}")

    trials_path = os.path.join(args.search_checkpoint_dir, "optuna_trials.csv")
    study.trials_dataframe().to_csv(trials_path, index=False)
    print(f"전체 trial 기록 저장: {trials_path}")

    # 최적 하이퍼파라미터로 더 긴 epoch 동안 재학습 후 최종 모델로 저장
    print(f"\n최적 파라미터로 {args.final_epochs} epoch 재학습 (run-name={args.run_name})")
    run_training(
        train_csv=args.train_csv,
        val_csv=args.val_csv,
        run_name=args.run_name,
        checkpoint_dir=args.final_checkpoint_dir,
        epochs=args.final_epochs,
        batch_size=study.best_params["batch_size"],
        lr=study.best_params["lr"],
        weight_decay=study.best_params["weight_decay"],
        seed=args.seed,
        data_root=args.data_root,
    )


if __name__ == "__main__":
    main()
