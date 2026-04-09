import { Link } from 'react-router-dom'

export default function NavHome() {
  return (
    <nav className="nav-split">
      <Link to="/" className="brand">Levani <span className="dot-sep">&middot;</span> DSM</Link>
      <div className="nav-pill">
        <ul>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#about">&Agrave; propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <Link to="/cv" className="nav-cv">CV</Link>
    </nav>
  )
}
