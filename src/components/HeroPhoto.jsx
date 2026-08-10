import { useEffect, useState } from 'react'
import { clientPhotoMeta } from '../data/photos.js'

/**
 * Fond photo plein cadre commun aux héros « nouvelle génération » (Accueil,
 * Contact...). Une seule mécanique factorisée ici plutôt que dupliquée
 * page par page :
 *   — <picture> avec un <source> à partir de `sm` (fond plein cadre),
 *     l'<img> lui-même servant de repli en dessous — bandeau photo au
 *     format natif, dans le flux, sous le bloc de texte ;
 *   — object-position par palier : `cover`/`right` à partir de `lg`,
 *     `65% center` entre `sm` et `lg` ;
 *   — dégradé directionnel (navy-950 à 92 % sur le bord gauche, transparent
 *     à 80 % de la largeur) + voile uniforme léger (15 %) : le contraste du
 *     texte est porté par <HeroTextVeil />, pas par ce voile-ci, qui reste
 *     discret pour ne pas assombrir la photo.
 *   — précharge la variante à la largeur d'écran réelle (`<link
 *     rel="preload">`, `href` calculé une fois au montage — pas de
 *     ré-écoute sur `resize`, voir commentaire plus bas) : c'est l'image la
 *     plus lourde du site, toujours au-dessus de la ligne de flottaison.
 */
export function HeroBackgroundPhoto({ slot, fallbackSlot, alt }) {
  const fallback = clientPhotoMeta(fallbackSlot)
  const [bg, setBg] = useState(() => clientPhotoMeta(slot) || fallback)
  const onError = () => fallback?.src && bg?.src !== fallback.src && setBg(fallback)

  /* `href` calculé une seule fois, au montage — pas de ré-écoute sur
     `resize` : un navigateur qui ajuste ses métriques de viewport juste
     après le premier rendu (fréquent en émulation, possible aussi lors
     d'une rotation d'écran) déclencherait sinon un second téléchargement
     quand `href` change de valeur après coup.
     `imagesrcset`/`imagesizes` volontairement absents du <link> : posés en
     plus de `href`, certains navigateurs commencent à précharger une
     variante d'après `imagesrcset` dès que l'attribut est posé, avant même
     que `imagesizes` (posé juste après) ne soit en place — la résolution
     se fait alors sans largeur connue, sur la plus petite variante, puis
     se corrige : deux téléchargements au lieu d'un. `href` seul, déjà
     calculé à la bonne largeur, suffit et reste déterministe. */
  useEffect(() => {
    if (!bg?.srcSet) return

    const entries = bg.srcSet
      .split(',')
      .map((s) => {
        const [url, w] = s.trim().split(' ')
        return { url, width: parseInt(w, 10) }
      })
      .sort((a, b) => a.width - b.width)

    const needed = window.innerWidth * (window.devicePixelRatio || 1)
    const match = entries.find((e) => e.width >= needed)
    const href = (match || entries[entries.length - 1]).url

    let link = document.head.querySelector('link[data-hero-preload]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.setAttribute('data-hero-preload', '')
      document.head.appendChild(link)
    }
    link.href = href

    return () => link?.remove()
  }, [bg])

  return (
    <>
      <picture>
        <source media="(min-width: 640px)" srcSet={bg?.srcSet || undefined} sizes="100vw" />
        <img
          src={bg?.src}
          srcSet={bg?.srcSet || undefined}
          sizes="100vw"
          width={bg?.width || undefined}
          height={bg?.height || undefined}
          alt={alt}
          onError={onError}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="aspect-video w-full object-cover sm:absolute sm:inset-0 sm:-z-20 sm:aspect-auto sm:h-full sm:object-[65%_center] lg:object-right"
        />
      </picture>

      {/* Le tiers gauche de la photo (véhicule clair, ciel lumineux) est la
          zone que recouvre le bloc de texte de chaque héros appelant. */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-950/[.92] from-0% to-transparent to-80% sm:block" />
      <div className="absolute inset-0 -z-10 hidden bg-navy-950/15 sm:block" />
    </>
  )
}

/** Voile local, propre au bloc de texte d'un héros utilisant
 *  `<HeroBackgroundPhoto />` : suit le texte plutôt que de couvrir toute la
 *  photo. Opaque à 55 % derrière le texte, fondu vers son coin bas-droit.
 *  À poser en premier enfant d'un conteneur `relative`. */
export function HeroTextVeil() {
  return (
    <div className="pointer-events-none absolute -inset-3 -z-10 hidden bg-gradient-to-br from-navy-950/55 to-transparent sm:block" />
  )
}
