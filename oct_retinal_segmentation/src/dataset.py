import glob
import os

import cv2
import torch
from torch.utils.data import Dataset

NUM_CLASSES = 6  # 0: 배경, 1~5: ILM, OPL-Henles, IS/OS junction, IBRPE, OBRPE

DEFAULT_DISEASES = ("AMD Part1", "AMD Part2", "DME", "Normal Part1", "Normal Part2")


class OCTRetinalDataset(Dataset):
    """OCT5k의 Images_Manual + Masks_Manual 쌍을 로드하는 Segmentation Dataset.

    Images_Manual/<질환>/<...>/Image N.png 와
    Masks_Manual/Grading_<n>/<질환>/<...>/Image N.png 는
    <질환> 이하 상대경로가 동일하므로 그 경로로 매칭한다.
    """

    def __init__(self, root_dir, grading=1, diseases=DEFAULT_DISEASES, transform=None):
        self.transform = transform
        self.samples = []

        images_root = os.path.join(root_dir, "Images", "Images_Manual")
        masks_root = os.path.join(root_dir, "Masks", "Masks_Manual", f"Grading_{grading}")

        for disease in diseases:
            disease_image_dir = os.path.join(images_root, disease)
            if not os.path.isdir(disease_image_dir):
                continue
            for image_path in glob.glob(os.path.join(disease_image_dir, "**", "*.png"), recursive=True):
                rel_path = os.path.relpath(image_path, images_root)
                mask_path = os.path.join(masks_root, rel_path)
                if os.path.exists(mask_path):
                    self.samples.append((image_path, mask_path))

    def __len__(self):
        return len(self.samples)

    def __getitem__(self, idx):
        image_path, mask_path = self.samples[idx]

        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        mask = cv2.imread(mask_path, cv2.IMREAD_GRAYSCALE)

        if self.transform is not None:
            augmented = self.transform(image=image, mask=mask)
            image, mask = augmented["image"], augmented["mask"]

        image = torch.from_numpy(image).float().unsqueeze(0) / 255.0
        mask = torch.from_numpy(mask).long()

        return image, mask
