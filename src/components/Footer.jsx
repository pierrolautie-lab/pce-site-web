import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Wordmark } from './Brand.jsx'
import { company, trades } from '../data/site.js'
import { localPath } from '../data/local.js'

const servedCities = [
  { name: 'Lorgues', cityKey: 'Lorgues' },
  { name: 'Draguignan', cityKey: 'Draguignan' },
  { name: 'Fréjus', cityKey: 'Fréjus' },
  { name: 'Saint-Raphaël', cityKey: 'Saint-Raphaël' },
  { name: 'Sainte-Maxime', cityKey: 'Sainte-Maxime' },
  { name: 'Saint-Tropez', cityKey: 'Saint-Tropez' },
  { name: 'Grimaud', cityKey: 'Grimaud' },
  { name: 'Cogolin', cityKey: 'Cogolin' },
  { name: 'Roquebrune-sur-Argens', cityKey: 'Roquebrune-sur-Argens' },
  { name: 'Le Rocher de Roquebrune', cityKey: 'Le Rocher de Roquebrune' },
  { name: 'Puget-sur-Argens', cityKey: 'Puget-sur-Argens' },
  { name: 'Les Issambres', cityKey: 'Les Issambres' },
]

const servicesLinks = [...trades, { label: 'Dépannage', to: '/depannage' }]

const entrepriseLinks = [
  { label: 'À propos de PCE', to: '/a-propos' },
  { label: 'Nos réalisations', to: '/realisations' },
  { label: 'Nos engagements', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

const infosLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
  { label: 'Conditions générales', to: '/conditions-generales' },
  { label: 'Plan du site', to: '/plan-du-site' },
]

const socials = [
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/yves.texier.3/' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'Tous nos liens', icon: 'globe', href: company.socialHub },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-800 text-white">
      {/* Filigrane décoratif (aria-hidden), hors échelle typographique —
          voir la même exception dans Blocks.jsx. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 -right-6 select-none text-[26vw] font-black uppercase leading-none tracking-[-.05em] text-white/[.03] sm:text-[180px]"
      >
        {company.name}
      </span>

      <div className="container-pce relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ------------------------------------------------ Identité */}
          <div className="min-w-0 lg:col-span-4">
            <Wordmark size="lg" />
            <p className="mt-6 max-w-xs text-label font-bold uppercase text-white/70">
              {company.baseline}
            </p>
            <p className="signature mt-4 text-[15px]">{company.tagline}</p>

            {/* Qualifications */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {company.certifications.map((c) => (
                <li
                  key={c}
                  className="rounded border border-white/15 px-3 py-1.5 text-label font-bold uppercase text-white/60"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------ Services */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-label font-bold uppercase text-white">
              Nos services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {servicesLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------ Entreprise */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-label font-bold uppercase text-white">
              L'entreprise
            </h3>
            <ul className="mt-5 space-y-2.5">
              {entrepriseLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------ Informations */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-label font-bold uppercase text-white">
              Informations
            </h3>
            <ul className="mt-5 space-y-2.5">
              {infosLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------ Contact */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-label font-bold uppercase text-white">
              Nous contacter
            </h3>

            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 text-body-sm text-white/70 transition-colors hover:text-gold-400"
                >
                  <Icon name="phone" className="h-3.5 w-3.5 shrink-0 text-gold-500" strokeWidth={2} />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 text-body-sm text-white/70 transition-colors hover:text-gold-400"
                >
                  <Icon name="mail" className="h-3.5 w-3.5 shrink-0 text-gold-500" strokeWidth={2} />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.url}
                  className="flex items-center gap-2.5 text-body-sm text-white/70 transition-colors hover:text-gold-400"
                >
                  <Icon name="globe" className="h-3.5 w-3.5 shrink-0 text-gold-500" strokeWidth={2} />
                  {company.domain}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `PCE, ${company.address.street}, ${company.address.street2}, ${company.address.zip} ${company.address.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-body-sm text-white/70 transition-colors hover:text-gold-400"
                >
                  <Icon
                    name="mapPin"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500"
                    strokeWidth={2}
                  />
                  <span>
                    {company.address.street}
                    <br />
                    {company.address.street2}
                    <br />
                    {company.address.zip} {company.address.city}
                    <span className="mt-1 block text-label font-bold uppercase text-white/40 group-hover:text-gold-400">
                      Voir sur Google Maps
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <ul className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('#') ? undefined : '_blank'}
                    rel={s.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-800"
                  >
                    <Icon name={s.icon} className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------ Villes desservies */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-label font-bold uppercase text-white">
            Villes desservies
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {servedCities.map((c) => (
              <li key={c.cityKey}>
                <Link
                  to={localPath('plombier', c.cityKey)}
                  className="text-body-sm text-white/60 transition-colors hover:text-gold-400"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------ Bas de page */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/40">
            © {year} {company.name} — {company.address.street}, {company.address.zip}{' '}
            {company.address.city}. Tous droits réservés.
          </p>
          <p className="text-caption text-white/40">
            {company.hoursShort} · Urgences 7j/7
          </p>
        </div>
      </div>
    </footer>
  )
}
