/* Courbe de fondu à 11 arrêts adoucis, partagée par tous les mécanismes de
   fondu photo du site (héros plein cadre, blocs de contenu avec photo
   fondue à droite). Un dégradé à deux ou trois arrêts laisse une bande
   visible ; onze arrêts rapprochés vers les extrémités (0/8/16…) rendent la
   transition imperceptible. Une seule courbe, un seul endroit où la corriger
   si elle doit changer un jour — la dupliquer par copier-coller est ce qui a
   laissé une page avec un fondu different des sept autres. */
export const SOFT_FADE_STOPS = [
  [0, 1.0], [8, 0.793], [16, 0.612], [24, 0.456], [32, 0.325],
  [40, 0.218], [48, 0.133], [56, 0.071], [64, 0.029], [72, 0.006], [80, 0.0],
]

/** Masque CSS (mask-image) : fait disparaître la photo en alpha pur vers la
 *  gauche, quelle que soit la couleur posée derrière elle — c'est cette
 *  couleur de fond réelle (navy-950 sur un héros, blanc ou navy-800 sur une
 *  carte) qui apparaît alors, jamais une couleur recalculée à part. */
export function softFadeMask() {
  return `linear-gradient(to right, ${SOFT_FADE_STOPS.map(
    ([pos, op]) => `rgba(0,0,0,${(1 - op).toFixed(4)}) ${pos}%`
  ).join(', ')}, black 100%)`
}
