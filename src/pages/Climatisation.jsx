import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import VarMap from '../components/VarMap.jsx'
import ZoneBadge from '../components/ZoneBadge.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { company, services } from '../data/site.js'
import { SHOW_GOOGLE_REVIEWS, GOOGLE_REVIEWS, CLIENT_TYPES } from '../data/reviews.js'

/* Sur le modèle de `SHOW_GOOGLE_REVIEWS` : les fichiers logo Daikin,
   Mitsubishi Electric et Midea ne sont pas encore livrés, le bloc marques
   affiche donc trois cadres de repli. À repasser à `true` dès que les trois
   logos sont déposés dans public/img/ et renseignés dans `site.js`. */
const SHOW_CLIM_BRANDS = false

/** Liste à coches, réutilisée dans les deux tons de la page (cf. Piscine.jsx). */
function CheckList({ items, tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon
            name="check"
            className={`mt-1 h-3.5 w-3.5 shrink-0 ${dark ? 'text-azure-400' : 'text-azure-500'}`}
            strokeWidth={3}
          />
          <span className={`text-body-sm ${dark ? 'text-white/80' : 'text-navy-600'}`}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Photo de solution avec repli sur un cadre neutre tant que le fichier réel n'existe pas. */
function SolutionPhoto({ src, alt, label, icon }) {
  const [errored, setErrored] = useState(false)

  /* Repli provisoire, pas définitif comme sur Traitement de l'eau : une
     vraie photo est encore attendue pour cette carte. Icône plutôt que le
     titre en cadre gris, en attendant. */
  if (errored) {
    return (
      <div className="grid h-40 w-full place-items-center rounded-t-xl bg-navy-50 ring-1 ring-navy-100">
        {icon ? (
          <Icon name={icon} className="h-9 w-9 text-azure-500" strokeWidth={1.4} />
        ) : (
          <span className="text-label font-bold uppercase text-navy-400">{label}</span>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-40 w-full rounded-t-xl bg-navy-50 object-cover"
    />
  )
}

export default function Climatisation() {
  const service = services.climatisation
  const p = service.page

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/climatisation"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/climatisation' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/climatisation' },
          ]),
          offerSchema({ name: service.title, path: '/climatisation' }),
        ]}
      />

      <Hero page={p} hero={service.hero} />
      {SHOW_CLIM_BRANDS && (
        <ServiceBrandsRow title="Les marques que nous installons et entretenons" brands={p.brands} />
      )}
      <ReversibleEtEngagements data={p.reversible} />
      <Solutions data={p.solutions} />
      <ArgBand items={p.argBand} />
      <AidesZoneAvis aids={p.aids} zone={p.zone} />
      <CtaBand />
    </>
  )
}

/* ========================================================= HÉROS ======== */
/* Dégradé à 11 arrêts adoucis (même courbe que Plomberie) — coefficient
   propre à cette page, 0,46, fixé lors de la mesure du lot d'images du
   17/08/2026. Le masque applique la courbe complémentaire (1 - opacité)
   directement sur la photo : deux mécanismes indépendants pour le même
   défaut, l'un ne peut pas laisser un bord net si l'autre s'applique. */
const HERO_GRADIENT_STOPS = [
  [0, 1.0], [8, 0.793], [16, 0.612], [24, 0.456], [32, 0.325],
  [40, 0.218], [48, 0.133], [56, 0.071], [64, 0.029], [72, 0.006], [80, 0.0],
]
const HERO_COEFFICIENT = 0.46
const HERO_GRADIENT = `linear-gradient(to right, ${HERO_GRADIENT_STOPS.map(
  ([pos, op]) => `rgb(1 12 30 / ${(op * HERO_COEFFICIENT).toFixed(4)}) ${pos}%`
).join(', ')})`
const HERO_MASK = `linear-gradient(to right, ${HERO_GRADIENT_STOPS.map(
  ([pos, op]) => `rgba(0,0,0,${(1 - op).toFixed(4)}) ${pos}%`
).join(', ')}, black 100%)`

function Hero({ page, hero }) {
  const [ligne1, ligne2, ligne3] = page.h1

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Photo plein cadre, d'un bord à l'autre du héros — pas un panneau
          posé à droite. Le dégradé (couche suivante) et le masque
          (appliqué ici sur la photo elle-même) la font disparaître
          progressivement vers la gauche ; il ne doit exister nulle part de
          bord net entre marine uni et photo. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ WebkitMaskImage: HERO_MASK, maskImage: HERO_MASK }}
      >
        {/* object-[50%_52%] : photo portrait 1200×1600, groupe extérieur situé
            au tiers central de l'image en hauteur (centre vertical mesuré à
            50,6 % de la hauteur). Dans ce panneau, toujours plus large que
            haut (aucune largeur de l'image n'est jamais rognée en cover —
            vérifié à 1024/1440/1920 px), seule la position verticale compte :
            52 % centre la fenêtre visible sur le groupe extérieur à toutes
            les largeurs testées (fenêtre visible la plus étroite, à 1920 px,
            de 28 % à 73 % de la hauteur — contient largement le sujet, situé
            entre 37,5 % et 64 %).
            19/08/2026 : remplacée par une photo paysage (groupe extérieur,
            jardin/piscine) — l'ancienne était en portrait, cadrée pour un
            panneau étroit à droite, pas pour un plein cadre. object-cover
            simple, plus besoin de position verticale sur mesure. */}
        <Photo
          lock={hero.lock}
          alt="Climatisation installée par PCE"
          priority
          rounded=""
          className="h-full w-full"
        />
      </div>
      <ZoneBadge className="pointer-events-none absolute bottom-6 right-6 hidden lg:block" />

      <div
        className="absolute inset-0 -z-0 hidden lg:block"
        style={{ background: HERO_GRADIENT }}
      />
      <div className="absolute inset-0 -z-0 bg-navy-950 lg:hidden" />

      <div className="container-pce relative py-8 lg:py-14">
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/60">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-white/80">Climatisation</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <span aria-hidden="true" className="relative mb-5 grid h-8 w-8 place-items-center sm:h-10 sm:w-10">
            <span className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-sky-300/[.18] to-transparent sm:-inset-[30px]" />
            <Icon
              name="snowflake"
              className="relative h-8 w-8 text-sky-300 drop-shadow-[0_6px_14px_rgba(1,12,30,.45)] sm:h-10 sm:w-10"
              strokeWidth={1.4}
            />
          </span>
          <h1 className="font-display font-black uppercase">
            <span className="block text-hero">{ligne1}</span>
            <span className="block text-title-lg">{ligne2}</span>
            <span className="block text-title-lg text-azure-400">{ligne3}</span>
          </h1>

          <p className="signature mt-4 text-kicker">{company.expertise}</p>

          <p className="mt-5 max-w-xl text-body text-white/75">{page.intro}</p>

          <CheckList items={page.heroChecklist} tone="dark" className="mt-6 max-w-sm" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-azure-500 px-6 py-4 text-label font-bold uppercase text-white transition-colors hover:bg-azure-600"
            >
              Demande de devis gratuit
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-4 text-kicker font-bold text-white transition-colors hover:bg-white hover:text-navy-900"
            >
              <Icon name="phone" className="h-4 w-4 shrink-0" strokeWidth={2} />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== RÉVERSIBLE + ENGAGEMENTS ================ */
