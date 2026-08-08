/* Communes repères, en pourcentage du cadre SVG. Lorgues est le point
   d'ancrage (siège), les autres situent l'amplitude de la zone. */
const MAP_POINTS = [
  { name: 'Draguignan', x: 62, y: 12 },
  { name: 'Fréjus', x: 87, y: 26 },
  { name: 'Le Luc', x: 21, y: 40 },
  { name: 'Sainte-Maxime', x: 83, y: 48 },
  { name: 'Saint-Tropez', x: 79, y: 66 },
  { name: 'Cavalaire-sur-Mer', x: 74, y: 84 },
]

const W = 200
const H = 150

/**
 * Carte schématique du Var : repère visuel de l'amplitude de la zone
 * d'intervention, pas un fond cartographique exact. Tracé inline pour éviter
 * toute requête externe et rester net à toutes les tailles.
 *
 * Partagée entre l'accueil et les pages métier — ne pas la redessiner
 * ailleurs, toute évolution du tracé ou des communes se fait ici.
 */
export default function VarMap({ className = '' }) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Carte schématique de la zone d'intervention de PCE dans le Var, de Lorgues au Golfe de Saint-Tropez"
      >
        <path
          d="M18 44 L40 20 L78 10 L120 14 L158 30 L186 52 L178 86 L150 112 L112 132 L74 128 L44 104 L22 74 Z"
          className="fill-navy-100"
        />

        {MAP_POINTS.map((p) => (
          <g key={p.name}>
            <circle cx={(p.x / 100) * W} cy={(p.y / 100) * H} r="2.6" className="fill-azure-500" />
            <text
              x={(p.x / 100) * W + 5}
              y={(p.y / 100) * H + 2.5}
              className="fill-navy-500"
              style={{ fontSize: '6px' }}
            >
              {p.name}
            </text>
          </g>
        ))}

        {/* Lorgues, siège de l'entreprise */}
        <circle cx="88" cy="86" r="5" className="fill-azure-500/25" />
        <circle cx="88" cy="86" r="2.8" className="fill-navy-800" />
        <text
          x="88"
          y="100"
          textAnchor="middle"
          className="fill-navy-800 font-bold"
          style={{ fontSize: '8px' }}
        >
          Lorgues
        </text>
      </svg>
    </div>
  )
}
