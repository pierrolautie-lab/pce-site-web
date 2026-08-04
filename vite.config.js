import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Sur Hostinger le site est servi à la racine du domaine (base '/').
  // Sur GitHub Pages (aperçu de secours), il est servi sous /pce-site-web/ :
  // le workflow gh-pages.yml positionne GITHUB_PAGES=true au build pour ce cas.
  base: process.env.GITHUB_PAGES ? '/pce-site-web/' : '/',
  server: {
    port: 5173,
    open: true,
  },
})
