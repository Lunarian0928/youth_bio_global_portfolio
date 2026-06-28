function ResultsTableSvg() {
  const rows = [
    { name: '배경', dice: '0.9960', iou: '0.9920', sens: '0.9960', spec: '0.9980' },
    { name: 'ILM', dice: '0.9580', iou: '0.9200', sens: '0.9640', spec: '0.9990' },
    { name: 'OPL', dice: '0.9450', iou: '0.8960', sens: '0.9530', spec: '0.9970' },
    { name: 'IS/OS', dice: '0.8930', iou: '0.8070', sens: '0.9100', spec: '0.9980', warn: true },
    { name: 'IBRPE', dice: '0.8770', iou: '0.7810', sens: '0.8960', spec: '0.9980', warn: true },
    { name: 'OBRPE', dice: '0.9980', iou: '0.9960', sens: '0.9980', spec: '0.9990' },
  ]
  const colX = [10, 90, 170, 250, 330]
  const rowH = 26
  const headerY = 18

  return (
    <svg viewBox="0 0 420 210" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      {['클래스', 'Dice Score', 'IoU', 'Sensitivity', 'Specificity'].map((h, i) => (
        <text key={h} x={colX[i]} y={headerY} fill="#5e729c" fontSize="10.5" fontWeight="600">
          {h}
        </text>
      ))}
      <line x1="6" y1="26" x2="414" y2="26" stroke="#5e729c" strokeWidth="1" />

      {rows.map((r, i) => {
        const y = 26 + i * rowH
        const textY = y + 18
        return (
          <g key={r.name}>
            {r.warn && <rect x="4" y={y} width="412" height={rowH} fill="rgba(255,107,107,0.08)" />}
            {r.warn && <rect x="4" y={y} width="3" height={rowH} fill="#ff6b6b" />}
            <text x={colX[0]} y={textY} fill={r.warn ? '#ff6b6b' : '#e7eefc'} fontSize="11" fontWeight={r.warn ? '700' : '400'}>
              {r.name}
            </text>
            <text x={colX[1]} y={textY} fill={r.warn ? '#ff6b6b' : '#93a6cc'} fontSize="11" fontWeight={r.warn ? '700' : '400'}>
              {r.dice}
            </text>
            <text x={colX[2]} y={textY} fill={r.warn ? '#ff6b6b' : '#93a6cc'} fontSize="11" fontWeight={r.warn ? '700' : '400'}>
              {r.iou}
            </text>
            <text x={colX[3]} y={textY} fill={r.warn ? '#ff6b6b' : '#93a6cc'} fontSize="11" fontWeight={r.warn ? '700' : '400'}>
              {r.sens}
            </text>
            <text x={colX[4]} y={textY} fill={r.warn ? '#ff6b6b' : '#93a6cc'} fontSize="11" fontWeight={r.warn ? '700' : '400'}>
              {r.spec}
            </text>
            <line x1="6" y1={y + rowH} x2="414" y2={y + rowH} stroke="rgba(110,160,255,0.12)" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

export default function ResultsSlide() {
  return (
    <div className="results-layout">
      <div className="slide-eyebrow">Results</div>
      <h2 className="slide-title">실험 결과</h2>

      <div className="panel results-top-card">
        <div className="card-title">최적 하이퍼파라미터 (Optuna 탐색 결과)</div>
        <div className="card-desc">
          20번 trial 탐색 결과: lr 0.000399 / batch_size 8 / weight_decay 1.03e-06<br />
          최적 trial val_dice: <strong>0.9465</strong>
        </div>
      </div>

      <div className="two-col results-bottom">
        <div className="panel results-table-panel">
          <ResultsTableSvg />
        </div>

        <div className="card-row cols-1 project-cards">
          <div className="info-card">
            <div className="card-title">고정 Split vs K-Fold 비교</div>
            <div className="card-desc">
              고정 Split val_dice: 0.9445<br />
              K-Fold 평균 val_dice: 0.9449 (±0.001)<br />
              두 방식의 성능이 거의 동일하고 <span className="hl">표준편차가 극히 작습니다</span>.
              모델 성능이 <span className="hl">특정 split에 좌우되지 않고 안정적</span>임을 검증했습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">클래스 불균형 가설 입증</div>
            <div className="card-desc">
              EDA에서 예측한 대로 픽셀 수가 적은 IS/OS(1.7%)와 IBRPE(1.6%)에서 가장 낮은 Dice를
              기록했습니다. <span className="hl">클래스 불균형이 성능을 제약한다는 가설을 실험
              결과로 직접 입증</span>했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
