export default function ClassImbalanceSlide() {
  return (
    <div>
      <div className="slide-eyebrow">Data Challenge</div>
      <h2 className="slide-title">클래스 불균형</h2>
      <div className="slide-body" style={{ maxWidth: 780 }}>
        <p>의료 데이터는 정상 샘플이 병변 샘플보다 압도적으로 많은 클래스 불균형 문제를 내재하고 있습니다.</p>
        <p>불균형한 데이터로 학습된 모델은 병변을 제대로 학습하지 못하고 다수 클래스인 정상으로만 예측하는 편향이 발생합니다.</p>
        <p>이를 해결하기 위해 다음과 같은 기법을 활용합니다.</p>
      </div>

      <div className="card-row cols-3">
        <div className="info-card">
          <div className="card-title">Oversampling</div>
          <div className="card-desc long">
            클래스 불균형 문제를 해결하기 위해 적은 클래스의 샘플을 복제하거나 <span className="hl">SMOTE</span>처럼
            기존 샘플 사이를 보간해 <span className="hl">합성 데이터를 생성</span>함으로써 클래스 간 샘플 수를
            균형 있게 맞추는 방법입니다. 의료 데이터에서는 <span className="hl">병변 케이스 자체가 희귀</span>해
            데이터 확보가 어렵기 때문에 자주 사용됩니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Undersampling</div>
          <div className="card-desc long">
            많은 클래스에서 무작위 또는 특정 기준으로 <span className="hl">샘플을 제거</span>해 적은
            클래스와 샘플 수를 균형 있게 맞추는 방법입니다. 의료에서는 <span className="hl">정상 데이터를
            버리면</span> 모델이 다양한 정상 패턴을 학습하지 못할 위험이 있어 <span className="hl">신중하게
            적용</span>해야 합니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Class Weight</div>
          <div className="card-desc long">
            <span className="hl">데이터 자체를 변경하지 않고</span> 손실 함수에서 적은 클래스에
            <span className="hl">더 높은 가중치를 부여</span>해 모델이 해당 클래스를 더 중요하게
            학습하도록 유도하는 방법입니다. <span className="hl">병변을 놓치면 환자가 치료 시기를
            잃을 수 있기</span> 때문에 의료 AI에서 가장 많이 쓰는 방법입니다.
          </div>
        </div>
      </div>
    </div>
  )
}
