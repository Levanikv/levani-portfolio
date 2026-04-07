import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background from '../components/Background'
import NavCaseStudy from '../components/NavCaseStudy'
import Footer from '../components/Footer'
import { ContactCaseStudy } from '../components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudyAccor() {
  const pageRef = useRef(null)

  useEffect(() => {
    const el = pageRef.current
    if (!el) return

    gsap.set(el.querySelectorAll('.hero-display .word'), { yPercent: 110 })
    gsap.set(el.querySelectorAll('.hero-tag, .hero-description, .hero-top-item'), { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.25 })
    tl.to(el.querySelectorAll('.hero-top-item'), {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out'
    })
    .to(el.querySelectorAll('.hero-tag'), {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
    }, '-=0.2')
    .to(el.querySelectorAll('.hero-display .word'), {
      yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08
    }, '-=0.4')
    .to(el.querySelectorAll('.hero-description'), {
      opacity: 1, duration: 1, ease: 'power2.out'
    }, '-=0.6')

    el.querySelectorAll('.reveal-up').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    el.querySelectorAll('.img-frame').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    el.querySelectorAll('.decision').forEach((node, i) => {
      gsap.fromTo(node,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: i * 0.05,
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    const resultsGrid = el.querySelector('.results-grid')
    if (resultsGrid) {
      gsap.fromTo(el.querySelectorAll('.result-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.06,
          scrollTrigger: { trigger: resultsGrid, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }

    const diagGrid = el.querySelector('.diag-grid')
    if (diagGrid) {
      gsap.fromTo(el.querySelectorAll('.diag-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07,
          scrollTrigger: { trigger: diagGrid, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }

    el.querySelectorAll('.pull').forEach((node) => {
      gsap.fromTo(node,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: node, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      tl.kill()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <Background />
      <NavCaseStudy />

      <header className="hero hero-hug">
        <div className="wrap">
          <div className="hero-top">
            <div className="hero-top-item">
              <div className="label">Client</div>
              <div className="value">Accor</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Périmètre</div>
              <div className="value">App iOS &amp; Android</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Rôle</div>
              <div className="value">Design System Manager</div>
            </div>
            <div className="hero-top-item">
              <div className="label">Année</div>
              <div className="value">2025 — 2026</div>
            </div>
          </div>

          <div className="hero-body">
            <div>
              <div className="hero-tag">
                <span className="dot" />
                Étude de cas · Mise en avant
              </div>
              <h1 className="hero-display">
                <span className="line"><span className="word">UN DS,</span></span>
                <span className="line"><span className="word">DEUX OS,</span></span>
                <span className="line"><span className="word"><span className="accent">UNE SOURCE.</span></span></span>
              </h1>
            </div>

            <div className="hero-description cs">
              <p>Refonte de l'architecture tokens du DS mobile d'Accor. Alignement web-app, pipeline automatisée. Et surtout : adoption terrain par des designers qui n'avaient rien demandé.</p>
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        {/* ACTE I */}
        <section id="constat">
          <div className="wrap">
            <div className="act-header">
              <div className="act-num reveal-up">/I — Constat</div>
              <h2 className="act-title reveal-up">Le <em>constat</em>.</h2>
            </div>

            <div className="prose">
              <p className="lead reveal-up">À mon arrivée, le DS mobile d'Accor existait. Il tenait debout. Mais il n'était pas fait pour grandir.</p>
              <p>Le système gérait déjà le light/dark et les variations iOS/Android via les variables. Le travail n'était pas de tout casser. Il fallait poser une <strong>architecture extensible</strong>, capable d'absorber de nouvelles marques, et l'<strong>aligner avec le DS web</strong>. Même direction artistique, mais aucune source de vérité commune.</p>
            </div>

            <div className="img-frame light">
              <img src="/images/org-chart.png" alt="Organigramme de la DS Team" />
              <div className="img-caption">
                <span className="badge">L'équipe</span>
                <strong>Une DS Team de six.</strong> Un Lead, quatre DSM côté web (Core et Brands), et moi sur le périmètre App. En collaboration directe avec deux référents techniques (un iOS, un Android) et quatre product designers app. Daily DSM, synchro design hebdo, biweekly QA App.
              </div>
            </div>

            <div className="diag-grid">
              <div className="diag-item">
                <h4>Couleurs désynchronisées</h4>
                <p>Web et app partageaient la DA mais pas les valeurs. Aucune source de vérité commune sur les couleurs des marques.</p>
              </div>
              <div className="diag-item">
                <h4>Naming inconsistant</h4>
                <p>Les semantic tokens existaient mais le naming n'était pas rationalisé. Chaque ajout creusait la dette.</p>
              </div>
              <div className="diag-item">
                <h4>Familles incomplètes</h4>
                <p>Pas de familles structurées. Décliner une marque était compliqué. En ajouter une, encore plus.</p>
              </div>
              <div className="diag-item">
                <h4>Documentation en retard</h4>
                <p>Les composants évoluaient plus vite que la doc. Les designers cherchaient les réponses dans Figma, pas dans une référence.</p>
              </div>
            </div>

            <div className="prose">
              <h3>Le vrai défi, c'était <em>humain</em></h3>
              <p>Au-delà du technique, le vrai sujet était humain. Les designers n'étaient pas à l'aise avec les tokens sémantiques. <code>surface-container</code>, <code>on-surface-variant</code> — ce vocabulaire était loin de leur quotidien. Et ça se voyait.</p>
            </div>

            <div className="pull">
              <blockquote>"Surface-container, ça veut rien dire pour moi. Je veux juste mon gris."</blockquote>
              <cite>Un designer, premier atelier tokens</cite>
            </div>

            <div className="prose">
              <p>Ce jour-là, j'ai compris que le technique serait la partie facile. Le changement ne pouvait pas être imposé. Il devait être <strong>progressif, prouvé par la valeur, et porté par la pédagogie.</strong></p>
            </div>
          </div>
        </section>

        {/* ACTE II */}
        <section id="opportunite">
          <div className="wrap">
            <div className="act-header">
              <div className="act-num reveal-up">/II — Opportunité</div>
              <h2 className="act-title reveal-up">L'<em>opportunité</em>.</h2>
            </div>

            <div className="prose">
              <p className="lead reveal-up">On aurait pu lancer la refonte tokens dès le premier jour. On a attendu.</p>
              <p>Imposer un changement d'architecture sans raison business visible, c'était l'échec assuré. Quand le rebranding a été annoncé, la fenêtre s'est ouverte. <strong>Puisqu'on touche à toutes les couleurs, autant reconstruire les fondations.</strong></p>
              <p>Le rebranding est devenu le levier. Il a permis de légitimer le chantier, d'aligner web et app sur un même calendrier, et de justifier l'investissement en outillage.</p>
            </div>

            <div className="ba">
              <div className="ba-card before">
                <div className="ba-label">Avant</div>
                <h4>Un système qui suivait</h4>
                <ul>
                  <li>Couleurs différentes web et app</li>
                  <li>Naming sémantique inconsistant</li>
                  <li>Pas de familles structurées</li>
                  <li>Doc en retard sur les composants</li>
                  <li>Aucune source de vérité partagée</li>
                </ul>
              </div>
              <div className="ba-arrow">→</div>
              <div className="ba-card after">
                <div className="ba-label">Après</div>
                <h4>Un système qui pilote</h4>
                <ul>
                  <li>Source de vérité unifiée web et app</li>
                  <li>Naming sémantique rationalisé et documenté</li>
                  <li>Familles de couleurs Material-style complètes</li>
                  <li>Documentation industrialisée</li>
                  <li>Pipeline automatisée vers Figma et code</li>
                </ul>
              </div>
            </div>

            <div className="prose">
              <p>On n'a pas réinventé le langage. Le système suivait déjà une logique Material. <strong>On a rationalisé le naming, complété les familles de couleurs, et tout documenté.</strong> Un vrai changement d'architecture, mais pas de rupture. C'est cette continuité qui a rendu l'adoption possible.</p>
            </div>
          </div>
        </section>

        {/* ACTE III */}
        <section id="refonte">
          <div className="wrap">
            <div className="act-header">
              <div className="act-num reveal-up">/III — Refonte</div>
              <h2 className="act-title reveal-up">La <em>refonte</em>.</h2>
            </div>

            <div className="prose">
              <p className="lead reveal-up">Trois décisions structurantes. Chacune discutée et défendue avant d'être exécutée.</p>
            </div>

            <div className="decisions">
              <div className="decision">
                <div className="decision-num">/01</div>
                <div className="decision-body">
                  <h3>Architecture en quatre niveaux</h3>
                  <div className="sub">Problème</div>
                  <p>Naming incohérent, familles incomplètes. Ajouter une marque, c'était du bricolage.</p>
                  <div className="sub">Décision</div>
                  <p>Core, Brand, Semantic, Component. <strong>Chaque niveau ne référence que celui du dessus.</strong> La logique Material est conservée, mais nettoyée.</p>
                  <div className="sub">Résultat</div>
                  <p>Un système <strong>prévisible</strong>. Maintenable, transmissible. Prêt pour de nouvelles marques sans tout retoucher.</p>
                </div>
              </div>

              <div className="decision">
                <div className="decision-num">/02</div>
                <div className="decision-body">
                  <h3>Gouvernance sur Google Sheet</h3>
                  <div className="sub">Problème</div>
                  <p>Pousser directement dans Tokens Studio, ça excluait le reste de l'équipe des décisions.</p>
                  <div className="sub">Décision</div>
                  <p>Google Sheet comme source. Lisible par tous, mappée web → iOS → Android, validable en équipe avant push Git.</p>
                  <div className="sub">Résultat</div>
                  <p><strong>Le low-tech a gagné</strong> parce qu'il était lisible par tout le monde.</p>
                </div>
              </div>

              <div className="decision">
                <div className="decision-num">/03</div>
                <div className="decision-body">
                  <h3>Pipeline Tokens Studio &amp; Git</h3>
                  <div className="sub">Problème</div>
                  <p>Copier-coller entre Figma et le code. Dérive permanente, personne ne savait quelle version était la bonne.</p>
                  <div className="sub">Décision</div>
                  <p>Tokens Studio → push Git → pull Figma. Les devs iOS et Android consomment la source de vérité directement.</p>
                  <div className="sub">Résultat</div>
                  <p><strong>Zéro intermédiaire.</strong> Style Dictionary en POC pour la suite. On automatise ce qui marche déjà à la main.</p>
                </div>
              </div>
            </div>

            <div className="diagram-card">
              <div className="diagram-label">Architecture en quatre niveaux</div>
              <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect x="80" y="40" width="740" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="110" y="68" className="svg-text-title">/01 · Core tokens</text>
                  <text x="110" y="86" className="svg-text-sm">Primitives de base, couleurs brutes, espacements, typographies</text>
                </g>
                <line x1="450" y1="105" x2="450" y2="120" stroke="#2dd48a" strokeWidth="1"/>
                <polygon points="446,118 454,118 450,124" fill="#2dd48a"/>
                <g>
                  <rect x="80" y="125" width="740" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(45, 212, 138, 0.4)" strokeWidth="1"/>
                  <text x="110" y="153" className="svg-text-title">/02 · Brand tokens</text>
                  <text x="110" y="171" className="svg-text-sm">Identité de chaque marque, l'expression visuelle</text>
                </g>
                <line x1="450" y1="190" x2="450" y2="205" stroke="#2dd48a" strokeWidth="1"/>
                <polygon points="446,203 454,203 450,209" fill="#2dd48a"/>
                <g>
                  <rect x="80" y="210" width="740" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="110" y="238" className="svg-text-title">/03 · Semantic tokens</text>
                  <text x="110" y="256" className="svg-text-sm">Signification dans l'UI : surface, on-surface, primary, loyalty</text>
                </g>
                <line x1="450" y1="275" x2="450" y2="290" stroke="#2dd48a" strokeWidth="1"/>
                <polygon points="446,288 454,288 450,294" fill="#2dd48a"/>
                <g>
                  <rect x="80" y="295" width="740" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="110" y="323" className="svg-text-title">/04 · Component tokens</text>
                  <text x="110" y="341" className="svg-text-sm">Spécifiques aux composants : button-primary-bg, input-border</text>
                </g>
              </svg>
            </div>

            <div className="img-frame">
              <img src="/images/semantic-tokens.png" alt="Documentation des semantic tokens" />
              <div className="img-caption">
                <span className="badge">Tokens</span>
                <strong>La table des semantic tokens.</strong> Chaque token est documenté avec sa description, son usage, ses valeurs light et dark, et son nom natif iOS et Android. C'est cette table qui sert de référence partagée entre design et code.
              </div>
            </div>

            <div className="rule-box">
              <div className="rule-box-eyebrow">Une règle posée pendant le rebranding</div>
              <h4>HCT comme grammaire des primitives</h4>
              <p>Pour ajouter une couleur, on utilise l'espace HCT. On <strong>verrouille la couleur de base</strong>, par exemple <code>red-53</code>, et si on veut décliner cette palette, on garde le <strong>Hue</strong> et la <strong>Chroma</strong>, on ne fait varier que le <strong>Tone</strong>. Une discipline simple qui garantit que toutes les déclinaisons d'une couleur appartiennent vraiment à la même famille, perceptuellement, pas juste mathématiquement.</p>
            </div>

            <div className="img-frame light">
              <img src="/images/hct-functional-colors.png" alt="HCT color picker et functional colors" />
              <div className="img-caption">
                <span className="badge">HCT</span>
                <strong>HCT picker et familles complètes.</strong> Chaque marque dispose de palettes harmonieuses dérivées par variation de Tone à Hue et Chroma constants. Inspiré des travaux Material sur les couleurs perceptuelles.
              </div>
            </div>

            <div className="prose">
              <h3>La gouvernance, la pipeline, la <em>sync</em></h3>
              <p>Trois outils, une seule source de vérité. Le tout conçu pour qu'aucun copier-coller ne soit nécessaire.</p>
            </div>

            <div className="img-frame">
              <img src="/images/google-sheet.png" alt="Google Sheet de gouvernance" />
              <div className="img-caption">
                <span className="badge">Source</span>
                <strong>Le Google Sheet de gouvernance, volontairement low-tech.</strong> Chaque token a son statut, son set, son nom, son type, sa valeur primitive et sa raw value. Lisible par tout le monde. C'est ici que naissent les décisions, avant tout export.
              </div>
            </div>

            <div className="img-frame">
              <img src="/images/tokens-studio.png" alt="Tokens Studio dans Figma" />
              <div className="img-caption">
                <span className="badge">Pipeline</span>
                <strong>Tokens Studio comme pont entre design et code.</strong> Hiérarchie par marque et par mode (light, dark, hover, pressed). Push Git pour l'export, pull Figma pour la sync. Les marques arrivent comme des couches sans polluer le Core.
              </div>
            </div>

            <div className="img-frame">
              <img src="/images/figma-variables.png" alt="Variables Figma synchronisées" />
              <div className="img-caption">
                <span className="badge">Sync</span>
                <strong>Le résultat dans Figma : 230 variables synchronisées.</strong> Les designers travaillent avec des variables qui pointent vers la même source que le code. Un token change dans le Sheet, il change partout.
              </div>
            </div>

            <div className="diagram-card">
              <div className="diagram-label">Pipeline complète des tokens</div>
              <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect x="20" y="100" width="130" height="80" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="85" y="130" textAnchor="middle" className="svg-text-label">Source</text>
                  <text x="85" y="155" textAnchor="middle" className="svg-text-title">Sheet</text>
                  <text x="85" y="172" textAnchor="middle" className="svg-text-sm">Gouvernance</text>
                </g>
                <text x="170" y="145" className="svg-text-sm">→</text>
                <g>
                  <rect x="190" y="100" width="130" height="80" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="255" y="130" textAnchor="middle" className="svg-text-label">Format</text>
                  <text x="255" y="155" textAnchor="middle" className="svg-text-title">JSON</text>
                  <text x="255" y="172" textAnchor="middle" className="svg-text-sm">Pivot universel</text>
                </g>
                <text x="340" y="145" className="svg-text-sm">→</text>
                <g>
                  <rect x="360" y="100" width="130" height="80" rx="4" fill="rgba(45, 212, 138, 0.08)" stroke="rgba(45, 212, 138, 0.4)" strokeWidth="1"/>
                  <text x="425" y="130" textAnchor="middle" className="svg-text-label">Outil</text>
                  <text x="425" y="155" textAnchor="middle" className="svg-text-title">Tokens Studio</text>
                  <text x="425" y="172" textAnchor="middle" className="svg-text-sm">Push / Pull</text>
                </g>
                <text x="510" y="145" className="svg-text-sm">→</text>
                <g>
                  <rect x="530" y="100" width="130" height="80" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="595" y="130" textAnchor="middle" className="svg-text-label">Versioning</text>
                  <text x="595" y="155" textAnchor="middle" className="svg-text-title">Git</text>
                  <text x="595" y="172" textAnchor="middle" className="svg-text-sm">Source partagée</text>
                </g>
                <text x="680" y="145" className="svg-text-sm">→</text>
                <g>
                  <rect x="700" y="55" width="180" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="790" y="80" textAnchor="middle" className="svg-text-label">Design</text>
                  <text x="790" y="100" textAnchor="middle" className="svg-text-title">Figma</text>
                </g>
                <g>
                  <rect x="700" y="165" width="180" height="60" rx="4" fill="rgba(45, 212, 138, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                  <text x="790" y="190" textAnchor="middle" className="svg-text-label">Code</text>
                  <text x="790" y="210" textAnchor="middle" className="svg-text-title">iOS · Android</text>
                </g>
                <text x="450" y="260" textAnchor="middle" className="svg-text-sm" style={{ fontStyle: 'italic' }}>Une seule source. Deux destinations. Zéro copier-coller.</text>
              </svg>
            </div>

            <div className="prose">
              <h3>Un theming à <em>cinq dimensions</em></h3>
              <p>Les tokens en place, on a conçu des composants qui s'adaptent à cinq variables : OS, device, apparence, accessibilité, marque. <strong>Un seul composant. Cinq dimensions. Zéro duplication.</strong></p>
            </div>

            <div className="img-frame light">
              <img src="/images/ios-android.png" alt="Composants iOS et Android adaptatifs" />
              <div className="img-caption">
                <span className="badge">Theming</span>
                <strong>Le même composant, deux OS, plusieurs breakpoints.</strong> Le sélecteur Auto bascule iOS 375, iOS 834, iOS 1210, AND 360, AND 1440, tous gérés par les mêmes variables. Plus besoin de forker un composant pour changer de plateforme.
              </div>
            </div>
          </div>
        </section>

        {/* ACTE IV */}
        <section id="adoption">
          <div className="wrap">
            <div className="act-header">
              <div className="act-num reveal-up">/IV — Adoption</div>
              <h2 className="act-title reveal-up">L'<em>adoption</em>.</h2>
            </div>

            <div className="prose">
              <p className="lead reveal-up">Construire le système, c'était 30 % du travail. Convaincre les gens de l'utiliser, c'était tout le reste.</p>
              <p>Plutôt qu'imposer les tokens par décret, trois leviers : <strong>former, donner à manipuler, accompagner au quotidien</strong>. Aucun ne suffit seul. Les trois ensemble, oui.</p>
            </div>

            <div className="decisions">
              <div className="decision">
                <div className="decision-num">/01</div>
                <div className="decision-body">
                  <h3>Une formation pour penser en tokens</h3>
                  <p>Des sessions pour expliquer la logique des familles de couleurs, la différence entre <em>surface</em> et <em>on-surface</em>, et comment appliquer les tokens dans Figma. L'objectif : que les designers comprennent le <strong>pourquoi</strong>. Quand le pourquoi est clair, le comment suit.</p>
                </div>
              </div>

              <div className="decision">
                <div className="decision-num">/02</div>
                <div className="decision-body">
                  <h3>Un widget pour jouer avec les tokens</h3>
                  <p>Plutôt que de la doc statique, j'ai construit un widget interactif. On explore les familles, on change une variable, on voit l'impact en temps réel. <strong>L'objectif : répondre seul à « quel token utiliser ici ? »</strong> sans avoir à demander sur Slack.</p>
                  <a href="https://preset-ebony-08524974.figma.site/" target="_blank" rel="noopener noreferrer" className="widget-link">
                    Voir le widget en ligne
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                </div>
              </div>

              <div className="decision">
                <div className="decision-num">/03</div>
                <div className="decision-body">
                  <h3>Un accompagnement individuel et continu</h3>
                  <p>Reviews dans les maquettes, daily DSM, synchros design hebdo, biweekly QA. Pas pour contrôler — pour débloquer. Capter les frictions avant qu'elles ne deviennent des blocages. C'est là qu'on apprend ce que la doc ne dira jamais.</p>
                </div>
              </div>
            </div>

            <div className="pull">
              <blockquote>L'adoption a décollé le jour où les designers ont vu qu'ils gagnaient du temps sur leurs livrables. Pas avant.</blockquote>
              <cite>Observation terrain</cite>
            </div>

            <div className="prose">
              <h3>Documenter à <em>grande échelle</em></h3>
              <p>Documenter des dizaines de composants à la main, c'est des mois de travail qui se périme en cours de route. L'approche : exporter le JSON de chaque composant via Anova (anatomy, props, slots, types, variants). Ce JSON devient la <strong>spec lisible par la machine</strong>, qui alimente la doc sur Supernova et les agents qui génèrent les fiches.</p>
              <p>On ne remplace pas la doc humaine. On lui donne une base structurée et à jour. La règle : <strong>la machine prépare, on valide.</strong> Jamais l'inverse.</p>
            </div>

            <div className="img-frame">
              <img src="/images/app-advisory-json.png" alt="Composant app.advisory et son export JSON" />
              <div className="img-caption">
                <span className="badge">JSON spec</span>
                <strong>Le composant <code>app.advisory</code> et son export JSON via Anova.</strong> À gauche, toutes les variantes visuelles (default, icon symbols, warning, info, alert · primary &amp; secondary · fixed &amp; full). À droite, le JSON structuré qui décrit l'anatomie, les slots, les props et les enums. Une spec qui sert à la fois à la doc et à l'outillage.
              </div>
            </div>

            <div className="prose">
              <p>En parallèle, une pipeline de changelog automatisé pour notifier l'équipe à chaque évolution du DS. Une partie est en place. Le reste sera continué après mon départ.</p>
            </div>
          </div>
        </section>

        {/* ACTE V */}
        <section id="resultat">
          <div className="wrap">
            <div className="act-header">
              <div className="act-num reveal-up">/V — Résultat</div>
              <h2 className="act-title reveal-up">Le <em>résultat</em>.</h2>
            </div>

            <div className="prose">
              <p className="lead reveal-up">Avant : un DS qui tenait, mais ne pouvait pas grandir. Après : une base commune, des choix plus rapides, moins d'allers-retours entre équipes.</p>
            </div>

            <div className="results-grid">
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>
                <h4>Cohérence</h4>
                <p>Une seule source de vérité pour les couleurs, web et mobile.</p>
              </div>
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                <h4>Scalabilité</h4>
                <p>Quatre niveaux de tokens. Prêt pour de nouvelles marques.</p>
              </div>
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                <h4>Vélocité</h4>
                <p>Changer de thème en minutes au lieu de jours.</p>
              </div>
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12h4l3-7 4 14 3-7h4"/></svg>
                <h4>Pipeline</h4>
                <p>Sheet, Tokens Studio, Git, Figma, code. Zéro copier-coller.</p>
              </div>
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="9" cy="8" r="4"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="3"/><path d="M14 20c0-2 2-4 4-4s4 2 4 4"/></svg>
                <h4>Autonomie</h4>
                <p>Les designers choisissent leurs tokens seuls. Formation, widget et suivi ont fait le travail.</p>
              </div>
              <div className="result-card">
                <svg className="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>
                <h4>Documentation</h4>
                <p>Doc générée depuis les JSON Anova, publiée sur Supernova.</p>
              </div>
            </div>

            <h3 className="learnings-title reveal-up">Ce que cette mission m'a <em>appris</em>.</h3>

            <div className="learnings">
              <div className="reveal-up">
                <div className="learning-num">/01</div>
                <h4>Un DS se vend autant qu'il se construit</h4>
                <p>L'adoption passe par la preuve, pas par le mandat. Le meilleur système du monde reste lettre morte si personne n'en veut.</p>
              </div>
              <div className="reveal-up">
                <div className="learning-num">/02</div>
                <h4>Gouvernance avant automatisation</h4>
                <p>Automatiser un système mal structuré, ça accélère le chaos. On stabilise d'abord, on documente, puis on automatise.</p>
              </div>
              <div className="reveal-up">
                <div className="learning-num">/03</div>
                <h4>Un DS Manager est un PM déguisé</h4>
                <p>J'ai passé plus de temps à convaincre, former et négocier qu'à dessiner des composants. C'est normal. C'est le vrai job.</p>
              </div>
            </div>
          </div>
        </section>

        <ContactCaseStudy />

        <Footer />
      </div>
    </div>
  )
}
