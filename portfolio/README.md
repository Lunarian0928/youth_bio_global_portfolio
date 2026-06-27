# 유스바이오글로벌 포트폴리오

파이썬 기반 의료영상 AI 개발자 포지션 지원을 위해 제작한 슬라이드형 포트폴리오입니다.
텍스트 기반 의료 AI 개발 경험을 바탕으로 의료영상 AI로의 확장 가능성과
핵심 기술 이해도를 정리했습니다.

---

## 슬라이드 구성

### 왜 의료영상 AI인가
텍스트 기반 의료 AI를 개발하면서 직접 체감한 한계를 데이터로 제시합니다.
KM-BERT 기반 안과 질환 예측 성능을 통해 텍스트로 진단할 수 없는 질환이 존재함을 수치로 증명합니다.

### 의료영상 개념
3D 볼륨 데이터 구조, OCT 촬영 원리, DICOM 파일 형식 등
의료영상 AI 개발에 필수적인 도메인 지식을 정리했습니다.

### 분석 방법론
Detection과 Segmentation의 차이, YOLO와 U-Net 아키텍처를
의료영상 분석 맥락에서 설명합니다.

### 학습 전략
의료 데이터의 구조적 한계인 클래스 불균형 문제와
Transfer Learning, ImageNet, ResNet을 활용한 해결 방법을 다룹니다.

### 성능 평가
Accuracy만으로는 부족한 의료 AI 평가 기준을 설명합니다.
Sensitivity, Specificity, AUC, Dice Score, IoU, Hausdorff Distance를 정리했습니다.

### 온디바이스 AI
이동형 OCT 장비에 AI를 탑재하기 위한 온디바이스 구조와
Pruning, Quantization, Knowledge Distillation, Lightweight Architecture
네 가지 경량화 기법을 다룹니다.

---

## 기술 스택

- React
- Vite
- Tailwind CSS

---

## 네비게이션

화면 우측 가장자리에 마우스를 가져다대면
슬라이드 목록이 사이드바로 표시됩니다.
원하는 슬라이드 제목을 클릭하면 해당 페이지로 바로 이동할 수 있습니다.
키보드 방향키(← →)로도 슬라이드를 넘길 수 있습니다.

---

## 실행 방법

```bash
npm install
npm run dev
```
