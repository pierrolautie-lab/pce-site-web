import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { CtaSection, GuaranteeBar } from '../components/Blocks.jsx'
import { articles, articleSlugs } from '../data/articles.js'
import { CATEGORIES, categoryFor } from '../data/categories.js'

/* Icône propre à chaque article, pour casser la répétition visuelle au
   sein d'une même catégorie (sinon toutes les cartes « Piscine » par
   exemple afficheraient la même icône). Repli sur l'icône de catégorie
   si un slug n'est pas listé ici (nouveaux articles). */
const ARTICLE_ICONS = {
  'comment-choisir-pompe-a-chaleur': 'leaf',
  'entretien-climatisation-quand-et-pourquoi': 'settings',
  'quand-refaire-tableau-electrique': 'panel',
  'preparer-piscine-pour-ete': 'sun',
  'comment-fonctionne-pompe-a-chaleur': 'gauge',
  'combien-consomme-pompe-a-chaleur': 'euro',
  'pompe-a-chaleur-ou-chaudiere-gaz': 'flame',
  'quelle-climatisation-choisir-maison-var': 'snowflake',
  'climatisation-gainable-ou-split': 'layers',
  'comment-filtrer-eau-forage': 'filter',
  'a-quoi-sert-traitement-uv': 'sparkles',
  'charbon-actif-que-filtre-t-il': 'testTube',
  'pourquoi-piscine-au-sel': 'salt',
  'pompe-piscine-vitesse-variable-avantages': 'gauge',
  'pourquoi-ph-piscine-varie': 'testTube',
  'a-quoi-sert-le-redox': 'testTube',
}

/* Alterne 3 styles de carte (blanc / gris clair / navy) pour casser la
   monotonie visuelle d'une grille par ailleurs homogène. */
const CARD_STYLES = [
  { bg: 'bg-white ring-1 ring-navy-100', title: 'text-navy-800', text: 'text-navy-500', link: 'text-azure-500' },
  { bg: 'bg-navy-50 ring-1 ring-navy-100', title: 'text-navy-800', text: 'text-navy-500', link: 'text-azure-500' },
  { bg: 'bg-navy-800', title: 'text-white', text: 'text-white/65', link: 'text-gold-400' },
]

