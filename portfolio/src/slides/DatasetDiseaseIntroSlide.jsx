export default function DatasetDiseaseIntroSlide() {
  return (
    <div>
      <div className="slide-eyebrow">Dataset</div>
      <h2 className="slide-title">데이터셋 및 질환 소개</h2>

      <div className="info-card ddi-device-card">
        <div className="card-title">Heidelberg SPECTRALIS HRA+OCT</div>
        <div className="card-desc">
          OCT5k 데이터셋은 Heidelberg SPECTRALIS HRA+OCT 장비로 촬영됐습니다. Spectral-Domain
          OCT(SD-OCT) 방식으로 <span className="hl">축 방향 해상도 3.9μm, 횡 방향 해상도
          14μm</span>의 고해상도 망막 단면 이미지를 촬영합니다. TruTrack 실시간 안구 추적 기술로
          눈 움직임을 보정해 정밀한 영상을 확보합니다. <span className="hl">단일 제조사·단일 장비
          데이터</span>로 구성되어 있어 <span className="hl">다른 제조사 장비에 대한 일반화 성능은
          별도 검증이 필요합니다</span>.
        </div>
      </div>

      <div className="slide-body ddi-body" style={{ maxWidth: 780 }}>
        <p>
          OCT5k는 UCL에서 공개한 망막 OCT 데이터셋입니다. AMD, DME, Normal 세 가지 질환 그룹에서
          수집된 1,672장의 OCT B-scan 이미지와 <span className="hl">전문가 3인이 직접 레이블링한
          픽셀 단위 마스크</span>로 구성되어 있습니다.
        </p>
      </div>

      <div className="card-row cols-3">
        <div className="info-card">
          <div className="card-title">AMD (황반변성)</div>
          <div className="card-desc">
            노화로 인해 망막 중심부인 황반이 손상되는 질환입니다. 초기 증상이 없어 발견이 늦어지는
            경우가 많습니다. 진행되면 중심 시야가 흐려지거나 소실됩니다. OCT5k에서 739장으로 가장
            많은 비중을 차지합니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">DME (당뇨병성 황반부종)</div>
          <div className="card-desc">
            당뇨 합병증으로 망막 혈관이 손상되어 혈관에서 액체가 새어 황반이 부어오르는 질환입니다.{' '}
            <span className="hl">당뇨 환자의 주요 실명 원인 중 하나</span>입니다. OCT5k에서 403장으로
            구성되어 있습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">Normal (정상)</div>
          <div className="card-desc">
            망막 층 구조가 정상적으로 유지된 상태입니다. <span className="hl">AMD, DME와의 비교
            기준</span>이 되는 그룹입니다. OCT5k에서 530장으로 구성되어 있습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
