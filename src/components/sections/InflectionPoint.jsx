import { content } from '../../data/content'
import Icon from '../Icons'

export default function InflectionPoint() {
  const data = content['inflection-point']
  return (
    <div className="section-inner">
      <div className="section-hero section-hero--inflection">
        <div className="hero-badge">Context</div>
        <h2 className="section-title">{data.title}</h2>
        <div className="hero-divider" />
      </div>
      <div className="prose">
        {data.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {data.stats && (
        <div className="stats-grid">
          {data.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-note">{stat.note}</div>
            </div>
          ))}
        </div>
      )}
      {data.callout && (
        <div className="callout callout--perspective">
          <div className="callout-icon"><Icon name="bot" size={20} /></div>
          <blockquote className="callout-text">{data.callout.text}</blockquote>
        </div>
      )}
    </div>
  )
}