export default function Conseils() {
  const [active, setActive] = useState('tous')

  const items = articleSlugs.map((slug) => ({ slug, ...articles[slug], category: categoryFor(articles[slug].relatedService) }))
  const visible = active === 'tous' ? items : items.filter((a) => a.category.key === active)

  return (
    <>
      <Seo
        title="Conseils"
        description="Conseils de PCE sur la plomberie, le chauffage, la climatisation, l'électricité, la piscine et le traitement de l'eau, tirés de nos chantiers dans le Var."
        path="/conseils"
      />
      <PageHero
        breadcrumb="Conseils"
        title="Nos conseils d'expert"
        subtitle="Le savoir-faire PCE, expliqué simplement"
        subtitleClassName="text-gold-400"
        intro="Des repères concrets tirés de vingt ans de chantiers à Lorgues et dans la Dracénie, pour chacun de nos métiers. Filtrez par sujet ou parcourez tout, un article se lit en quelques minutes."
        photo={{ tags: 'tools', lock: 970, alt: 'Outillage PCE' }}
      />

      {/* ============================================= FILTRES PAR CATÉGORIE */}
      <section className="border-b border-navy-100 bg-white py-6">
        <div className="container-pce">
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActive('tous')}
              className={`rounded-full px-4 py-2 text-label font-bold uppercase ring-1 transition-colors ${
                active === 'tous'
                  ? 'bg-navy-800 text-white ring-navy-800'
                  : 'bg-white text-navy-600 ring-navy-200 hover:ring-navy-400'
              }`}
            >
              Tous
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-label font-bold uppercase ring-1 transition-colors ${
                  active === c.key ? `${c.solid} text-white ring-transparent` : `${c.bg} ${c.text} ${c.ring} hover:brightness-95`
                }`}
              >
                <Icon name={c.icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== GRILLE D'ARTICLES */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          {/* h2 pour lecteurs d'écran : les cartes d'article portent des h3
              et la grille n'a pas de titre visible — sans lui, la page
              saute de h1 à h3. */}
          <h2 className="sr-only">Tous nos articles</h2>
          {visible.length === 0 ? (
            <p className="text-center text-body-sm text-navy-500">Aucun article dans cette catégorie pour le moment.</p>
          ) : (
            /* flex + largeurs calculées plutôt que grid : quand le nombre
               d'articles visibles n'est pas un multiple du nombre de
               colonnes (fréquent, le filtre par catégorie change ce
               compte), grid laisse la dernière rangée incomplète collée à
               gauche — flex-wrap + justify-center centre la rangée
               orpheline au lieu de la laisser isolée. */
            <div className="flex flex-wrap justify-center gap-5">
              {visible.map((a, i) => {
                const style = CARD_STYLES[i % 3]
                const icon = ARTICLE_ICONS[a.slug] || a.category.icon
                return (
                  <Link
                    key={a.slug}
                    to={`/conseils/${a.slug}`}
                    className={`group flex w-full flex-col rounded-2xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.334px)] ${style.bg}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-full ${
                          style.title === 'text-white' ? 'bg-white/10 text-white' : `${a.category.bg} ${a.category.text}`
                        }`}
                      >
                        <Icon name={icon} className="h-5.5 w-5.5" strokeWidth={1.5} />
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-label font-bold uppercase ${
                          style.title === 'text-white' ? 'bg-white/10 text-white/80' : `${a.category.bg} ${a.category.text}`
                        }`}
                      >
                        {a.category.label}
                      </span>
                    </div>

                    <h3 className={`mt-5 text-body-sm font-bold uppercase tracking-[.03em] ${style.title}`}>
                      {a.title}
                    </h3>
                    <p className={`mt-3 flex-1 text-body-sm ${style.text}`} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {a.intro[0]}
                    </p>
                    <span className={`mt-5 inline-flex items-center gap-2 text-label font-bold uppercase ${style.link}`}>
                      Lire l'article
                      <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
                    </span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------- Deux dossiers complets */}
      <section className="section bg-white">
        <div className="container-pce">
          <h2 className="section-title">Deux sujets approfondis</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-body-sm text-navy-500">
            Pour aller plus loin sur deux équipements que nous posons très régulièrement.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link
              to="/renovation-salle-de-bain-var"
              className="group flex flex-col rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy-800 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                <Icon name="shower" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-body-sm font-bold uppercase tracking-[.06em] text-navy-800 transition-colors group-hover:text-white">
                La rénovation de salle de bain
              </h3>
              <p className="mt-3 text-body-sm text-navy-500 transition-colors group-hover:text-white/70">
                Étapes du projet, délais et ce que PCE prend en charge pour une salle de bain clé en main.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-label font-bold uppercase text-azure-500 transition-colors group-hover:text-white">
                Lire le dossier
                <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </Link>

            <Link
              to="/chauffage/chaudiere-condensation"
              className="group flex flex-col rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy-800 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                <Icon name="flame" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-body-sm font-bold uppercase tracking-[.06em] text-navy-800 transition-colors group-hover:text-white">
                La chaudière à condensation
              </h3>
              <p className="mt-3 text-body-sm text-navy-500 transition-colors group-hover:text-white/70">
                Fonctionnement, économies réalisées et impact écologique de cette technologie.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-label font-bold uppercase text-azure-500 transition-colors group-hover:text-white">
                Lire le dossier
                <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GuaranteeBar />

      <CtaSection
        title="Une question plus précise ?"
        text="Décrivez-nous votre situation : nous vous répondons directement, sans intermédiaire, et nous nous déplaçons si besoin pour un diagnostic gratuit."
      />
    </>
  )
}
