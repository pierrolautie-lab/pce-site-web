import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Photo from '../components/Photo.jsx'
import BrandLogo from '../components/BrandLogo.jsx'
import Seo, { serviceSchema, breadcrumbSchema, offerSchema } from '../components/Seo.jsx'
import { ReassuranceBar } from '../components/PageHero.jsx'
import { company, services } from '../data/site.js'

/* -------------------------------------------------------------------------
   Page /piscine, refondue d'après la maquette client.

   Tous les textes viennent de `services.piscine.page` dans site.js : rien
   n'est écrit en dur ici. Les coordonnées passent par `company`, jamais en
   dur non plus — celles de la maquette étaient erronées.

   Le projet ne dispose que d'UNE photo de piscine réelle
   (`piscine-hero-bassin.jpg`, slot 739). Elle sert au héros et au fond du
   bloc « Nos prestations ». Les autres blocs sont volontairement rendus
   sans photo plutôt que de la répéter une troisième et quatrième fois.
---------------------------------------------------------------------------*/

/** Liste à coches, réutilisée dans les deux tons de la page. */
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

export default function Piscine() {
  const service = services.piscine
  const p = service.page

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path="/piscine"
        jsonLd={[
          serviceSchema({ name: service.title, description: service.metaDescription, path: '/piscine' }),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: service.title, path: '/piscine' },
          ]),
          offerSchema({ name: service.title, path: '/piscine' }),
        ]}
      />

      <Hero page={p} hero={service.hero} />
      <ReassuranceBar />
      <PrestationsEtAutomatisation page={p} hero={service.hero} />
      <Equipements data={p.equipements} />
      <EntretienEtAccompagnement page={p} />
      <Marques data={p.marques} />
      <BandeAppel />
    </>
  )
}

