import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Servi à la racine du domaine dans les deux cas : Hostinger sur pcevar.fr,
  // et GitHub Pages (aperçu de secours) aussi sur pcevar.fr via le fichier
  // public/CNAME (domaine personnalisé, donc pas de sous-chemin /repo/).
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
})
