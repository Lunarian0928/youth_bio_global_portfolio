import retinaImg from '../assets/retina_normal_vs_diabetic_retinopathy.png'
import octImg from '../assets/oct_normal_vs_diabetic_macular_edema.png'

export default function OCTSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Imaging</div>
        <h2 className="slide-title">OCT란 무엇인가</h2>
        <div className="slide-body">
          <p>
            OCT는 빛의 반사 시간 차이를 측정해 망막의 층별 단면 이미지를 생성하는{' '}
            <span className="hl">광간섭단층촬영</span> 기술입니다.
          </p>
          <p>
            일반 안저 카메라가 망막을 위에서 내려다보는 평면 사진이라면, OCT는 망막을 측면에서 절단해{' '}
            <span className="hl">각 층의 구조를 입체적으로 관찰</span>합니다.
          </p>
          <p>
            정상 망막은 각 층이 매끄럽고 균일하게 배열되어 있습니다. 반면 병변이 존재하는 경우{' '}
            <span className="hl">층 사이에 액체가 축적</span>되거나 조직이 변형·소실되는 구조적 변화가
            나타납니다.
          </p>
          <p>
            OCT가 진단 보조 수단으로 활용되는 <span className="hl">3대 실명성 망막질환</span>은
            다음과 같습니다.
          </p>
        </div>

        <div className="card-row cols-3">
          <div className="info-card">
            <div className="card-title">황반변성</div>
            <div className="card-desc">노화로 망막 중심부가 손상됩니다.</div>
          </div>
          <div className="info-card">
            <div className="card-title">당뇨병성 황반부종</div>
            <div className="card-desc">당뇨 합병증으로 혈관에서 액체가 샙니다.</div>
          </div>
          <div className="info-card">
            <div className="card-title">망막정맥폐쇄</div>
            <div className="card-desc">혈관이 막혀 피가 고입니다.</div>
          </div>
        </div>
        <p className="note-line">세 질환 모두 초기 증상이 없어 조기 발견이 치료 성패를 결정합니다.</p>
      </div>

      <div className="image-col">
        <div className="panel image-card">
          <img src={retinaImg} alt="정상 망막과 당뇨망막병증 안저 사진 비교" />
          <div className="image-card-caption">안저 사진 — 일반 카메라로 찍은 평면 사진</div>
        </div>
        <div className="panel image-card">
          <img src={octImg} alt="정상 망막과 당뇨병성 황반부종 OCT 단면 비교" />
          <div className="image-card-caption">OCT 단면 — 망막을 옆에서 잘라 본 단면 사진</div>
        </div>
      </div>
    </div>
  )
}
