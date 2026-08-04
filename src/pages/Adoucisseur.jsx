import PageHero from '../components/PageHero.jsx'
import {
  ProductSpotlight,
  InfoBlock,
  Process,
  Faq,
  GuaranteeBar,
  CtaSection,
} from '../components/Blocks.jsx'
import { adoucisseur as data, services } from '../data/site.js'

/**
 * Sous-page du métier Traitement de l'eau, consacrée à l'adoucisseur.
 * Reprend le produit phare (Pentair Foleo) déjà défini pour la page
 * Traitement de l'eau, puis approfondit avantages, installation et FAQ.
 */
export default function Adoucisseur() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Traitement de l'eau", to: '/traitement-de-l-eau' }, { label: data.title }]}
        title={data.title}
        subtitle={data.tagline}
        intro={data.intro}
        photo={{ ...data.hero, alt: 'Adoucisseur Pentair Foleo installé par PCE' }}
      />

      <ProductSpotlight product={services.traitementEau.product} />

      <InfoBlock info={{ heading: data.avantages.heading, lead: data.avantages.lead, bullets: data.avantages.bullets }} />

      <Process
        steps={data.installation.steps}
        title={data.installation.heading}
        lead={data.installation.lead}
      />

      <Faq
        items={data.faq}
        title="Adoucisseur : vos questions"
        lead="Les interrogations qui reviennent le plus souvent chez nos clients de Lorgues et de la Dracénie au sujet de l'adoucisseur d'eau."
      />

      <GuaranteeBar />

      <CtaSection
        title="Un projet d'adoucisseur d'eau ?"
        text="Nous mesurons la dureté de votre eau sur place et vous proposons l'appareil réellement adapté à votre consommation, sans surdimensionnement inutile."
      />
    </>
  )
}
