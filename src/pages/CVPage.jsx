import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background from '../components/Background'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function CVPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const el = pageRef.current
    if (!el) return

    el.querySelectorAll('.cv-reveal').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: node, start: 'top 90%', toggleActions: 'play none none none' }
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return (
    <div ref={pageRef}>
      <Background />

      <nav className="nav-split">
        <Link to="/" className="brand">Levani <span className="dot-sep">&middot;</span> DSM</Link>
        <div className="nav-pill">
          <ul>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#formation">Formation</a></li>
          </ul>
        </div>
        <Link to="/" className="nav-cv">Portfolio</Link>
      </nav>

      <div className="cv-page">
        <div className="wrap">

          {/* HEADER */}
          <header className="cv-header">
            <div className="cv-header-left">
              <div className="cv-tag">Disponible fin avril 2026</div>
              <h1 className="cv-name">Levani<br />Kvaliashvili</h1>
              <p className="cv-role">Design System Manager</p>
              <p className="cv-intro">Product designer spécialisé design systems. Je structure des DS multi-plateformes et multi-marques pour des équipes produit. Mon truc : que le système tienne dans la durée et que les gens s'en servent vraiment.</p>
              <div className="cv-contact-row">
                <a href="mailto:levanikv.pro@gmail.com">levanikv.pro@gmail.com</a>
                <span className="cv-sep">·</span>
                <a href="https://www.linkedin.com/in/levani-kvaliashvili/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="cv-sep">·</span>
                <span>Paris, France</span>
              </div>
            </div>
          </header>

          {/* EXPERIENCE */}
          <section id="experience" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Expérience</h2>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2025 — 2026</div>
              <div className="cv-entry-content">
                <h3>Design System Manager — Accor</h3>
                <p className="cv-entry-sub">App iOS &amp; Android · Freelance</p>
                <ul>
                  <li>Refonte complète de l'architecture tokens en 4 niveaux (Core, Brand, Semantic, Component)</li>
                  <li>Alignement du DS mobile avec le DS web — même source de vérité pour les couleurs</li>
                  <li>Pipeline automatisée : Google Sheet → Tokens Studio → Git → Figma + code natif</li>
                  <li>Formation et accompagnement de 4 product designers sur les tokens sémantiques</li>
                  <li>Widget interactif pour l'exploration des familles de tokens</li>
                  <li>Documentation structurée via exports JSON Anova, publiée sur Supernova</li>
                  <li>Coordination avec les équipes iOS (SwiftUI) et Android (Jetpack Compose)</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens Studio</span><span>Style Dictionary</span><span>Git</span><span>SwiftUI</span><span>Jetpack Compose</span><span>Supernova</span><span>HCT</span>
                </div>
              </div>
            </div>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2023 — 2025</div>
              <div className="cv-entry-content">
                <h3>Product Designer — Design Systems</h3>
                <p className="cv-entry-sub">Missions freelance</p>
                <ul>
                  <li>Structuration de design systems multi-marques et multi-plateformes</li>
                  <li>Architecture de tokens, gouvernance, pipeline design-to-code</li>
                  <li>Audits, formations, accompagnement terrain des équipes design</li>
                  <li>Développement d'outils internes : plugins Figma, widgets pédagogiques, palettes HCT</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>n8n</span><span>Webflow</span><span>Notion</span><span>Google Sheets</span>
                </div>
              </div>
            </div>
          </section>

          {/* COMPETENCES */}
          <section id="competences" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Compétences</h2>

            <div className="cv-skills-grid cv-reveal">
              <div className="cv-skill-group">
                <h4>Design System</h4>
                <ul>
                  <li>Architecture de tokens (4 niveaux)</li>
                  <li>Gouvernance &amp; contribution model</li>
                  <li>Pipeline design → code</li>
                  <li>Theming multi-dimensions</li>
                  <li>Documentation structurée</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Outils</h4>
                <ul>
                  <li>Figma (variables, plugins)</li>
                  <li>Tokens Studio</li>
                  <li>Style Dictionary</li>
                  <li>Supernova</li>
                  <li>Git, n8n, Notion</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Plateformes</h4>
                <ul>
                  <li>iOS — SwiftUI</li>
                  <li>Android — Jetpack Compose</li>
                  <li>Web — Webflow, Lumos</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Soft skills</h4>
                <ul>
                  <li>Formation &amp; accompagnement</li>
                  <li>Coordination design-dev</li>
                  <li>Adoption &amp; conduite du changement</li>
                  <li>Documentation &amp; pédagogie</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FORMATION */}
          <section id="formation" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Formation</h2>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2019 — 2024</div>
              <div className="cv-entry-content">
                <h3>Product Design</h3>
                <p className="cv-entry-sub">Formation et pratique continue</p>
                <p>Design d'interfaces, design systems, UX research, prototypage. Apprentissage terrain sur des projets réels, en parallèle de missions freelance.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cv-cta cv-reveal">
            <p>Disponible pour des missions freelance moyen ou long terme.</p>
            <div className="cv-cta-links">
              <a href="mailto:levanikv.pro@gmail.com" className="cta-glass primary">
                <span>Me contacter</span>
              </a>
              <Link to="/case-study-accor" className="cta-glass">
                <span>Voir l'étude de cas Accor</span>
              </Link>
            </div>
          </section>

        </div>

        <Footer />
      </div>
    </div>
  )
}