/* ========================================================= HÉROS ======== */
function Hero({ page, hero }) {
  const [ligne1, ligne2, ligne3] = page.h1

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Photo lock={hero.lock} alt="Bassin éclairé, réalisation PCE" priority rounded="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/20 lg:to-transparent" />

      <div className="container-pce relative py-8 lg:py-14">
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/60">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-white/80">Piscine</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-navy-800/60 sm:h-14 sm:w-14"
          >
            <Icon name="waves" className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" strokeWidth={1.6} />
          </span>
          <h1 className="font-display font-black uppercase">
            <span className="block text-hero">{ligne1}</span>
            <span className="block text-title-lg">{ligne2}</span>
            <span className="block text-title-lg text-azure-400">{ligne3}</span>
          </h1>

          <p className="signature mt-4 text-kicker">{company.expertise}</p>

          <p className="mt-5 max-w-xl text-body text-white/75">{page.intro}</p>

          {/* Pictos séparés par des filets verticaux fins */}
          <ul className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-white/15">
            {page.heroHighlights.map((h) => (
              <li key={h.title} className="flex flex-col items-start px-0 sm:px-5 sm:first:pl-0">
                <Icon name={h.icon} className="h-8 w-8 text-white" strokeWidth={1.3} />
                <span className="mt-3 text-label font-bold uppercase">{h.title}</span>
                <span className="mt-1 text-body-sm text-white/55">{h.label}</span>
              </li>
            ))}
          </ul>

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

/* ====================== PRESTATIONS + AUTOMATISATION ==================== */
function PrestationsEtAutomatisation({ page, hero }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ------------------------------------------- Prestations */}
          <div className="flex min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100">
            <div className="p-8 sm:p-10">
              <h2 className="font-display text-title font-black uppercase text-navy-800">
                {page.prestations.title}
              </h2>
              <CheckList items={page.prestations.items} className="mt-6 max-w-sm" />
            </div>
            {/* Bande photo pleinement visible plutôt qu'un fond estompé
                derrière le texte : c'est ce qui donne du poids visuel à la
                carte, comme sur la maquette. */}
            <div className="mt-auto h-44 sm:h-52">
              <Photo lock={hero.lock} alt="Bassin éclairé, réalisation PCE" rounded="" className="h-full w-full" />
            </div>
          </div>

          {/* ---------------------------------------- Automatisation */}
          <div className="relative min-w-0 overflow-hidden rounded-xl bg-navy-900 p-8 text-white shadow-card sm:p-10">
            {/* Grande icône embossée en fond : évoque le pilotage à distance
                sans reproduire l'interface d'une application tierce. */}
            <Icon
              name="robot"
              className="pointer-events-none absolute -right-6 -top-8 h-40 w-40 text-white/[.06]"
              strokeWidth={1}
            />

            <h2 className="relative font-display text-title font-black uppercase">
              {page.automatisation.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>

            <CheckList items={page.automatisation.checks} tone="dark" className="relative mt-6" />

            {/* 4 colonnes seulement à partir de xl : « Électrolyseur » ne
                tient pas dans une colonne de 93 px en dessous. */}
            <ul className="mt-9 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-8 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
              {page.automatisation.pictos.map((pic) => (
                <li
                  key={pic.label.join(' ')}
                  className="flex min-w-0 flex-col items-center px-0 text-center sm:px-2 sm:first:pl-0"
                >
                  <Icon name={pic.icon} className="h-7 w-7 text-white" strokeWidth={1.3} />
                  <span className="mt-3 break-words text-label font-bold uppercase leading-tight">
                    {pic.label.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================== ÉQUIPEMENTS ============= */
function Equipements({ data }) {
  return (
    <section className="section bg-white">
      <div className="container-pce">
        <h2 className="section-title">{data.title}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item) => (
            <article
              key={item.title.join(' ')}
              className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100"
            >
              {/* fallback="blank" : un aplat navy-50 sans texte plutôt que le
                  repli logo PCE habituel de `Photo` — le titre juste en
                  dessous dit déjà de quoi il s'agit, pas besoin d'un cadre
                  en attente. Les 4 photos existent réellement à ce jour ;
                  ce repli reste dormant tant qu'elles ne disparaissent pas. */}
              <Photo
                lock={item.photo.lock}
                alt={item.title.join(' ')}
                rounded=""
                className="aspect-[4/3] w-full"
                fallback="blank"
                bgClassName="bg-navy-50"
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-6">
                {/* min-h-12 : les titres tiennent tous sur 2 lignes dans les
                    données actuelles, mais un mot plus long pourrait forcer
                    un retour à la ligne sur l'une des 4 cartes — la hauteur
                    minimale garde les 4 titres (et donc les 4 cartes)
                    alignés même dans ce cas. */}
                <h3 className="min-h-12 font-display text-kicker font-bold uppercase leading-tight text-navy-800">
                  {item.title.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </h3>
                <p className="mt-3 flex-1 text-balance text-body-sm text-navy-500">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================ ENTRETIEN + ACCOMPAGNEMENT ============ */
function EntretienEtAccompagnement({ page }) {
  return (
    <section className="section bg-navy-50">
      <div className="container-pce">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-xl bg-navy-900 p-8 text-white shadow-card sm:p-10">
            <h2 className="font-display text-title font-black uppercase">
              {page.entretien.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-md text-body text-white/70">{page.entretien.text}</p>
            <CheckList items={page.entretien.checks} tone="dark" className="mt-7" />
          </div>

          <div className="min-w-0 rounded-xl bg-white p-8 shadow-card ring-1 ring-navy-100 sm:p-10">
            <h2 className="font-display text-center text-title font-black uppercase text-navy-800">
              {page.accompagnement.title}
            </h2>

            {/* 4 colonnes seulement à partir de xl : dans une carte de
                demi-largeur, quatre colonnes coupaient les libellés. */}
            <ul className="mt-9 grid grid-cols-2 gap-8 xl:grid-cols-4">
              {page.accompagnement.items.map((item) => (
                <li key={item.title} className="flex min-w-0 flex-col items-center text-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy-200 text-azure-500">
                    <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="mt-4 break-words text-label font-bold uppercase text-navy-800">{item.title}</span>
                  <span className="mt-2 break-words text-body-sm text-navy-500">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================== MARQUES ============= */
function Marques({ data }) {
  return (
    <section className="border-y border-navy-100 bg-white py-10 sm:py-12">
      <div className="container-pce">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <h2 className="font-display text-kicker font-bold uppercase leading-tight text-navy-800 lg:col-span-4">
            {data.label.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>

          <ul className="grid grid-cols-3 items-center gap-6 sm:divide-x sm:divide-navy-100 lg:col-span-8">
            {data.items.map((m) => (
              <li key={m.name} className="flex h-12 min-w-0 items-center justify-center px-0 sm:px-6">
                <BrandLogo name={m.name} src={m.src} grayscale className="max-h-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ============================================== BANDE D'APPEL =========== */
function BandeAppel() {
  return (
    <section className="bg-azure-500 py-8">
      <div className="container-pce flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8">
        <p className="font-display text-kicker font-bold uppercase text-white">
          Besoin d'un conseil ou d'un devis ? Appelez-nous !
        </p>
        <a
          href={company.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-kicker font-bold text-navy-900 transition-colors hover:bg-gold-400"
        >
          <Icon name="phone" className="h-4 w-4 shrink-0" strokeWidth={2} />
          {company.phone}
        </a>
      </div>
    </section>
  )
}
