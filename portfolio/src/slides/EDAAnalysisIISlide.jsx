function MaskBarChart() {
  const data = [
    { label: '배경(0)', value: 31.3, color: '#5e729c' },
    { label: 'ILM(1)', value: 7.3, color: '#3aa8ff' },
    { label: 'OPL(2)', value: 5.4, color: '#5fe3c4' },
    { label: 'IS/OS(3)', value: 1.7, color: '#ff9f5b' },
    { label: 'IBRPE(4)', value: 1.6, color: '#a78bfa' },
    { label: 'OBRPE(5)', value: 52.7, color: '#ff6b6b' },
  ]
  const max = 52.7
  const chartTop = 18
  const chartBottom = 100
  const chartHeight = chartBottom - chartTop
  const barWidth = 38
  const gap = 12

  return (
    <svg viewBox="0 0 320 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      {data.map((d, i) => {
        const h = (d.value / max) * chartHeight
        const x = 10 + i * (barWidth + gap)
        const y = chartBottom - h
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barWidth} height={h} rx="3" fill={d.color} fillOpacity="0.85" />
            <text x={x + barWidth / 2} y={y - 5} fill="#e7eefc" fontSize="9.5" textAnchor="middle" fontWeight="600">
              {d.value}%
            </text>
            <text x={x + barWidth / 2} y={chartBottom + 13} fill="#93a6cc" fontSize="8" textAnchor="middle">
              {d.label}
            </text>
          </g>
        )
      })}
      <line x1="4" y1={chartBottom} x2="316" y2={chartBottom} stroke="#5e729c" strokeWidth="1" />
    </svg>
  )
}

export default function EDAAnalysisIISlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Dataset Analysis</div>
        <h2 className="slide-title">데이터셋 분석 II</h2>
        <div className="slide-body">
          <p>
            하나의 OCT 이미지에는 여러 망막 층이 동시에 존재합니다. <span className="hl">각 픽셀은
            어느 층에 속하는지 레이블이 부여</span>되어 있으며 이를 픽셀 단위로 분류하는 것이
            Segmentation의 목표입니다.
          </p>
          <p>
            전체 픽셀 분포를 분석한 결과 OBRPE(5) 아래 영역이 52.7%로 가장 넓은 면적을 차지하고{' '}
            <span className="hl">IS/OS(3)와 IBRPE(4)는 각각 1.7%, 1.6%로 매우 얇은 층</span>입니다.
            얇은 층일수록 픽셀 수가 적어 학습이 어렵기 때문에 <span className="hl">Class Weight를
            적용</span>해 소수 클래스에 더 높은 가중치를 부여했습니다.
          </p>
        </div>
      </div>

      <div className="panel">
        <MaskBarChart />
      </div>
    </div>
  )
}
