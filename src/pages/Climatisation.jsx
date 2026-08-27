import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import PageHero from '../components/PageHero.jsx'
import VarMap from '../components/VarMap.jsx'
import ZoneBadge from '../components/ZoneBadge.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { photoMetaForPath } from '../data/photos.js'
import { services } from '../data/site.js'
import { SHOW_GOOGLE_REVIEWS, GOOGLE_REVIEWS, CLIENT_TYPES } from '../data/reviews.js'

/* Sur le modèle de `SHOW_GOOGLE_REVIEWS`. Passé à `true` le 27/08/2026 :
   les trois logos (Daikin, Mitsubishi Electric, Midea) sont détourés dans
   public/img/marque-*.png et renseignés dans `site.js`. */
const SHOW_CLIM_BRANDS = true

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
          <span className={`text-balance text-body-sm ${dark ? 'text-white/80' : 'text-navy-600'}`}>{item}</span>
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

  /* Passe par le manifeste plutôt que de servir le JPEG source : ces cartes
     étaient les seules images du site à court-circuiter le pipeline WebP,
     alors que leurs variantes existaient déjà. La page servait 2,6 Mo
     d'images pour 4,2 s de chargement. `sizes` suit la grille : 5 colonnes
     à partir de lg, 2 au palier sm, 1 en dessous. */
  const meta = photoMetaForPath(src)

  return (
    <img
      src={meta?.src || src}
      srcSet={meta?.srcSet || undefined}
      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
      width={meta?.width || undefined}
      height={meta?.height || undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
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
/* Migré sur le composant de héros partagé (PageHero, fullBleed) le
   21/08/2026. `ZoneBadge` passé en `photoBadge` : seul élément qui restait
   spécifique à cette page dans l'ancien héros maison.
   25/08/2026 : nouvelle photo (16:9, groupe extérieur en contexte —
   terrasse, baie vitrée, végétation), sombre côté texte (gauche) et clair
   côté cadre (droite) — l'inverse de l'ancienne. Coefficient recalculé de
   0,46 à 0,15 : à 0 (masque seul, sans dégradé ajouté), le contraste
   minimum mesuré était déjà de 4,61:1 sur les 3 largeurs lg+ (1024/1280/
   1440) — 0,15 donne une marge confortable (min. 5,05:1) sans assombrir le
   sujet au-delà de 4 % (mesuré 60-90% de la largeur, seuil 15%). */
function Hero({ page, hero }) {
  const [ligne1, ligne2, ligne3] = page.h1

  return (
    <PageHero
      breadcrumb="Climatisation"
      icon="snowflake"
      iconClass="text-sky-300"
      haloClass="from-sky-300/[.18]"
      title={
        <>
          <span className="block">{ligne1}</span>
          <span className="block text-title-lg">{ligne2}</span>
          <span className="block text-title-lg text-azure-400">{ligne3}</span>
        </>
      }
      intro={page.intro}
      photo={{ ...hero, alt: 'Groupe extérieur de climatisation installé par PCE, terrasse et baie vitrée' }}
      photoBadge={<ZoneBadge />}
      fullBleed
    >
      <CheckList items={page.heroChecklist} tone="dark" className="mt-6 max-w-sm" />
    </PageHero>
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
                <p className="mt-2.5 text-balance text-body-sm leading-[1.55] text-navy-500">{s.text}</p>
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
                <span className="block text-balance text-label font-bold uppercase leading-tight">{a.title}</span>
                <span className="mt-1.5 block text-balance text-body-sm leading-snug text-white/55">{a.label}</span>
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
