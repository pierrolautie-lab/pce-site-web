import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceTwoColumn, ServiceFeatureCards } from '../components/ServiceBlocks.jsx'
import Icon from '../components/Icon.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'leaf', title: 'Pompe à chaleur', label: 'Air/eau & air/air' },
  { icon: 'flame', title: 'Chaudière gaz', label: 'Condensation' },
  { icon: 'settings', title: 'Entretien', label: 'Contrat annuel' },
  { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
]

const SERVICES_CHECKLIST = [
  'Installation de pompe à chaleur air/eau ou air/air',
  'Chaudière à gaz à condensation',
  'Installation et mise en conformité de gaz',
  'Chauffe-eau thermodynamiques et ballons',
  'Radiateurs et plancher chauffant',
  'Entretien annuel et contrat de maintenance',
  'Dépannage toutes marques',
  'Étude thermique et dimensionnement',
]

const PAC_CARD = {
  title: 'Installation de pompe à chaleur',
  kicker: 'Jusqu’à 3 à 4 fois moins de consommation',
  text: "La pompe à chaleur reste la solution la plus performante pour remplacer une chaudière fioul ou gaz vieillissante. PCE étudie le dimensionnement adapté à votre logement avant tout devis.",
  checklist: [
    'Étude thermique et dimensionnement sur mesure',
    'Pompes à chaleur air/eau et air/air',
    "Éligible à MaPrimeRénov' et aux CEE",
    'Entretien annuel inclus dans nos contrats',
  ],
  ctaLabel: 'En savoir plus sur la pompe à chaleur',
  ctaTo: '/installation-pompe-a-chaleur-var',
}

const FEATURE_CARDS = [
  {
    icon: 'leaf',
    title: 'Pompe à chaleur',
    text: "Air/eau ou air/air, réversible, pour chauffer et rafraîchir toute l'année.",
    bullets: ['Étude de dimensionnement', 'Installation et mise en service', 'Aides MaPrimeRénov’ et CEE'],
  },
  {
    icon: 'flame',
    title: 'Chaudière & installation gaz',
    text: 'Chaudières à gaz à condensation et mise en conformité de vos installations gaz.',
    bullets: ['Chaudière à condensation', 'Création et mise aux normes gaz', "Contrôle d'étanchéité"],
  },
  {
    icon: 'radiator',
    title: 'Émetteurs de chaleur',
    text: 'Radiateurs et plancher chauffant, dimensionnés pour un confort homogène.',
    bullets: ['Radiateurs basse température', 'Plancher chauffant', 'Régulation par pièce'],
  },
  {
    icon: 'settings',
    title: 'Entretien & dépannage',
    text: 'Contrat d’entretien annuel et dépannage toutes marques, avec attestation.',
    bullets: ['Contrôle des pressions', "Attestation d'entretien", 'Intervention rapide'],
  },
]

/** Bandeau reliant vers la sous-page dédiée à la chaudière à condensation. */
function CondensationBanner() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <div className="container-pce">
        <div className="flex flex-col items-start gap-6 rounded-xl bg-navy-50 p-7 ring-1 ring-navy-100 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-azure-500 ring-1 ring-navy-100">
              <Icon name="flame" className="h-5.5 w-5.5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-[14.5px] font-bold uppercase tracking-[.05em] text-navy-800">
                Chaudière à condensation
              </h3>
              <p className="mt-2 max-w-xl text-[13.5px] leading-[1.7] text-navy-500">
                Gaz, fioul ou bois/granulés : comment cette technologie récupère la chaleur des
                fumées pour réduire votre consommation de combustible.
              </p>
            </div>
          </div>

          <Link
            to="/chauffage/chaudiere-condensation"
            className="btn-azure w-full whitespace-normal text-center sm:w-auto sm:shrink-0 sm:whitespace-nowrap"
          >
            En savoir plus sur la chaudière à condensation
            <Icon name="arrowRight" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Chauffage() {
  const service = services.chauffage

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

      <PageHero
        breadcrumb={service.title}
        title="Chauffage"
        subtitle="Pompes à chaleur, chaudières et entretien"
        intro="Installation de pompes à chaleur, chaudières à gaz à condensation et entretien de vos équipements de chauffage dans tout le Var. Des solutions dimensionnées à votre logement, pour un confort durable et une facture maîtrisée."
        photo={{ ...service.hero, alt: 'Chaufferie installée par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <ServiceTwoColumn checklistTitle="Nos services chauffage" checklist={SERVICES_CHECKLIST} card={PAC_CARD} />

      <CondensationBanner />

      <ServiceFeatureCards items={FEATURE_CARDS} />

      <CtaBand />
    </>
  )
}
