const sharp = require('sharp')

// Same normalization as process-eau-cards.cjs: trim to content, then pad
// back onto a common white 1200x900 canvas so wildly different native
// proportions (low wide heat pump vs. tall narrow sand filter) don't end up
// at mismatched visual scales.
const CANVAS_W = 1200
const CANVAS_H = 900
const MARGIN_RATIO = 0.08

const jobs = [
  { src: 'photos/equipement-filtration.jpg', out: 'public/img/equipement-filtration.jpg' },
  { src: 'photos/equipement-pompe-vitesse-variable.jpg', out: 'public/img/equipement-pompe-vitesse-variable.jpg' },
  { src: 'photos/equipement-traitement-eau.jpg', out: 'public/img/equipement-traitement-eau.jpg' },
  { src: 'photos/equipement-pac-piscine.jpg', out: 'public/img/equipement-pac-piscine.jpg' },
]

;(async () => {
  for (const job of jobs) {
    const trimmed = await sharp(job.src).trim({ background: '#ffffff', threshold: 15 }).toBuffer()
    const meta = await sharp(trimmed).metadata()

    const maxW = CANVAS_W * (1 - MARGIN_RATIO * 2)
    const maxH = CANVAS_H * (1 - MARGIN_RATIO * 2)
    const scale = Math.min(maxW / meta.width, maxH / meta.height)
    const resizedW = Math.round(meta.width * scale)
    const resizedH = Math.round(meta.height * scale)

    await sharp(trimmed)
      .resize(resizedW, resizedH)
      .extend({
        top: Math.floor((CANVAS_H - resizedH) / 2),
        bottom: Math.ceil((CANVAS_H - resizedH) / 2),
        left: Math.floor((CANVAS_W - resizedW) / 2),
        right: Math.ceil((CANVAS_W - resizedW) / 2),
        background: '#ffffff',
      })
      .jpeg({ quality: 92 })
      .toFile(job.out)

    console.log(`${job.src} -> ${job.out} (trimmed ${meta.width}x${meta.height}, placed at ${resizedW}x${resizedH} on ${CANVAS_W}x${CANVAS_H})`)
  }
})()
