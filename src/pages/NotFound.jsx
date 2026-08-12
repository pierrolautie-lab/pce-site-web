import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Seo from '../components/Seo.jsx'
import { Watermark, Wordmark } from '../components/Brand.jsx'
import { company, trades } from '../data/site.js'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <Seo
        title="Page introuvable"
        description="Cette page n'existe pas ou plus sur le site de PCE, artisan à Lorgues (83)."
        path=""
        noindex
      />
      <Watermark className="left-[-.03em] top-6 text-[36vw] lg:text-[20rem]" />

      <div className="container-pce relative py-24 lg:py-32">
        <Wordmark size="sm" />

        <h1 className="mt-8 text-[16vw] font-black uppercase leading-none tracking-[-.04em] sm:text-7xl">
          404
        </h1>
        <p className="mt-6 max-w-md text-[19px] font-bold uppercase text-azure-300">
          Cette page n'existe pas — ou plus.
        </p>
        <p className="signature mt-3 text-[17px]">{company.expertise}</p>
        <p className="mt-5 max-w-lg text-[14.5px] leading-[1.8] text-white/65">
          Le lien que vous avez suivi est peut-être obsolète. Vous pouvez revenir à l'accueil ou
          rejoindre directement l'un de nos cinq métiers.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/" className="btn-gold">
            Retour à l'accueil
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
          </Link>
          <Link to="/contact" className="btn-outline-gold">
            Nous contacter
          </Link>
          <a href={company.phoneHref} className="btn-outline-gold">
            <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
            {company.phone}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {trades.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                className="inline-flex rounded-lg border border-white/20 px-4 py-2 text-label font-bold uppercase text-white/80 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-800"
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
