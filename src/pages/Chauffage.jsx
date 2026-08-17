import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Icon from '../components/Icon.jsx'
import { CtaBand } from '../components/Blocks.jsx'
import { ServiceBrandsRow } from '../components/ServiceBlocks.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { company, services } from '../data/site.js'

const HERO_HIGHLIGHTS = [
  { icon: 'droplet', title: 'Installation', label: 'Neuf & rénovation' },
  { icon: 'wrench', title: 'Dépannage', label: 'Intervention rapide' },
  { icon: 'layers', title: 'Matériels', label: 'Qualité & durables' },
  { icon: 'handshake', title: 'Accompagnement', label: 'Conseils personnalisés' },
]

/** Checklist « Nos solutions » + photo à droite, encart navy « Pourquoi choisir PCE » à droite. */
function SolutionsWhyUs({ service }) {
  return (
    /* Pas de padding-bottom : ce bloc est immédiatement suivi de
       ServiceBrandsRow, qui partage le même bg-navy-50 et fournit déjà son
       propre padding-top — un py- ici doublait l'espace vide entre les deux
       (aucune limite de couleur pour signaler la transition). */
    <section className="bg-navy-50 pt-14 sm:pt-16 lg:pt-20">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100">
            <div className="grid gap-0 sm:grid-cols-2">
              <Photo
                lock={service.expertise.photo.lock}
                alt="Chaudière et ballon thermodynamique installés par PCE"
                className="h-56 w-full sm:h-full"
                rounded=""
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="p-7 sm:p-8">
                <h2 className="text-kicker font-bold uppercase tracking-[.05em] text-azure-500">
                  Nos solutions de chauffage
                </h2>
                <p className="mt-2 text-body-sm text-navy-500">Des systèmes performants et économiques</p>
                <ul className="mt-6 space-y-3.5">
                  {service.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" strokeWidth={3} />
                      <span className="text-body-sm text-navy-700">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-xl bg-navy-800 p-8 text-white sm:p-10">
            {/* Filigrane décoratif (aria-hidden), hors échelle typographique
                — voir la même exception dans Blocks.jsx. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-6 select-none text-[110px] font-black uppercase leading-none tracking-tighter text-white/[.05]"
            >
              {company.name}
            </span>
            <div className="relative">
              <h2 className="text-kicker font-bold uppercase tracking-[.05em] text-white">
                Pourquoi choisir PCE ?
              </h2>
              <ul className="mt-7 grid gap-6 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-3.5">
                    <Icon name={b.icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" strokeWidth={1.6} />
                    <span className="min-w-0">
                      <span className="block text-body-sm font-bold uppercase tracking-[.04em] text-white">
                        {b.title}
                      </span>
                      <span className="mt-1.5 block text-caption text-white/70">{b.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Rangée de 3 blocs : entretien, aides financières, appel à l'action. */
function EntretienAidesConseil({ service }) {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Pas de photo technicien : aucune n'est disponible dans les
              médias du site — un fond navy avec icône remplace la photo
              de la maquette plutôt que de réutiliser une image sans rapport. */}
          <div className="rounded-xl bg-navy-800 p-7 text-white sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-gold-400">
              <Icon name="settings" className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-body-sm font-bold uppercase tracking-[.05em]">
              Entretien : une obligation, une sérénité
            </h3>
            <p className="mt-3 text-body-sm text-white/70">
              L'entretien annuel de votre chaudière est obligatoire et essentiel pour garantir sécurité,
              performance et longévité de votre installation.
            </p>
            <ul className="mt-5 space-y-2.5">
              {['Meilleur rendement', 'Moins de pannes', 'Économies d’énergie', 'Respect des normes'].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" strokeWidth={3.2} />
                  <span className="text-body-sm text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-navy-50 p-7 ring-1 ring-navy-100 sm:p-8">
            <h3 className="text-body-sm font-bold uppercase tracking-[.05em] text-navy-800">
              Aides financières disponibles
            </h3>
            <p className="mt-3 text-body-sm text-navy-500">
              Ces aides ciblent les équipements décarbonés : la pompe à chaleur en bénéficie pleinement, la
              chaudière à gaz n'y est plus éligible depuis 2023-2024, hors TVA à 5,5 %.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {service.aids.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-label font-bold uppercase text-navy-700 ring-1 ring-navy-100"
                >
                  <Icon name={a.icon} className="h-3.5 w-3.5 text-azure-500" strokeWidth={2.2} />
                  {a.label}
                  {a.detail && (
                    <span className="normal-case tracking-normal font-normal text-navy-400">
                      {' '}
                      — {a.detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-xl bg-navy-50 p-7 ring-1 ring-navy-100 sm:p-8">
            <h3 className="text-body-sm font-bold uppercase tracking-[.05em] text-navy-800">
              Besoin d'un conseil ou d'un devis ?
            </h3>
            <p className="mt-3 text-body-sm text-navy-500">
              Nos experts sont à votre écoute pour étudier votre projet et vous proposer la solution de chauffage
              la plus adaptée.
            </p>
            <a href={company.phoneHref} className="btn-azure mt-6 w-full justify-center sm:w-auto sm:self-start">
              Appelez-nous maintenant
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>
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
        icon="flame"
        iconClass="text-gold-500"
        title="Chauffage"
        subtitle="Confort, performance et économies d'énergie"
        intro="PCE vous accompagne dans tous vos projets de chauffage : installation, rénovation, entretien et dépannage de vos équipements pour un confort optimal en toutes saisons dans tout le Var."
        photo={{ ...service.hero, alt: 'Chaufferie installée par PCE' }}
        highlights={HERO_HIGHLIGHTS}
      />

      <SolutionsWhyUs service={service} />

      <ServiceBrandsRow title="Des marques de confiance pour votre chauffage" brands={service.brands} />

      <EntretienAidesConseil service={service} />

      <CtaBand />
    </>
  )
}
