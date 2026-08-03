import { useRef, useState } from 'react'
import { photo, photoFallback } from '../data/site.js'
import { clientPhoto } from '../data/photos.js'

/**
 * Photographie du site.
 *
 * Ordre de priorité de la source :
 *   1. la vraie photo du client, si le slot (`lock`) est renseigné
 *      dans src/data/photos.js ;
 *   2. la photo d'illustration par mot-clé ;
 *   3. un service de repli, si la source précédente renvoie une erreur.
 *
 * Un aplat animé occupe la place pendant le chargement, ce qui évite tout
 * décalage de mise en page. Le repli est déclenché par l'événement `error`
 * de l'image — et non par une minuterie, qui se déclencherait à tort sur les
 * images en chargement différé situées loin sous la ligne de flottaison.
 */
export default function Photo({
  tags,
  lock,
  alt,
  w = 1200,
  h = 900,
  priority = false,
  className = '',
  imgClassName = '',
  rounded = 'rounded-2xl',
}) {
  const real = clientPhoto(lock)

  const [src, setSrc] = useState(real || photo(tags, lock, w, h))
  const [loaded, setLoaded] = useState(false)
  const stage = useRef(real ? 'client' : 'primary')

  /* Chaque échec fait descendre d'un cran dans la liste des sources. */
  const handleError = () => {
    if (stage.current === 'fallback') {
      setLoaded(true) // plus rien à tenter : on laisse l'aplat marine
      return
    }
    stage.current = 'fallback'
    setSrc(photoFallback(lock, w, h))
  }

  return (
    <div className={`relative overflow-hidden ${rounded} bg-navy-100 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-100 via-navy-200 to-navy-100" />
      )}
      <img
        src={src}
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
