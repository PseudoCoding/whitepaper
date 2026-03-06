import { content } from '../../data/content'
import Icon from '../Icons'

export default function SkillsImperative() {
  const data = content['skills-imperative']
  return (
    <div className="section-inner">
      <div className="section-hero section-hero--skills">
        <div className="hero-badge">Cross-Role Imperatives</div>
        <h2 className="section-title">{data.title}</h2>
        <div className="hero-divider" />
      </div>
      <p className="section-intro">{data.intro}</p>
      <div className="skills-grid">
        {data.clusters.map((cluster, i) => (
          <div key={i} className="skill-cluster">
            <div className="skill-cluster-header">
              <span className="skill-cluster-icon"><Icon name={cluster.icon} size={24} /></span>
              <h3 className="skill-cluster-title">{cluster.category}</h3>
            </div>
            <ul className="skill-list">
              {cluster.skills.map((skill, j) => (
                <li key={j} className="skill-item">
                  <span className="skill-bullet"><Icon name="arrow-right" size={14} /></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skills-note">
        <span className="skills-note-icon"><Icon name="pin" size={18} /></span>
        <p>{data.note}</p>
      </div>
    </div>
  )
}
