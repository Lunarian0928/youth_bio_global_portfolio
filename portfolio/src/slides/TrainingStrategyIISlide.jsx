export default function TrainingStrategyIISlide() {
  return (
    <div>
      <div className="slide-eyebrow">Training Strategy II</div>
      <h2 className="slide-title">학습 전략 II</h2>
      <div className="slide-body" style={{ maxWidth: 820 }}>
        <p>
          학습 데이터의 다양성을 확보하기 위해 Data Augmentation을 적용했습니다. 의료영상
          특성상 <span className="hl">망막 층 구조가 유지되는 범위 안에서만</span> 증강을
          적용했습니다.
        </p>
      </div>

      <div className="card-row cols-2">
        <div className="info-card">
          <div className="card-title">Horizontal Flip (좌우 반전)</div>
          <div className="card-desc">
            이미지를 좌우로 반전합니다. 망막 층 구조는 유지되므로 적용 가능합니다. 상하 반전은{' '}
            <span className="hl">망막 층의 해부학적 구조를 왜곡하므로 적용 대상에서 제외</span>
            했습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Brightness / Contrast 조정</div>
          <div className="card-desc">
            이미지의 밝기와 대비를 무작위로 조정합니다. OCT 촬영 환경에 따라 밝기가 달라질 수
            있어 모델이 다양한 밝기 조건에서도 강건하게 작동하도록 합니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Gaussian Noise</div>
          <div className="card-desc">
            이미지에 가우시안 노이즈를 추가합니다. <span className="hl">OCT 영상은 촬영 특성상
            노이즈가 포함되어 있어</span> 노이즈에 강건한 모델을 구성하기 위해 적용했습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Affine Transform</div>
          <div className="card-desc">
            이미지를 회전, 이동, 크기 조정하는 변환입니다. 망막 층 구조가 유지되는 범위 안에서
            미세하게 적용했습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
