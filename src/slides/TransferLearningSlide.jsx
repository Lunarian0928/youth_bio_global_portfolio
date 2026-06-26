function TransferSvg() {
  const steps = [
    { x: 10, label: '사전학습 모델', sub: 'ImageNet / ResNet', color: '#3aa8ff' },
    { x: 170, label: 'Fine-tuning', sub: 'OCT 데이터로 재학습', color: '#5fe3c4' },
    { x: 330, label: 'OCT 진단', sub: '망막질환 분류', color: '#ff9f5b' },
  ]
  return (
    <svg viewBox="0 0 480 200" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="60" width="140" height="80" rx="10" fill="#0d1c3f" stroke={s.color} strokeWidth="1.5" />
          <text x={s.x + 70} y="98" fill="#e7eefc" fontSize="13" textAnchor="middle" fontWeight="600">{s.label}</text>
          <text x={s.x + 70} y="118" fill="#93a6cc" fontSize="10.5" textAnchor="middle">{s.sub}</text>
          {i < steps.length - 1 && (
            <line x1={s.x + 140} y1="100" x2={s.x + 165} y2="100" stroke="#3aa8ff" strokeWidth="2" markerEnd="url(#arrow7)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow7" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3aa8ff" />
        </marker>
      </defs>
      <text x="240" y="175" fill="#5e729c" fontSize="11" textAnchor="middle">대규모 데이터로 학습된 지식을 적은 의료 데이터에 이전합니다</text>
    </svg>
  )
}

export default function TransferLearningSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Strategy</div>
        <h2 className="slide-title">Transfer Learning</h2>
        <div className="slide-body">
          <p>
            의료영상 데이터는 환자 동의와 전문의 라벨링이 필수적으로 요구되어 충분한 학습 데이터를
            확보하는 것이 구조적으로 어렵습니다.
          </p>
          <p>
            데이터가 부족한 상태에서 모델을 처음부터 학습시키면 <span className="hl">과적합이
            발생</span>하거나 일반화 성능이 크게 저하됩니다.
          </p>
          <p>
            Transfer Learning은 대규모 데이터로 <span className="hl">사전학습된 모델의 가중치</span>를
            새로운 도메인의 적은 데이터로 재학습하는 방법입니다. 이미 학습된{' '}
            <span className="hl">이미지 특징 추출 능력을 의료영상에 이전</span>해 적은 데이터로도 높은
            성능을 달성할 수 있습니다.
          </p>
          <p>
            OCT 분석에서는 ImageNet으로 사전학습된 모델을 OCT 데이터로 <span className="hl">Fine-tuning</span>해
            망막질환을 분류합니다. Transfer Learning의 대표 백본 모델은 <span className="hl">ResNet</span>입니다.
          </p>
        </div>
      </div>
      <div className="panel">
        <TransferSvg />
      </div>
    </div>
  )
}
