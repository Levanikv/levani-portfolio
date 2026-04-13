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
            <div className="cv-tag">Disponible mai 2026</div>
            <h1 className="cv-name">Levani<br />Kvaliashvili</h1>
            <p className="cv-role">Design System Manager · Freelance</p>
            <p className="cv-intro">7 ans dans le design produit, dont 3 concentrés sur les Design Systems. Mon métier : faire en sorte que ce que dessine le designer dans Figma soit vraiment ce que livre le dev — sans approximation, sans aller-retour, sans composants qui dérivent.</p>
            <div className="cv-contact-row">
              <a href="mailto:levanikv.pro@gmail.com">levanikv.pro@gmail.com</a>
              <span className="cv-sep">·</span>
              <span>+33 7 67 28 20 49</span>
              <span className="cv-sep">·</span>
              <a href="https://levanikv-dsm.com" target="_blank" rel="noopener noreferrer">levanikv-dsm.com</a>
              <span className="cv-sep">·</span>
              <a href="https://www.linkedin.com/in/levani-kvaliashvili/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </header>

          {/* EXPERIENCE */}
          <section id="experience" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Expérience</h2>

            {/* ACCOR */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Déc. 2024 — Avr. 2026</div>
              <div className="cv-entry-content">
                <h3>Accor — Design System Manager</h3>
                <p className="cv-entry-sub">Issy-les-Moulineaux · Freelance</p>
                <ul>
                  <li>Coordination du Design System cross-produits et cross-environnements (web, iOS, Android), en lien avec la Lead Design System.</li>
                  <li>Gestion avancée des design tokens via Tokens Studio et variables natives Figma — cohérence visuelle entre plateformes.</li>
                  <li>Refactor des composants et alignement avec les référents DS Tech iOS et Android.</li>
                  <li>Automatisation de la synchronisation des exports de tokens vers la tech.</li>
                  <li>Animation d'ateliers de co-construction avec les équipes Produit, Design Ops, Brand System, UX Writing et Accessibilité.</li>
                  <li>Intégration des normes RGAA / WCAG dans la conception des composants.</li>
                  <li>Création de widgets Figma et formation des designers pour faciliter l'adoption du DS.</li>
                  <li>Documentation complète, comptes rendus réguliers et suivi via Jira / Confluence.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens Studio</span><span>Style Dictionary</span><span>Jetpack Compose</span><span>SwiftUI</span><span>Supernova</span><span>n8n</span>
                </div>
              </div>
            </div>

            {/* EDF */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Oct. 2023 — Juin 2024</div>
              <div className="cv-entry-content">
                <h3>EDF — Design System Manager</h3>
                <p className="cv-entry-sub">Paris · Hybride · Freelance</p>
                <ul>
                  <li>Création d'un design system multi-projets et multi-environnements, from scratch, pensé pour la flexibilité et la modularité.</li>
                  <li>Gestion des tokens avec Tokens Studio — contrôle précis des couleurs, typographies et espacements.</li>
                  <li>Variables natives Figma pour la personnalisation et la modularité.</li>
                  <li>Méthodologie atomique (atome / molécule / organisme), slots dans les composants pour s'adapter à chaque projet.</li>
                  <li>Composants créés from scratch sous contrainte d'une bibliothèque cible Angular.</li>
                  <li>Documentation complète du DS.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens Studio</span><span>Angular</span><span>Atomic Design</span>
                </div>
              </div>
            </div>

            {/* PMU */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Sept. 2021 — Juin 2022<br />Juin — Oct. 2023</div>
              <div className="cv-entry-content">
                <h3>PMU — Lead UX/UI &amp; Design System</h3>
                <p className="cv-entry-sub">Paris · Freelance</p>
                <ul>
                  <li>Conception et maintien d'un design system web et mobile.</li>
                  <li>Mise à jour du DS vers les nouvelles features Figma (variables, modes).</li>
                  <li>Collaboration étroite avec les Product Owners et les développeurs pour assurer l'intégration technique.</li>
                  <li>Refonte des parcours UX/UI avec impact mesuré sur la satisfaction client (notation App Store).</li>
                  <li>Rebranding et mise en place d'une nouvelle charte.</li>
                  <li>Design Ops — optimisation et nettoyage des fichiers Figma.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Design System</span><span>iOS / Android / Web</span>
                </div>
              </div>
            </div>

            {/* ELSAN */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Janv. — Avr. 2023</div>
              <div className="cv-entry-content">
                <h3>Elsan Care — UI &amp; Design System</h3>
                <p className="cv-entry-sub">Paris · Freelance</p>
                <ul>
                  <li>Création des fondations du design system (tokens, typographie, espacements) en collaboration avec les équipes dev.</li>
                  <li>Structuration atomique des composants UI : états, variantes, documentation Figma.</li>
                  <li>Refonte des parcours utilisateurs sur l'app Elsan Care, alignée sur les contraintes métier santé.</li>
                  <li>Prototypage et tests utilisateurs pour valider les évolutions avant implémentation.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Tokens</span><span>Storybook</span>
                </div>
              </div>
            </div>

            {/* FRANPRIX */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Mars 2021 — Juin 2022</div>
              <div className="cv-entry-content">
                <h3>Franprix — UI &amp; Design System</h3>
                <p className="cv-entry-sub">Paris · Freelance</p>
                <ul>
                  <li>Maintien et évolution du design system pendant les sprints UX/UI.</li>
                  <li>Création de nouveaux composants et variantes pour accompagner les besoins produit.</li>
                  <li>Alignement avec les développeurs pour garantir la parité Figma ↔ code.</li>
                  <li>Optimisation continue de la librairie Figma et de sa documentation.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Design System</span>
                </div>
              </div>
            </div>

            {/* USERADGENTS */}
            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">Févr. — Sept. 2022</div>
              <div className="cv-entry-content">
                <h3>Useradgents (agence) — UI Designer</h3>
                <p className="cv-entry-sub">Paris · Freelance</p>
                <ul>
                  <li>Projets UI mobile et web pour Franprix, Longchamp, Sézane, Equidia.</li>
                  <li>Design sprints et création de design systems pour assurer cohérence visuelle et fonctionnelle.</li>
                  <li>Méthodologies agiles, livraison rapide en contexte agence.</li>
                </ul>
                <div className="cv-tags">
                  <span>Figma</span><span>Design System</span>
                </div>
              </div>
            </div>
          </section>

          {/* COMPETENCES */}
          <section id="competences" className="cv-section">
            <h2 className="cv-section-title cv-reveal">Compétences</h2>

            <div className="cv-skills-grid cv-reveal">
              <div className="cv-skill-group">
                <h4>Design Systems</h4>
                <ul>
                  <li>Design Tokens</li>
                  <li>Atomic Methodology</li>
                  <li>RGAA / WCAG</li>
                  <li>Design Ops</li>
                  <li>Prototypage</li>
                  <li>UX / UI Design</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Outils</h4>
                <ul>
                  <li>Figma</li>
                  <li>Tokens Studio</li>
                  <li>Style Dictionary</li>
                  <li>Supernova</li>
                  <li>Storybook</li>
                  <li>Webflow</li>
                  <li>n8n</li>
                  <li>Jira / Confluence</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Langues</h4>
                <ul>
                  <li>Français · Natif</li>
                  <li>Anglais · Courant</li>
                  <li>Géorgien · Natif</li>
                </ul>
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
                <p>Product Design — Advanced</p>
              </div>
            </div>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2017 — 2018</div>
              <div className="cv-entry-content">
                <h3>MJM Graphic Design</h3>
                <p>Concepteur produits digitaux</p>
              </div>
            </div>

            <div className="cv-entry cv-reveal">
              <div className="cv-entry-date">2014 — 2015</div>
              <div className="cv-entry-content">
                <h3>HETIC</h3>
                <p>Bachelor Webdesign / Dev</p>
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
