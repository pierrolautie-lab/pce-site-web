import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { SectionTitle } from '../components/Blocks.jsx'
import { serviceList } from '../data/site.js'
import { localTrades, localCities, localPages, localPath } from '../data/local.js'
import { expertisePages, expertiseSlugs } from '../data/expertise.js'
import { articles, articleSlugs } from '../data/articles.js'

const pagesPrincipales = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Dépannage / Urgence', to: '/depannage' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Conseils', to: '/conseils' },
  { label: 'Contact', to: '/contact' },
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
  { label: 'Conditions générales', to: '/conditions-generales' },
  { label: 'Plan du site', to: '/plan-du-site' },
]

const pagesMetiers = [
  ...serviceList.map((s) => ({ label: s.title, to: `/${s.slug}` })),
  { label: 'Chaudière à condensation', to: '/chauffage/chaudiere-condensation' },
  { label: "L'adoucisseur d'eau", to: '/traitement-de-l-eau/adoucisseur' },
]

/** Groupe des 65 pages locales par métier plutôt qu'en une seule liste de 65 liens. */
const pagesLocalesParMetier = Object.keys(localTrades).map((tradeKey) => ({
  trade: localTrades[tradeKey],
  links: localPages
    .filter((p) => p.tradeKey === tradeKey)
    .map(({ cityKey }) => ({
      label: `${localTrades[tradeKey].label} à ${localCities[cityKey].name}`,
      to: localPath(tradeKey, cityKey),
    })),
}))

const guidesPratiques = expertiseSlugs.map((slug) => ({
  label: expertisePages[slug].h1,
  to: `/${slug}`,
}))

const articlesConseils = articleSlugs.map((slug) => ({
  label: articles[slug].title,
  to: `/conseils/${slug}`,
}))

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[13px] font-bold uppercase tracking-[.08em] text-navy-800">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-[13.5px] leading-[1.7] text-navy-500 transition-colors hover:text-azure-500 hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PlanDuSite() {
  return (
    <>
      <Seo
        title="Plan du site"
        description="Plan du site pcevar.fr : toutes les pages de PCE, artisan à Lorgues (83) — pages principales, métiers, villes desservies et articles de conseils."
        path="/plan-du-site"
      />

      <PageHero
        breadcrumb="Plan du site"
        title="Plan du site"
        subtitle="Toutes les pages de pcevar.fr"
        actions={false}
        showReassurance={false}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle align="left" title="Pages principales" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <LinkColumn title="Le site" links={pagesPrincipales} />
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle align="left" title="Pages métiers" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <LinkColumn title="Nos savoir-faire" links={pagesMetiers} />
            <LinkColumn title="Guides pratiques" links={guidesPratiques} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            align="left"
            title="Pages locales"
            lead="Nos interventions, ville par ville, pour chacun de nos métiers, dans la Dracénie comme sur le Golfe de Saint-Tropez."
          />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pagesLocalesParMetier.map(({ trade, links }) => (
              <LinkColumn key={trade.urlSlug} title={trade.label} links={links} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle align="left" title="Articles de conseils" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <LinkColumn title="Sur le blog" links={articlesConseils} />
          </div>
        </div>
      </section>
    </>
  )
}
