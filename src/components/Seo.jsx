import { useEffect } from 'react'
import { company } from '../data/site.js'

/** Met à jour une balise <meta> existante (par name ou property), sans en créer de nouvelle. */
function setMeta(selector, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/** Idem pour un <link> (ex. canonical), qui utilise `href` et non `content`. */
function setLink(selector, href) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('href', href)
}

/**
 * Titre et méta-description propres à chaque page.
 *
 * Le site est une SPA : sans ce composant, toutes les pages partagent le
 * <title> et la <meta description> statiques d'index.html. Chaque page
 * l'appelle avec son propre titre et sa propre description ; index.html
 * garde ces mêmes balises pour le premier rendu (avant que React ne
 * s'exécute) et pour la page d'accueil.
 */
export default function Seo({ title, description, path = '', noindex = false, standalone = false }) {
  useEffect(() => {
    /* `standalone` : le titre est déjà complet (utilisé pour l'accueil, qui
       reprend le <title> riche d'index.html plutôt que le gabarit
       « Page — PCE » des autres pages). */
    const fullTitle = standalone ? title : `${title} — ${company.name}`
    const url = `${company.url}${path}`

    document.title = fullTitle
    setMeta('meta[name="description"]', description)
    setLink('link[rel="canonical"]', url)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="robots"]', noindex ? 'noindex, follow' : 'index, follow')

    /* Remet les valeurs par défaut du site (celles d'index.html) en quittant
       la page, pour ne pas laisser le titre d'une page métier « fuiter »
       sur la suivante avant que son propre Seo ne s'exécute. */
    return () => {
      document.title = `${company.name} — Plomberie, chauffage, climatisation, électricité et piscine à Lorgues (83)`
      setMeta('meta[name="robots"]', 'index, follow')
    }
  }, [title, description, path, noindex, standalone])

  return null
}
