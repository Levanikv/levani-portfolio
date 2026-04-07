import { Link } from 'react-router-dom'

export default function NavCaseStudy() {
  return (
    <nav className="nav-breadcrumb">
      <div className="breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Levani
        </Link>
        <span className="sep">/</span>
        <span className="current">&Eacute;tude de cas Accor</span>
      </div>
      <ul>
        <li><a href="#constat">I.</a></li>
        <li><a href="#opportunite">II.</a></li>
        <li><a href="#refonte">III.</a></li>
        <li><a href="#adoption">IV.</a></li>
        <li><a href="#resultat">V.</a></li>
      </ul>
    </nav>
  )
}
