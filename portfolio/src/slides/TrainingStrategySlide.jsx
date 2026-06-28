function SplitComparisonSvg() {
  return (
    <svg viewBox="0 0 480 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ts-arrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#93a6cc" />
        </marker>
      </defs>

      {/* 왼쪽: 고정 split */}
      <text x="115" y="16" fill="#3aa8ff" fontSize="11.5" fontWeight="600" textAnchor="middle">고정 Split</text>

      <rect x="60" y="26" width="110" height="28" rx="5" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.3" />
      <text x="115" y="44" fill="#e7eefc" fontSize="9" textAnchor="middle">전체 데이터 (60명)</text>

      <line x1="115" y1="54" x2="115" y2="70" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="20" y="74" width="58" height="26" rx="4" fill="rgba(58,168,255,0.12)" stroke="#3aa8ff" strokeWidth="1.2" />
      <text x="49" y="91" fill="#e7eefc" fontSize="8" textAnchor="middle">train 42</text>
      <rect x="83" y="74" width="58" height="26" rx="4" fill="rgba(95,227,196,0.12)" stroke="#5fe3c4" strokeWidth="1.2" />
      <text x="112" y="91" fill="#e7eefc" fontSize="8" textAnchor="middle">val 9</text>
      <rect x="146" y="74" width="58" height="26" rx="4" fill="rgba(255,159,91,0.12)" stroke="#ff9f5b" strokeWidth="1.2" />
      <text x="175" y="91" fill="#e7eefc" fontSize="8" textAnchor="middle">test 9</text>

      <line x1="115" y1="100" x2="115" y2="116" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="60" y="120" width="110" height="26" rx="4" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.2" />
      <text x="115" y="137" fill="#e7eefc" fontSize="9" textAnchor="middle">학습</text>

      <line x1="115" y1="146" x2="115" y2="162" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="60" y="166" width="110" height="26" rx="4" fill="rgba(58,168,255,0.1)" stroke="#3aa8ff" strokeWidth="1.3" />
      <text x="115" y="183" fill="#e7eefc" fontSize="9" textAnchor="middle">검증 1회</text>

      {/* 오른쪽: K-Fold */}
      <text x="365" y="16" fill="#5fe3c4" fontSize="11.5" fontWeight="600" textAnchor="middle">5-Fold KFold</text>

      <rect x="310" y="26" width="110" height="28" rx="5" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.3" />
      <text x="365" y="44" fill="#e7eefc" fontSize="9" textAnchor="middle">전체 데이터 (60명)</text>

      <line x1="365" y1="54" x2="365" y2="70" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={300 + i * 27}
            y="74"
            width="22"
            height="26"
            rx="3"
            fill="rgba(95,227,196,0.12)"
            stroke="#5fe3c4"
            strokeWidth="1"
          />
        ))}
        <text x="365" y="111" fill="#93a6cc" fontSize="8" textAnchor="middle">fold 0~4</text>
      </g>

      <line x1="365" y1="116" x2="365" y2="132" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="310" y="136" width="110" height="26" rx="4" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.2" />
      <text x="365" y="153" fill="#e7eefc" fontSize="8.5" textAnchor="middle">5회 학습 및 검증</text>

      <line x1="365" y1="162" x2="365" y2="178" stroke="#93a6cc" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="310" y="182" width="110" height="26" rx="4" fill="rgba(95,227,196,0.1)" stroke="#5fe3c4" strokeWidth="1.3" />
      <text x="365" y="199" fill="#e7eefc" fontSize="9" textAnchor="middle">평균 성능 산출</text>

      {/* 하단: 성능 비교 */}
      <line x1="115" y1="192" x2="115" y2="230" stroke="#ff9f5b" strokeWidth="1.3" />
      <line x1="365" y1="208" x2="365" y2="230" stroke="#ff9f5b" strokeWidth="1.3" />
      <line x1="115" y1="230" x2="365" y2="230" stroke="#ff9f5b" strokeWidth="1.3" />
      <line x1="240" y1="230" x2="240" y2="248" stroke="#ff9f5b" strokeWidth="1.3" markerEnd="url(#ts-arrow)" />

      <rect x="170" y="252" width="140" height="28" rx="6" fill="rgba(255,159,91,0.12)" stroke="#ff9f5b" strokeWidth="1.4" />
      <text x="240" y="270" fill="#ffb37a" fontSize="10" textAnchor="middle" fontWeight="600">성능 비교</text>
    </svg>
  )
}

export default function TrainingStrategySlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Training Strategy I</div>
        <h2 className="slide-title">학습 전략 I</h2>
        <div className="slide-body">
          <p>
            데이터가 적은 의료영상 환경에서 신뢰할 수 있는 모델을 만들기 위해 <span className="hl">환자
            단위 데이터 분할</span>과 교차 검증을 적용했습니다.
          </p>
        </div>

        <div className="card-row cols-1 project-cards">
          <div className="info-card">
            <div className="card-title">환자 단위 데이터 분할</div>
            <div className="card-desc">
              총 60명의 환자를 <span className="hl">train 42명 / val 9명 / test 9명</span>으로
              분할했습니다. 같은 환자의 단면이 train과 val에 동시에 포함되면 모델이 환자 특성을
              암기할 수 있습니다. 이를 방지하기 위해 환자 단위로 분할해 <span className="hl">데이터
              leakage를 차단</span>했습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">고정 split vs 5-fold StratifiedGroupKFold</div>
            <div className="card-desc">
              환자 9명짜리 고정 검증은 운에 좌우될 수 있습니다. 이를 보완하기 위해{' '}
              <span className="hl">5-fold StratifiedGroupKFold</span>를 적용해{' '}
              <span className="hl">질환 비율을 유지하면서 환자 단위로 fold를 나눔</span>으로써
              고정 split과 K-fold 평균 성능을 비교해 결과의 신뢰성을 검증했습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">Optuna 하이퍼파라미터 탐색</div>
            <div className="card-desc">
              lr, batch_size, weight_decay 세 가지를 탐색했습니다. <span className="hl">MedianPruner로
              부진한 trial을 조기 종료</span>해 탐색 효율을 높였습니다. <span className="hl">최적
              파라미터를 찾은 뒤 더 긴 epoch으로 재학습</span>해 최종 모델을 저장했습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <SplitComparisonSvg />
      </div>
    </div>
  )
}
