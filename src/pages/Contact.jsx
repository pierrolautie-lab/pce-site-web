import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { ReassuranceBar } from '../components/PageHero.jsx'
import { HeroBackgroundPhoto, HeroTextVeil } from '../components/HeroPhoto.jsx'
import Seo from '../components/Seo.jsx'
import { GuaranteeBar, SectionTitle } from '../components/Blocks.jsx'
import { trackEvent } from '../components/Analytics.jsx'
import { company, serviceList } from '../data/site.js'

/* Même photo, même mécanique que le héros de l'accueil (voir
   HeroPhoto.jsx) — le véhicule détouré posé directement sur le fond marine
   uni a été retiré : sans sol ni ombre portée, il flottait. */
const HERO_SLOT = 100
const HERO_FALLBACK_SLOT = 101
const HERO_ALT = "Les véhicules d'intervention PCE devant une villa dans le Var"

const SUBJECTS = [...serviceList.map((s) => s.title), 'Dépannage / urgence', 'Autre demande']

const EMPTY = { nom: '', email: '', tel: '', ville: '', sujet: '', message: '', rgpd: false }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Merci d’indiquer votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (form.tel && !/^[\d\s+().-]{9,}$/.test(form.tel)) e.tel = 'Numéro de téléphone invalide.'
    if (!form.sujet) e.sujet = 'Choisissez un sujet.'
    if (form.message.trim().length < 15) e.message = 'Décrivez votre besoin en quelques mots (15 caractères minimum).'
    if (!form.rgpd) e.rgpd = 'Merci d’accepter que nous utilisions vos coordonnées pour vous répondre.'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    /* ------------------------------------------------------------------
       Pas de backend branché pour l'instant : plutôt que de valider un
       formulaire qui n'envoie rien nulle part, on ouvre le client mail du
       visiteur avec un message prérempli à destination de PCE. Ce n'est
       qu'un palliatif — dès qu'un vrai backend (Formspree, EmailJS,
       fonction serverless) est en place, remplacez ce bloc par l'appel
       réseau correspondant et gardez le mailto en repli si l'appel échoue.
    ------------------------------------------------------------------- */
    const subject = `Demande de devis — ${form.sujet}`
    const body = [
      `Nom : ${form.nom}`,
      `E-mail : ${form.email}`,
      form.tel && `Téléphone : ${form.tel}`,
      form.ville && `Commune du chantier : ${form.ville}`,
      `Sujet : ${form.sujet}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    trackEvent('form_submit', { form_subject: form.sujet })
    setSent(true)
    setForm(EMPTY)
  }

  const field =
    'w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-[14px] text-navy-800 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-800'
  const labelCls = 'mb-2 block text-label font-bold uppercase text-navy-600'
  const errorCls = 'mt-1.5 text-[12px] font-medium text-navy-700'

  return (
    <>
      <Seo
        title="Contact"
        description="Demandez un devis gratuit à PCE, artisan à Lorgues (83) : plomberie, chauffage, climatisation, électricité, piscine et traitement de l'eau. Réponse rapide."
        path="/contact"
      />
      <Hero />
      <ReassuranceBar />

      {/* ---------------------------------------------- Coordonnées + form */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="container-pce">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* -------------------------------------------- Formulaire (en premier : c'est ce que le visiteur doit voir sans scroller) */}
            <div className="min-w-0 order-1 lg:order-2 lg:col-span-8">
              <div className="rounded-2xl bg-navy-50 p-8 ring-1 ring-navy-100 sm:p-10">
                {sent ? (
                  <div className="flex flex-col items-start py-8">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-navy-800 text-white">
                      <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
                    </span>
                    <h2 className="mt-6 text-[22px] font-black uppercase tracking-tight text-navy-800">
                      Merci, votre message est prêt à partir
                    </h2>
                    <p className="mt-4 max-w-lg text-[14.5px] leading-[1.8] text-navy-500">
                      Votre messagerie va s'ouvrir avec votre demande déjà rédigée à destination de
                      PCE : il ne reste qu'à l'envoyer. Si rien ne s'ouvre, écrivez-nous directement à{' '}
                      <a href={`mailto:${company.email}`} className="font-bold text-navy-800 underline">
                        {company.email}
                      </a>
                      . Pour une réponse immédiate, en particulier en cas d'urgence, appelez-nous au{' '}
                      <a href={company.phoneHref} className="font-bold text-navy-800 underline">
                        {company.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="btn-outline mt-8"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <SectionTitle align="left" title="Demander un devis" />
                    <p className="mt-4 text-[14px] leading-[1.75] text-navy-500">
                      Tous les champs marqués d'un astérisque sont obligatoires. Plus votre
                      description est précise, plus notre première réponse sera utile.
                    </p>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelCls} htmlFor="nom">
                          Nom et prénom *
                        </label>
                        <input
                          id="nom"
                          type="text"
                          value={form.nom}
                          onChange={update('nom')}
                          placeholder="Marie Durand"
                          className={field}
                        />
                        {errors.nom && <p className={errorCls}>{errors.nom}</p>}
                      </div>

                      <div>
                        <label className={labelCls} htmlFor="email">
                          Adresse e-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={update('email')}
                          placeholder="marie.durand@exemple.fr"
                          className={field}
                        />
                        {errors.email && <p className={errorCls}>{errors.email}</p>}
                      </div>

                      <div>
                        <label className={labelCls} htmlFor="tel">
                          Téléphone
                        </label>
                        <input
                          id="tel"
                          type="tel"
                          value={form.tel}
                          onChange={update('tel')}
                          placeholder="06 12 34 56 78"
                          className={field}
                        />
                        {errors.tel && <p className={errorCls}>{errors.tel}</p>}
                      </div>

                      <div>
                        <label className={labelCls} htmlFor="ville">
                          Commune du chantier
                        </label>
                        <input
                          id="ville"
                          type="text"
                          value={form.ville}
                          onChange={update('ville')}
                          placeholder="Lorgues"
                          className={field}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelCls} htmlFor="sujet">
                          Votre demande concerne *
                        </label>
                        <select
                          id="sujet"
                          value={form.sujet}
                          onChange={update('sujet')}
                          className={`${field} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232C4A63' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                          }}
                        >
                          <option value="">Choisissez un sujet…</option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.sujet && <p className={errorCls}>{errors.sujet}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelCls} htmlFor="message">
                          Votre message *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="Décrivez votre projet ou votre panne : type de logement, équipement concerné, ancienneté, délai souhaité…"
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
                            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-navy-300 text-navy-800 accent-navy-800"
                          />
                          <span className="text-[12.5px] leading-[1.65] text-navy-500">
                            J'accepte que mes coordonnées soient utilisées par PCE dans le seul but
                            de répondre à ma demande. Elles ne sont ni cédées ni revendues. *
                          </span>
                        </label>
                        {errors.rgpd && <p className={errorCls}>{errors.rgpd}</p>}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button type="submit" className="btn-gold">
                        Envoyer ma demande
                        <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
                      </button>
                      <a href={company.phoneHref} className="btn-outline">
                        <Icon name="phone" className="h-4 w-4" strokeWidth={1.9} />
                        Appeler directement
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* -------------------------------------------- Colonne infos (en dessous du formulaire) */}
            <aside className="min-w-0 order-2 lg:order-1 lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-navy-800 p-8 text-white">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-8 select-none text-[130px] font-black uppercase leading-none tracking-tighter text-white/[.05]"
                >
                  {company.name}
                </span>

                <div className="relative">
                  <h2 className="text-[17px] font-bold uppercase tracking-[.08em]">Nous joindre</h2>

                  <ul className="mt-7 space-y-6">
                    <li>
                      <a href={company.phoneHref} className="group flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white/60">
                          <Icon name="phone" className="h-4.5 w-4.5" strokeWidth={1.7} />
                        </span>
                        <span>
                          <span className="block text-label font-bold uppercase text-white/45">
                            Téléphone — urgences 7j/7
                          </span>
                          <span className="mt-1 block text-[22px] font-black leading-tight tracking-tight">
                            {company.phone}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href={`mailto:${company.email}`} className="group flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white/60">
                          <Icon name="mail" className="h-4.5 w-4.5" strokeWidth={1.7} />
                        </span>
                        <span>
                          <span className="block text-label font-bold uppercase text-white/45">
                            E-mail
                          </span>
                          <span className="mt-1 block text-[14.5px] font-semibold">
                            {company.email}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25">
                        <Icon name="mapPin" className="h-4.5 w-4.5" strokeWidth={1.7} />
                      </span>
                      <span>
                        <span className="block text-label font-bold uppercase text-white/45">
                          Atelier
                        </span>
                        <span className="mt-1 block text-[14.5px] leading-relaxed">
                          {company.address.street}
                          <br />
                          {company.address.street2}
                          <br />
                          {company.address.zip} {company.address.city}
                        </span>
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 border-t border-white/12 pt-6">
                    <p className="text-label font-bold uppercase text-white/45">
                      Horaires d'ouverture
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {company.hours.map((h) => (
                        <li key={h.d} className="flex justify-between gap-4 text-[13px]">
                          <span className="text-white/55">{h.d}</span>
                          <span className="font-semibold">{h.h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="signature mt-8 text-body">{company.tagline}</p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="mt-5 rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100">
                <h3 className="text-label font-bold uppercase text-navy-800">
                  Zone d'intervention
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-navy-500">
                  Nous intervenons depuis Lorgues sur tout le centre-Var et jusqu'au littoral, dans
                  un rayon d'environ quarante minutes.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {company.areas.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-white px-3 py-1.5 text-label font-semibold uppercase text-navy-600 ring-1 ring-navy-100"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <GuaranteeBar />
    </>
  )
}

/* ========================================================= HÉROS ======== */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="container-pce relative py-10 sm:py-8 lg:py-20">
        <nav aria-label="Fil d'Ariane" className="pt-6">
          <ol className="flex flex-wrap items-center gap-2 text-label font-bold uppercase text-white/45">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">›</span>
              <span className="text-white/80">Contact</span>
            </li>
          </ol>
        </nav>

        <div className="relative mt-6 max-w-2xl">
          <HeroTextVeil />

          <h1 className="font-display font-black uppercase leading-[1.12] tracking-[-.03em] text-[8.6vw] md:text-5xl lg:text-[3.6rem]">
            Contact
          </h1>

          <p className="mt-5 max-w-lg text-[18px] font-bold uppercase leading-[1.25] tracking-[.01em] text-azure-300 sm:text-[24px]">
            Un devis gratuit, détaillé et sans engagement
          </p>

          <p className="signature mt-4 text-kicker">{company.expertise}</p>

          <p className="mt-5 max-w-xl text-[14.5px] leading-[1.8] text-white/70">
            Décrivez-nous votre besoin en quelques lignes : nous vous rappelons rapidement pour
            préciser la demande et convenir d'une visite sur site. Pour une urgence, l'appel reste
            le moyen le plus rapide.
          </p>
        </div>
      </div>

      <HeroBackgroundPhoto slot={HERO_SLOT} fallbackSlot={HERO_FALLBACK_SLOT} alt={HERO_ALT} />
    </section>
  )
}
