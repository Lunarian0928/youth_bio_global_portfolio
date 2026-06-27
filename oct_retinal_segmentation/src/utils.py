import random

import numpy as np
import torch


def set_seed(seed=42):
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)


def dice_score(pred, target, num_classes, eps=1e-7):
    """클래스별 Dice를 구해 평균낸다.

    pred, target: (B, H, W) 정수 클래스 인덱스 텐서.
    """
    scores = []
    for c in range(num_classes):
        pred_c = pred == c
        target_c = target == c
        intersection = (pred_c & target_c).sum().float()
        union = pred_c.sum().float() + target_c.sum().float()
        scores.append(((2 * intersection + eps) / (union + eps)).item())
    return sum(scores) / len(scores)


def iou_score(pred, target, num_classes, eps=1e-7):
    """클래스별 IoU를 구해 평균낸다.

    pred, target: (B, H, W) 정수 클래스 인덱스 텐서.
    """
    scores = []
    for c in range(num_classes):
        pred_c = pred == c
        target_c = target == c
        intersection = (pred_c & target_c).sum().float()
        union = (pred_c | target_c).sum().float()
        scores.append(((intersection + eps) / (union + eps)).item())
    return sum(scores) / len(scores)
