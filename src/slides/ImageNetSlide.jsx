function ImageNetSvg() {
  const icons = [
    { label: '고양이', emoji: '🐱', x: 40 },
    { label: '자동차', emoji: '🚗', x: 140 },
    { label: '비행기', emoji: '✈️', x: 240 },
    { label: '꽃', emoji: '🌸', x: 340 },
    { label: '강아지', emoji: '🐶', x: 440 },
  ]
  return (
    <svg viewBox="0 0 480 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="240" y="22" fill="#93a6cc" fontSize="12" fontWeight="600" textAnchor="middle">
        ImageNet — 1,000개 카테고리
      </text>

      {icons.map((ic) => (
        <g key={ic.label}>
          <rect x={ic.x - 35} y="34" width="70" height="70" rx="10" fill="#0d1c3f" stroke="#3aa8ff" strokeWidth="1.5" />
          <text x={ic.x} y="76" fontSize="26" textAnchor="middle">{ic.emoji}</text>
          <text x={ic.x} y="118" fill="#5e729c" fontSize="10" textAnchor="middle">{ic.label}</text>
        </g>
      ))}
      <text x="240" y="142" fill="#5e729c" fontSize="10" textAnchor="middle">… 그 외 995개 카테고리, 1,400만 장 이상의 이미지</text>

      <g>
        <line x1="240" y1="160" x2="240" y2="195" stroke="#3aa8ff" strokeWidth="2" markerEnd="url(#inarrow)" />
        <defs>
          <marker id="inarrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#3aa8ff" />
          </marker>
        </defs>
        <text x="255" y="182" fill="#3aa8ff" fontSize="10">범용 특징 이전</text>
      </g>

      <rect x="60" y="200" width="360" height="80" rx="10" fill="rgba(95,227,196,0.08)" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="240" y="228" fill="#e7eefc" fontSize="13" textAnchor="middle" fontWeight="600">사전학습된 특징 추출 능력</text>
      <text x="240" y="248" fill="#93a6cc" fontSize="10.5" textAnchor="middle">가장자리 · 곡선 · 질감 · 형태</text>
      <text x="240" y="266" fill="#5fe3c4" fontSize="11" textAnchor="middle" fontWeight="600">→ OCT 망막영상 분석에 그대로 활용</text>
    </svg>
  )
}

export default function ImageNetSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Pretrained Dataset</div>
        <h2 className="slide-title">ImageNet</h2>
        <div className="slide-body">
          <p>
            ImageNet은 <span className="hl">1,400만 장 이상</span>의 이미지와{' '}
            <span className="hl">1,000개 카테고리</span>로 구성된 대규모 이미지 데이터셋입니다.
          </p>
          <p>
            ImageNet으로 사전학습된 모델은 가장자리, 곡선, 질감, 형태 등 이미지의{' '}
            <span className="hl">범용적 특징을 이미 학습한 상태</span>입니다.
          </p>
          <p>
            의료영상 AI에서는 이 <span className="hl">사전학습된 특징 추출 능력</span>을 OCT 영상
            분석에 그대로 활용합니다. 처음부터 학습하는 것보다 훨씬 적은 데이터로 높은 성능을
            달성할 수 있습니다.
          </p>
        </div>
      </div>
      <div className="panel">
        <ImageNetSvg />
      </div>
    </div>
  )
}
