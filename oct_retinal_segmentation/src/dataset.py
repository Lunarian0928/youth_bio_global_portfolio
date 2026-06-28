import glob
import os

import cv2
import pandas as pd
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

    def __init__(self, root_dir=None, grading=1, diseases=DEFAULT_DISEASES, transform=None, samples=None):
        self.transform = transform

        # from_csv()를 통해 호출된 경우: 이미 (이미지경로, 마스크경로) 쌍 목록이 있으니
        # 폴더를 다시 스캔할 필요 없이 그대로 받아서 끝낸다.
        if samples is not None:
            self.samples = list(samples)
            return

        # 여기부터는 폴더를 직접 뒤져서 (이미지, 마스크) 쌍을 처음부터 찾는 경로.
        self.samples = []
        images_root = os.path.join(root_dir, "Images", "Images_Manual")
        masks_root = os.path.join(root_dir, "Masks", "Masks_Manual", f"Grading_{grading}")

        for disease in diseases:  # AMD Part1, AMD Part2, DME, Normal Part1, Normal Part2 순회
            disease_image_dir = os.path.join(images_root, disease)
            if not os.path.isdir(disease_image_dir):
                continue  # 그 질환 폴더가 없으면 건너뜀

            # 이 질환 폴더 안(하위 폴더 전부 포함)에 있는 모든 .png 파일의 "경로 문자열"을 찾아옴
            # → 디스크에 이미 존재하는 파일을 검색하는 것일 뿐, 새 파일을 만들지 않음
            for image_path in glob.glob(os.path.join(disease_image_dir, "**", "*.png"), recursive=True):
                # images_root를 기준으로 한 상대경로만 추출
                # 예: ".../Images_Manual/DME/DME (11).E2E/.../Image 1.png" → "DME/DME (11).E2E/.../Image 1.png"
                rel_path = os.path.relpath(image_path, images_root)

                # 마스크 쪽도 같은 상대경로 구조이므로, masks_root에 그대로 이어붙이면
                # 이 이미지와 짝이 되는 마스크의 "예상 경로"가 만들어짐
                mask_path = os.path.join(masks_root, rel_path)

                # 그 마스크 파일이 실제로 존재하는 경우에만 정상적인 짝으로 인정
                if os.path.exists(mask_path):
                    # self.samples 리스트(메모리)에 (이미지경로, 마스크경로) 쌍을 하나 추가
                    # → 디스크에는 아무 변화 없음, 그냥 "어떤 이미지와 어떤 마스크가 짝인지" 메모리에 기록
                    self.samples.append((image_path, mask_path))

    @staticmethod
    def _remap_path(path, root_dir):
        """csv에 저장된 절대경로가 다른 환경(Colab/Kaggle/로컬)에서 만들어진 경우,
        Images/Images_Manual 또는 Masks/Masks_Manual 이후 상대경로만 추출해
        현재 환경의 root_dir 기준으로 다시 붙인다."""
        normalized = path.replace("\\", "/")
        for marker in ("/Images/Images_Manual/", "/Masks/Masks_Manual/"):
            idx = normalized.find(marker)
            if idx != -1:
                return os.path.join(root_dir, *normalized[idx + 1:].split("/"))
        return path

    @classmethod
    def from_csv(cls, csv_path, transform=None, root_dir=None):
        """02_preprocessing에서 저장한 split csv(image_path, mask_path)로부터 생성.

        root_dir를 넘기면 csv의 절대경로를 현재 환경(OCT5k 루트)에 맞게 재구성한다.
        """
        df = pd.read_csv(csv_path)
        if root_dir is not None:
            image_paths = [cls._remap_path(p, root_dir) for p in df["image_path"]]
            mask_paths = [cls._remap_path(p, root_dir) for p in df["mask_path"]]
        else:
            image_paths = list(df["image_path"])
            mask_paths = list(df["mask_path"])
        samples = list(zip(image_paths, mask_paths))
        return cls(transform=transform, samples=samples)

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
