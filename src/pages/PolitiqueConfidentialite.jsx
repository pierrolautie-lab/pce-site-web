import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { company, legal } from '../data/site.js'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description="Politique de confidentialité du site pcevar.fr : données collectées, finalité, durée de conservation et droits RGPD auprès de PCE, artisan à Lorgues (83)."
        path="/politique-de-confidentialite"
      />

      <PageHero
        breadcrumb="Politique de confidentialité"
        title="Politique de confidentialité"
        subtitle="Comment PCE traite vos données personnelles"
        actions={false}
        showReassurance={false}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Responsable du traitement
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                {legal.denomination} ({legal.nomCommercial}), {legal.siegeSocial.street},{' '}
                {legal.siegeSocial.zip} {legal.siegeSocial.city}, est responsable du traitement des
                données personnelles collectées sur le site pcevar.fr. Pour toute question,
                contactez-nous à{' '}
                <a href={`mailto:${company.email}`} className="font-semibold text-navy-800 underline">
                  {company.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Données collectées
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Lorsque vous utilisez le formulaire de contact du site, nous collectons les
                données que vous nous transmettez volontairement : nom, prénom, numéro de
                téléphone, adresse e-mail et le contenu de votre message.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Finalité du traitement
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Ces données sont collectées dans le seul but de répondre à vos demandes de devis
                ou d'information, et de vous recontacter dans le cadre de votre projet.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Base légale
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Le traitement de vos données repose sur votre consentement, exprimé lors de
                l'envoi du formulaire de contact.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Destinataires des données
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Vos données sont destinées exclusivement à {legal.denomination} ({legal.nomCommercial}
                ). Elles ne sont ni cédées, ni vendues, ni transmises à des tiers à des fins
                commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Durée de conservation
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre
                dernier contact, sauf obligation légale contraire.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Vos droits
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de
                suppression, d'opposition et de portabilité sur vos données personnelles. Vous
                pouvez exercer ces droits en nous écrivant à{' '}
                <a href={`mailto:${company.email}`} className="font-semibold text-navy-800 underline">
                  {company.email}
                </a>{' '}
                ou par courrier à notre adresse d'exploitation : {company.address.street},{' '}
                {company.address.street2}, {company.address.zip} {company.address.city}.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Cookies
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Ce site n'utilise aucun cookie de suivi publicitaire ou de traçage tiers. Seuls des
                cookies techniques, nécessaires au bon fonctionnement du site, sont susceptibles
                d'être déposés.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Hébergement
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Le site pcevar.fr et les données qui y transitent sont hébergés par{' '}
                {legal.hebergeur.nom}, {legal.hebergeur.adresse}.
              </p>
            </div>

            <p className="text-[13px] text-navy-400">
              Voir aussi nos{' '}
              <Link to="/mentions-legales" className="font-semibold text-azure-500 underline">
                mentions légales
              </Link>{' '}
              et nos{' '}
              <Link to="/conditions-generales" className="font-semibold text-azure-500 underline">
                conditions générales
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
