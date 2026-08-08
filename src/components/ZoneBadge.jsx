import Icon from './Icon.jsx'

/**
 * Pastille marine translucide « Intervention dans tout le Var », posée dans
 * les héros à fond photo. Partagée entre l'accueil et les pages métier.
 */
export default function ZoneBadge({ className = '' }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-white/15 bg-navy-900/70 px-5 py-4
                  backdrop-blur-sm ${className}`}
    >
      <Icon name="mapPin" className="h-6 w-6 shrink-0 text-gold-500" strokeWidth={1.6} />
      <span className="min-w-0">
        <span className="block text-label font-bold uppercase">Intervention dans tout le Var</span>
        <span className="mt-0.5 block text-body-sm leading-snug text-white/65">
          De Lorgues au Golfe de Saint-Tropez
        </span>
      </span>
    </div>
  )
}
