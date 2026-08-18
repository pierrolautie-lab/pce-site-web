const sharp = require('sharp')
const fs = require('fs')

// Common canvas: 4:3, product trimmed to its own bounding box then padded
// back onto white with a consistent margin ratio — this is what gives
// "échelle visuelle comparable" across images whose native crops/ratios
// differ (portrait charbon-actif vs. landscape adoucisseur, etc.), which a
// plain object-contain on mismatched source crops would not guarantee.
const CANVAS_W = 1200
const CANVAS_H = 900
const MARGIN_RATIO = 0.08 // 8% breathing room on the tightest side

const jobs = [
  { src: 'photos/eau-adoucisseur.jpg', out: 'public/img/eau-solution-adoucisseur.jpg' },
  { src: 'photos/eau-filtration-sous-evier.jpg', out: 'public/img/eau-solution-filtration-sous-evier.jpg' },
  { src: 'photos/eau-filtration-forage.jpg', out: 'public/img/eau-solution-filtration-forage.jpg' },
  { src: 'photos/eau-charbon-actif.jpg', out: 'public/img/eau-solution-charbon-actif.jpg' },
  { src: 'photos/eau-traitement-uv.jpg', out: 'public/img/eau-solution-traitement-uv.jpg' },
  { src: 'photos/eau-installation-complete.jpg', out: 'public/img/eau-solution-installation-complete.jpg' },
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
