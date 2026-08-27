import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { CtaBand, FadedPhotoSection, SectionTitle } from '../components/Blocks.jsx'
import { ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'droplet', title: 'Installation', label: 'Neuf & rénovation' },
  { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
  { icon: 'layers', title: 'Matériels', label: 'Qualité & durables' },
  { icon: 'handshake', title: 'Accompagnement', label: 'Conseils personnalisés' },
]

/* Cadrage de « Nos solutions » : son tiers gauche était occupé par une baie
   vitrée en contre-jour (luminance mesurée 198, contre 121 à droite).
   Un `object-position` décalé à droite n'y changeait rien : le conteneur
   (ratio 1,48) et la source (1,50) ayant presque le même format,
   `object-cover` ne recadre quasiment pas horizontalement, et le décalage
   n'a aucune prise. La baie a donc été retirée à la source — 18 % du bord
   gauche coupés dans public/img/, ce qui ramène le tiers gauche à 170. Les
   trois photos gardent le centrage par défaut. */

/** Liste à coches, reprise à l'identique sur les fonds clair et marine. */
function CheckList({ items, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5">
          <Icon
            name="check"
            className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-gold-400' : 'text-azure-500'}`}
            strokeWidth={3}
          />
          <span className={`text-balance text-body-sm ${dark ? 'text-white/85' : 'text-navy-700'}`}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Chauffage() {
  const service = services.chauffage
  const { entretien, economies } = service.blocks

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/chauffage"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/chauffage' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/chauffage' },
          ]),
          offerSchema({ name: service.title, path: '/chauffage' }),
        ]}
      />

      {/* Pas de `gradientCoefficient` : le voile de texte partagé porte le
          contraste depuis le 25/08/2026, sur les huit héros métier. Mesuré
          conforme à 0 sur cette page comme sur les autres. */}
      <PageHero
        breadcrumb={service.title}
        icon="flame"
        iconClass="text-gold-500"
        haloClass="from-gold-500/[.18]"
        title="Chauffage"
        subtitle="Confort, performance et économies d'énergie"
        intro="PCE vous accompagne dans tous vos projets de chauffage : installation, rénovation, entretien et dépannage de vos équipements pour un confort optimal en toutes saisons dans tout le Var."
        photo={{ ...service.hero, alt: 'Chaudière murale, ballon et collecteurs installés par PCE en local technique' }}
        highlights={HERO_HIGHLIGHTS}
        fullBleed
      />

      {/* ------------------------------------------- Nos solutions (clair) */}
      <FadedPhotoSection
        photo={{ lock: 415 }}
        alt="Chaudière murale à condensation et ballon d'eau chaude installés par PCE"
      >
        <SectionTitle title="Nos solutions de chauffage" align="left" />
        <p className="mt-3 text-body-sm text-navy-500">
          Des systèmes performants et économiques, dimensionnés pour votre logement.
        </p>
        <CheckList items={service.solutions} />
      </FadedPhotoSection>

      {/* --------------------------------- Pourquoi choisir PCE (navy-900) */}
      <FadedPhotoSection
        photo={{ lock: 416 }}
        alt="Séjour chauffé par une chaudière et un radiateur installés par PCE"
        tone="navy"
      >
        <SectionTitle title="Pourquoi choisir PCE ?" align="left" tone="dark" />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-3.5">
              <Icon name={b.icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" strokeWidth={1.6} />
              <span className="min-w-0">
                <span className="block text-balance text-body-sm font-bold uppercase tracking-[.04em] text-white">
                  {b.title}
                </span>
                <span className="mt-1.5 block text-balance text-caption text-white/70">{b.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </FadedPhotoSection>

      {/* ------------------------------------------------------ Les marques */}
      {/* « installons », jamais « partenaires » : PCE n'a aucun accord de
          distribution avec ces fabricants. La règle vaut sur tout le site. */}
      <ServiceBrandsRow title="Les marques que nous installons" brands={service.brands} />

      {/* ------------------------------------------- Entretien (navy-900) */}
      <FadedPhotoSection
        photo={{ lock: 417 }}
        alt="Technicien PCE intervenant sur une chaudière ouverte"
        tone="navy"
      >
        <SectionTitle title={entretien.title} align="left" tone="dark" />
        <p className="mt-4 max-w-xl text-body text-white/75">{entretien.text}</p>
        <CheckList items={entretien.points} tone="dark" />
      </FadedPhotoSection>

      {/* --------------------------------------- Économies à l'usage */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle title={economies.title} />
            <p className="mt-4 text-body text-navy-500">{economies.text}</p>
            {/* Un seul badge, et il ne dépend pas du RGE : la TVA à 5,5 % sur
                l'entretien est due quelle que soit la certification de
                l'entreprise. MaPrimeRénov' et les CEE ont été retirés le
                27/08/2026 — voir le commentaire dans site.js. */}
            <ul className="mt-9 flex flex-wrap justify-center gap-3">
              {service.aids.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-label font-bold uppercase text-navy-700 shadow-card ring-1 ring-navy-100"
                >
                  <Icon name={a.icon} className="h-3.5 w-3.5 shrink-0 text-azure-500" strokeWidth={2.2} />
                  {a.label}
                  {/* navy-500 et non navy-400 : sur le blanc du badge,
                      navy-400 plafonne à 3,43:1 pour un seuil de 4,5:1.
                      Couleur reprise de l'ancienne version de cette page —
                      le défaut est antérieur à cette refonte. */}
                  {a.detail && (
                    <span className="font-normal normal-case tracking-normal text-navy-500">
                      — {a.detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
