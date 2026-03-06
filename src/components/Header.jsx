import Icon from './Icons'

export default function Header({ metadata, darkMode, onToggleDark, onMenuToggle }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="menu-toggle" onClick={onMenuToggle} aria-label="Toggle navigation">
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>
        <div className="header-title-group">
          <span className="header-label">AI Whitepaper</span>
          <h1 className="header-title">{metadata.title}</h1>
        </div>
        <div className="header-meta">
          <span className="header-date">{metadata.date}</span>
          <button
            className="theme-toggle"
            onClick={onToggleDark}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={darkMode ? 'sun' : 'moon'} size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
