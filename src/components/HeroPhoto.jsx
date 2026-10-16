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
 *   — dégradé directionnel léger (navy-950 à 15 % sur le bord gauche,
 *     transparent à 80 % de la largeur) : il ne sert plus qu'à asseoir le
 *     bord gauche. Le contraste du texte est porté par <HeroTextVeil />.
 *
 *     25/08/2026 — recalibré pour la photo nocturne du slot 100, et corrige
 *     au passage un défaut de contraste PRÉEXISTANT (présent avec la photo
 *     précédente) aux paliers 1024 px et 768 px : le bloc de texte garde sa
 *     largeur en pixels quand le héros rétrécit, il débordait donc au-delà
 *     des 80 % où le dégradé s'éteint, et le voile de texte — alors en
 *     `to-br` — s'annulait précisément sur la rangée de pictos, en bas à
 *     droite du bloc. Mesuré à 768 px : 1,50:1 sur le picto Électricité.
 *
 *     Trois changements, mesurés ensemble :
 *       1. voile uniforme (navy-950 à 15 % sur tout le cadre) supprimé —
 *          au-delà de 80 % le dégradé est éteint, ce voile était donc le
 *          seul élément à assombrir le lettrage du fourgon (-19 %), or ce
 *          lettrage est précisément ce que cette photo apporte ;
 *       2. dégradé directionnel 92 % -> 15 % ;
 *       3. <HeroTextVeil /> passé de `to-br` (fondu diagonal jusqu'à 0) à
 *          `to-r` avec plateau : 70 % jusqu'à 60 % de la largeur du bloc,
 *          puis extinction. Le plateau couvre toute la hauteur du texte,
 *          pictos compris ; l'extinction à 60 % évite de déborder sur
 *          l'avant du fourgon, que le rectangle du bloc recouvre à 1440 px.
 *
 *     Pire cas sur toute l'étendue de chaque texte, aux trois paliers
 *     1440/1024/768 : minimum 3,46:1 (H1 « Climatisation • Piscine » à
 *     1024 px), tous les textes et pictos au-dessus de leur seuil (4,5:1
 *     texte, 3:1 graphique). Assombrissement du sujet à 1440 px : villa
 *     -5 %, capot -9 %, calandre -50 %, lettrage du fourgon 0 %.
 *   — précharge la variante à la largeur d'écran réelle (`<link
 *     rel="preload">`, `href` calculé une fois au montage — pas de
 *     ré-écoute sur `resize`, voir commentaire plus bas) : c'est l'image la
 *     plus lourde du site, toujours au-dessus de la ligne de flottaison.
 */
export function HeroBackgroundPhoto({ slot, fallbackSlot, alt }) {
  const fallback = clientPhotoMeta(fallbackSlot)
  const [bg, setBg] = useState(() => clientPhotoMeta(slot) || fallback)
  const onError = () => fallback?.src && bg?.src !== fallback.src && setBg(fallback)

  /* Ce <link> est capturé par le prérendu (scripts/prerender.js) : la valeur
     posée ici se retrouve figée dans le HTML servi à TOUS les visiteurs, pas
     seulement à celui dont le navigateur exécute cet effet. L'ancien calcul
     (`window.innerWidth × devicePixelRatio`, sans `media`) figeait donc la
     variante du viewport de Puppeteer — 800w — et tout appareil dont le
     srcset résout autrement payait un double téléchargement : la 800w
     préchargée PLUS la variante réellement affichée (mesuré : 1200w sur
     desktop et sur les téléphones à DPR ≥ 2,2).

     Nouveau contrat, déterministe (aucune lecture de `window`, donc snapshot
     et exécution client produisent le même HTML) :
       — `media="(min-width: 801px)"`, plus grande variante. Au-delà de
         800 px CSS, `needed = largeur × DPR > 800` quelle que soit la
         densité : la résolution du srcset (sizes="100vw") choisit toujours
         la plus grande variante — le préchargement est exact pour tous ces
         écrans.
       — en dessous de 801 px : pas de préchargement. Aucune variante unique
         n'est juste pour tout le parc mobile (375×2 → 800w, 412×3 → 1200w…)
         et un préchargement erroné coûte une image entière en double. Le
         manque à gagner est faible : l'<img> eager/fetchpriority=high est
         dans le HTML prérendu, le scanner de préchargement la découvre en
         parsant — et sur mobile, l'élément LCP est le texte du héros, pas
         la photo (Lighthouse, 09/2026).
     `imagesrcset`/`imagesizes` restent volontairement absents : posés en
     plus de `href`, certains navigateurs lancent un préchargement d'après
     `imagesrcset` avant que `imagesizes` ne soit en place — deux
     téléchargements au lieu d'un. */
  /* 15/10/2026 : le préchargement vise la variante AVIF, celle que choisit
     désormais le <picture> ci-dessous ; précharger le WebP ferait
     télécharger la photo deux fois. `type` fait ignorer le préchargement
     aux navigateurs sans AVIF, qui retombent sur le WebP de l'<img>. */
  useEffect(() => {
    const set = bg?.avifSrcSet || bg?.srcSet
    if (!set) return

    const entries = set
      .split(',')
      .map((s) => {
        const [url, w] = s.trim().split(' ')
        return { url, width: parseInt(w, 10) }
      })
      .sort((a, b) => a.width - b.width)

    const href = entries[entries.length - 1].url

    let link = document.head.querySelector('link[data-hero-preload]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.setAttribute('data-hero-preload', '')
      document.head.appendChild(link)
    }
    link.media = '(min-width: 801px)'
    link.type = bg?.avifSrcSet ? 'image/avif' : ''
    if (!link.type) link.removeAttribute('type')
    link.href = href

    return () => link?.remove()
  }, [bg])

  return (
    <>
      <picture>
        {bg?.avifSrcSet && <source type="image/avif" srcSet={bg.avifSrcSet} sizes="100vw" />}
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

      {/* Le tiers gauche de la photo (ciel nocturne, végétation) est la zone
          que recouvre le bloc de texte de chaque héros appelant. Pas de
          second voile uniforme par-dessus : cf. l'en-tête du fichier. */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-950/15 from-0% to-transparent to-80% sm:block" />
    </>
  )
}

/* Fondu des bords haut et bas du voile de texte. Exprimé en pixels et non
   en pourcentage : la marge verticale du voile est fixe (-inset-y-12, soit
   48 px), donc un fondu de 44 px tient entièrement dans cette marge, quelle
   que soit la hauteur du bloc de texte — le texte lui-même reste toujours
   sur le plateau à pleine opacité, sur l'accueil comme sur Contact.
   Sans ce fondu, le plateau horizontal laisse un bord franc visible en
   travers de la photo, juste sous la rangée de pictos. */
const VEIL_EDGE_FADE =
  'linear-gradient(to bottom, transparent 0px, black 44px, black calc(100% - 44px), transparent 100%)'

/** Voile local, propre au bloc de texte d'un héros utilisant
 *  `<HeroBackgroundPhoto />` : suit le texte plutôt que de couvrir toute la
 *  photo. À poser en premier enfant d'un conteneur `relative`.
 *
 *  Plateau horizontal à 75 % jusqu'à 85 % de la largeur du bloc, puis
 *  extinction jusqu'au bord droit. Le plateau vaut sur toute la hauteur :
 *  c'est ce qui protège la rangée de pictos, en bas du bloc, que l'ancien
 *  fondu diagonal (`to-br`, jusqu'à 0) laissait sans voile — voir le détail
 *  et les mesures dans l'en-tête du fichier.
 *
 *  09/10/2026 — un seul réglage pour les deux pages appelantes : le
 *  paramètre `plateau` (60 % Accueil / 72 % Contact) a disparu, c'était le
 *  dernier coefficient réglé page par page. Il ne protégeait de toute façon
 *  aucune des deux : la ligne la plus longue du H1 de l'Accueil mesure 80 %
 *  de la largeur de son bloc, l'accroche de Contact davantage encore. Le
 *  plateau couvre désormais tout le texte (85 %), l'extinction tient dans
 *  les 15 % de vide à droite des lignes — mesuré, aucun glyphe au-delà. */
export function HeroTextVeil({ from = 'sm' }) {
  /* Deux classes littérales plutôt qu'une interpolation : une classe
     assemblée dynamiquement (`hidden ${from}:block`) échappe à l'analyse
     statique de Tailwind et se retrouve purgée en production — le même
     piège que celui déjà documenté sur `object-[...]` dans PageHero.jsx.
     `sm` pour les héros de HeroBackgroundPhoto (photo de fond dès 640 px),
     `lg` pour ceux de PageHero en mode plein cadre (photo à partir de
     1024 px seulement : en dessous, le texte est sur marine plein et le
     voile n'aurait rien à corriger). */
  const visibility = from === 'lg' ? 'hidden lg:block' : 'hidden sm:block'
  return (
    <div
      className={`pointer-events-none absolute -inset-x-3 -inset-y-12 -z-10 bg-gradient-to-r from-navy-950/75 from-0% via-navy-950/75 via-[85%] to-transparent to-100% ${visibility}`}
      style={{ maskImage: VEIL_EDGE_FADE, WebkitMaskImage: VEIL_EDGE_FADE }}
    />
  )
}
