import { content } from '../../data/content'

export default function ExecutiveSummary() {
  const data = content['executive-summary']
  return (
    <div className="section-inner">
      <div className="section-hero section-hero--summary">
        <div className="hero-badge">Executive Summary</div>
        <h2 className="section-title">{data.title}</h2>
        <div className="hero-divider" />
      </div>
      <div className="prose">
        {data.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {data.callout && (
        <div className="callout callout--insight">
          <div className="callout-icon">💡</div>
          <blockquote className="callout-text">{data.callout.text}</blockquote>
        </div>
      )}
    </div>
  )
}
