function ResNetSvg() {
  return (
    <svg viewBox="0 0 480 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="20" fill="#93a6cc" fontSize="12" fontWeight="600" textAnchor="middle">일반 신경망</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={'plain' + i}>
          <rect x="60" y={36 + i * 44} width="80" height="32" rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
          <text x="100" y={56 + i * 44} fill="#93a6cc" fontSize="10" textAnchor="middle">Layer {i + 1}</text>
          {i < 3 && (
            <line x1="100" y1={68 + i * 44} x2="100" y2={76 + i * 44} stroke="#5e729c" strokeWidth="1.5" markerEnd="url(#rarrow)" />
          )}
        </g>
      ))}
      <text x="100" y="225" fill="#ff6b6b" fontSize="10" textAnchor="middle">층이 깊어질수록 기울기 소실</text>

      <line x1="180" y1="160" x2="220" y2="160" stroke="#3aa8ff" strokeWidth="1.5" markerEnd="url(#rarrow)" />
      <text x="200" y="148" fill="#3aa8ff" fontSize="9" textAnchor="middle">vs</text>

      <text x="340" y="20" fill="#5fe3c4" fontSize="12" fontWeight="600" textAnchor="middle">ResNet (Residual)</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={'res' + i}>
          <rect x="300" y={36 + i * 44} width="80" height="32" rx="6" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
          <text x="340" y={56 + i * 44} fill="#e7eefc" fontSize="10" textAnchor="middle">Layer {i + 1}</text>
          {i < 3 && (
            <line x1="340" y1={68 + i * 44} x2="340" y2={76 + i * 44} stroke="#5fe3c4" strokeWidth="1.5" markerEnd="url(#rarrow2)" />
          )}
          {i < 3 && (
            <path
              d={`M385,${52 + i * 44} C 420,${52 + i * 44} 420,${96 + i * 44} 385,${96 + i * 44}`}
              fill="none"
              stroke="#ff9f5b"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#rarrow3)"
            />
          )}
        </g>
      ))}
      <text x="340" y="225" fill="#ff9f5b" fontSize="9" textAnchor="middle">Skip Connection으로 입력을 직접 더함</text>

      <defs>
        <marker id="rarrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#5e729c" />
        </marker>
        <marker id="rarrow2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#5fe3c4" />
        </marker>
        <marker id="rarrow3" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#ff9f5b" />
        </marker>
      </defs>

      <g>
        <rect x="60" y="250" width="360" height="55" rx="10" fill="rgba(58,168,255,0.06)" stroke="rgba(110,160,255,0.25)" strokeWidth="1" />
        <text x="240" y="272" fill="#e7eefc" fontSize="11.5" textAnchor="middle" fontWeight="600">ResNet (특징 추출) → U-Net Encoder → Decoder</text>
        <text x="240" y="291" fill="#93a6cc" fontSize="10" textAnchor="middle">ResNet이 추출한 특징을 기반으로 픽셀 단위 Segmentation 수행</text>
      </g>
    </svg>
  )
}

export default function ResNetSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Backbone Model</div>
        <h2 className="slide-title">ResNet</h2>
        <div className="slide-body">
          <p>
            ResNet은 Residual Network의 약자로, ImageNet 기반 사전학습 모델 중 가장 널리 활용되는
            특징 추출 백본 아키텍처입니다.
          </p>
          <p>
            기존 깊은 신경망은 층이 깊어질수록 <span className="hl">기울기가 소실</span>되어 학습이
            오히려 저하되는 문제가 있었습니다. ResNet은 <span className="hl">Residual Connection</span>을
            도입해 <span className="hl">입력값을 여러 층을 건너뛰어 직접 출력에 더하는</span> 방식으로
            이 문제를 해결했습니다.
          </p>
          <p>
            의료영상 AI에서 ResNet은 단독으로 쓰이기보다 <span className="hl">U-Net의 Encoder 백본으로
            결합</span>되어 활용됩니다. ImageNet으로 사전학습된 ResNet이 특징을 추출하고, U-Net의
            Decoder가 그 특징을 바탕으로 픽셀 단위 Segmentation을 수행하는 구조입니다.
          </p>
        </div>
      </div>
      <div className="panel">
        <ResNetSvg />
      </div>
    </div>
  )
}
