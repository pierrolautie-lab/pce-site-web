import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Logo } from './Brand.jsx'
import { company, navFlat, navServices } from '../data/site.js'

const NAV_LINK_CLASS = ({ isActive }) =>
  `relative whitespace-nowrap py-2 font-display text-label font-bold uppercase transition-colors
   after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:transition-all
   ${
     isActive
       ? 'text-navy-800 after:bg-gold-500'
       : 'text-navy-600 after:bg-transparent hover:text-navy-800 hover:after:bg-navy-200'
   }`

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
      {/* Grille à 3 colonnes (logo / centre / actions) plutôt qu'un flex
          "justify-between" : avec justify-between, le bloc central ne se
          centre que si les deux blocs qui l'encadrent ont la même largeur —
          ici le logo et le bouton hamburger n'ont pas la même largeur, donc
          le bloc téléphone + horaires + CTA dérivait vers la droite. La
          grille garantit un centrage réel, quelle que soit la largeur du
          logo à gauche ou des actions à droite. */}
      <div className="container-pce grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:gap-8">
        <Logo size="header" />

        {/* ------------------------------------------- Centre : navigation + téléphone/devis
            Menu à plat : 5 entrées + le déclencheur « Nos services », qui
            regroupe les 7 métiers en panneau déroulant (voir ServicesMenu
            plus bas). Mesuré à 1155px de large au maximum — tient dans le
            conteneur du site (max-w-[1280px]) à partir de 1180px, seuil
            retenu avec une marge de sécurité. Les 12 entrées à plat
            précédentes ne tenaient à AUCUNE largeur d'écran : le manque
            (385px) ne se résorbe jamais, le conteneur du site plafonnant à
            1280px quelle que soit la largeur de la fenêtre. */}
        <div className="hidden min-w-0 items-center justify-center gap-x-6 lg:flex">
          {/* min-w-0 : sans lui, min-width: auto (valeur par défaut d'un
              enfant flex) empêche flex-shrink d'agir, et un débordement
              remonterait visuellement sous le logo — comme cela arrivait
              avant, à toute largeur, avec les 12 entrées à plat. Avec ce
              menu réduit à 6 éléments, la marge est confortable, mais la
              règle reste structurellement correcte quel que soit le nombre
              d'entrées ajoutées plus tard. */}
          <nav
            className="hidden min-w-0 items-center justify-center gap-x-3 gap-y-1 min-[1180px]:flex"
            aria-label="Navigation principale"
          >
            <NavLink to="/" end className={NAV_LINK_CLASS}>
              Accueil
            </NavLink>

            <ServicesMenu pathname={pathname} />

            {navFlat.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to} className={NAV_LINK_CLASS}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-5">
            <div className="flex flex-col items-end gap-1.5">
              <a
                href={company.phoneHref}
                className="group flex items-center gap-2 text-navy-800 transition-colors hover:text-azure-500"
              >
                <Icon name="phone" className="h-4 w-4 text-azure-500" strokeWidth={2} />
                <span className="text-kicker font-black tracking-tight">
                  {company.phone}
                </span>
              </a>
              <p className="text-caption text-navy-500">{company.hoursShort}</p>
            </div>
            <Link to="/contact" className="btn-gold btn-sm">
              <Icon name="clipboard" className="h-3.5 w-3.5" strokeWidth={2} />
              Devis gratuit &amp; rapide
            </Link>
          </div>
        </div>

        {/* ------------------------------------------- Actions (droite) */}
        <div className="flex items-center justify-end gap-2">
          {/* Mobile */}
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

          {/* Bouton menu pour les largeurs intermédiaires (lg → 1180 px) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="hidden h-11 w-11 shrink-0 place-items-center rounded-lg text-navy-800 ring-1 ring-navy-200 transition-colors hover:bg-navy-50 lg:grid min-[1180px]:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ------------------------------------------------ Panneau mobile */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height] duration-300 min-[1180px]:hidden ${
          open ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <nav className="container-pce flex flex-col py-4" aria-label="Navigation mobile">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-lg border-l-[3px] px-4 py-4 font-display text-label font-bold uppercase transition-colors ${
                isActive
                  ? 'border-gold-500 bg-navy-50 text-navy-800'
                  : 'border-transparent text-navy-600 hover:bg-navy-50'
              }`
            }
          >
            Accueil
          </NavLink>

          {navServices.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg border-l-[3px] px-4 py-4 font-display text-label font-bold uppercase transition-colors ${
                  isActive
                    ? 'border-gold-500 bg-navy-50 text-navy-800'
                    : 'border-transparent text-navy-600 hover:bg-navy-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {navFlat.slice(1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg border-l-[3px] px-4 py-4 font-display text-label font-bold uppercase transition-colors ${
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
            <span className="flex items-center gap-2 text-kicker font-black tracking-tight">
              <Icon name="phone" className="h-4 w-4 text-azure-500" strokeWidth={2} />
              {company.phone}
            </span>
            <span className="text-caption text-navy-500">{company.hoursShort}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

/** Déclencheur « Nos services » du menu à plat, ouvrant un panneau listant
 *  les 7 métiers. Les 7 <a> sont dans le DOM au chargement (juste masqués
 *  en opacité/visibilité), jamais injectés à l'ouverture — un lecteur
 *  d'écran ou un moteur de recherche les voit toujours. */
function ServicesMenu({ pathname }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)
  const linkRefs = useRef([])

  const isActive = navServices.some((item) => item.to === pathname)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [open])

  const openAndFocusFirst = () => {
    // flushSync plutôt que requestAnimationFrame : le focus doit atterrir
    // sur le premier lien dès que le panneau est monté, pas "au prochain
    // rendu, un jour" — flushSync applique le rendu de façon synchrone
    // avant qu'on appelle .focus(), sans dépendre d'une frame de
    // compositing qui peut être retardée (onglet en arrière-plan, etc.).
    flushSync(() => setOpen(true))
    linkRefs.current[0]?.focus()
  }

  const onTriggerClick = () => {
    // Un <button>, jamais un lien : le premier appui tactile ouvre le
    // panneau, il ne navigue jamais.
    setOpen((v) => !v)
  }

  const onTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      openAndFocusFirst()
    } else if (e.key === 'Escape' && open) {
      // Échap doit fermer même si le focus n'a pas encore quitté le
      // déclencheur (ouverture à la souris, puis Échap au clavier sans
      // être descendu dans le panneau) — pas seulement depuis les liens.
      e.preventDefault()
      setOpen(false)
    }
  }

  const onPanelKeyDown = (e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      linkRefs.current[(index + 1) % navServices.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      linkRefs.current[(index - 1 + navServices.length) % navServices.length]?.focus()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-menu-panel"
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
        className={`relative flex items-center gap-1 whitespace-nowrap py-2 font-display text-label font-bold uppercase transition-colors
                   after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:transition-all
                   ${
                     isActive
                       ? 'text-navy-800 after:bg-gold-500'
                       : 'text-navy-600 after:bg-transparent hover:text-navy-800 hover:after:bg-navy-200'
                   }`}
      >
        Nos services
        <Icon
          name="chevronDown"
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.4}
        />
      </button>

      <div
        id="services-menu-panel"
        role="menu"
        aria-label="Nos services"
        className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl bg-white p-2 shadow-header ring-1 ring-navy-100 transition-all duration-150 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        {navServices.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            ref={(el) => {
              linkRefs.current[i] = el
            }}
            onKeyDown={(e) => onPanelKeyDown(e, i)}
            className={({ isActive: linkActive }) =>
              `block rounded-lg px-3 py-2.5 font-display text-label font-bold uppercase transition-colors ${
                linkActive ? 'bg-navy-50 text-navy-800' : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
