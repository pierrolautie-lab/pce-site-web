/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Bleu marine — en-tête, héros, pied de page, bandeaux */
        navy: {
          50: '#F4F7FA', // fond de page gris-bleu
          100: '#E5EDF5',
          200: '#C7D7E8',
          300: '#9EB6D0',
          400: '#6E8DB2',
          500: '#456695',
          600: '#1F4A82',
          700: '#153567',
          800: '#0A2247', // marine principal
          900: '#021C41', // bandeaux et pied de page
          950: '#010C1E', // marine profond — barre de nav, héros
        },
        /* Bleu vif — titres de section, boutons primaires, liens */
        azure: {
          300: '#6FA9E8',
          400: '#5599E6', // bleu vif des mots-clés du héros
          500: '#1B6FC4', // bleu vif principal
          600: '#1459A4',
          700: '#0F4380',
        },
        /* Or — accent des appels à l'action et de la signature */
        gold: {
          300: '#FFD87A',
          400: '#FFCA3A',
          500: '#FFBA00', // or principal des CTA
          600: '#DB9A0C',
          700: '#B07A08',
        },
      },
      fontFamily: {
        /* Police d'affichage : titres, boutons et navigation. Inter reste
           la police du corps de texte — ne pas toucher à `sans`. */
        display: [
          'Archivo',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      /* ------------------------------------------- Échelle typographique --
         Six niveaux, utilisés par les pages métier refondues. Les titres
         sont fluides (`clamp`) pour éviter les paliers brutaux entre les
         points de rupture ; le corps de texte reste fixe, la lisibilité
         d'un paragraphe ne gagnant rien à varier avec la fenêtre.
         `text-label` ne descend pas sous 11 px : en dessous, les capitales
         interlettrées deviennent difficiles à lire.
         Le reste du site utilise encore des tailles arbitraires
         (`text-[15px]`) — les deux cohabitent sans conflit. */
      fontSize: {
        hero: ['clamp(26px, 4.6vw, 54px)', { lineHeight: '1.06', letterSpacing: '-.025em' }],
        /* Palier intermédiaire hero/title : sert aux lignes secondaires d'un
           titre multi-lignes (ex. héros Piscine), qui doivent rester proches
           de `hero` en taille — `title` seul seul crée un écart trop marqué. */
        'title-lg': ['clamp(22px, 3.2vw, 36px)', { lineHeight: '1.1', letterSpacing: '-.015em' }],
        title: ['clamp(19px, 2.1vw, 26px)', { lineHeight: '1.15', letterSpacing: '-.01em' }],
        /* Chiffres statistiques ("1 800+", "20 ans"...). Plancher (28px)
           volontairement au-dessus du plafond de `title` (26px) : un chiffre
           doit rester visuellement plus gros que n'importe quel titre
           voisin, à toutes les largeurs d'écran. */
        stat: ['clamp(28px, 3.4vw, 40px)', { lineHeight: '1', letterSpacing: '-.01em' }],
        kicker: ['clamp(15px, 1.35vw, 18px)', { lineHeight: '1.3' }],
        body: ['15px', { lineHeight: '1.75' }],
        'body-sm': ['13px', { lineHeight: '1.65' }],
        /* Note de bas de bloc, mention secondaire en minuscules (distinct de
           `label`, qui est réservé aux micro-libellés en capitales). */
        caption: ['11px', { lineHeight: '1.6' }],
        label: ['11px', { lineHeight: '1.4', letterSpacing: '.1em' }],
      },
      letterSpacing: {
        wider: '.06em',
        widest: '.18em',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        18: '4.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,37,71,.04), 0 12px 32px -14px rgba(14,37,71,.18)',
        photo: '0 24px 60px -24px rgba(14,37,71,.5)',
        header: '0 1px 0 rgba(14,37,71,.08), 0 10px 26px -20px rgba(14,37,71,.45)',
        gold: '0 10px 24px -10px rgba(245,178,26,.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
}
