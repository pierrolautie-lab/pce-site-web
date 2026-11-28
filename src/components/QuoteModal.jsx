import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { trackEvent } from './Analytics.jsx'
import { company } from '../data/site.js'

/* -------------------------------------------------------------------------
   Formulaire de devis en fenêtre, ouvert depuis le bouton du héros des pages
   locales (guide SEO client du 25/11/2026 : « bouton Demandez un devis
   gratuit qui ouvre en pop-up directement sur la page »), pour ne pas faire
   quitter la page au visiteur.

   Même envoi que le formulaire de /contact (pas de backend : le client mail
   s'ouvre avec la demande préremplie), même validation. Le métier et la
   commune viennent de la page : le visiteur n'a pas à les ressaisir.

   <dialog> natif + showModal() : focus piégé, touche Échap et fond inerte
   gérés par le navigateur. Rien n'est affiché tant qu'il est fermé, donc le
   prérendu et la mise en page du héros ne changent pas.
---------------------------------------------------------------------------*/

const EMPTY = { nom: '', email: '', tel: '', message: '', rgpd: false }

function validate(form) {
  const e = {}
  if (!form.nom.trim()) e.nom = 'Merci d’indiquer votre nom.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'Adresse e-mail invalide.'
  if (form.tel && !/^[\d\s+().-]{9,}$/.test(form.tel)) e.tel = 'Numéro de téléphone invalide.'
  if (form.message.trim().length < 15) e.message = 'Décrivez votre besoin en quelques mots (15 caractères minimum).'
  if (!form.rgpd) e.rgpd = 'Merci d’accepter que nous utilisions vos coordonnées pour vous répondre.'
  return e
}

const field =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-[14px] text-navy-800 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-800'
const labelCls = 'mb-1.5 block text-label font-bold uppercase text-navy-600'
const errorCls = 'mt-1.5 text-[12px] font-medium text-navy-700'

/** Bouton du héros + sa fenêtre. `sujet` (métier) et `ville` sont transmis tels quels dans le message. */
export function QuoteButton({ label, sujet, ville, className = 'btn-azure' }) {
  const dialogRef = useRef(null)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const open = () => {
    setSent(false)
    setErrors({})
    dialogRef.current?.showModal()
    trackEvent('quote_modal_open', { form_subject: sujet, city: ville })
  }
  const close = () => dialogRef.current?.close()

  /* Clic sur le fond (hors du panneau) : ferme la fenêtre. */
  useEffect(() => {
    const d = dialogRef.current
    if (!d) return undefined
    const onClick = (e) => {
      if (e.target === d) d.close()
    }
    d.addEventListener('click', onClick)
    return () => d.removeEventListener('click', onClick)
  }, [])

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    const subject = `Demande de devis — ${sujet} — ${ville}`
    const body = [
      `Nom : ${form.nom}`,
      `E-mail : ${form.email}`,
      form.tel && `Téléphone : ${form.tel}`,
      `Commune du chantier : ${ville}`,
      `Sujet : ${sujet}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    trackEvent('form_submit', { form_subject: sujet, form_location: 'quote_modal', city: ville })
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <>
      <button type="button" onClick={open} className={className} aria-haspopup="dialog">
        {label}
        <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="quote-title"
        className="m-auto w-[calc(100%-2rem)] max-w-xl rounded-2xl bg-white p-0 text-navy-800 shadow-2xl backdrop:bg-navy-950/70"
      >
        <div className="relative max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-800"
          >
            <Icon name="close" className="h-5 w-5" strokeWidth={2.2} />
          </button>

          {sent ? (
            <div className="flex flex-col items-start py-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-800 text-white">
                <Icon name="check" className="h-6 w-6" strokeWidth={2.6} />
              </span>
              <h2 id="quote-title" className="mt-5 text-[20px] font-black uppercase tracking-tight text-navy-800">
                Merci, votre message est prêt à partir
              </h2>
              <p className="mt-3 text-[14px] leading-[1.75] text-navy-500">
                Votre messagerie va s’ouvrir avec votre demande déjà rédigée à destination de PCE : il ne
                reste qu’à l’envoyer. Si rien ne s’ouvre, écrivez-nous à{' '}
                <a href={`mailto:${company.email}`} className="font-bold text-navy-800 underline">
                  {company.email}
                </a>{' '}
                ou appelez le{' '}
                <a href={company.phoneHref} className="font-bold text-navy-800 underline">
                  {company.phone}
                </a>
                .
              </p>
              <button type="button" onClick={close} className="btn-outline mt-6">
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2 id="quote-title" className="pr-10 text-[20px] font-black uppercase tracking-tight text-navy-800">
                Demande de devis gratuit
              </h2>
              <p className="mt-2 text-[14px] leading-[1.7] text-navy-500">
                {sujet}, {ville}. Les champs marqués d’un astérisque sont obligatoires.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="q-nom">Nom et prénom *</label>
                  <input id="q-nom" type="text" autoComplete="name" value={form.nom} onChange={update('nom')} className={field} />
                  {errors.nom && <p className={errorCls}>{errors.nom}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="q-tel">Téléphone</label>
                  <input id="q-tel" type="tel" autoComplete="tel" value={form.tel} onChange={update('tel')} className={field} />
                  {errors.tel && <p className={errorCls}>{errors.tel}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="q-email">Adresse e-mail *</label>
                  <input id="q-email" type="email" autoComplete="email" value={form.email} onChange={update('email')} className={field} />
                  {errors.email && <p className={errorCls}>{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="q-message">Votre besoin *</label>
                  <textarea
                    id="q-message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Type de logement, équipement concerné, panne ou projet…"
                    className={`${field} resize-y`}
                  />
                  {errors.message && <p className={errorCls}>{errors.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.rgpd}
                      onChange={update('rgpd')}
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-navy-300 accent-navy-800"
                    />
                    <span className="text-[12.5px] leading-[1.6] text-navy-500">
                      J’accepte que mes coordonnées soient utilisées par PCE dans le seul but de répondre à ma
                      demande. Elles ne sont ni cédées ni revendues. *
                    </span>
                  </label>
                  {errors.rgpd && <p className={errorCls}>{errors.rgpd}</p>}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-gold">
                  Envoyer ma demande
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
                </button>
                <a href={company.phoneHref} className="btn-outline">
                  <Icon name="phone" className="h-4 w-4" strokeWidth={1.9} />
                  {company.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  )
}
