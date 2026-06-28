import { useCallback, useEffect, useState } from 'react'
import TitleSlide from './slides/TitleSlide.jsx'
import WhyMedicalImagingSlide from './slides/WhyMedicalImagingSlide.jsx'
import ThreeDImagingSlide from './slides/ThreeDImagingSlide.jsx'
import OCTSlide from './slides/OCTSlide.jsx'
import DicomSlide from './slides/DicomSlide.jsx'
import DetectionSegmentationSlide from './slides/DetectionSegmentationSlide.jsx'
import YOLOSlide from './slides/YOLOSlide.jsx'
import UNetSlide from './slides/UNetSlide.jsx'
import TransferLearningSlide from './slides/TransferLearningSlide.jsx'
import ImageNetSlide from './slides/ImageNetSlide.jsx'
import ResNetSlide from './slides/ResNetSlide.jsx'
import ClassImbalanceSlide from './slides/ClassImbalanceSlide.jsx'
import EvaluationMetricsSlide from './slides/EvaluationMetricsSlide.jsx'
import EvaluationMetricsIISlide from './slides/EvaluationMetricsIISlide.jsx'
import OnDeviceAISlide from './slides/OnDeviceAISlide.jsx'
import LightweightTechniquesSlide from './slides/LightweightTechniquesSlide.jsx'
import OCTSegmentationProjectSlide from './slides/OCTSegmentationProjectSlide.jsx'
import DatasetDiseaseIntroSlide from './slides/DatasetDiseaseIntroSlide.jsx'
import RetinalLayersSlide from './slides/RetinalLayersSlide.jsx'
import EDAAnalysisISlide from './slides/EDAAnalysisISlide.jsx'
import EDAAnalysisIISlide from './slides/EDAAnalysisIISlide.jsx'
import ModelArchitectureSlide from './slides/ModelArchitectureSlide.jsx'
import TrainingStrategySlide from './slides/TrainingStrategySlide.jsx'
import ResultsSlide from './slides/ResultsSlide.jsx'
import PredictionVisualizationSlide from './slides/PredictionVisualizationSlide.jsx'
import LimitationsSlide from './slides/LimitationsSlide.jsx'

const SLIDE_GROUPS = [
  {
    title: '표지',
    items: [{ Component: TitleSlide, label: '표지' }],
  },
  {
    title: '의료영상 AI 개념',
    items: [
      { Component: WhyMedicalImagingSlide, label: '왜 의료영상 AI인가' },
      { Component: ThreeDImagingSlide, label: '3D 의료영상이란' },
      { Component: OCTSlide, label: 'OCT란 무엇인가' },
      { Component: DicomSlide, label: 'DICOM' },
    ],
  },
  {
    title: '분석 방법론',
    items: [
      { Component: DetectionSegmentationSlide, label: 'Detection과 Segmentation' },
      { Component: YOLOSlide, label: 'YOLO' },
      { Component: UNetSlide, label: 'U-Net' },
    ],
  },
  {
    title: '학습 전략',
    items: [
      { Component: TransferLearningSlide, label: 'Transfer Learning' },
      { Component: ImageNetSlide, label: 'ImageNet' },
      { Component: ResNetSlide, label: 'ResNet' },
      { Component: ClassImbalanceSlide, label: '클래스 불균형' },
    ],
  },
  {
    title: '성능 평가',
    items: [
      { Component: EvaluationMetricsSlide, label: '평가지표 I' },
      { Component: EvaluationMetricsIISlide, label: '평가지표 II' },
    ],
  },
  {
    title: '온디바이스 AI',
    items: [
      { Component: OnDeviceAISlide, label: '온디바이스 AI' },
      { Component: LightweightTechniquesSlide, label: '모델 경량화 기법' },
    ],
  },
  {
    title: 'OCT5k Segmentation 프로젝트',
    items: [
      { Component: OCTSegmentationProjectSlide, label: 'OCT 망막 층 Segmentation' },
      { Component: DatasetDiseaseIntroSlide, label: '데이터셋 및 질환 소개' },
      { Component: EDAAnalysisISlide, label: '데이터셋 분석 I' },
      { Component: RetinalLayersSlide, label: '분류 대상 망막 5개 층' },
      { Component: EDAAnalysisIISlide, label: '데이터셋 분석 II' },
      { Component: ModelArchitectureSlide, label: '모델 아키텍처' },
      { Component: TrainingStrategySlide, label: '학습 전략' },
      { Component: ResultsSlide, label: '실험 결과' },
      { Component: PredictionVisualizationSlide, label: '예측 결과 시각화' },
      { Component: LimitationsSlide, label: '한계점' },
    ],
  },
]

const SLIDES = SLIDE_GROUPS.flatMap((group) => group.items)

export default function App() {
  const [index, setIndex] = useState(0)
  const total = SLIDES.length

  const goTo = useCallback((next) => {
    setIndex((cur) => {
      const clamped = Math.max(0, Math.min(total - 1, next))
      return clamped
    })
  }, [total])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  let runningIndex = 0

  return (
    <div className="app">
      <div className="slide-viewport">
        {SLIDES.map(({ Component }, i) => {
          let cls = 'slide'
          if (i === index) cls += ' active'
          else if (i < index) cls += ' prev'
          return (
            <div className={cls} key={i} aria-hidden={i !== index}>
              <Component />
            </div>
          )
        })}
      </div>

      <div className="side-nav-zone">
        <div className="side-nav-indicator" />
        <div className="side-nav-panel">
          {SLIDE_GROUPS.map((group) => {
            const groupStart = runningIndex
            runningIndex += group.items.length
            return (
              <div className="side-nav-group" key={group.title}>
                <div className="side-nav-group-title">{group.title}</div>
                {group.items.map((item, i) => {
                  const slideIndex = groupStart + i
                  return (
                    <button
                      key={slideIndex}
                      className={`side-nav-item${slideIndex === index ? ' active' : ''}`}
                      onClick={() => goTo(slideIndex)}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      <div className="nav-bar">
        <button className="nav-btn" onClick={prev} disabled={index === 0} aria-label="이전 슬라이드">
          ‹
        </button>

        <div className="progress-wrap">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
          </div>
          <div className="progress-dots">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`progress-dot${i <= index ? ' done' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="slide-counter">
          <strong>{String(index + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
        </div>

        <button className="nav-btn" onClick={next} disabled={index === total - 1} aria-label="다음 슬라이드">
          ›
        </button>
      </div>
    </div>
  )
}
