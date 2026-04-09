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
            <div className="cv-tag">Disponible — Freelance</div>
            <h1 className="cv-name">Levani<br />Kvaliashvili</h1>
            <p className="cv-role">Design System Manager</p>
            <p className="cv-intro">Product designer spécialisé design systems. Je structure des DS pour des produits complexes, multi-plateformes, multi-marques. Mon truc : que le système tienne dans la durée et que les gens s'en servent vraiment.</p>
            <div className="cv-contact-row">
              <a href="mailto:levanikv.pro@gmail.com">levanikv.pro@gmail.com</a>
              <span className="cv-sep">·</span>
              <span>+33 7 67 28 20 49</span>
              <span className="cv-sep">·</span>
              <a href="https://www.linkedin.com/in/levani-kvaliashvili/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="cv-sep">·</span>
              <span>Paris, France</span>
            </div>
          </header>

          {/* EXPERIENCE */}
          <section id="experience" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Expérience</h2>

            {/* ACCOR */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Déc. 2024 — Mai 2026</div>
              <div className="cv-entry-content">
                <h3>Design System Manager — Accor</h3>
                <p className="cv-entry-sub">Freelance · Paris · App iOS &amp; Android</p>
                <ul>
                  <li>Coordination du DS cross-produits et cross-environnements (web + apps mobiles), en lien avec la Lead Design System</li>
                  <li>Refonte de l'architecture tokens en 4 niveaux (Core, Brand, Semantic, Component)</li>
                  <li>Pipeline automatisée : Google Sheet → Tokens Studio → Git → Figma + code natif SwiftUI/Compose</li>
                  <li>Gestion avancée des tokens via Tokens Studio et variables natives Figma</li>
                  <li>Refactor des composants et alignement avec les référents DS Tech iOS/Android</li>
                  <li>Formation des designers et création de widgets Figma pour l'autonomie sur les tokens</li>
                  <li>Intégration des normes d'accessibilité RGAA/WCAG dans les composants</li>
                  <li>Intégration de l'IA dans le workflow de documentation du DS</li>
                  <li>Animation d'ateliers avec Design Ops, Brand System, UX Writing et Accessibilité</li>
                  <li>Documentation complète et suivi via Jira/Confluence</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens Studio</span><span>Style Dictionary</span><span>Git</span><span>SwiftUI</span><span>Jetpack Compose</span><span>Supernova</span><span>HCT</span><span>Jira</span>
                </div>
              </div>
            </div>

            {/* EDF */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Oct. 2023 — Juin 2024</div>
              <div className="cv-entry-content">
                <h3>Design System Manager — EDF</h3>
                <p className="cv-entry-sub">Freelance · Paris</p>
                <ul>
                  <li>Création d'un design system multi-projets et multi-environnements from scratch</li>
                  <li>Gestion avancée des tokens avec Tokens Studio (couleurs, typographies, espacements)</li>
                  <li>Variables natives Figma pour la personnalisation et la modularité</li>
                  <li>Méthodologie atomique (atome, molécule, organisme) pour la réutilisabilité</li>
                  <li>Intégration de slots dans les composants pour la flexibilité par projet</li>
                  <li>Création des composants from scratch — contrainte : bibliothèque Angular</li>
                  <li>Documentation du DS</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens Studio</span><span>Angular</span><span>Atomic Design</span>
                </div>
              </div>
            </div>

            {/* PMU */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Sept. 2021 — Oct. 2024</div>
              <div className="cv-entry-content">
                <h3>Product Designer &amp; DS Manager — PMU</h3>
                <p className="cv-entry-sub">Freelance · Paris · Deux missions (2021-2022 puis 2023-2024)</p>
                <ul>
                  <li>Conception et maintien d'un design system web/mobile</li>
                  <li>Collaboration avec les Product Owners et les développeurs pour l'intégration technique</li>
                  <li>Migration du DS vers les nouvelles features Figma (variables, etc.)</li>
                  <li>Documentation des composants et Design Ops (optimisation des fichiers Figma)</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Design Ops</span><span>Web</span><span>Mobile</span>
                </div>
              </div>
            </div>

            {/* ELSAN */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Jan. — Avril 2023</div>
              <div className="cv-entry-content">
                <h3>UI Designer &amp; DS Manager — Elsan</h3>
                <p className="cv-entry-sub">Freelance · Paris</p>
                <ul>
                  <li>Création de la base du design system en collaboration avec les équipes dev</li>
                  <li>Gestion des tokens pour les fondations</li>
                  <li>Documentation du DS</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens</span>
                </div>
              </div>
            </div>

            {/* FRANPRIX */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Mars 2021 — Juin 2022</div>
              <div className="cv-entry-content">
                <h3>UI Designer &amp; DS Manager — Franprix</h3>
                <p className="cv-entry-sub">Freelance · Paris</p>
                <ul>
                  <li>Maintien du design system pendant les sprints de conception UX/UI</li>
                  <li>Optimisation du DS et création de nouveaux composants pour accélérer les sprints</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Agile</span>
                </div>
              </div>
            </div>

            {/* EARLIER MISSIONS */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2017 — 2021</div>
              <div className="cv-entry-content">
                <h3>Product Designer — Missions freelance</h3>
                <p className="cv-entry-sub">Freelance · Paris</p>
                <ul>
                  <li><strong>BS Move</strong> (nov. 2021 — août 2021) — App et site web dans le domaine du déménagement. Conception UX/UI complète.</li>
                  <li><strong>Hyperealist</strong> (mars — mai 2021) — UI design et développement Webflow.</li>
                  <li><strong>Toobeeb</strong> (fév. — juin 2020) — Refonte UX/UI d'une app de télé-consultation médicale. User flows, wireframes, prototypage. Design de l'app iOS.</li>
                  <li><strong>Projets divers</strong> (2017 — 2019) — UX/UI design et intégration front-end pour des clients variés.</li>
                </ul>
                <div className="cv-tags">
                  <span>UX/UI</span><span>Webflow</span><span>Prototypage</span><span>iOS</span><span>Front-end</span>
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
                  <li>Atomic Design (atome → organisme)</li>
                  <li>Theming multi-dimensions</li>
                  <li>Documentation structurée</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Design</h4>
                <ul>
                  <li>UX/UI Design</li>
                  <li>Prototypage interactif</li>
                  <li>Design Thinking</li>
                  <li>Motion design</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Outils</h4>
                <ul>
                  <li>Figma (variables, plugins)</li>
                  <li>Tokens Studio</li>
                  <li>Supernova, Storybook</li>
                  <li>Protopie, Suite Adobe</li>
                  <li>Webflow, HTML/CSS</li>
                  <li>Git, n8n, Notion, Miro</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Méthode &amp; collaboration</h4>
                <ul>
                  <li>Méthode agile (Scrum)</li>
                  <li>Coordination design-dev</li>
                  <li>Formation &amp; accompagnement</li>
                  <li>Accessibilité RGAA/WCAG</li>
                  <li>Jira, Confluence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* LANGUES */}
          <section className="cv-section cv-section-compact">
            <h2 className="cv-section-title cv-reveal">Langues</h2>
            <div className="cv-langs cv-reveal">
              <div className="cv-lang">
                <h4>Français</h4>
                <p>Courant</p>
              </div>
              <div className="cv-lang">
                <h4>Anglais</h4>
                <p>Professionnel</p>
              </div>
              <div className="cv-lang">
                <h4>Géorgien</h4>
                <p>Langue maternelle</p>
              </div>
            </div>
          </section>

          {/* FORMATION */}
          <section id="formation" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Formation</h2>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2022</div>
              <div className="cv-entry-content">
                <h3>The Design Crew</h3>
                <p>Product Design — Advanced batch</p>
              </div>
            </div>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2017 — 2018</div>
              <div className="cv-entry-content">
                <h3>MJM Graphic Design</h3>
                <p>Concepteur de produits digitaux</p>
              </div>
            </div>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2014 — 2015</div>
              <div className="cv-entry-content">
                <h3>HETIC</h3>
                <p>Concepteur de produits digitaux</p>
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
