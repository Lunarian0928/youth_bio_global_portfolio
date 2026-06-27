function ConfusionMatrixSvg() {
  return (
    <svg viewBox="0 0 320 230" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="16" fill="#93a6cc" fontSize="12" fontWeight="600" textAnchor="middle">Confusion Matrix</text>

      <text x="170" y="36" fill="#93a6cc" fontSize="11" fontWeight="600" textAnchor="middle">예측</text>
      <text x="120" y="54" fill="#5e729c" fontSize="10.5" textAnchor="middle">예측 병변</text>
      <text x="240" y="54" fill="#5e729c" fontSize="10.5" textAnchor="middle">예측 정상</text>

      <text x="22" y="125" fill="#93a6cc" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 22 125)">실제</text>
      <text x="50" y="92" fill="#5e729c" fontSize="10.5" textAnchor="middle">병변</text>
      <text x="50" y="152" fill="#5e729c" fontSize="10.5" textAnchor="middle">정상</text>

      <rect x="65" y="64" width="110" height="60" fill="rgba(95,227,196,0.12)" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="120" y="89" fill="#5fe3c4" fontSize="14" textAnchor="middle" fontWeight="700">TP</text>
      <text x="120" y="107" fill="#93a6cc" fontSize="9.5" textAnchor="middle">진양성</text>

      <rect x="175" y="64" width="110" height="60" fill="rgba(255,107,107,0.18)" stroke="#ff6b6b" strokeWidth="2.5" />
      <text x="232" y="87" fill="#ff6b6b" fontSize="14" textAnchor="middle" fontWeight="700">FN ⚠</text>
      <text x="232" y="105" fill="#ffb3b3" fontSize="9.5" textAnchor="middle">위음성</text>

      <rect x="65" y="124" width="110" height="60" fill="rgba(255,107,107,0.10)" stroke="#ff6b6b" strokeWidth="1.5" />
      <text x="120" y="149" fill="#ff6b6b" fontSize="14" textAnchor="middle" fontWeight="700">FP</text>
      <text x="120" y="167" fill="#93a6cc" fontSize="9.5" textAnchor="middle">위양성</text>

      <rect x="175" y="124" width="110" height="60" fill="rgba(95,227,196,0.08)" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="232" y="149" fill="#5fe3c4" fontSize="14" textAnchor="middle" fontWeight="700">TN</text>
      <text x="232" y="167" fill="#93a6cc" fontSize="9.5" textAnchor="middle">진음성</text>

      <text x="232" y="200" fill="#ff6b6b" fontSize="10" textAnchor="middle" fontWeight="600">
        병변을 정상으로 판단
      </text>
      <text x="232" y="216" fill="#ff6b6b" fontSize="10" textAnchor="middle" fontWeight="600">
        — 의료에서 가장 위험한 오류
      </text>
    </svg>
  )
}

function RocSvg() {
  const path = [
    [0, 0], [5, 35], [15, 58], [30, 72], [50, 82], [75, 89], [100, 100],
  ]
  const toXY = ([fpr, tpr]) => {
    const x = 40 + fpr * 1.6
    const y = 150 - tpr * 1.1
    return [x, y]
  }
  const points = path.map(toXY)
  const linePoints = points.map((p) => p.join(',')).join(' ')
  const areaPoints = `40,150 ${linePoints} 200,150`

  return (
    <svg viewBox="0 0 240 190" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="120" y="14" fill="#93a6cc" fontSize="11" fontWeight="600" textAnchor="middle">ROC Curve</text>

      <line x1="40" y1="150" x2="200" y2="150" stroke="#5e729c" strokeWidth="1.2" />
      <line x1="40" y1="40" x2="40" y2="150" stroke="#5e729c" strokeWidth="1.2" />
      <text x="120" y="172" fill="#5e729c" fontSize="9.5" textAnchor="middle">1 - Specificity (FPR)</text>
      <text x="14" y="95" fill="#5e729c" fontSize="9.5" textAnchor="middle" transform="rotate(-90 14 95)">Sensitivity (TPR)</text>

      <line x1="40" y1="150" x2="200" y2="40" stroke="#5e729c" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="155" y="70" fill="#5e729c" fontSize="9" textAnchor="middle">Random</text>

      <polygon points={areaPoints} fill="rgba(58,168,255,0.18)" />
      <polyline points={linePoints} fill="none" stroke="#3aa8ff" strokeWidth="2" />

      <text x="100" y="120" fill="#3aa8ff" fontSize="11" fontWeight="700" textAnchor="middle">AUC</text>
      <text x="100" y="135" fill="#93a6cc" fontSize="8.5" textAnchor="middle">곡선 아래 면적</text>
    </svg>
  )
}

export default function EvaluationMetricsSlide() {
  return (
    <div className="two-col eval1-layout">
      <div>
        <div className="slide-eyebrow">Evaluation</div>
        <h2 className="slide-title">평가지표 I</h2>
        <div className="slide-body eval1-intro">
          <p>
            의료 AI에서 <span className="hl">Accuracy만으로는 모델 성능을 올바르게 평가할 수
            없습니다</span>. 정상 샘플이 95%, 병변 샘플이 5%인 데이터에서 모델이 전부 정상이라고
            예측해도 Accuracy 95%가 나옵니다. 그러나 이는 <span className="hl">병변을 단 하나도
            탐지하지 못한</span> 모델로, <span className="hl">임상적으로 아무런 가치가 없습니다</span>.
            따라서 다음과 같은 지표를 함께 사용해야 합니다.
          </p>
        </div>

        <div className="card-row cols-1 eval1-cards">
          <div className="info-card">
            <div className="card-title">Sensitivity (민감도)</div>
            <div className="card-desc long">
              실제 병변 중 모델이 병변으로 올바르게 탐지한 비율입니다. 수식:{' '}
              <span className="hl">TP / (TP + FN)</span> 병변을 놓치면 환자가 치료 시기를 잃습니다.{' '}
              <span className="hl">의료 AI에서 가장 중요한 평가지표</span>입니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">Specificity (특이도)</div>
            <div className="card-desc long">
              실제 정상 중 모델이 정상으로 올바르게 판단한 비율입니다. 수식:{' '}
              <span className="hl">TN / (TN + FP)</span> 정상을 병변으로 잘못 판단하면{' '}
              <span className="hl">불필요한 검사와 환자 불안</span>을 유발합니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">AUC</div>
            <div className="card-desc long">
              Sensitivity와 Specificity의 균형을 종합적으로 평가하는 지표입니다.{' '}
              <span className="hl">ROC 곡선 아래 면적</span>으로 계산됩니다. 0.5는 랜덤 분류기 수준,
              1.0은 완벽한 분류를 의미합니다.
            </div>
          </div>
        </div>
      </div>

      <div className="eval1-right">
        <div className="panel eval1-cm">
          <ConfusionMatrixSvg />
        </div>
        <div className="eval1-gap" />
        <div className="panel eval1-roc">
          <RocSvg />
        </div>
      </div>
    </div>
  )
}
