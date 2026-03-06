import { content } from '../../data/content'
import Icon from '../Icons'

export default function EmergingRoles() {
  const data = content['emerging-roles']
  return (
    <div className="section-inner">
      <div className="section-hero section-hero--emerging">
        <div className="hero-badge">Looking Forward</div>
        <h2 className="section-title">{data.title}</h2>
        <div className="hero-divider" />
      </div>
      <p className="section-intro">{data.intro}</p>
      <div className="emerging-grid">
        {data.roles.map((role, i) => (
          <div key={i} className="emerging-card">
            <div className="emerging-card-top">
              <span className="emerging-icon"><Icon name={role.icon} size={28} /></span>
              <h3 className="emerging-title">{role.title}</h3>
            </div>
            <p className="emerging-desc">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
