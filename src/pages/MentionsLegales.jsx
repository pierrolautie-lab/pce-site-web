import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { company, legal } from '../data/site.js'

/**
 * Mentions légales. Le siège social (Coubron, 93) est l'adresse
 * administrative de la SAS ; l'adresse de Lorgues (83) est le lieu
 * d'exploitation où l'activité est réellement exercée — les deux figurent
 * ci-dessous, conformément à l'article 6-III de la LCEN.
 */
export default function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales du site pcevar.fr : éditeur, hébergeur et informations juridiques de PCE, artisan à Lorgues (83)."
        path="/mentions-legales"
      />

      <PageHero
        breadcrumb="Mentions légales"
        title="Mentions légales"
        subtitle="Informations juridiques du site pcevar.fr"
        actions={false}
        showReassurance={false}
      />

      <section className="section bg-white">
        <div className="container-pce">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Éditeur du site
              </h2>
              <div className="mt-4 space-y-1.5 text-[14.5px] leading-[1.85] text-navy-600">
                <p>
                  Dénomination sociale : <strong className="text-navy-800">{legal.denomination}</strong>{' '}
                  (nom commercial : {legal.nomCommercial})
                </p>
                <p>Forme juridique : {legal.formeJuridique}</p>
                <p>Capital social : {legal.capital}</p>
                <p>
                  Siège social : {legal.siegeSocial.street}, {legal.siegeSocial.zip}{' '}
                  {legal.siegeSocial.city}
                </p>
                <p>
                  Adresse d'exploitation : {company.address.street}, {company.address.street2},{' '}
                  {company.address.zip} {company.address.city}
                </p>
                <p>RCS : {legal.rcs} (immatriculée le {legal.dateImmatriculation})</p>
                <p>SIREN : {legal.siren}</p>
                <p>SIRET (siège) : {legal.siret}</p>
                <p>TVA intracommunautaire : {legal.tva}</p>
                <p>Activités : {legal.activites}</p>
                <p>
                  Téléphone :{' '}
                  <a href={company.phoneHref} className="font-semibold text-navy-800 underline">
                    {company.phone}
                  </a>
                </p>
                <p>
                  E-mail :{' '}
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy-800 underline">
                    {company.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Directeur de la publication
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                {legal.directeurPublication}
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Hébergeur
              </h2>
              <div className="mt-4 space-y-1.5 text-[14.5px] leading-[1.85] text-navy-600">
                <p>{legal.hebergeur.nom}</p>
                <p>{legal.hebergeur.adresse}</p>
                <p>
                  <a
                    href={legal.hebergeur.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-navy-800 underline"
                  >
                    {legal.hebergeur.siteLabel}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Propriété intellectuelle
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                L'ensemble des éléments du site pcevar.fr (textes, photographies, logo, mise en
                page, structure) est la propriété de {legal.denomination} ou de ses partenaires,
                sauf mention contraire. Toute reproduction, représentation, modification ou
                adaptation, totale ou partielle, de ces éléments, par quelque procédé que ce soit,
                sans l'autorisation préalable écrite de {legal.denomination}, est interdite et
                constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Limitation de responsabilité
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                {legal.denomination} s'efforce d'assurer l'exactitude et la mise à jour des
                informations diffusées sur ce site, mais ne peut garantir l'absence d'erreur ou
                d'omission. {legal.denomination} ne pourra être tenue responsable des dommages
                directs ou indirects résultant de l'accès ou de l'utilisation du site, ni des
                éventuelles interruptions ou indisponibilités du service, notamment liées à des
                opérations de maintenance ou à des causes échappant à son contrôle.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold uppercase tracking-[.05em] text-azure-500">
                Droit applicable
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-navy-600">
                Les présentes mentions légales sont soumises au droit français. En cas de litige
                et à défaut de résolution amiable, les tribunaux du Var seront seuls compétents.
              </p>
            </div>

            <p className="text-[13px] text-navy-400">
              Voir aussi notre{' '}
              <Link to="/politique-de-confidentialite" className="font-semibold text-azure-500 underline">
                politique de confidentialité
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
