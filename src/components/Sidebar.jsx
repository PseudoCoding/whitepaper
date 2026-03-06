export default function Sidebar({ sections, active, onNavigate, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <nav className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <span>Contents</span>
          <button className="sidebar-close" onClick={onClose} aria-label="Close navigation">✕</button>
        </div>
        <ol className="sidebar-nav">
          {sections.map(({ id, label, icon }, index) => (
            <li key={id}>
              <button
                className={`nav-item ${active === id ? 'nav-item--active' : ''}`}
                onClick={() => onNavigate(id)}
              >
                <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="nav-icon">{icon}</span>
                <span className="nav-label">{label}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="sidebar-footer">
          <p className="sidebar-author">Authored by AI</p>
          <p className="sidebar-version">March 2026 · v1.0</p>
        </div>
      </nav>
    </>
  )
}
