function UNetSvg() {
  const enc = [{ y: 30, w: 120, h: 26 }, { y: 70, w: 96, h: 26 }, { y: 110, w: 72, h: 26 }, { y: 150, w: 48, h: 26 }]
  const dec = [{ y: 150, w: 48, h: 26 }, { y: 110, w: 72, h: 26 }, { y: 70, w: 96, h: 26 }, { y: 30, w: 120, h: 26 }]
  return (
    <svg viewBox="0 0 480 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="16" fill="#3aa8ff" fontSize="12" fontWeight="600">Encoder</text>
      {enc.map((b, i) => (
        <rect key={'e' + i} x={20} y={b.y} width={b.w} height={b.h} rx="4" fill="#0d1c3f" stroke="#3aa8ff" strokeWidth="1.5" />
      ))}

      <text x="350" y="16" fill="#5fe3c4" fontSize="12" fontWeight="600">Decoder</text>
      {dec.map((b, i) => (
        <rect key={'d' + i} x={460 - b.w} y={b.y} width={b.w} height={b.h} rx="4" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
      ))}

      <rect x="200" y="190" width="80" height="26" rx="4" fill="rgba(58,168,255,0.15)" stroke="#3aa8ff" strokeWidth="1.5" />
      <text x="240" y="207" fill="#e7eefc" fontSize="10" textAnchor="middle">Bottleneck</text>

      <path d="M80,43 Q240,200 240,200" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M68,83 Q240,200 240,200" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M56,123 Q240,200 240,200" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.5" />

      {enc.map((b, i) => {
        const dy = dec[3 - i].y
        return (
          <line
            key={'skip' + i}
            x1={20 + b.w}
            y1={b.y + 13}
            x2={460 - dec[3 - i].w}
            y2={dy + 13}
            stroke="#ff6b6b"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        )
      })}

      <text x="240" y="245" fill="#ff6b6b" fontSize="11" textAnchor="middle">Skip Connection — 압축 전 세부 정보를 복원 단계로 직접 전달</text>
    </svg>
  )
}

export default function UNetSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Model</div>
        <h2 className="slide-title">U-Net</h2>
        <div className="slide-body">
          <p>
            U-Net은 의료영상 Segmentation을 위해 설계된{' '}
            <span className="hl">Encoder-Decoder 기반의 합성곱 신경망 아키텍처</span>입니다.
          </p>
          <p>
            Encoder는 입력 이미지를 단계적으로 압축하며{' '}
            <span className="hl">전역적 문맥 정보와 특징을 추출</span>합니다.
          </p>
          <p>Decoder는 압축된 특징 맵을 원본 해상도로 복원하며 각 픽셀이 어느 영역에 속하는지 분류합니다.</p>
          <p>
            <span className="hl">Skip Connection</span>은 Encoder의 각 단계에서 추출한 세부 정보를
            대응하는 Decoder 단계에 직접 전달합니다. 이를 통해 압축 과정에서 손실된{' '}
            <span className="hl">공간적 정보를 복원</span>해 <span className="hl">병변 경계를 정밀하게
            구분</span>할 수 있습니다.
          </p>
          <p>OCT 분석에서는 망막 층 분리와 병변 영역 탐지에 활용됩니다.</p>
        </div>
      </div>
      <div className="panel">
        <UNetSvg />
      </div>
    </div>
  )
}
