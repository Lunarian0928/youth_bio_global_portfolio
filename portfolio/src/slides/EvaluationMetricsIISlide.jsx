function DiceSvg() {
  return (
    <svg viewBox="0 0 280 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="115" cy="55" r="42" fill="rgba(58,168,255,0.28)" stroke="#3aa8ff" strokeWidth="1.5" />
      <circle cx="165" cy="55" r="42" fill="rgba(95,227,196,0.28)" stroke="#5fe3c4" strokeWidth="1.5" />
      <path
        d="M140,21 A42,42 0 0 1 140,89 A42,42 0 0 1 140,21 Z"
        fill="rgba(0,229,255,0.55)"
      />
      <text x="83" y="30" fill="#3aa8ff" fontSize="10" textAnchor="middle">실제 (B)</text>
      <text x="197" y="30" fill="#5fe3c4" fontSize="10" textAnchor="middle">예측 (A)</text>
      <text x="140" y="58" fill="#e7eefc" fontSize="10.5" fontWeight="700" textAnchor="middle">2|A∩B|</text>
      <text x="140" y="113" fill="#93a6cc" fontSize="10.5" textAnchor="middle">Dice = 2|A∩B| / (|A|+|B|)</text>
    </svg>
  )
}

function IoUSvg() {
  return (
    <svg viewBox="0 0 280 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="22" width="90" height="66" fill="rgba(58,168,255,0.25)" stroke="#3aa8ff" strokeWidth="1.5" />
      <rect x="120" y="22" width="90" height="66" fill="rgba(95,227,196,0.25)" stroke="#5fe3c4" strokeWidth="1.5" />
      <rect x="120" y="22" width="30" height="66" fill="rgba(255,159,91,0.5)" />
      <rect x="58" y="20" width="154" height="70" fill="none" stroke="#ff9f5b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="100" y="16" fill="#3aa8ff" fontSize="10" textAnchor="middle">실제 (B)</text>
      <text x="175" y="16" fill="#5fe3c4" fontSize="10" textAnchor="middle">예측 (A)</text>
      <text x="135" y="58" fill="#e7eefc" fontSize="11" fontWeight="700" textAnchor="middle">∩</text>
      <text x="135" y="104" fill="#ff9f5b" fontSize="10" textAnchor="middle">∪ (점선 = 합집합)</text>
      <text x="140" y="113" fill="#93a6cc" fontSize="10.5" textAnchor="middle">IoU = |A∩B| / |A∪B|</text>
    </svg>
  )
}

function HausdorffSvg() {
  return (
    <svg viewBox="0 0 280 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30,35 Q70,20 110,38 T190,30 Q220,25 250,40"
        fill="none"
        stroke="#3aa8ff"
        strokeWidth="2"
      />
      <text x="252" y="38" fill="#3aa8ff" fontSize="9">실제</text>

      <path
        d="M30,70 Q70,90 110,68 T190,80 Q220,90 250,72"
        fill="none"
        stroke="#5fe3c4"
        strokeWidth="2"
      />
      <text x="252" y="76" fill="#5fe3c4" fontSize="9">예측</text>

      <line x1="108" y1="40" x2="112" y2="66" stroke="#ff6b6b" strokeWidth="1.8" markerEnd="url(#hdarrow)" markerStart="url(#hdarrow)" />
      <defs>
        <marker id="hdarrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#ff6b6b" />
        </marker>
      </defs>
      <text x="120" y="56" fill="#ff6b6b" fontSize="9.5" fontWeight="600">max distance</text>

      <text x="140" y="110" fill="#93a6cc" fontSize="10.5" textAnchor="middle">
        Hausdorff Distance — 경계선 사이 최대 거리
      </text>
    </svg>
  )
}

export default function EvaluationMetricsIISlide() {
  return (
    <div className="two-col eval2-layout">
      <div>
        <div className="slide-eyebrow">Evaluation</div>
        <h2 className="slide-title">평가지표 II</h2>

        <div className="card-row cols-1 eval1-cards">
          <div className="info-card">
            <div className="card-title">Dice Score</div>
            <div className="card-desc long">
              예측한 병변 영역과 실제 병변 영역이 얼마나 겹치는지를 측정하는 Segmentation 전용
              평가지표입니다. 수식: Dice = <span className="hl">2 × |A ∩ B| / (|A| + |B|)</span> 0에
              가까울수록 겹침이 없고, 1에 가까울수록 완벽히 일치합니다. Accuracy로는 측정할 수 없는{' '}
              <span className="hl">병변 경계의 정밀도</span>를 직접 수치화합니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">IoU (Intersection over Union)</div>
            <div className="card-desc long">
              예측 영역과 실제 영역의 교집합을 합집합으로 나눈 값입니다. 수식: IoU ={' '}
              <span className="hl">|A ∩ B| / |A ∪ B|</span> <span className="hl">Jaccard Index</span>
              라고도 불립니다. Dice Score와 유사하나 분모가 합집합으로 더 엄격한 기준입니다. 0에
              가까울수록 겹침이 없고, 1에 가까울수록 완벽히 일치합니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">Hausdorff Distance</div>
            <div className="card-desc long">
              <span className="hl">예측 경계선과 실제 경계선 사이의 최대 거리</span>를 측정합니다.
              경계가 얼마나 정밀하게 일치하는지 평가하는 지표입니다. 0에 가까울수록 경계가 정확하게
              일치합니다. Dice Score나 IoU가 놓칠 수 있는 <span className="hl">국소적인 경계 오류를
              탐지</span>하는 데 유용합니다.
            </div>
          </div>
        </div>
      </div>

      <div className="panel eval2-image-stack">
        <div className="eval2-image-item">
          <DiceSvg />
        </div>
        <div className="eval2-image-item">
          <IoUSvg />
        </div>
        <div className="eval2-image-item">
          <HausdorffSvg />
        </div>
      </div>
    </div>
  )
}
