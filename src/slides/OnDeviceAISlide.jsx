function OnDeviceSvg() {
  return (
    <svg viewBox="0 0 480 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="20" fill="#93a6cc" fontSize="12" fontWeight="600">서버 기반 AI</text>
      <rect x="20" y="35" width="80" height="50" rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x="60" y="64" fill="#e7eefc" fontSize="10" textAnchor="middle">OCT 장비</text>
      <line x1="100" y1="60" x2="150" y2="60" stroke="#5e729c" strokeWidth="1.5" markerEnd="url(#a10a)" />
      <text x="125" y="50" fill="#5e729c" fontSize="9" textAnchor="middle">인터넷</text>
      <rect x="150" y="35" width="90" height="50" rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x="195" y="58" fill="#e7eefc" fontSize="10" textAnchor="middle">클라우드</text>
      <text x="195" y="72" fill="#e7eefc" fontSize="10" textAnchor="middle">서버 AI</text>
      <line x1="240" y1="60" x2="290" y2="60" stroke="#5e729c" strokeWidth="1.5" markerEnd="url(#a10a)" />
      <rect x="290" y="35" width="80" height="50" rx="6" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x="330" y="64" fill="#e7eefc" fontSize="10" textAnchor="middle">진단 결과</text>
      <text x="20" y="105" fill="#ff6b6b" fontSize="10.5">인터넷 없으면 작동 불가 — 오지/농촌 보건소에 한계</text>

      <text x="20" y="150" fill="#5fe3c4" fontSize="12" fontWeight="600">온디바이스 AI</text>
      <rect x="20" y="165" width="80" height="50" rx="6" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="60" y="194" fill="#e7eefc" fontSize="10" textAnchor="middle">OCT 장비</text>
      <line x1="100" y1="190" x2="150" y2="190" stroke="#5fe3c4" strokeWidth="1.5" markerEnd="url(#a10b)" />
      <rect x="150" y="165" width="90" height="50" rx="6" fill="rgba(95,227,196,0.1)" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="195" y="186" fill="#e7eefc" fontSize="10" textAnchor="middle">경량화 모델</text>
      <text x="195" y="200" fill="#e7eefc" fontSize="10" textAnchor="middle">기기 내 추론</text>
      <line x1="240" y1="190" x2="290" y2="190" stroke="#5fe3c4" strokeWidth="1.5" markerEnd="url(#a10b)" />
      <rect x="290" y="165" width="80" height="50" rx="6" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
      <text x="330" y="194" fill="#e7eefc" fontSize="10" textAnchor="middle">즉시 진단</text>
      <text x="20" y="235" fill="#5fe3c4" fontSize="10.5">인터넷 없이 현장에서 즉시 분석 가능</text>

      <defs>
        <marker id="a10a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5e729c" />
        </marker>
        <marker id="a10b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5fe3c4" />
        </marker>
      </defs>
    </svg>
  )
}

export default function OnDeviceAISlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Deployment</div>
        <h2 className="slide-title">온디바이스 AI</h2>
        <div className="slide-body">
          <p>인터넷 연결 없이 기기 자체에서 AI 모델이 직접 추론을 수행하는 방식입니다.</p>
          <p>
            이동형 OCT 장비를 오지나 농촌 보건소에 가져가면 인터넷 환경을 보장할 수 없습니다.
            현장에서 즉시 망막질환을 분석하려면 <span className="hl">서버에 의존하지 않는 온디바이스
            구조가 필수적입니다</span>.
          </p>
          <p>
            온디바이스 환경에서는 탑재 가능한 모델 용량에 제약이 있습니다. 이동형 의료기기는
            일반적으로 <span className="hl">RAM 512MB~2GB</span> 수준이며 <span className="hl">모델
            크기는 50MB 이하</span>가 권장됩니다. NVIDIA Jetson 같은 의료용 엣지 AI 보드를 활용하면
            RAM 4~8GB 수준으로 더 큰 모델도 탑재 가능합니다. 이 제약 안에서 최대 성능을 내기 위해{' '}
            <span className="hl">모델 경량화 기법이 필수적으로 요구됩니다</span>.
          </p>
        </div>
      </div>

      <div className="panel">
        <OnDeviceSvg />
      </div>
    </div>
  )
}
