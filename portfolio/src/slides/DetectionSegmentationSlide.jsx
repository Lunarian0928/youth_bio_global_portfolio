import detSegImg from '../assets/oct_detection_vs_segmentation.png'

export default function DetectionSegmentationSlide() {
  return (
    <div className="detseg-layout">
      <div className="two-col detseg-top">
        <div>
          <div className="slide-eyebrow">Analysis</div>
          <h2 className="slide-title">Detection과 Segmentation</h2>
          <div className="slide-body">
            <p>OCT 영상에서 병변을 분석하는 방식은 목적에 따라 두 가지 접근법으로 구분됩니다.</p>
          </div>

          <div className="card-row cols-1">
            <div className="info-card">
              <div className="card-title">Detection</div>
              <div className="card-desc long">
                병변이 존재하는 위치를 탐지해 <span className="hl">Bounding Box</span>로 표시하는 방법입니다.
                병변의 정확한 형태보다 위치 파악이 우선될 때 사용됩니다.
                연산량이 적어 실시간 처리와 온디바이스 환경에 적합합니다.
                대표 모델은 YOLO입니다.
              </div>
            </div>
            <div className="info-card">
              <div className="card-title">Segmentation</div>
              <div className="card-desc long">
                이미지의 <span className="hl">각 픽셀을 분류</span>해 병변 영역의{' '}
                <span className="hl">정확한 경계를 구분</span>하는 방법입니다.
                병변의 위치뿐만 아니라 형태, 크기, 범위까지 정밀하게 분석할 수 있습니다.
                망막 층 분리 및 병변 탐지에 활용되며 대표 모델은 U-Net입니다.
              </div>
            </div>
          </div>
        </div>

        <div className="panel detseg-image-card detseg-image-card-fill">
          <img src={detSegImg} alt="OCT 영상에서 Detection과 Segmentation 비교" />
        </div>
      </div>

      <p className="note-line detseg-note">
        OCT 분석에서는 <span className="hl">Detection으로 병변 위치를 먼저 파악</span>한 뒤, 해당
        영역을 <span className="hl">Segmentation으로 정밀 분석</span>하는 방식으로 조합해 활용합니다.
      </p>
    </div>
  )
}
