export default function LimitationsSlide() {
  return (
    <div>
      <div className="slide-eyebrow">Limitations</div>
      <h2 className="slide-title">한계점 및 향후 개선 방향</h2>

      <div className="card-row cols-2">
        <div className="info-card">
          <div className="card-title">Class Weight 미적용</div>
          <div className="card-desc">
            EDA에서 IS/OS(1.7%), IBRPE(1.6%) 등 소수 클래스의 심각한 불균형을 확인했지만{' '}
            <span className="hl">weight 파라미터를 적용하지 못했습니다</span>. Class Weight를
            적용했다면 <span className="hl">소수 클래스 Dice Score를 추가로 개선</span>할 수
            있었을 것입니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">모델 경량화 미적용</div>
          <div className="card-desc">
            포트폴리오에서 온디바이스 AI의 필요성과 Pruning, Quantization 기법을 설명했지만{' '}
            <span className="hl">실제 모델에는 적용하지 못했습니다</span>. 현재 체크포인트 크기는{' '}
            <span className="hl">124MB로 온디바이스 배포 권장 기준인 50MB 이하를 크게 초과</span>
            합니다. <span className="hl">이론과 실제 구현 사이의 간극</span>이 남아있습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">단일 장비 데이터</div>
          <div className="card-desc">
            Heidelberg 제조사의 OCT 장비로 촬영된 데이터만으로 학습했습니다.{' '}
            <span className="hl">다른 제조사 장비 영상에 대한 일반화 성능은 검증되지 않았습니다</span>.
            실제 임상 환경 적용을 위해서는 다양한 제조사 장비 데이터로의 검증이 필요합니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Segmentation 단일 태스크</div>
          <div className="card-desc">
            <span className="hl">Detection과 Classification은 구현하지 못했습니다</span>. 실제
            임상 파이프라인에서는 병변 위치 탐지(Detection)와 질환 분류(Classification)가 함께
            필요합니다.
          </div>
        </div>
      </div>
    </div>
  )
}
