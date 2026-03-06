import { useState } from 'react'
import { content } from '../../data/content'

const impactColors = {
  'High': 'impact--high',
  'Very High': 'impact--very-high',
  'Critical & Expanding': 'impact--critical',
  'Transformative': 'impact--transformative',
  'Complex — Growth and Specialization': 'impact--complex',
}

export default function RoleSection({ sectionId }) {
  const data = content[sectionId]
  const [expandedAdaptation, setExpandedAdaptation] = useState(null)

  if (!data) return null

  return (
    <div className="section-inner">
      <div className={`section-hero section-hero--role`}>
        <div className="role-hero-top">
          <span className="role-icon-large">{data.icon}</span>
          <div className={`impact-badge ${impactColors[data.impactLevel] || 'impact--high'}`}>
            {data.impactLevel}
          </div>
        </div>
        <div className="hero-badge">Technology Role</div>
        <h2 className="section-title">{data.title}</h2>
        <p className="role-tagline">{data.tagline}</p>
        <div className="timeline-tag">
          <span className="timeline-indicator" />
          {data.timeline}
        </div>
        <div className="hero-divider" />
      </div>

      <div className="role-body">
        {/* Current State */}
        <div className="role-block">
          <h3 className="block-title">
            <span className="block-icon">📍</span>Current State
          </h3>
          <p className="prose-single">{data.currentState}</p>
        </div>

        {/* The Shift */}
        <div className="role-block">
          <h3 className="block-title">
            <span className="block-icon">🔄</span>The Shift
          </h3>
          <div className="prose">
            {data.theShift.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Adaptations */}
        <div className="role-block">
          <h3 className="block-title">
            <span className="block-icon">🎯</span>How to Adapt
          </h3>
          <div className="adaptations-grid">
            {data.adaptations.map((item, i) => (
              <div
                key={i}
                className={`adaptation-card ${expandedAdaptation === i ? 'adaptation-card--open' : ''}`}
                onClick={() => setExpandedAdaptation(expandedAdaptation === i ? null : i)}
              >
                <div className="adaptation-header">
                  <span className="adaptation-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="adaptation-title">{item.title}</span>
                  <span className="adaptation-toggle">{expandedAdaptation === i ? '−' : '+'}</span>
                </div>
                {expandedAdaptation === i && (
                  <p className="adaptation-detail">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Predictions */}
        <div className="role-block">
          <h3 className="block-title">
            <span className="block-icon">🔭</span>Predictions
          </h3>
          <div className="predictions-timeline">
            {data.predictions.map((item, i) => (
              <div key={i} className="prediction-item">
                <div className="prediction-year">{item.year}</div>
                <div className="prediction-line">
                  <div className="prediction-dot" />
                  <div className="prediction-connector" />
                </div>
                <div className="prediction-text">{item.prediction}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
