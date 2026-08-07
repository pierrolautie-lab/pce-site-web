import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { company, legal } from '../data/site.js'

export default function ConditionsGenerales() {
  return (
    <>
      <Seo
        title="Conditions générales"
        description="Conditions générales de vente et de prestation de PCE, artisan à Lorgues (83) : devis, délais d'intervention, garantie décennale, paiement."
        path="/conditions-generales"
      />

      <PageHero
        breadcrumb="Conditions générales"
        title="Conditions générales"
        subtitle="Modalités de nos devis et de nos interventions"
        actions={false}
        showReassurance={false}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Devis
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Tout devis établi par {legal.denomination} ({legal.nomCommercial}) est gratuit et
                sans engagement. Il est valable 30 jours à compter de sa date d'émission, sauf
                mention contraire indiquée sur le document. Les travaux ne débutent qu'après
                acceptation écrite du devis par le client, précédée le cas échéant du versement
                d'un acompte dont le montant est précisé sur le devis.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Délais d'intervention
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Les délais d'intervention communiqués au client sont donnés à titre indicatif et
                peuvent varier selon la nature des travaux, la disponibilité des matériaux et les
                conditions d'accès au chantier. En cas d'urgence (dépannage), {legal.nomCommercial}{' '}
                s'efforce d'intervenir dans les meilleurs délais, sans garantie de créneau fixe.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Garantie décennale
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Les travaux réalisés par {legal.nomCommercial} sont couverts par une assurance
                garantie décennale, conformément aux articles 1792 et suivants du Code civil.
                L'attestation d'assurance est remise au client avec le devis, avant le début des
                travaux.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Modalités de paiement
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Le paiement s'effectue selon les modalités précisées sur le devis ou la facture
                (acompte à la commande, solde à la réception des travaux, ou échéancier convenu
                avec le client). Les moyens de paiement acceptés sont indiqués sur chaque facture.
                Tout retard de paiement peut donner lieu à des pénalités, conformément à la
                réglementation en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Droit applicable
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Les présentes conditions générales sont soumises au droit français. En cas de
                litige et à défaut de résolution amiable, les tribunaux du Var seront seuls
                compétents.
              </p>
            </div>

            <p className="text-[13px] text-navy-400">
              Voir aussi nos{' '}
              <Link to="/mentions-legales" className="font-semibold text-azure-500 underline">
                mentions légales
              </Link>{' '}
              et notre{' '}
              <Link to="/politique-de-confidentialite" className="font-semibold text-azure-500 underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
