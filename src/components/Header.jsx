import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Logo } from './Brand.jsx'
import { company, nav } from '../data/site.js'

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-header' : 'shadow-[0_1px_0_rgba(14,37,71,.08)]'
      }`}
    >
      <div className="container-pce flex items-center justify-between gap-4 py-3 lg:gap-8">
        <Logo size="sm" />

        {/* ------------------------------------------- Navigation bureau
            Le menu à plat compte dix entrées : il ne tient qu'à partir de
            1440 px. En dessous, on bascule sur le panneau déroulant. */}
        <nav
          className="hidden flex-1 items-center justify-center gap-x-3 gap-y-1 min-[1440px]:flex"
          aria-label="Navigation principale"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative whitespace-nowrap py-2 text-[10.5px] font-bold uppercase tracking-[.03em] transition-colors
                 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:transition-all
                 ${
                   isActive
                     ? 'text-navy-800 after:bg-gold-500'
                     : 'text-navy-600 after:bg-transparent hover:text-navy-800 hover:after:bg-navy-200'
                 }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ------------------------------------------- Téléphone + devis */}
        <div className="hidden shrink-0 flex-col items-end gap-2 lg:flex">
          <a
            href={company.phoneHref}
            className="group flex items-center gap-2 text-navy-800 transition-colors hover:text-azure-500"
          >
            <Icon name="phone" className="h-4 w-4 text-azure-500" strokeWidth={2} />
            <span className="text-[17px] font-black leading-none tracking-tight">
              {company.phone}
            </span>
          </a>
          <p className="text-[10.5px] leading-none text-navy-400">{company.hoursShort}</p>
          <Link to="/contact" className="btn-gold btn-sm mt-0.5">
            <Icon name="clipboard" className="h-3.5 w-3.5" strokeWidth={2} />
            Devis gratuit &amp; rapide
          </Link>
        </div>

        {/* ------------------------------------------- Actions mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={company.phoneHref}
            aria-label={`Appeler le ${company.phone}`}
            className="grid h-11 w-11 place-items-center rounded-lg bg-gold-500 text-navy-800"
          >
            <Icon name="phone" className="h-[18px] w-[18px]" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="grid h-11 w-11 place-items-center rounded-lg text-navy-800 ring-1 ring-navy-200 transition-colors hover:bg-navy-50"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Bouton menu pour les largeurs intermédiaires (lg → 1440 px) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="hidden h-11 w-11 shrink-0 place-items-center rounded-lg text-navy-800 ring-1 ring-navy-200 transition-colors hover:bg-navy-50 lg:grid min-[1440px]:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {/* ------------------------------------------------ Panneau mobile */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height] duration-300 min-[1440px]:hidden ${
          open ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <nav className="container-pce flex flex-col py-4" aria-label="Navigation mobile">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-lg border-l-[3px] px-4 py-3.5 text-[12px] font-bold uppercase tracking-[.08em] transition-colors ${
                  isActive
                    ? 'border-gold-500 bg-navy-50 text-navy-800'
                    : 'border-transparent text-navy-600 hover:bg-navy-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact" className="btn-gold mt-4 w-full">
            <Icon name="clipboard" className="h-4 w-4" strokeWidth={2} />
            Devis gratuit &amp; rapide
          </Link>

          <a
            href={company.phoneHref}
            className="mt-3 flex flex-col items-center gap-1 py-2 text-navy-800"
          >
            <span className="flex items-center gap-2 text-[19px] font-black tracking-tight">
              <Icon name="phone" className="h-4 w-4 text-azure-500" strokeWidth={2} />
              {company.phone}
            </span>
            <span className="text-[11px] text-navy-400">{company.hoursShort}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
