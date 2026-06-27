function UNetResNetSvg() {
  const enc = [
    { y: 90, w: 130, h: 22 },
    { y: 126, w: 104, h: 22 },
    { y: 162, w: 78, h: 22 },
    { y: 198, w: 52, h: 22 },
  ]
  const dec = [
    { y: 198, w: 52, h: 22 },
    { y: 162, w: 78, h: 22 },
    { y: 126, w: 104, h: 22 },
    { y: 90, w: 130, h: 22 },
  ]

  return (
    <svg viewBox="0 0 480 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="skiparrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#ff6b6b" />
        </marker>
        <marker id="flowarrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#93a6cc" />
        </marker>
      </defs>

      {/* 상단 흐름: 입력 -> 모델 -> 출력 */}
      <rect x="10" y="10" width="110" height="34" rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x="65" y="31" fill="#e7eefc" fontSize="9.5" textAnchor="middle">입력: OCT 이미지</text>

      <line x1="120" y1="27" x2="158" y2="27" stroke="#93a6cc" strokeWidth="1.5" markerEnd="url(#flowarrow)" />

      <rect x="158" y="10" width="164" height="34" rx="6" fill="rgba(58,168,255,0.08)" stroke="#3aa8ff" strokeWidth="1.5" />
      <text x="240" y="31" fill="#e7eefc" fontSize="9.5" textAnchor="middle">U-Net + ResNet-50</text>

      <line x1="322" y1="27" x2="360" y2="27" stroke="#93a6cc" strokeWidth="1.5" markerEnd="url(#flowarrow)" />

      <rect x="360" y="10" width="110" height="34" rx="6" fill="rgba(255,107,107,0.1)" stroke="#ff6b6b" strokeWidth="1.5" />
      <text x="415" y="31" fill="#e7eefc" fontSize="9" textAnchor="middle">출력: 6클래스 마스크</text>

      {/* U-Net 구조 다이어그램 */}
      <text x="20" y="70" fill="#3aa8ff" fontSize="11" fontWeight="600">Encoder (ResNet-50)</text>
      {enc.map((b, i) => (
        <rect key={'e' + i} x={20} y={b.y} width={b.w} height={b.h} rx="4" fill="#0d1c3f" stroke="#3aa8ff" strokeWidth="1.5" />
      ))}

      <text x="330" y="70" fill="#5fe3c4" fontSize="11" fontWeight="600">Decoder (U-Net)</text>
      {dec.map((b, i) => (
        <rect key={'d' + i} x={460 - b.w} y={b.y} width={b.w} height={b.h} rx="4" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
      ))}

      <rect x="195" y="234" width="90" height="22" rx="4" fill="rgba(58,168,255,0.15)" stroke="#3aa8ff" strokeWidth="1.5" />
      <text x="240" y="249" fill="#e7eefc" fontSize="9" textAnchor="middle">Bottleneck</text>

      <path d="M75,100 Q240,240 240,246" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.3" />
      <path d="M62,138 Q240,240 240,246" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.3" />
      <path d="M49,174 Q240,240 240,246" fill="none" stroke="#3aa8ff" strokeOpacity="0.5" strokeWidth="1.3" />

      {enc.map((b, i) => {
        const dy = dec[3 - i]
        return (
          <line
            key={'skip' + i}
            x1={20 + b.w}
            y1={b.y + 11}
            x2={460 - dy.w}
            y2={dy.y + 11}
            stroke="#ff6b6b"
            strokeWidth="1.4"
            strokeDasharray="4 3"
            markerEnd="url(#skiparrow)"
          />
        )
      })}
      <text x="240" y="270" fill="#ff6b6b" fontSize="9.5" textAnchor="middle">Skip Connection</text>
    </svg>
  )
}

export default function ModelArchitectureSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Model Architecture</div>
        <h2 className="slide-title ma-title">모델 아키텍처</h2>
        <div className="slide-body ma-body">
          <p>
            의료영상 Segmentation의 표준 아키텍처인 <span className="hl">U-Net에 ImageNet으로
            사전학습된 ResNet-50을 Encoder 백본으로 결합</span>했습니다. 처음부터 학습하는 것보다
            훨씬 적은 데이터로 높은 성능을 달성할 수 있습니다.
          </p>
        </div>

        <div className="card-row cols-1 ma-cards">
          <div className="info-card">
            <div className="card-title">입력</div>
            <div className="card-desc">
              그레이스케일 단채널 OCT B-scan 이미지<br />
              512 × 512 픽셀<br />
              배치 정규화 및 픽셀값 정규화 전처리 적용
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">모델 구조</div>
            <div className="card-desc">
              segmentation_models_pytorch 라이브러리 활용<br />
              Encoder: ResNet-50 (ImageNet 사전학습 가중치)<br />
              Decoder: U-Net Decoder<br />
              Skip Connection으로 Encoder 특징을 Decoder에 전달
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">출력</div>
            <div className="card-desc">
              <div className="ma-output-intro">6개 클래스 픽셀 단위 분류</div>
              <div className="ma-output-grid">
                <span>0: 배경</span>
                <span>1: ILM</span>
                <span>2: OPL</span>
                <span>3: IS/OS junction</span>
                <span>4: IBRPE</span>
                <span>5: OBRPE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <UNetResNetSvg />
      </div>
    </div>
  )
}
