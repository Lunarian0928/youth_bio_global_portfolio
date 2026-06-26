function DicomSvg() {
  return (
    <svg viewBox="0 0 480 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
      <text x="40" y="28" fill="#93a6cc" fontSize="13" fontWeight="600">JPG / PNG</text>
      <rect x="30" y="40" width="160" height="120" rx="8" fill="#0d1c3f" stroke="#5e729c" strokeWidth="1.5" />
      <text x="110" y="105" fill="#e7eefc" fontSize="12" textAnchor="middle">이미지 픽셀</text>
      <text x="110" y="122" fill="#5e729c" fontSize="10" textAnchor="middle">Data Only</text>

      <text x="290" y="28" fill="#5fe3c4" fontSize="13" fontWeight="600">DICOM</text>
      <rect x="280" y="40" width="170" height="220" rx="8" fill="#0d1c3f" stroke="#5fe3c4" strokeWidth="1.5" />
      <rect x="296" y="56" width="138" height="60" rx="6" fill="rgba(58,168,255,0.12)" stroke="#3aa8ff" strokeWidth="1.2" />
      <text x="365" y="90" fill="#e7eefc" fontSize="12" textAnchor="middle">이미지 픽셀</text>

      <rect x="296" y="126" width="138" height="120" rx="6" fill="rgba(95,227,196,0.08)" stroke="#5fe3c4" strokeWidth="1.2" />
      <text x="365" y="146" fill="#5fe3c4" fontSize="11" textAnchor="middle" fontWeight="600">메타데이터</text>
      <text x="310" y="166" fill="#93a6cc" fontSize="10">환자 정보</text>
      <text x="310" y="186" fill="#93a6cc" fontSize="10">촬영 날짜</text>
      <text x="310" y="206" fill="#93a6cc" fontSize="10">장비 정보</text>
      <text x="310" y="226" fill="#93a6cc" fontSize="10">PACS 연동</text>

      <line x1="195" y1="100" x2="275" y2="100" stroke="#3aa8ff" strokeWidth="1.5" markerEnd="url(#arrow6)" />
      <defs>
        <marker id="arrow6" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3aa8ff" />
        </marker>
      </defs>
      <text x="200" y="92" fill="#3aa8ff" fontSize="10">메타데이터 추가</text>
    </svg>
  )
}

export default function DicomSlide() {
  return (
    <div className="two-col">
      <div className="panel">
        <DicomSvg />
      </div>
      <div>
        <div className="slide-eyebrow">Data Format</div>
        <h2 className="slide-title">DICOM</h2>
        <div className="slide-body">
          <p>
            DICOM은 의료영상의 <span className="hl">국제 표준 파일 형식</span>으로, 단순한 이미지 파일과
            달리 촬영 이미지와 함께 환자 정보, 촬영 날짜, 장비 정보 등의 <span className="hl">메타데이터가
            하나의 파일에 통합</span>되어 있습니다.
          </p>
          <p>
            병원 정보 시스템인 <span className="hl">PACS</span>와 연동되며, 제조사에 관계없이 동일한
            방식으로 데이터를 처리할 수 있어 의료 현장에서 범용적으로 활용됩니다.
          </p>
          <p>
            AI 모델 학습에 활용하기 위해서는 <span className="hl">픽셀 값 정규화, 메타데이터 분리</span>
            등의 전처리 과정이 필수적으로 요구됩니다. Python 환경에서는 <span className="hl">pydicom</span> 라이브러리를 통해 처리합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
