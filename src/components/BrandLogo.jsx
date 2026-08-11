import { useState } from 'react'

/**
 * Logo de marque installée, ou badge d'aide financière.
 *
 * Les fichiers ne sont pas encore livrés : tant que l'image est absente,
 * `onError` bascule sur un repli textuel portant le nom en toutes lettres,
 * plutôt que d'afficher une image cassée. Même mécanisme que la photo de
 * fond du héros de l'accueil.
 *
 * ⚠️ Ces marques sont installées par PCE sans accord de distribution : ne
 * jamais les présenter comme « partenaires » dans le libellé environnant.
 *
 * `plain` : repli sans cadre ni fond, dans la même typographie que les
 * titres de carte (`ServiceBrandsRow`) — un nom bien composé passe mieux
 * qu'un cadre en attente. Réservé à ce contexte ; le repli par défaut
 * (cadre neutre) reste inchangé pour les autres usages (grille d'aides de
 * Piscine, etc.).
 */
export default function BrandLogo({ name, src, className = '', grayscale = false, plain = false }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    if (plain) {
      return (
        <span
          className={`flex w-full items-center justify-center text-center font-black leading-none
                      tracking-tight text-navy-800 ${className}`}
        >
          {name}
        </span>
      )
    }
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
