import PageHero from './PageHero.jsx'
import {
  Prestations,
  InfoBlock,
  GuaranteeBar,
  Benefits,
  TrustBadges,
  Expertise,
  Process,
  Faq,
  CtaBand,
  CtaSection,
  OtherServices,
} from './Blocks.jsx'
import { serviceList } from '../data/site.js'

/**
 * Gabarit commun aux cinq pages métier.
 *
 * L'ossature reprend strictement la maquette de référence, dans cet ordre :
 *   1. en-tête + navigation + bouton Contact   (voir Layout / Header)
 *   2. hero : titre en capitales, accroche, paragraphe, photo, filigrane PCE
 *   3. « Nos prestations » : 6 items, icônes circulaires marine
 *   4. bloc deux colonnes : checklist à gauche, encart TVA marine à droite
 *   5. bandeau de garanties : 4 items, icônes cerclées fines
 *
 * Les sections rédactionnelles (expertise, méthode, FAQ) viennent ensuite,
 * sans s'intercaler dans cette séquence.
 *
 * `children` remplace le bloc deux colonnes — c'est ce que fait la page
 * Piscine, qui lui substitue trois colonnes suivies d'un bandeau TVA.
 */
export default function ServicePage({ service, children, before }) {
  return (
    <>
      {/* 2 — Hero */}
      <PageHero
        breadcrumb={service.title}
        title={service.title}
        subtitle={service.tagline}
        intro={service.intro}
        photo={{ ...service.hero, alt: `${service.title} — PCE, Lorgues` }}
      />

      {/* 3 — Nos prestations */}
      <Prestations items={service.prestations} />

      {/* Rangée de bénéfices, sur les pages qui en définissent une */}
      {service.benefits && <Benefits items={service.benefits} />}

      {/* Sections propres à la page (produit phare, colonnes…) */}
      {before}

      {/* 4 — Bloc info (deux colonnes, ou variante propre à la page) */}
      {children ?? <InfoBlock info={service.info} />}

      {/* 5 — Bandeau de garanties */}
      <GuaranteeBar />

      {/* Qualifications : Qualigaz, Qualipac, décennale, RC Pro */}
      <TrustBadges />

      {/* Bandeau d'appel bleu, repris des maquettes */}
      <CtaBand />

      {/* --- Contenu rédactionnel complémentaire --- */}
      <Expertise data={service.expertise} />

      <Process
        steps={service.process}
        title={`Notre méthode ${service.title.toLowerCase()}`}
        lead="Chaque chantier suit le même déroulé, du premier appel jusqu'au suivi après travaux. Vous savez à tout moment où vous en êtes."
      />

      <Faq
        items={service.faq}
        title={`${service.title} : vos questions`}
        lead={`Les interrogations qui reviennent le plus souvent chez nos clients de Lorgues et de la Dracénie sur le métier ${service.title.toLowerCase()}.`}
      />

      <OtherServices current={service.slug} items={serviceList} />

      <CtaSection
        title={`Un projet ${service.title.toLowerCase()} ?`}
        text="Parlez-nous de votre installation : nous nous déplaçons pour un relevé sur site et nous établissons un devis détaillé, gratuit et sans engagement, dans tout le Var."
      />
    </>
  )
}
