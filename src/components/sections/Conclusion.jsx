import { content } from '../../data/content'
import Icon from '../Icons'

export default function Conclusion() {
  const data = content['conclusion']
  return (
    <div className="section-inner">
      <div className="section-hero section-hero--conclusion">
        <div className="hero-badge">Final Thoughts</div>
        <h2 className="section-title">{data.title}</h2>
        <div className="hero-divider" />
      </div>
      <div className="conclusion-prose">
        {data.body.map((para, i) => (
          <p key={i} className={i === data.body.length - 1 ? 'conclusion-final' : ''}>
            {para}
          </p>
        ))}
      </div>
      <div className="signature-block">
        <div className="signature-line" />
        <div className="signature-content">
          <div className="signature-ai-icon"><Icon name="bot" size={32} /></div>
          <div className="signature-details">
            <p className="signature-name">{data.signature.author}</p>
            <p className="signature-role">{data.signature.role}</p>
            <p className="signature-date">{data.signature.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