function ReversibleEtEngagements({ data }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-w-0 overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 sm:block">
              <Photo
                lock={data.photo.lock}
                alt="Climatisation réversible murale installée dans un séjour — chauffage en hiver, rafraîchissement en été"
                rounded=""
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>

            <div className="relative p-8 sm:max-w-[55%] sm:p-10">
              <h2 className="font-display text-title font-black uppercase leading-snug text-navy-800">
                {data.heading.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </h2>
              {data.paragraphs.map((par) => (
                <p key={par} className="mt-4 text-body-sm leading-[1.7] text-navy-600">
                  {par}
                </p>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-10">
            <h2 className="font-display text-title font-black uppercase text-navy-800">{data.engagements.title}</h2>
            <CheckList items={data.engagements.items} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================================================== NOS SOLUTIONS ===== */
function Solutions({ data }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <h2 className="section-title">{data.title}</h2>

        {/* flex + largeurs calculées : 5 solutions, pas multiple de 2 —
            grid isolait la 5e carte seule sur sa rangée au palier sm. */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {data.items.map((s) => (
            <div key={s.title} className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl bg-navy-50 ring-1 ring-navy-100 sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]">
              <SolutionPhoto src={s.photo} alt={s.title} label={s.title} icon={s.icon} />
              <div className="p-5">
                <h3 className="font-display text-kicker font-bold uppercase leading-tight text-navy-800">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-body-sm leading-[1.55] text-navy-500">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================ BANDEAU 4 ARGUMENTS ======= */
function ArgBand({ items }) {
  return (
    <section className="section border-y border-white/10 bg-navy-900 text-white">
      <div className="container-pce">
        <ul className="grid grid-cols-1 divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {items.map((a) => (
            <li key={a.title} className="flex items-start gap-3 px-0 py-3 lg:px-6 lg:py-1 lg:first:pl-0">
              <Icon name={a.icon} className="h-7 w-7 shrink-0" strokeWidth={1.3} />
              <span className="min-w-0">
                <span className="block text-label font-bold uppercase leading-tight">{a.title}</span>
                <span className="mt-1.5 block text-body-sm leading-snug text-white/55">{a.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ====================================== AIDES / ZONE / AVIS GOOGLE ====== */
function AidesZoneAvis({ aids, zone }) {
  /* Sans le bloc avis, une grille à 3 colonnes laisse la troisième vide :
     on repasse à 2 colonnes, comme le fait déjà ProofRow sur l'accueil. */
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <div className={`grid gap-6 ${SHOW_GOOGLE_REVIEWS ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
          <div className="min-w-0 rounded-xl bg-white p-7 shadow-card ring-1 ring-navy-100">
            <h2 className="font-display text-kicker font-bold uppercase text-navy-800">{aids.heading}</h2>
            <p className="mt-3 text-body-sm leading-[1.65] text-navy-500">{aids.text}</p>
          </div>

          <div className="min-w-0 rounded-xl bg-white p-7 shadow-card ring-1 ring-navy-100">
            <h2 className="font-display text-kicker font-bold uppercase text-navy-800">{zone.heading}</h2>
            <p className="mt-3 text-body-sm leading-[1.6] text-navy-500">{zone.text}</p>
            <CheckList items={CLIENT_TYPES} className="mt-5" />
            <VarMap className="mt-6" />
          </div>

          {SHOW_GOOGLE_REVIEWS && (
            <div className="flex min-w-0 flex-col rounded-xl bg-white p-7 text-center shadow-card ring-1 ring-navy-100">
              <h2 className="font-display text-kicker font-bold uppercase text-navy-800">Ils nous font confiance</h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: GOOGLE_REVIEWS.stars }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5" strokeWidth={1.4} fill="currentColor" />
                  ))}
                </span>
                <span className="text-title font-display font-black text-navy-800">{GOOGLE_REVIEWS.rating}</span>
              </div>
              <p className="mt-2 text-body-sm text-navy-500">sur Google, {GOOGLE_REVIEWS.count}</p>
              <Link to={GOOGLE_REVIEWS.href} className="btn-outline mt-6 w-full text-center">
                Voir les avis
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
