function Volume2D3DSvg() {
  return (
    <svg viewBox="0 0 480 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="36" fill="#93a6cc" fontSize="13" letterSpacing="1">2D IMAGE</text>
      <rect x="30" y="50" width="160" height="160" rx="6" fill="#0d1c3f" stroke="#3aa8ff" strokeWidth="1.5" />
      <g stroke="rgba(110,160,255,0.25)">
        <line x1="30" y1="90" x2="190" y2="90" />
        <line x1="30" y1="130" x2="190" y2="130" />
        <line x1="30" y1="170" x2="190" y2="170" />
        <line x1="70" y1="50" x2="70" y2="210" />
        <line x1="110" y1="50" x2="110" y2="210" />
        <line x1="150" y1="50" x2="150" y2="210" />
      </g>
      <text x="60" y="240" fill="#5e729c" fontSize="11">Width x Height</text>

      <text x="290" y="36" fill="#5fe3c4" fontSize="13" letterSpacing="1">3D VOLUME</text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={280 + i * 12}
          y={60 + i * 12}
          width="150"
          height="140"
          rx="6"
          fill={i === 2 ? 'rgba(255,107,107,0.18)' : '#0d1c3f'}
          stroke={i === 2 ? '#ff6b6b' : '#5fe3c4'}
          strokeOpacity={i === 2 ? 1 : 0.4 + i * 0.08}
          strokeWidth="1.5"
        />
      ))}
      <text x="290" y="270" fill="#5e729c" fontSize="11">Width x Height x Depth</text>
      <text x="356" y="148" fill="#ff6b6b" fontSize="11">병변 단면</text>
      <line x1="380" y1="142" x2="412" y2="136" stroke="#ff6b6b" strokeWidth="1" />

      <line x1="225" y1="130" x2="255" y2="130" stroke="#3aa8ff" strokeWidth="2" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3aa8ff" />
        </marker>
      </defs>
      <text x="200" y="120" fill="#3aa8ff" fontSize="11">깊이 추가</text>
    </svg>
  )
}

export default function ThreeDImagingSlide() {
  return (
    <div className="two-col">
      <div className="panel">
        <Volume2D3DSvg />
      </div>

      <div>
        <div className="slide-eyebrow">Foundation</div>
        <h2 className="slide-title">3D 의료영상이란</h2>
        <div className="slide-body">
          <p>일반 이미지는 가로×세로로 구성된 2D 픽셀 배열입니다.</p>
          <p>
            의료영상은 여기에 깊이 축이 추가된 가로×세로×깊이의 <span className="hl">3D 볼륨 데이터</span>로
            구성됩니다. 수백 장의 단면 이미지가 순차적으로 적층되어 하나의 입체 구조를 형성합니다.
          </p>
          <p>
            병변은 <span className="hl">특정 층에 국한</span>되어 나타나는 경우가 많습니다.
            단일 단면만으로는 병변의 위치와 범위를 정확히 파악할 수 없으며, <span className="hl">볼륨
            전체에 대한 입체적 분석</span>이 요구됩니다.
          </p>
          <p>
            따라서 2D 이미지를 처리하는 일반 CNN 구조가 아닌, <span className="hl">3D CNN</span> 또는
            다수의 단면을 순차적으로 처리하는 아키텍처가 필요합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
