import { useState } from 'react'

/**
 * Logo de marque installée, ou badge d'aide financière.
 *
 * Les fichiers ne sont pas encore livrés : tant que l'image est absente,
 * `onError` bascule sur un cadre neutre portant le nom en toutes lettres,
 * plutôt que d'afficher une image cassée. Même mécanisme que la photo de
 * fond du héros de l'accueil.
 *
 * ⚠️ Ces marques sont installées par PCE sans accord de distribution : ne
 * jamais les présenter comme « partenaires » dans le libellé environnant.
 */
export default function BrandLogo({ name, src, className = '', grayscale = false }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <span
        /* flex et non `grid place-items-center` : ce dernier dimensionne le
           texte en max-content, qui refuse alors de passer à la ligne et
           déborde du cadre sur les noms longs. */
        className={`flex items-center justify-center break-words rounded-lg border border-navy-200
                    bg-navy-50 p-2 text-center text-label font-bold uppercase leading-tight
                    text-navy-600 ${className}`}
      >
        {name}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-auto object-contain transition duration-300 ${
        grayscale ? 'grayscale hover:grayscale-0' : ''
      } ${className}`}
    />
  )
}
