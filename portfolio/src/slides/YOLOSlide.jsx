function YoloSvg() {
  const boxW = 100
  const boxY = 36
  const boxH = 80
  const xs = [20, 167, 314, 461]

  return (
    <svg viewBox="0 0 580 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x={xs[0]} y="22" fill="#93a6cc" fontSize="12" fontWeight="600">입력 이미지</text>
      <rect x={xs[0]} y={boxY} width={boxW} height={boxH} rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x={xs[0] + boxW / 2} y={boxY + boxH / 2 + 4} fill="#5e729c" fontSize="10" textAnchor="middle">OCT 영상</text>

      <line x1={xs[0] + boxW + 4} y1={boxY + boxH / 2} x2={xs[1] - 4} y2={boxY + boxH / 2} stroke="#3aa8ff" strokeWidth="1.5" markerEnd="url(#yarrow)" />

      <text x={xs[1]} y="22" fill="#3aa8ff" fontSize="12" fontWeight="600">그리드 분할</text>
      <g>
        <rect x={xs[1]} y={boxY} width={boxW} height={boxH} rx="6" fill="#0d1c3f" stroke="#3aa8ff" strokeWidth="1.5" />
        {[1, 2].map((i) => (
          <line key={'v' + i} x1={xs[1] + (i * boxW) / 3} y1={boxY} x2={xs[1] + (i * boxW) / 3} y2={boxY + boxH} stroke="rgba(58,168,255,0.4)" />
        ))}
        {[1, 2].map((i) => (
          <line key={'h' + i} x1={xs[1]} y1={boxY + (i * boxH) / 3} x2={xs[1] + boxW} y2={boxY + (i * boxH) / 3} stroke="rgba(58,168,255,0.4)" />
        ))}
      </g>

      <line x1={xs[1] + boxW + 4} y1={boxY + boxH / 2} x2={xs[2] - 4} y2={boxY + boxH / 2} stroke="#3aa8ff" strokeWidth="1.5" markerEnd="url(#yarrow)" />

      <text x={xs[2]} y="22" fill="#5fe3c4" fontSize="12" fontWeight="600">Bounding Box 예측</text>
      <g>
        <rect x={xs[2]} y={boxY} width={boxW} height={boxH} rx="6" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
        {[1, 2].map((i) => (
          <line key={'v2' + i} x1={xs[2] + (i * boxW) / 3} y1={boxY} x2={xs[2] + (i * boxW) / 3} y2={boxY + boxH} stroke="rgba(95,227,196,0.3)" />
        ))}
        {[1, 2].map((i) => (
          <line key={'h2' + i} x1={xs[2]} y1={boxY + (i * boxH) / 3} x2={xs[2] + boxW} y2={boxY + (i * boxH) / 3} stroke="rgba(95,227,196,0.3)" />
        ))}
        <rect x={xs[2] + 24} y={boxY + 20} width="52" height="36" rx="3" fill="rgba(255,107,107,0.15)" stroke="#ff6b6b" strokeWidth="1.5" />
        <text x={xs[2] + boxW / 2} y={boxY + boxH - 6} fill="#ff6b6b" fontSize="8" textAnchor="middle">병변 0.92</text>
      </g>

      <line x1={xs[2] + boxW + 4} y1={boxY + boxH / 2} x2={xs[3] - 4} y2={boxY + boxH / 2} stroke="#3aa8ff" strokeWidth="1.5" markerEnd="url(#yarrow)" />

      <text x={xs[3]} y="22" fill="#ff9f5b" fontSize="12" fontWeight="600">최종 탐지 결과</text>
      <rect x={xs[3]} y={boxY} width={boxW} height={boxH} rx="6" fill="#0d1c3f" stroke="#ff9f5b" strokeWidth="1.5" />
      <rect x={xs[3] + 22} y={boxY + 16} width="56" height="40" rx="3" fill="none" stroke="#ff6b6b" strokeWidth="1.5" />
      <text x={xs[3] + boxW / 2} y={boxY + boxH - 6} fill="#ff9f5b" fontSize="8" textAnchor="middle">위치 + 클래스</text>

      <defs>
        <marker id="yarrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3aa8ff" />
        </marker>
      </defs>

      <text x="290" y="160" fill="#5e729c" fontSize="11" textAnchor="middle">
        이미지 전체를 한 번에 처리해 그리드별로 Bounding Box와 클래스 확률을 동시에 예측합니다
      </text>

      <g>
        <rect x="40" y="195" width="500" height="90" rx="10" fill="rgba(58,168,255,0.06)" stroke="rgba(110,160,255,0.25)" strokeWidth="1" />
        <text x="290" y="220" fill="#e7eefc" fontSize="12" textAnchor="middle" fontWeight="600">YOLO의 핵심: One-Stage Detection</text>
        <text x="290" y="243" fill="#93a6cc" fontSize="10.5" textAnchor="middle">기존 Two-Stage 모델처럼 영역 제안과 분류를 분리하지 않고</text>
        <text x="290" y="261" fill="#93a6cc" fontSize="10.5" textAnchor="middle">단일 네트워크로 한 번에 처리해 속도가 빠릅니다</text>
      </g>
    </svg>
  )
}

export default function YOLOSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Detection Model</div>
        <h2 className="slide-title">YOLO</h2>
        <div className="slide-body">
          <p>
            YOLO는 You Only Look Once의 약자로, 이미지를 한 번만 처리해 실시간으로 객체를 탐지하는
            딥러닝 모델입니다.
          </p>
          <p>
            기존 Detection 모델이 이미지를 여러 번 처리하는 방식과 달리, YOLO는{' '}
            <span className="hl">이미지 전체를 한 번에 분석</span>해{' '}
            <span className="hl">위치와 클래스를 동시에 예측</span>합니다.
            이로 인해 처리 속도가 빠르고 온디바이스 환경에 적합합니다.
          </p>
          <p>
            의료영상에서는 <span className="hl">당뇨병성 망막병증 스크리닝</span>에서 삼출물, 출혈,
            미세동맥류 등 병변의 위치를 빠르게 탐지하는 데 활용됩니다. 대량의 환자를 빠르게 1차
            선별하는 데 유용합니다.
          </p>
          <p>
            OCT 분석에서는 <span className="hl">YOLO로 병변 위치를 먼저 탐지</span>하고{' '}
            <span className="hl">U-Net으로 해당 영역을 정밀 분석</span>하는 파이프라인으로 조합해
            활용합니다.
          </p>
        </div>
      </div>
      <div className="panel">
        <YoloSvg />
      </div>
    </div>
  )
}
