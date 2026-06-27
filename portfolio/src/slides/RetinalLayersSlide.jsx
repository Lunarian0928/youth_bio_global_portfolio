import retinalLayersImg from '../assets/retinal_layers_oct_cross_section.jpg'

export default function RetinalLayersSlide() {
  return (
    <div className="two-col rl-slide">
      <div>
        <div className="slide-eyebrow rl-eyebrow">Retinal Layers</div>
        <h2 className="slide-title rl-title">분류 대상 망막 5개 층</h2>

        <div className="card-row cols-1 rl-cards">
          <div className="info-card">
            <div className="card-title">ILM (Inner Limiting Membrane, 내경계막)</div>
            <div className="card-desc long">
              망막의 가장 안쪽 경계를 이루는 막입니다. <span className="hl">유리체와 망막을 구분하는
              첫 번째 경계선</span>으로 OCT 영상에서 망막 전체 구조 분석의 기준점이 됩니다. 이 층이
              손상되면 유리체와 망막 사이의 유착이 발생할 수 있습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">OPL (Outer Plexiform Layer, 외망상층)</div>
            <div className="card-desc long">
              광수용체와 양극세포 사이의 시냅스 연결부로 시각 신호를 전달하는 중간 경로입니다.
              황반변성에서 이 층의 침하가 <span className="hl">조기 망막 위축의 중요한 지표</span>로
              활용됩니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">IS/OS junction (내외절 경계)</div>
            <div className="card-desc long">
              광수용체의 내절과 외절 사이 경계입니다. Ellipsoid Zone(EZ)이라고도 불립니다. 이 경계의
              연속성이 <span className="hl">시력 예후를 판단하는 핵심 바이오마커</span>로 활용됩니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">IBRPE (Inner Boundary of RPE, 망막색소상피 내부 경계)</div>
            <div className="card-desc long">
              망막색소상피(RPE) 층의 내부 경계선입니다. <span className="hl">RPE는 광수용체에 영양을
              공급</span>하고 시각 사이클을 유지하는 핵심 세포층입니다. 황반변성에서 RPE 손상이 주요
              병변으로 나타납니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">OBRPE (Outer Boundary of RPE, 망막색소상피 외부 경계)</div>
            <div className="card-desc long">
              RPE의 가장 바깥쪽 경계로 맥락막과 맞닿는 부위입니다. OCT에서 가장 강하게 반사되는 층
              중 하나입니다. 이 경계의 변형은 <span className="hl">드루젠 침착이나 맥락막 신생혈관
              발생의 신호</span>가 됩니다.
            </div>
          </div>
        </div>
      </div>

      <div className="panel eval2-right-single">
        <img src={retinalLayersImg} alt="OCT 단면에서의 망막 5개 층 구조" />
      </div>
    </div>
  )
}
