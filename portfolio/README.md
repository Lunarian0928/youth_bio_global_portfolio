# 유스바이오글로벌 포트폴리오

파이썬 기반 의료영상 AI 개발자 포지션 지원을 위해 제작한 슬라이드형 포트폴리오입니다.
텍스트 기반 의료 AI 개발 경험을 바탕으로 의료영상 AI로의 확장 가능성과
핵심 기술 이해도를 정리했고, 직접 구현한 OCT5k Segmentation 프로젝트를 소개합니다.

---

## 슬라이드 구성 (총 26페이지)

### 표지
1. 표지

### 의료영상 AI 개념
2. 왜 의료영상 AI인가
3. 3D 의료영상이란
4. OCT란 무엇인가
5. DICOM

### 분석 방법론
6. Detection과 Segmentation
7. YOLO
8. U-Net

### 학습 전략 (일반론)
9. Transfer Learning
10. ImageNet
11. ResNet
12. 클래스 불균형

### 성능 평가
13. 평가지표 I (Confusion Matrix, Sensitivity, Specificity, AUC)
14. 평가지표 II (Dice Score, IoU, Hausdorff Distance)

### 온디바이스 AI
15. 온디바이스 AI
16. 모델 경량화 기법

### OCT5k Segmentation 프로젝트
17. OCT 망막 층 Segmentation (프로젝트 소개)
18. 데이터셋 및 질환 소개
19. 데이터셋 분석 I (질환별 샘플 수)
20. 분류 대상 망막 5개 층
21. 데이터셋 분석 II (마스크 클래스 분포)
22. 모델 아키텍처
23. 학습 전략 (환자 단위 split, K-Fold, Optuna)
24. 실험 결과
25. 예측 결과 시각화
26. 한계점 및 향후 개선 방향

---

## 기술 스택

- React
- Vite
- 순수 CSS (CSS 변수 기반 다크 테마)

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
