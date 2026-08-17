import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { CtaSection, GuaranteeBar, SectionTitle } from '../components/Blocks.jsx'
import { Wordmark } from '../components/Brand.jsx'
import { areasDetail, company, milestones, serviceList, stats, values } from '../data/site.js'

export default function APropos() {
  return (
    <>
      <Seo
        title="À propos"
        description="PCE, artisan à Lorgues (83) depuis 2005 : vingt ans de chantiers, cinq métiers réunis sous le même toit et plus de 1 800 interventions dans le Var."
        path="/a-propos"
      />
      <PageHero
        breadcrumb="À propos"
        title="À propos"
        subtitle="Vingt ans au service du confort des maisons varoises"
        intro="PCE est une entreprise artisanale installée à Lorgues. Nous avons construit, métier après métier, une équipe capable de prendre en charge l'intégralité des équipements techniques d'un logement — sans sous-traitance, sans dilution des responsabilités."
        photo={{ tags: 'tools', lock: 970, alt: "L'équipe PCE à Lorgues" }}
        primaryLabel="Travailler avec nous"
      />

      {/* ------------------------------------------------------ Nos origines */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <div className="max-w-3xl">
            <p className="text-label font-bold uppercase text-azure-500">
              Nos origines
            </p>
            <SectionTitle align="left" title="Le métier appris à Paris" className="mt-3" />

            <div className="mt-7 space-y-5">
              <p className="text-[15px] leading-[1.85] text-navy-600">
                PCE n'est pas née dans le Var. Avant Lorgues, il y a eu la région parisienne, et
                une spécialité : le chauffage. C'est cette expérience-là qui a fondé l'entreprise,
                et c'est elle qui explique pourquoi nous avons toujours refusé de nous cantonner à
                un seul corps d'état.
              </p>
              <p className="text-[15px] leading-[1.85] text-navy-600">
                Paris reste l'école la plus exigeante du bâtiment. On y apprend le métier dans sa
                forme la plus ancienne, celle qui se travaille à la main : le cuivre que l'on
                cintre et que l'on brase, le zinc des couvertures, le plomb dont la plomberie tire
                son nom et que les anciens façonnaient au chalumeau. Ces gestes ne s'apprennent pas
                dans un catalogue. Ils s'acquièrent sur des chantiers où l'erreur se voit.
              </p>
              <p className="text-[15px] leading-[1.85] text-navy-600">
                Nous avons contribué à la rénovation d'immeubles haussmanniens et de bâti ancien,
                aux côtés d'architectes exigeants, sur des ouvrages où l'on ne casse pas une
                moulure pour faire passer un tuyau. Ce sont ces contraintes-là qui forment un
                artisan. Vingt ans plus tard, dans une bastide varoise aux murs de soixante
                centimètres, c'est exactement le même raisonnement que nous appliquons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Notre histoire */}
      <section className="section bg-white">
        <div className="container-pce">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <SectionTitle align="left" title="Une entreprise née d'un constat de terrain" />

              <div className="mt-7 space-y-5">
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  En 2005, PCE s'installe à Lorgues avec une activité de plomberie
                  traditionnelle : sanitaire, réseaux, chauffe-eau. Très vite, un constat s'impose
                  sur les chantiers. Sur presque chaque intervention un peu ambitieuse, il faut
                  faire venir un chauffagiste, puis un électricien — et c'est là que les délais
                  s'allongent, que les rendez-vous se manquent et que personne ne veut endosser la
                  malfaçon apparue à l'interface entre deux lots.
                </p>
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  Plutôt que de subir cette organisation, nous avons décidé de l'absorber. Le
                  chauffage, nous l'avions déjà : c'est avec lui que l'entreprise s'est construite.
                  Mais le Var a fait apparaître un besoin que la région parisienne ne connaissait
                  pas — rafraîchir. En 2011, l'obtention de l'attestation de capacité à la
                  manipulation des fluides frigorigènes ouvre la porte de la climatisation et des
                  pompes à chaleur. En 2016,
                  l'électricité rejoint le périmètre et l'équipe se structure. En 2020, la demande
                  massive de nos clients du Golfe nous conduit à créer un pôle piscine, dédié au
                  traitement de l'eau, à la filtration et à l'automatisation.
                </p>
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  Aujourd'hui, PCE réunit cinq métiers sous le même toit et a réalisé plus de
                  1 800 interventions dans le Var. Notre taille reste volontairement humaine : nous
                  préférons refuser un chantier que de le sous-traiter à un intervenant dont nous ne
                  maîtriserions pas le travail. C'est ce qui nous permet de tenir nos délais et de
                  répondre encore au téléphone dix ans après une installation.
                </p>
              </div>

              <p className="signature mt-9 text-body">{company.tagline}</p>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <Photo
                tags="village"
                lock={971}
                alt="Lorgues, dans le Var"
                className="aspect-[4/5] w-full shadow-photo"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="mt-5 grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="rounded-2xl bg-navy-50 p-5 ring-1 ring-navy-100">
                    <p className="text-[26px] font-black leading-none tracking-tight text-navy-800">
                      {s.value}
                    </p>
                    <p className="mt-2 text-[11.5px] leading-snug text-navy-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Repères */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle
            title="Vingt ans, cinq métiers"
            lead="La construction progressive d'une entreprise généraliste du confort, métier après métier."
          />

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((m) => (
              <li key={m.year} className="relative rounded-2xl bg-white p-6 ring-1 ring-navy-100">
                <span className="text-[24px] font-black leading-none tracking-tight text-navy-800">
                  {m.year}
                </span>
                <span className="mt-4 block h-px w-10 bg-navy-200" />
                <h3 className="mt-4 text-[13px] font-bold uppercase leading-snug tracking-[.06em] text-navy-800">
                  {m.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-navy-500">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------- Nos engagements */}
      <section className="relative overflow-hidden bg-navy-800 py-16 text-white sm:py-20 lg:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[240px] font-black uppercase leading-none tracking-[-.05em] text-white/[.04]"
        >
          {company.name}
        </span>

        <div className="container-pce relative">
          <div className="max-w-2xl">
            <Wordmark size="sm" />
            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.04] tracking-[-.02em] sm:text-[2.6rem]">
              Nos engagements
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white/65">
              Quatre principes que nous appliquons sur chaque chantier, du remplacement d'un
              mitigeur à la rénovation complète d'une villa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/12 bg-white/[.04] p-6 transition-colors hover:border-white/25"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white">
                  <Icon name={v.icon} className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-[13px] font-bold uppercase tracking-[.08em] text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Zone couverte */}
      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            title="Un ancrage résolument local"
            lead="Nous ne travaillons que sur un rayon que nous pouvons desservir sérieusement. C'est la condition pour tenir nos délais et rester disponibles après les travaux."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {areasDetail.map((a) => (
              <div key={a.name} className="rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy-800 ring-1 ring-navy-100">
                    <Icon name="mapPin" className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-label font-bold uppercase text-navy-500">
                      {a.lead}
                    </p>
                    <h3 className="text-[17px] font-black uppercase tracking-tight text-navy-800">
                      {a.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-[13.5px] leading-[1.75] text-navy-500">{a.text}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {a.towns.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-white px-3 py-1.5 text-label font-semibold uppercase text-navy-600 ring-1 ring-navy-100"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Rappel métiers */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle title="Sept savoir-faire, une seule équipe" />
          {/* 7 métiers, pas multiple de 2 ni de 3 : flex + largeurs calculées
              plutôt que grid, pour que la dernière rangée incomplète se
              centre au lieu de laisser un orphelin collé à gauche. */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {serviceList.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group flex h-full w-full flex-col rounded-2xl bg-white p-6 ring-1 ring-navy-100 transition-all duration-300 hover:bg-navy-800 hover:ring-navy-800 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.667px)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-50 text-navy-800 ring-1 ring-navy-100 transition-colors group-hover:bg-white/12 group-hover:text-white group-hover:ring-white/20">
                  <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-body-sm font-bold uppercase tracking-[.08em] text-navy-800 transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-body-sm text-navy-500 transition-colors group-hover:text-white/70">
                  {s.card}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-label font-bold uppercase text-navy-600 transition-colors group-hover:text-white">
                  Voir
                  <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Faisons connaissance"
        text="Un projet en tête, une installation vieillissante ou simplement une question ? Appelez-nous ou écrivez-nous : nous vous répondons nous-mêmes, sans intermédiaire."
      />
      <GuaranteeBar />
    </>
  )
}
