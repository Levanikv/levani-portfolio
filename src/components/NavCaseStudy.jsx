import { Link } from 'react-router-dom'

export default function NavCaseStudy() {
  return (
    <nav className="nav-split">
      <Link to="/" className="brand">Levani <span className="dot-sep">&middot;</span> DSM</Link>
      <div className="nav-pill">
        <ul>
          <li><a href="#constat">I.</a></li>
          <li><a href="#opportunite">II.</a></li>
          <li><a href="#refonte">III.</a></li>
          <li><a href="#adoption">IV.</a></li>
          <li><a href="#resultat">V.</a></li>
        </ul>
      </div>
      <Link to="/cv" className="nav-cv">CV</Link>
    </nav>
  )
}
