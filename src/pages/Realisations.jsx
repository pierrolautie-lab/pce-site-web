import { useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { CtaSection, GuaranteeBar, SectionTitle } from '../components/Blocks.jsx'
import { projects, stats } from '../data/site.js'

/* Les filtres sont déduits des chantiers réellement publiés : inutile de
   proposer une catégorie vide au visiteur. */
const FILTERS = ['Tous', ...Array.from(new Set(projects.map((p) => p.trade)))]

export default function Realisations() {
  const [filter, setFilter] = useState('Tous')
  const [lightbox, setLightbox] = useState(null)

  const visible = useMemo(
    () => (filter === 'Tous' ? projects : projects.filter((p) => p.trade === filter)),
    [filter]
  )

  return (
    <>
      <Seo
        title="Réalisations"
        description="Chantiers réalisés par PCE à Lorgues, dans la Dracénie et sur le Golfe de Saint-Tropez : plomberie, chauffage, climatisation, électricité et piscine."
        path="/realisations"
      />
      <PageHero
        breadcrumb="Réalisations"
        title="Réalisations"
        subtitle="Vingt ans de chantiers entre Lorgues, la Dracénie et le Golfe"
        intro="Rénovations complètes, remplacements d'équipements, mises aux normes et locaux techniques : voici un aperçu de ce que nous livrons au quotidien. Chaque chantier est réalisé par notre équipe, sans sous-traitance."
        photo={{ tags: 'construction', lock: 960, alt: 'Chantier PCE dans le Var' }}
        primaryLabel="Parler de votre projet"
      />

      {/* ------------------------------------------------- Chiffres clés */}
      <section className="border-b border-navy-100 bg-white py-10">
        <div className="container-pce">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[30px] font-black leading-none tracking-tight text-navy-800">
                  {s.value}
                </p>
                <p className="mt-2 text-[11.5px] leading-snug text-navy-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Galerie */}
      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            title="Nos chantiers, métier par métier"
            lead="Filtrez par spécialité pour retrouver les interventions qui ressemblent le plus à votre projet."
          />

          {/* Filtres */}
          <div className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] transition-all duration-200 ${
                    active
                      ? 'bg-navy-800 text-white'
                      : 'bg-navy-50 text-navy-600 ring-1 ring-navy-100 hover:bg-navy-100'
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>

          {/* Cartes */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.title}
                onClick={() => setLightbox(p)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <Photo
                    tags={p.tags}
                    lock={p.lock}
                    alt={p.title}
                    rounded=""
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-navy-800 backdrop-blur">
                    {p.trade}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.13em] text-navy-400">
                    <Icon name="mapPin" className="h-3.5 w-3.5" strokeWidth={2} />
                    {p.city}
                    <span className="h-1 w-1 rounded-full bg-navy-200" />
                    {p.year}
                  </div>
                  <h3 className="mt-3 text-[15.5px] font-bold leading-snug text-navy-800">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-navy-500">{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-center text-[14px] text-navy-400">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      <CtaSection
        title="Votre chantier sera le prochain"
        text="Décrivez-nous votre projet, même sommairement. Nous nous déplaçons pour un relevé sur site et nous établissons un devis détaillé, gratuit et sans engagement."
      />
      <GuaranteeBar />

      {/* ------------------------------------------------------- Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <Icon name="close" className="h-5 w-5" strokeWidth={2} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
          >
            <Photo
              tags={lightbox.tags}
              lock={lightbox.lock}
              alt={lightbox.title}
              rounded=""
              className="max-h-[70vh] w-full"
              imgClassName="object-contain"
              priority
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.13em] text-navy-400">
                <Icon name="mapPin" className="h-3.5 w-3.5" strokeWidth={2} />
                {lightbox.city}
                <span className="h-1 w-1 rounded-full bg-navy-200" />
                {lightbox.year}
              </div>
              <h3 className="mt-3 text-[17px] font-bold leading-snug text-navy-800">
                {lightbox.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.7] text-navy-500">{lightbox.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
