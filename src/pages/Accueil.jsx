import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { CtaSection, GuaranteeBar, TrustBadges, SectionTitle, LinkGrid } from '../components/Blocks.jsx'
import { Wordmark } from '../components/Brand.jsx'
import {
  areasDetail,
  company,
  depannage,
  projects,
  serviceList,
  stats,
  values,
  whyChooseUs,
} from '../data/site.js'
import { localCities, localPath } from '../data/local.js'

export default function Accueil() {
  /* Les 4 premières cartes occupent la première ligne, les 2 dernières
     s'étalent sur la seconde : aucune cellule orpheline. */
  /* Six métiers sur une grille de 3 colonnes (deux rangées pleines),
     le dépannage étant mis en avant juste après, sur toute la largeur. */
  const cards = serviceList.map((s) => ({
    to: `/${s.slug}`,
    icon: s.icon,
    title: s.title,
    text: s.card,
    photo: s.hero,
  }))

  return (
    <>
      <Seo
        standalone
        title="PCE — Plomberie, chauffage, climatisation, électricité et piscine à Lorgues (83)"
        description="PCE, artisan à Lorgues dans le Var depuis 2005 : plomberie, chauffage, climatisation, électricité et entretien de piscine. Devis gratuit, intervention rapide dans toute la Dracénie et le Golfe de Saint-Tropez."
        path="/"
      />
      {/* ====================================================== HERO ====== */}
      <PageHero
        title="Votre confort, notre métier"
        titleClassName="text-[8.8vw] md:text-5xl lg:text-[3.9rem]"
        subtitle="Cinq savoir-faire réunis sous le même toit, à Lorgues depuis 2005"
        intro="Plomberie, chauffage, climatisation, électricité et piscine : depuis 2005, PCE conçoit, installe et entretient les équipements qui font le confort de votre maison. Un seul interlocuteur du devis à la mise en service, une équipe locale qui connaît le bâti, l'eau et le climat du Var."
        photo={{ tags: 'house', lock: 101, alt: 'Maison provençale équipée par PCE' }}
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceList.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[.08em] text-white/80 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-800"
              >
                <Icon name={s.icon} className="h-3.5 w-3.5" strokeWidth={2} />
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ============================================ CARTES DES MÉTIERS == */}
      <section className="section bg-white">
        <div className="container-pce">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              align="left"
              title="Nos métiers — ce que nous savons faire"
              lead="Cinq spécialités complémentaires, exercées par la même équipe. C'est ce qui nous permet de livrer un chantier complet sans coordination hasardeuse entre plusieurs entreprises."
            />
            <Link to="/realisations" className="btn-outline shrink-0">
              Voir nos réalisations
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <Photo
                    tags={c.photo.tags}
                    lock={c.photo.lock}
                    alt={c.title}
                    rounded=""
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-azure-500 shadow-card">
                    <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[15px] font-bold uppercase tracking-[.06em] text-navy-800">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-[1.7] text-navy-500">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.12em] text-azure-500">
                    En savoir plus
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.4}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Dépannage mis en avant sur toute la largeur */}
          <Link
            to="/depannage"
            className="group mt-5 grid overflow-hidden rounded-xl bg-navy-800 text-white shadow-card transition-all duration-300 hover:-translate-y-1 lg:grid-cols-12"
          >
            <div className="relative min-w-0 lg:col-span-5">
              <Photo
                tags={depannage.hero.tags}
                lock={depannage.hero.lock}
                alt="Dépannage PCE 7j/7"
                rounded=""
                className="aspect-[16/7] w-full lg:h-full lg:aspect-auto"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 to-navy-800/80 lg:to-navy-800" />
            </div>

            <div className="flex min-w-0 flex-col justify-center p-7 sm:p-9 lg:col-span-7">
              <span className="inline-flex w-fit items-center gap-2 rounded bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-navy-800">
                <Icon name="clock" className="h-3.5 w-3.5" strokeWidth={2.2} />
                Urgence 7j/7
              </span>
              <h3 className="mt-4 text-[20px] font-black uppercase tracking-[-.01em] sm:text-[26px]">
                Dépannage dans tout le Var
              </h3>
              <p className="mt-3 max-w-xl text-[13.5px] leading-[1.7] text-white/65">
                Fuite d'eau, panne de chauffage ou de climatisation, coupure électrique, filtration
                de piscine à l'arrêt : un créneau vous est donné dès votre appel, et le prix est
                annoncé avant toute intervention.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.12em] text-gold-400">
                Voir la page dépannage
                <Icon
                  name="arrowRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================= POURQUOI CHOISIR PCE */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <SectionTitle
            title="Pourquoi choisir PCE ?"
            lead="Six raisons concrètes, données par nos clients de Lorgues et de la Dracénie."
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

      <TrustBadges />

      {/* ================================== QUI SOMMES-NOUS (rédactionnel) = */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-6">
              <SectionTitle
                align="left"
                title="PCE, l'artisan du confort à Lorgues depuis 2005"
              />
              <div className="mt-7 space-y-5">
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  PCE est née à Lorgues en 2005, d'une conviction simple : dans une maison, l'eau,
                  la chaleur et l'électricité forment un tout. Les séparer entre trois entreprises,
                  c'est multiplier les délais, les rendez-vous manqués et les responsabilités
                  diluées. Nous avons donc choisi la voie inverse et intégré, année après année, les
                  cinq métiers qui font le confort d'un logement.
                </p>
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  Vingt ans plus tard, cette approche est notre marque de fabrique. Une pompe à
                  chaleur, c'est de l'hydraulique, du frigorifique et de l'électricité : nous
                  livrons l'ensemble. Une salle de bains, c'est du sanitaire, de la ventilation et
                  des circuits protégés : nous livrons l'ensemble. Un local technique de piscine,
                  c'est de la tuyauterie et un coffret aux normes : nous livrons l'ensemble.
                </p>
                <p className="text-[15px] leading-[1.85] text-navy-600">
                  Nous travaillons pour des particuliers, des syndics et des propriétaires de
                  résidences secondaires, entre Lorgues, la Dracénie et le Golfe de Saint-Tropez.
                  Notre connaissance du terrain — une eau très calcaire, des bastides en pierre à
                  forte inertie, des étés qui imposent le rafraîchissement — nous permet de
                  préconiser juste, plutôt que de vendre du catalogue.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/a-propos" className="btn-azure">
                  Découvrir notre histoire
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
                </Link>
                <p className="signature text-[15px]">{company.tagline}</p>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Photo
                  tags="tools"
                  lock={102}
                  alt="L'équipe PCE en intervention"
                  className="aspect-[3/4] w-full shadow-photo sm:mt-10"
                />
                <Photo
                  tags="architecture"
                  lock={103}
                  alt="Bastide provençale à Lorgues"
                  className="aspect-[3/4] w-full shadow-photo"
                />
              </div>

              {/* Chiffres clés */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white p-5 ring-1 ring-navy-100">
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

      {/* ================ GARANTIE DÉCENNALE / UN SEUL INTERLOCUTEUR ====== */}
      <section className="relative overflow-hidden bg-navy-800 py-16 text-white sm:py-20 lg:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none text-[240px] font-black uppercase leading-none tracking-[-.05em] text-white/[.04]"
        >
          {company.name}
        </span>

        <div className="container-pce relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-5">
              <Wordmark size="sm" />
              <h2 className="mt-6 text-3xl font-black uppercase leading-[1.04] tracking-[-.02em] sm:text-[2.4rem]">
                Garantie décennale,
                <br />
                un seul interlocuteur
              </h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-white/65">
                Nos installations sont couvertes par notre assurance décennale, et l'attestation
                vous est remise avec le devis — avant le début des travaux, pas après. Sur le
                chantier, une seule entreprise engage sa responsabilité : la nôtre. Vous n'avez
                jamais à arbitrer entre le plombier qui accuse l'électricien et l'inverse.
              </p>
              <Link to="/contact" className="btn-gold mt-8">
                Nous confier votre projet
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
              </Link>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-7">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/12 bg-white/[.04] p-6 transition-colors hover:border-white/25"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white">
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
        </div>
      </section>

      {/* ========================================= ZONE D'INTERVENTION ==== */}
      <section className="section bg-white">
        <div className="container-pce">
          <SectionTitle
            title="Zone d'intervention — trois territoires, une même équipe"
            lead="Basés à Lorgues, nous rayonnons sur tout le centre-Var et jusqu'au littoral. Nous sommes rarement à plus de quarante minutes de votre porte."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {areasDetail.map((a) => (
              <article
                key={a.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100"
              >
                <div className="relative">
                  <Photo
                    tags={a.tags}
                    lock={a.lock}
                    alt={a.name}
                    rounded=""
                    className="aspect-[16/10] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/60">
                      {a.lead}
                    </p>
                    <h3 className="mt-1 text-[21px] font-black uppercase tracking-tight">{a.name}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[13.5px] leading-[1.75] text-navy-500">{a.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {a.towns.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-navy-50 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[.08em] text-navy-600 ring-1 ring-navy-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ APERÇU RÉALISATIONS = */}
      <section className="section bg-navy-50">
        <div className="container-pce">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              align="left"
              title="Quelques réalisations récentes"
              lead="Chaque chantier est différent, mais le niveau d'exigence reste le même : un travail propre, repéré et durable."
            />
            <Link to="/realisations" className="btn-outline shrink-0">
              Toutes nos réalisations
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100"
              >
                <Photo
                  tags={p.tags}
                  lock={p.lock}
                  alt={p.title}
                  rounded=""
                  className="aspect-[4/3] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-navy-500">
                    <span className="text-navy-700">{p.trade}</span>
                    <span className="h-1 w-1 rounded-full bg-navy-200" />
                    <span>
                      {p.city} · {p.year}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[15px] font-bold leading-snug text-navy-800">{p.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-[1.7] text-navy-500">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= NOS VILLES D'INTERVENTION */}
      <LinkGrid
        title="Nos interventions par ville"
        lead="PCE intervient dans tout le Var : sur la Dracénie Provence Verdon Agglomération autour de Lorgues et Draguignan, et sur les 12 communes du Golfe de Saint-Tropez, jusqu'à Sainte-Maxime et Saint-Tropez. Plombier, chauffagiste, climatisation, électricien, pisciniste ou traitement de l'eau : PCE se déplace dans chacune de ces communes depuis son atelier de Lorgues."
        links={Object.keys(localCities).map((cityKey) => ({
          to: localPath('plombier', cityKey),
          label: localCities[cityKey].name,
        }))}
      />

      <CtaSection />
      <GuaranteeBar />
    </>
  )
}
