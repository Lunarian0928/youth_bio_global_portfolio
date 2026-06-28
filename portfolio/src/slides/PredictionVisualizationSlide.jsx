import evaluationResultImg from '../assets/evaluation_result.png'

export default function PredictionVisualizationSlide() {
  return (
    <div className="two-col pv-slide">
      <div className="pv-left">
        <div className="slide-eyebrow">Visualization</div>
        <h2 className="slide-title">예측 결과 시각화</h2>
        <div className="slide-body">
          <p>
            테스트 데이터에서 무작위로 선택한 6개 샘플의 OCT 이미지, Ground Truth 마스크, 예측 마스크를
            비교합니다. 예측 마스크가 Ground Truth와 <span className="hl">형태 및 경계가 거의
            일치</span>함을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="panel pv-image-panel">
        <img src={evaluationResultImg} alt="테스트 샘플 6개의 OCT 이미지, Ground Truth, 예측 마스크 비교" />
      </div>
    </div>
  )
}
