export default function LightweightTechniquesSlide() {
  return (
    <div>
      <div className="slide-eyebrow">Optimization</div>
      <h2 className="slide-title">모델 경량화 기법</h2>

      <div className="card-row cols-2 lw-cards">
        <div className="info-card">
          <div className="card-title">Pruning</div>
          <div className="card-desc">
            모델에서 <span className="hl">기여도가 낮은 가중치나 뉴런을 제거</span>하는 방법입니다.
            중요하지 않은 연결을 잘라내 모델 크기를 줄이고 연산량을 감소시킵니다. 성능 저하를
            최소화하면서 경량화할 수 있습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Quantization</div>
          <div className="card-desc">
            모델의 가중치와 활성화 값의 수치 정밀도를 낮추는 방법입니다.{' '}
            <span className="hl">32비트 부동소수점을 8비트 정수로 변환</span>하면{' '}
            <span className="hl">모델 크기가 4배 감소</span>하고 연산 속도가 향상됩니다. 정밀도는
            소폭 감소하지만 경량화 효과가 큽니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Knowledge Distillation</div>
          <div className="card-desc">
            크고 성능이 높은 <span className="hl">Teacher 모델의 지식을 Student 모델에 전달</span>하는
            방법입니다. Student 모델이 Teacher 모델의 출력을 학습해 작은 크기로도 유사한 성능을
            달성합니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Lightweight Architecture</div>
          <div className="card-desc">
            처음부터 온디바이스 환경에 최적화된 경량 구조로 설계하는 방법입니다.{' '}
            <span className="hl">MobileNet, EfficientNet</span>처럼{' '}
            <span className="hl">연산량을 최소화하도록 설계</span>된 아키텍처를 활용합니다.
          </div>
        </div>
      </div>
    </div>
  )
}
