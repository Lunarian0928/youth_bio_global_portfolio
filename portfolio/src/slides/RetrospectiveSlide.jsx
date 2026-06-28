export default function RetrospectiveSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Retrospective</div>
        <h2 className="slide-title">시행착오와 소감</h2>

        <div className="card-row cols-1 project-cards">
          <div className="info-card">
            <div className="card-title">Colab → Kaggle 전환</div>
            <div className="card-desc">
              학습 도중 Google Colab GPU 쿼터가 소진되어 Kaggle T4 GPU 환경으로 전환했습니다.
              데이터셋 마운트 경로 문제와 split csv에 박힌 절대경로 문제를 해결하는 데 상당한
              시간이 소요됐습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">환경 이슈 반복</div>
            <div className="card-desc">
              Kaggle 데이터셋 경로가 예상과 달라 여러 번 수정이 필요했고 git clone이 이미 클론된
              폴더에서 최신 코드를 못 받아오는 문제도 있었습니다. 환경 설정에 소요된 시간이 적지
              않았습니다.
            </div>
          </div>
          <div className="info-card">
            <div className="card-title">학습 속도의 한계</div>
            <div className="card-desc">
              GPU 환경에서도 trial당 학습 시간이 상당해 시도할 수 있는 실험의 수가 제한됐습니다.
              Class Weight, 앙상블, 다양한 Augmentation 등 추가 실험을 충분히 하지 못한 점이
              아쉽습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="card-row cols-1 project-cards">
        <div className="info-card">
          <div className="card-title">소감</div>
          <div className="card-desc">
            모델이 <span className="hl">경계를 이렇게 정밀하게 잡아낸다는 것이 놀라웠습니다</span>.
            달리 말하면 이 수준에서 <span className="hl">성능을 더 올리는 것은 그만큼 어렵다</span>는
            의미이기도 합니다. 의료영상 AI가 이미 높은 수준에 도달해 있다는 것을 직접 구현하면서
            체감했습니다.
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">앞으로의 다짐</div>
          <div className="card-desc">
            모델 학습에 상당한 시간이 소요되는 환경에서는 <span className="hl">사전 기획이
            더욱 중요하다는 것을 실감했습니다</span>. 실험 설계나 코드 구조를 충분히 검토하지
            않은 채 학습을 시작하면 <span className="hl">수 시간의 GPU 자원이 낭비됩니다</span>.
            실무에서는 한 번의 실험이 더 큰 비용으로 이어지는 만큼 <span className="hl">사전에
            충분히 검토하고 신중하게 접근해야겠다는 다짐</span>을 하게 됐습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
