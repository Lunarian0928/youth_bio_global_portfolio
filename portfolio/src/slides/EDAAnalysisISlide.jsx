import edaSampleImg from '../assets/eda_sample.png'

function DiseaseBarChart() {
  const data = [
    { label: 'AMD Part1', value: 701, color: '#3aa8ff' },
    { label: 'AMD Part2', value: 38, color: '#ff6b6b' },
    { label: 'DME', value: 403, color: '#5fe3c4' },
    { label: 'Normal Part1', value: 293, color: '#ff9f5b' },
    { label: 'Normal Part2', value: 237, color: '#a78bfa' },
  ]
  const max = 701
  const chartTop = 18
  const chartBottom = 100
  const chartHeight = chartBottom - chartTop
  const barWidth = 44
  const gap = 18

  return (
    <svg viewBox="0 0 320 120" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      {data.map((d, i) => {
        const h = (d.value / max) * chartHeight
        const x = 10 + i * (barWidth + gap)
        const y = chartBottom - h
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barWidth} height={h} rx="3" fill={d.color} fillOpacity="0.85" />
            <text x={x + barWidth / 2} y={y - 5} fill="#e7eefc" fontSize="10" textAnchor="middle" fontWeight="600">
              {d.value}
            </text>
            <text x={x + barWidth / 2} y={chartBottom + 12} fill="#93a6cc" fontSize="8.5" textAnchor="middle">
              {d.label.split(' ')[0]}
            </text>
            <text x={x + barWidth / 2} y={chartBottom + 22} fill="#93a6cc" fontSize="8.5" textAnchor="middle">
              {d.label.split(' ')[1] || ''}
            </text>
          </g>
        )
      })}
      <line x1="4" y1={chartBottom} x2="316" y2={chartBottom} stroke="#5e729c" strokeWidth="1" />
    </svg>
  )
}

export default function EDAAnalysisISlide() {
  return (
    <div className="two-col eda-layout">
      <div className="panel eda-image-panel">
        <img src={edaSampleImg} alt="OCT B-scan 샘플 이미지와 망막 층 마스크 쌍 4개" />
        <div className="image-card-caption">OCT B-scan 샘플 이미지(상단)와 망막 층 마스크(하단)</div>
      </div>

      <div className="eda-right">
        <div className="slide-eyebrow">Dataset Analysis</div>
        <h2 className="slide-title eda-title">데이터셋 분석 I</h2>

        <div className="info-card eda-single-card">
          <div className="card-title">질환별 샘플 수 (총 1,672장)</div>
          <DiseaseBarChart />
          <div className="card-desc">
            AMD가 739장으로 가장 많고 DME 403장, Normal 530장 순입니다. <span className="hl">AMD
            Part2가 38장으로 현저히 적어 클래스 불균형 문제가 존재</span>합니다.
          </div>
        </div>
      </div>
    </div>
  )
}
