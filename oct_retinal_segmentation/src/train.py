import torch
from torch.utils.data import DataLoader

from .dataset import OCTRetinalDataset
from .model import build_model


def train_one_epoch(model, dataloader, optimizer, criterion, device):
    raise NotImplementedError


def evaluate(model, dataloader, criterion, device):
    raise NotImplementedError


def main():
    raise NotImplementedError


if __name__ == "__main__":
    main()
