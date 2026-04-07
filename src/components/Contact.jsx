import { Link } from 'react-router-dom'

export function ContactHome() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-eyebrow reveal-fade">/06 — Contact</div>
        <h2 className="reveal-up">Discutons <em>ensemble</em>.</h2>
        <p className="contact-sub reveal-fade">Vous structurez un design system &agrave; grande &eacute;chelle et ce parcours parle &agrave; vos enjeux ? &Eacute;crivons-nous.</p>
        <div className="contact-links reveal-fade">
          <a href="mailto:levanikv.pro@gmail.com" className="cta-glass primary">
            <span>levanikv.pro@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/levani-kvaliashvili/" className="cta-glass" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
          </a>
          <Link to="/case-study-accor" className="cta-glass">
            <span>&Eacute;tude de cas Accor</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ContactCaseStudy() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-tag">
          <span className="dot" />
          Disponible fin avril 2026
        </div>
        <h2>Construisons quelque chose <em>de solide.</em></h2>
        <p className="contact-sub">Vous structurez un design system &agrave; grande &eacute;chelle et ce parcours parle &agrave; vos enjeux ? Parlons-en.</p>
        <div className="contact-links">
          <a href="mailto:levanikv.pro@gmail.com" className="cta-glass primary">
            <span>levanikv.pro@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/levani-kvaliashvili/" className="cta-glass" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
          </a>
          <Link to="/" className="cta-glass">
            <span>Retour au portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
