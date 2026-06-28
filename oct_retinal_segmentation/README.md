# OCT Retinal Segmentation

OCT(광간섭단층촬영) 영상에서 망막 5개 층을 픽셀 단위로 분류하는 Segmentation 프로젝트입니다.
U-Net + ResNet-50 기반으로 데이터 전처리, 하이퍼파라미터 탐색, K-Fold 학습, 평가까지
전체 파이프라인을 직접 구현했습니다.

---

## 데이터셋

**OCT5k** (UCL 공개 데이터셋)

- `Images_Manual` 1,672장 (전문가 3인 그레이딩 마스크 중 Grading_1 사용)
- 질환 구성: AMD Part1(701) / AMD Part2(38) / DME(403) / Normal Part1(293) / Normal Part2(237)
- 환자 단위로는 총 60명

마스크 클래스 (배경 + 5개 망막층, 총 6클래스):

| 클래스 | 의미 | 픽셀 비율 |
|---|---|---|
| 0 | 배경 | 31.3% |
| 1 | ILM (내경계막) | 7.3% |
| 2 | OPL (외망상층) | 5.4% |
| 3 | IS/OS junction | 1.7% |
| 4 | IBRPE | 1.6% |
| 5 | OBRPE | 52.7% |

---

## 모델 구조

`segmentation_models_pytorch` 라이브러리 기반:

- **U-Net** + **ResNet-50** backbone
- **ImageNet 사전학습 가중치** 사용 (Transfer Learning)
- 입력: 그레이스케일 단채널(1-channel) 512×512 OCT 영상
- 출력: 6클래스 픽셀 단위 분류

---

## 학습 전략

- **환자 단위 데이터 분할**: 같은 환자의 단면이 train/val/test에 동시에 섞이는 데이터 누수를 방지
- **고정 Split(train 42 / val 9 / test 9) vs 5-fold StratifiedGroupKFold** 둘 다 생성해 비교 — 고정 9명짜리 검증이 운에 좌우되는지 검증
- **Optuna**로 lr / batch_size / weight_decay 탐색 (MedianPruner로 부진한 trial 조기 종료)

---

## 결과 (Test Set)

| 클래스 | Dice Score | IoU | Sensitivity | Specificity |
|---|---|---|---|---|
| 배경 | 0.996 | 0.992 | 0.997 | 0.998 |
| ILM | 0.958 | 0.918 | 0.945 | 0.998 |
| OPL | 0.945 | 0.896 | 0.957 | 0.996 |
| IS/OS | 0.893 | 0.807 | 0.902 | 0.998 |
| IBRPE | 0.877 | 0.781 | 0.857 | 0.998 |
| OBRPE | 0.998 | 0.996 | 0.998 | 0.998 |

**고정 Split vs K-Fold 평균**: 0.9445 vs 0.9449 (±0.001) — 거의 동일하고 표준편차가 매우 작아,
모델 성능이 특정 split에 좌우되지 않고 안정적임을 확인했습니다.

소수 클래스(IS/OS, IBRPE)가 EDA에서 예측한 대로 가장 낮은 Dice를 기록해, 클래스 불균형이
성능을 제약한다는 가설을 실험 결과로 확인했습니다.

---

## 한계점

- Segmentation만 구현 — Detection/Classification은 미구현
- Class Weight 미적용 (`nn.CrossEntropyLoss()`에 weight 파라미터 없음)
- 모델 경량화 미적용 (체크포인트 124MB, 온디바이스 배포 권장 기준 50MB 초과)
- 단일 그레이더(Grading_1)만 사용, 단일 장비(Heidelberg) 데이터로만 학습

---

## 프로젝트 구조

```
oct_retinal_segmentation/
├── notebooks/
│   ├── 01_EDA.ipynb           # 탐색적 데이터 분석
│   ├── 02_preprocessing.ipynb # Augmentation, 환자 단위 split + K-Fold 생성
│   ├── 03_train.ipynb         # Optuna 탐색 + K-Fold 학습 + 결과 비교
│   └── 04_evaluation.ipynb    # 고정 split + 5fold 모델을 test set으로 평가
├── src/
│   ├── __init__.py
│   ├── dataset.py             # OCTRetinalDataset (환경별 경로 재매핑 포함)
│   ├── model.py                # build_model (U-Net + ResNet-50)
│   ├── train.py                # 학습 루프 (run_training, CLI)
│   ├── tune.py                  # Optuna 하이퍼파라미터 탐색
│   └── utils.py                # set_seed, Dice/IoU 계산
├── requirements.txt
└── README.md
```

---

## 실행 방법

로컬:
```bash
pip install -r requirements.txt
jupyter notebook
```

Colab / Kaggle: 각 노트북 상단의 "환경 설정" 셀이 `IN_COLAB`/`IN_KAGGLE`을 자동 감지해서
리포지토리를 clone(또는 pull)하고 경로를 맞춰줍니다. Colab은 Drive를, Kaggle은 Dataset을
데이터/체크포인트 저장 위치로 사용합니다.

노트북 실행 순서: `01_EDA.ipynb → 02_preprocessing.ipynb → 03_train.ipynb → 04_evaluation.ipynb`
