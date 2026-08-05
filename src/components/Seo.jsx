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
/** Construit le fil d'Ariane BreadcrumbList (schema.org) à partir des libellés/chemins de la page courante. */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${company.url}${it.path}`,
    })),
  }
}

/** Construit la donnée structurée Service (schema.org) pour une page métier. */
export function serviceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: `${name} — PCE`,
    description,
    url: `${company.url}${path}`,
    areaServed: ['Lorgues', 'Dracénie', 'Golfe de Saint-Tropez'],
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: company.name,
      telephone: company.phoneHref.replace('tel:', ''),
      url: company.url,
    },
  }
}

/** Construit la donnée structurée FAQPage (schema.org) à partir d'une liste de { q, a }. */
export function faqPageSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.a,
      },
    })),
  }
}

/** Construit la donnée structurée Offer (schema.org) pour un devis gratuit sur une page métier. */
export function offerSchema({ name, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `Devis gratuit — ${name}`,
    price: '0',
    priceCurrency: 'EUR',
    url: `${company.url}${path}`,
    areaServed: ['Lorgues', 'Dracénie', 'Golfe de Saint-Tropez'],
    seller: {
      '@type': 'HomeAndConstructionBusiness',
      name: company.name,
      url: company.url,
    },
  }
}

export default function Seo({
  title,
  description,
  path = '',
  noindex = false,
  standalone = false,
  jsonLd = null,
}) {
  useEffect(() => {
    /* `standalone` : le titre est déjà complet (utilisé pour l'accueil, qui
       reprend le <title> riche d'index.html plutôt que le gabarit
       « Page — PCE » des autres pages). */
    const fullTitle = standalone ? title : `${title} — ${company.name}`
    const url = `${company.url}${path}`

    document.title = fullTitle
    setMeta('meta[name="description"]', description)
    setLink('link[rel="canonical"]', url)
    setLink('link[rel="alternate"][hreflang="fr"]', url)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="robots"]', noindex ? 'noindex, follow' : 'index, follow')

    /* Injecte les données structurées propres à la page (Service,
       BreadcrumbList...) dans un <script> dédié, retiré au démontage pour ne
       pas s'accumuler d'une page à l'autre. */
    let scriptEl = null
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.setAttribute('data-seo-jsonld', 'page')
      scriptEl.textContent = JSON.stringify(entries.length === 1 ? entries[0] : entries)
      document.head.appendChild(scriptEl)
    }

    /* Remet les valeurs par défaut du site (celles d'index.html) en quittant
       la page, pour ne pas laisser le titre d'une page métier « fuiter »
       sur la suivante avant que son propre Seo ne s'exécute. */
    return () => {
      document.title = `${company.name} — Plomberie, chauffage, climatisation, électricité et piscine à Lorgues (83)`
      setMeta('meta[name="robots"]', 'index, follow')
      if (scriptEl) scriptEl.remove()
    }
  }, [title, description, path, noindex, standalone, jsonLd])

  return null
}
