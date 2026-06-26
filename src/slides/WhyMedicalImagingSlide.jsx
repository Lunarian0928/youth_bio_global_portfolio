const rows = [
  { name: '결막염', top3: '0.80', mrr: '0.60' },
  { name: '눈다래끼', top3: '0.75', mrr: '0.85' },
  { name: '안구건조증', top3: '0.90', mrr: '0.50' },
  { name: '백내장', top3: '0.25', mrr: '0.05', warn: true },
  { name: '황반변성', top3: '0.15', mrr: '0.10', warn: true },
  { name: '녹내장', top3: '0.40', mrr: '0.35' },
]

export default function WhyMedicalImagingSlide() {
  return (
    <div className="two-col">
      <div>
        <div className="slide-eyebrow">Motivation</div>
        <h2 className="slide-title">왜 의료영상 AI인가</h2>
        <div className="slide-body">
          <p>텍스트 기반 의료 AI를 개발하는 과정에서 그 한계를 직접 경험했습니다.</p>
          <p>
            증상 입력을 기반으로 진료과를 예측하는 모델을 구현하였으나, <span className="hl">백내장</span>,{' '}
            <span className="hl">황반변성</span>과 같이 영상 데이터 없이는 진단 자체가 성립되지 않는 질환 앞에서{' '}
            <span className="hl">텍스트 기반 접근의 본질적 한계</span>를 인식했습니다.
          </p>
          <p>환자의 주관적 증상 기술만으로는 망막 층 구조의 변형 여부를 파악하는 것이 구조적으로 불가능합니다.</p>
          <p>
            의료 AI가 임상 현장에서 실질적인 가치를 창출하려면, <span className="hl">영상 데이터를 직접
            해석하고 분석</span>할 수 있는 역량이 필수적이라는 결론에 도달했습니다.
          </p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <caption>KM-BERT 기반 안과 질환 예측 성능</caption>
          <thead>
            <tr>
              <th>질환명</th>
              <th>Top-3 Accuracy</th>
              <th>MRR Score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className={r.warn ? 'warn' : ''}>
                <td>{r.name}</td>
                <td>{r.top3}</td>
                <td>{r.mrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note-line">영상 없이는 진단이 어려운 질환일수록 예측 성능이 급격히 낮아집니다.</p>
      </div>
    </div>
  )
}
