import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo, { serviceSchema, breadcrumbSchema } from '../components/Seo.jsx'
import { Prestations, GuaranteeBar, CtaSection, SectionTitle, LinkGrid } from '../components/Blocks.jsx'
import Icon from '../components/Icon.jsx'
import { services, whyChooseUs } from '../data/site.js'
import { localTrades, localCities, localCopy, localPath } from '../data/local.js'
import { expertisePages } from '../data/expertise.js'

/**
 * Gabarit des pages locales SEO (un métier × une ville). Reprend les
 * prestations du métier correspondant depuis site.js — une seule source de
 * vérité pour leur contenu — et n'introduit du texte propre que pour le
 * titre, l'intro et la méta-description, afin d'éviter le duplicate content
 * d'une ville à l'autre.
 */
export default function LocalPage({ tradeKey, cityKey }) {
  const trade = localTrades[tradeKey]
  const city = localCities[cityKey]
  const service = services[trade.serviceKey]
  const { intro, metaDescription } = localCopy(tradeKey, cityKey)
  const title = `${trade.label} à ${city.name}`
  const path = localPath(tradeKey, cityKey)
  const expertise = expertisePages[trade.relatedExpertise]
  const neighborLinks = city.neighbors.map((neighborKey) => ({
    to: localPath(tradeKey, neighborKey),
    label: `${trade.label} à ${localCities[neighborKey].name}`,
  }))

  return (
    <>
      <Seo
        title={title}
        description={metaDescription}
        path={path}
        jsonLd={[
          serviceSchema({ name: `${trade.label} à ${city.name}`, description: metaDescription, path }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: trade.label, path: `/${trade.serviceKey}` },
            { name: title, path },
          ]),
        ]}
      />

      <PageHero
        breadcrumb={[{ label: trade.label, to: `/${trade.serviceKey}` }, { label: city.name }]}
        title={title}
        subtitle={`${trade.label} à ${city.name} (83) — devis gratuit`}
        intro={intro}
        photo={{ ...service.hero, alt: `${trade.label} à ${city.name} — PCE` }}
      />

      <Prestations
        items={service.prestations}
        title={`Nos prestations de ${trade.label.toLowerCase()} à ${city.name}`}
        lead={`Ce que PCE prend en charge le plus souvent pour ce métier, à ${city.name} comme dans le reste de notre zone d'intervention.`}
      />

      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle
            title={`Pourquoi choisir PCE à ${city.name} ?`}
            lead="Les mêmes garanties sur chaque chantier, où que vous soyez dans notre zone d'intervention."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-navy-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-50 text-azure-500 ring-1 ring-navy-100">
                  <Icon name={w.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[.06em] text-navy-800">
                  {w.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-navy-500">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LinkGrid
        title="Pour aller plus loin"
        lead={`Notre page ${trade.label.toLowerCase()} complète, un dossier technique et les villes voisines desservies par PCE.`}
        links={[
          { to: `/${trade.serviceKey}`, label: `Page ${trade.label.toLowerCase()}` },
          ...(expertise ? [{ to: `/${trade.relatedExpertise}`, label: expertise.h1 }] : []),
          ...neighborLinks,
        ]}
      />

      <GuaranteeBar />

      <CtaSection
        title={`Un projet de ${trade.label.toLowerCase()} à ${city.name} ?`}
        text={`Décrivez-nous votre besoin : nous nous déplaçons à ${city.name} pour un relevé sur site et nous établissons un devis détaillé, gratuit et sans engagement.`}
      />
    </>
  )
}
