import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background from '../components/Background'
import NavHome from '../components/NavHome'
import Footer from '../components/Footer'
import { ContactHome } from '../components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const pageRef = useRef(null)
  const statRefs = useRef([])

  useEffect(() => {
    const el = pageRef.current
    if (!el) return

    // Hero entrance
    gsap.set(el.querySelectorAll('.hero-display .word'), { yPercent: 110 })
    gsap.set(el.querySelectorAll('.hero-tag, .hero-description, .hero-top-item, .hero-bottom-item'), { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.25 })
    tl.to(el.querySelectorAll('.hero-top-item'), {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out'
    })
    .to(el.querySelectorAll('.hero-tag'), {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
    }, '-=0.2')
    .to(el.querySelectorAll('.hero-display .word'), {
      yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08
    }, '-=0.3')
    .to(el.querySelectorAll('.hero-description'), {
      opacity: 1, duration: 1, ease: 'power2.out'
    }, '-=0.6')
    .to(el.querySelectorAll('.hero-bottom-item'), {
      opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out'
    }, '-=0.4')

    // Scroll reveals
    el.querySelectorAll('.reveal-up').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    el.querySelectorAll('.reveal-fade').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0 },
        {
          opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    const skillsGrid = el.querySelector('.skills-grid')
    if (skillsGrid) {
      gsap.fromTo(el.querySelectorAll('.skill'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08,
          scrollTrigger: { trigger: skillsGrid, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    // Stat counters — use refs to avoid DOM text manipulation issues
    statRefs.current.forEach((statEl) => {
      if (!statEl) return
      const target = parseInt(statEl.dataset.target, 10)
      if (isNaN(target)) return
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: statEl, start: 'top 85%', toggleActions: 'play none none none' },
        onUpdate: () => { statEl.textContent = Math.round(obj.val) },
        onComplete: () => { statEl.textContent = target }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      tl.kill()
    }
  }, [])

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const el = document.getElementById('current-time')
      if (el) el.textContent = h + ':' + m + ' CET'
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={pageRef}>
      <Background />
      <NavHome />

      <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div className="hero-top-item">
              <div className="label">Rôle</div>
              <div className="value">Design System Manager</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Localisation</div>
              <div className="value">Paris, FR</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Heure locale</div>
              <div className="value" id="current-time">10:22 CET</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Statut</div>
              <div className="value"><span className="dot" />Disponible</div>
            </div>
          </div>

          <div className="hero-body">
            <div>
              <div className="hero-tag">
                <span className="dot" />
                Disponible fin avril 2026
              </div>
              <h1 className="hero-display">
                <span className="line"><span className="word">DESIGN</span></span>
                <span className="line"><span className="word">RENCONTRE</span></span>
                <span className="line"><span className="word"><span className="accent">L'ÉCHELLE.</span></span></span>
              </h1>
            </div>

            <div className="hero-description">
              <p>À l'intersection du design et de l'ingénierie, je construis des design systems qui tiennent à l'échelle. Architecture de tokens, gouvernance, pipeline du Figma au code natif, et accompagnement humain des équipes.</p>
              <a href="#contact" className="cta-glass primary">
                <span>Me contacter</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-bottom-item">Pour</div>
            <div className="hero-bottom-item">Les équipes</div>
            <div className="hero-bottom-item">Qui pensent</div>
            <div className="hero-bottom-item">À l'échelle</div>
            <div className="hero-bottom-item">(Défiler)</div>
          </div>
        </div>
      </header>

      <div className="content">
        {/* EXPERTISE */}
        <section id="expertise">
          <div className="wrap">
            <div className="section-meta">
              <div className="section-num reveal-up">/01 — Expertise</div>
              <h2 className="section-title reveal-up">Ce que je sais <em>faire</em>.</h2>
            </div>

            <div className="skills-grid">
              <div className="skill">
                <div className="skill-num">/01</div>
                <h3>Architecture de tokens</h3>
                <p>Je conçois des systèmes de tokens multi-niveaux (Core, Brand, Semantic, Component), pensés pour le multi-marque, le multi-plateforme et le multi-thème. La logique avant l'outil, la lisibilité avant la sophistication.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Tokens 4 niveaux</span>
                  <span className="skill-tag">Material-style</span>
                  <span className="skill-tag">HCT colors</span>
                  <span className="skill-tag">Multi-brand</span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-num">/02</div>
                <h3>Pipeline design vers code</h3>
                <p>J'industrialise le flux entre Figma et le code natif. Gouvernance Sheet, Tokens Studio, push Git, sync bidirectionnelle. L'objectif est toujours le même : une seule source de vérité, plusieurs destinations.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Tokens Studio</span>
                  <span className="skill-tag">Style Dictionary</span>
                  <span className="skill-tag">Git workflow</span>
                  <span className="skill-tag">JSON pivot</span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-num">/03</div>
                <h3>Gouvernance &amp; adoption</h3>
                <p>Audits, formations, accompagnement individuel des designers, contribution model. Un design system se vend autant qu'il se construit. J'embarque les équipes par la pédagogie, pas par le mandat.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Audits</span>
                  <span className="skill-tag">Formations</span>
                  <span className="skill-tag">Contribution model</span>
                  <span className="skill-tag">QA</span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-num">/04</div>
                <h3>Plateformes natives &amp; web</h3>
                <p>Coordination design dev sur iOS (SwiftUI), Android (Jetpack Compose) et Web (Webflow / Lumos). Composants adaptatifs pilotés par variables, theming multi-dimensions, parité visuelle entre les plateformes.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Jetpack Compose</span>
                  <span className="skill-tag">SwiftUI</span>
                  <span className="skill-tag">Webflow</span>
                  <span className="skill-tag">Lumos</span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-num">/05</div>
                <h3>Tooling sur mesure</h3>
                <p>Je construis des outils internes pour fluidifier l'usage du DS au quotidien. Widgets pédagogiques, palettes HCT, explorateurs de tokens. L'idée est simple : faire gagner du temps aux designers et leur enlever les questions répétitives.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Figma plugins</span>
                  <span className="skill-tag">HTML widgets</span>
                  <span className="skill-tag">Material utils</span>
                  <span className="skill-tag">A11y tools</span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-num">/06</div>
                <h3>Automatisation</h3>
                <p>Pipelines de documentation, exports JSON machine-readable des composants, agents de génération, webhooks et notifications. L'automatisation arrive dans le DS comme une brique parmi d'autres, jamais comme une fin en soi.</p>
                <div className="skill-tags">
                  <span className="skill-tag">n8n</span>
                  <span className="skill-tag">Claude Code</span>
                  <span className="skill-tag">Anova JSON</span>
                  <span className="skill-tag">Supernova</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack">
          <div className="wrap">
            <div className="section-meta">
              <div className="section-num reveal-up">/02 — Stack</div>
              <h2 className="section-title reveal-up">Outils <em>du quotidien</em>.</h2>
            </div>

            <div className="stack reveal-up">
              <div className="stack-label">Outils du quotidien</div>
              <div className="stack-grid">
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg></div><div className="tool-name">Figma</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#0a5a3c"/><text x="32" y="40" textAnchor="middle" fontFamily="Inter" fontSize="22" fontWeight="600" fill="#2dd48a">{"{ }"}</text></svg></div><div className="tool-name">Tokens Studio</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#f4eeda"/><circle cx="32" cy="32" r="14" fill="none" stroke="#0a5a3c" strokeWidth="3"/><circle cx="32" cy="14" r="4" fill="#0a5a3c"/><circle cx="32" cy="50" r="4" fill="#0a5a3c"/><circle cx="14" cy="32" r="4" fill="#0a5a3c"/><circle cx="50" cy="32" r="4" fill="#0a5a3c"/></svg></div><div className="tool-name">Style Dictionary</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#F05033"/><path d="M30 14 L14 30 L30 46 L34 42 L22 30 L34 18 Z" fill="#fff"/><path d="M34 14 L50 30 L34 46 L30 42 L42 30 L30 18 Z" fill="#fff" opacity="0.7"/></svg></div><div className="tool-name">Git</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#0a1410"/><path d="M20 22 L32 16 L44 22 L44 42 L32 48 L20 42 Z" fill="none" stroke="#2dd48a" strokeWidth="2"/><circle cx="32" cy="32" r="6" fill="#2dd48a"/></svg></div><div className="tool-name">Claude Code</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#0066ff"/><text x="32" y="42" textAnchor="middle" fontFamily="Inter" fontSize="32" fontWeight="700" fill="#fff">S</text></svg></div><div className="tool-name">Supernova</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#34A853"/><rect x="16" y="14" width="32" height="36" rx="2" fill="#fff"/><rect x="20" y="20" width="24" height="3" fill="#34A853"/><rect x="20" y="26" width="24" height="3" fill="#34A853"/><rect x="20" y="32" width="24" height="3" fill="#34A853"/><rect x="20" y="38" width="24" height="3" fill="#34A853"/></svg></div><div className="tool-name">Sheets</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#000"/><path d="M16 24 L32 16 L48 24 L48 40 L32 48 L16 40 Z" fill="none" stroke="#fff" strokeWidth="2"/><path d="M16 24 L32 32 L48 24 M32 32 L32 48" stroke="#fff" strokeWidth="2"/></svg></div><div className="tool-name">Webflow</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#FF6D5A"/><circle cx="22" cy="22" r="6" fill="#fff"/><circle cx="42" cy="22" r="6" fill="#fff"/><circle cx="22" cy="42" r="6" fill="#fff"/><circle cx="42" cy="42" r="6" fill="#fff"/><line x1="22" y1="22" x2="42" y2="22" stroke="#fff" strokeWidth="2"/><line x1="22" y1="22" x2="22" y2="42" stroke="#fff" strokeWidth="2"/><line x1="42" y1="22" x2="42" y2="42" stroke="#fff" strokeWidth="2"/><line x1="22" y1="42" x2="42" y2="42" stroke="#fff" strokeWidth="2"/></svg></div><div className="tool-name">n8n</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#1a1a1a"/><text x="32" y="42" textAnchor="middle" fontFamily="Inter" fontSize="28" fontWeight="600" fill="#fff">N</text></svg></div><div className="tool-name">Notion</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#F05032"/><path d="M18 32 C18 26 22 22 28 22 C34 22 36 26 36 30 C36 36 32 40 28 40 L20 40 L20 50 L18 50 Z" fill="#fff"/></svg></div><div className="tool-name">SwiftUI</div></div>
                <div className="tool"><div className="tool-icon"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#3DDC84"/><circle cx="24" cy="32" r="3" fill="#1a1a1a"/><circle cx="40" cy="32" r="3" fill="#1a1a1a"/><path d="M16 36 C16 26 22 18 32 18 C42 18 48 26 48 36 L16 36 Z" fill="none" stroke="#1a1a1a" strokeWidth="2"/><line x1="20" y1="14" x2="24" y2="20" stroke="#1a1a1a" strokeWidth="2"/><line x1="44" y1="14" x2="40" y2="20" stroke="#1a1a1a" strokeWidth="2"/></svg></div><div className="tool-name">Compose</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="wrap">
            <div className="section-meta">
              <div className="section-num reveal-up">/03 — Projets</div>
              <h2 className="section-title reveal-up">Travaux <em>récents</em>.</h2>
            </div>

            <Link to="/case-study-accor" className="featured-project reveal-up">
              <div className="featured-project-inner">
                <div>
                  <div className="featured-eyebrow">Étude de cas · Accor</div>
                  <h3>Un DS, deux OS, <em>une seule source.</em></h3>
                  <p>Refonte de l'architecture tokens du DS mobile d'Accor. Quatre niveaux, alignement web-app, pipeline automatisée jusqu'au code natif. Une transformation menée sans jamais l'imposer.</p>
                  <span className="cta-glass primary" style={{ marginTop: '8px' }}>
                    <span>Lire l'étude de cas</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
                <div className="featured-stats">
                  <div className="featured-stat"><div className="featured-stat-num" data-target="4" ref={el => statRefs.current[0] = el}>0</div><div className="featured-stat-label">Niveaux tokens</div></div>
                  <div className="featured-stat"><div className="featured-stat-num" data-target="5" ref={el => statRefs.current[1] = el}>0</div><div className="featured-stat-label">Dimensions theming</div></div>
                  <div className="featured-stat"><div className="featured-stat-num" data-target="2" ref={el => statRefs.current[2] = el}>0</div><div className="featured-stat-label">Plateformes natives</div></div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section id="principles">
          <div className="wrap">
            <div className="section-meta">
              <div className="section-num reveal-up">/04 — Méthode</div>
              <h2 className="section-title reveal-up">Comment <em>je travaille</em>.</h2>
            </div>

            <div className="principles">
              <div className="reveal-up">
                <div className="principle-num">/01</div>
                <h4>Les designers d'abord</h4>
                <p>Un design system n'existe que parce que des humains l'utilisent au quotidien. Je passe autant de temps à former, accompagner et écouter les designers qu'à dessiner l'architecture. C'est ce qui fait la différence entre un système qui vit et un système qui dort.</p>
              </div>
              <div className="reveal-up">
                <div className="principle-num">/02</div>
                <h4>Gouvernance avant automatisation</h4>
                <p>Automatiser un système mal structuré ne fait qu'accélérer le chaos. On stabilise manuellement, on documente, on s'assure que tout le monde comprend, et seulement ensuite on automatise les passages qui se sont prouvés.</p>
              </div>
              <div className="reveal-up">
                <div className="principle-num">/03</div>
                <h4>Un DS se vend autant qu'il se construit</h4>
                <p>L'adoption passe par la preuve de valeur, pas par le mandat. Le meilleur système au monde reste lettre morte s'il n'est pas désiré par ceux qui doivent l'utiliser. Je préfère une décision discutée à une décision parfaite.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap">
            <div className="section-meta">
              <div className="section-num reveal-up">/05 — À propos</div>
              <h2 className="section-title reveal-up">Designer, manager, pont entre <em>les mondes</em>.</h2>
            </div>

            <div className="about-content reveal-up">
              <p>Je suis <strong>Design System Manager</strong>, spécialisé dans la structuration de DS multi-plateformes et multi-marques. Je viens de boucler une mission chez Accor sur le périmètre app iOS et Android, où on a refondu l'architecture des tokens et industrialisé le pipeline design vers code.</p>
              <p>Mon métier, c'est de faire le pont entre design, dev et produit. Concevoir l'architecture, oui, mais surtout l'<strong>embarquer</strong>, la documenter et la rendre vivante au quotidien. Je crois qu'un bon DS Manager passe plus de temps à former et à convaincre qu'à dessiner. C'est exactement comme ça que je travaille.</p>
              <p>Au-delà des tokens et des composants, ce qui m'intéresse vraiment dans ce métier c'est la <strong>relation avec les équipes</strong>. Comprendre les frictions, débloquer les designers, défendre une décision, en abandonner une autre quand on s'aperçoit qu'elle n'embarque personne. Le DS est un produit interne avant d'être un livrable.</p>
              <p>Disponible à partir de <strong>fin avril 2026</strong> en freelance, sur des missions moyen ou long terme.</p>
            </div>
          </div>
        </section>

        <ContactHome />

        <Footer />
      </div>
    </div>
  )
}
