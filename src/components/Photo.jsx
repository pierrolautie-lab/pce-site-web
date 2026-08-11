import { useState } from 'react'
import { clientPhotoMeta } from '../data/photos.js'

/** Repli local si un emplacement photo n'a pas (encore) de vraie photo
 *  assignée dans src/data/photos.js — jamais une image ou un service tiers. */
const LOGO_FALLBACK = '/img/logo-pce-officiel.jpg'

/**
 * Photographie du site.
 *
 * Ordre de priorité de la source :
 *   1. la vraie photo du client (WebP responsive, `srcset` 400/800/1200px),
 *      si le slot (`lock`) est renseigné dans src/data/photos.js ;
 *   2. le repli — le logo PCE local par défaut, ou un aplat de couleur uni
 *      si `fallback="blank"` (voir `bgClassName`) — pour les emplacements où
 *      le logo ferait double emploi avec un titre déjà présent juste en
 *      dessous (ex. cartes Équipements de la page Piscine).
 *
 * Un aplat animé occupe la place pendant le chargement, ce qui évite tout
 * décalage de mise en page.
 *
 * `sizes` doit refléter la largeur réelle d'affichage de l'image dans sa
 * mise en page (ex. un tiers de la largeur d'écran dans une grille à 3
 * colonnes) pour que le navigateur choisisse la bonne variante du `srcset`.
 */
export default function Photo({
  lock,
  alt,
  w = 1200,
  h = 900,
  priority = false,
  className = '',
  imgClassName = '',
  rounded = 'rounded-2xl',
  sizes = '100vw',
  fallback = 'logo',
  bgClassName = 'bg-navy-100',
}) {
  const real = clientPhotoMeta(lock)

  const [src, setSrc] = useState(real?.src || (fallback === 'blank' ? null : LOGO_FALLBACK))
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(!real?.src)

  /* Le repli est déjà local : plus rien à tenter en cas d'échec. */
  const handleError = () => {
    setFailed(true)
    if (fallback !== 'blank') setSrc(LOGO_FALLBACK)
    setLoaded(true)
  }

  const intrinsicWidth = real?.width || w
  const intrinsicHeight = real?.height || h

  if (fallback === 'blank' && failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`overflow-hidden ${rounded} ${bgClassName} ${className}`}
      />
    )
  }

  return (
    <div className={`relative overflow-hidden ${rounded} ${bgClassName} ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-100 via-navy-200 to-navy-100" />
      )}
      <img
        src={src}
        srcSet={src === real?.src ? real?.srcSet : undefined}
        sizes={src === real?.src && real?.srcSet ? sizes : undefined}
        width={intrinsicWidth}
        height={intrinsicHeight}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}
