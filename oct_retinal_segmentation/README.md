# OCT Retinal Segmentation

OCT(광간섭단층촬영) 영상에서 망막 병변 영역을 Segmentation하는 딥러닝 프로젝트입니다.
U-Net 기반 아키텍처로 정상/병변 영역을 픽셀 단위로 분류합니다.

---

## 데이터셋

**Kaggle Kermany OCT Dataset**

- 총 **108,315장**의 OCT B-scan 이미지
- 클래스: `CNV`(맥락막 신생혈관), `DME`(당뇨병성 황반부종), `DRUSEN`(드루젠), `NORMAL`(정상) 4가지

---

## 모델 구조

`segmentation_models_pytorch` 라이브러리 기반:

- **U-Net** + **ResNet-50** backbone
- **ImageNet 사전학습 가중치** 사용 (Transfer Learning)
- 입력: **그레이스케일 단채널** (1-channel) OCT 영상

---

## 프로젝트 구조

```
oct_retinal_segmentation/
├── notebooks/
│   ├── 01_EDA.ipynb           # 탐색적 데이터 분석
│   ├── 02_preprocessing.ipynb # 전처리 및 데이터 분할
│   ├── 03_train.ipynb         # 모델 학습
│   └── 04_evaluation.ipynb    # 모델 평가
├── src/
│   ├── __init__.py
│   ├── dataset.py             # Dataset 클래스
│   ├── model.py                # 모델 정의
│   ├── train.py                # 학습 루프
│   └── utils.py                # 평가지표, 유틸 함수
├── requirements.txt
└── README.md
```

---

## 실행 방법

```bash
pip install -r requirements.txt
jupyter notebook
```

노트북은 `01_EDA.ipynb → 02_preprocessing.ipynb → 03_train.ipynb → 04_evaluation.ipynb` 순서로 실행합니다.
