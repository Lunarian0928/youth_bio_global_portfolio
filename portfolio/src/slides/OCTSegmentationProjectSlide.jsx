export default function OCTSegmentationProjectSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Project</div>
        <h2 className="slide-title">OCT 망막 층 Segmentation</h2>
        <div className="slide-body">
          <p>
            OCT5k 공개 데이터셋을 활용해 망막 OCT 영상에서 <span className="hl">5개 층을 픽셀 단위로
            분류</span>하는 Segmentation 모델을 직접 설계하고 학습시켰습니다. 데이터 전처리, 모델 학습,
            성능 평가까지 <span className="hl">의료영상 AI 파이프라인 전 과정을 직접 구현</span>했습니다.
          </p>
        </div>
      </div>

      <div className="card-row cols-1 project-cards">
        <div className="info-card">
          <div className="card-title">데이터셋</div>
          <div className="card-desc">
            OCT5k (UCL 공개 데이터셋)<br />
            Images_Manual 1,672장<br />
            전문가 3인 그레이딩 마스크 포함
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">분류 대상 망막 층</div>
          <div className="card-desc">
            ILM / OPL / IS/OS junction / IBRPE / OBRPE<br />
            총 5개 층 + 배경 = 6개 클래스
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">기술 스택</div>
          <div className="card-desc">
            PyTorch<br />
            segmentation_models_pytorch<br />
            U-Net + ResNet-50 backbone<br />
            ImageNet 사전학습 가중치<br />
            Optuna 하이퍼파라미터 탐색
          </div>
        </div>
      </div>
    </div>
  )
}
