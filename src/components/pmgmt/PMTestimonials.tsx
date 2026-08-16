'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT (from the handoff doc, §9): NEVER ship placeholder/fake
// testimonials. Keep SHOW_TESTIMONIALS = false until at least one REAL owner
// quote is in — then replace the SAMPLE entries below and flip the flag.
//
// Card format per the doc: quote (2–3 lines) · owner first name + area +
// owner since year · photo of the PROPERTY (not the person).
// ─────────────────────────────────────────────────────────────────────────────
const SHOW_TESTIMONIALS = false

type Testimonial = {
  quote: string
  name: string
  area: string
  since: string
  image: string
  imageAlt: string
}

// SAMPLE DATA — design preview only. Not real owners. Do not publish.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'SAMPLE — replace with a real owner quote before enabling this section. Two to three lines reads best in this card.',
    name: 'First name',
    area: 'Kharadi',
    since: '2024',
    image: '/property1.jpg',
    imageAlt: 'The owner’s property, well kept',
  },
  {
    quote:
      'SAMPLE — replace with a real owner quote before enabling this section. Two to three lines reads best in this card.',
    name: 'First name',
    area: 'Wagholi',
    since: '2025',
    image: '/property2.jpg',
    imageAlt: 'The owner’s property, well kept',
  },
  {
    quote:
      'SAMPLE — replace with a real owner quote before enabling this section. Two to three lines reads best in this card.',
    name: 'First name',
    area: 'Viman Nagar',
    since: '2025',
    image: '/property3.jpg',
    imageAlt: 'The owner’s property, well kept',
  },
]

export default function PMTestimonials() {
  if (!SHOW_TESTIMONIALS) return null

  return (
    <section id="owners" className="relative scroll-mt-24 bg-[#F6F4EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 md:mb-20 text-center"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            From our owners
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            In their words.
          </h2>
        </motion.div>

        {/* Max 3 on desktop; horizontal swipe on mobile */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.figure
              key={`${t.name}-${t.area}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.14)] md:w-auto"
            >
              <div className="relative aspect-[16/10] w-full bg-gray-100">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 85vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 md:p-8">
                <blockquote className="text-[15px] md:text-base text-gray-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[13px] tracking-wide text-gray-500">
                  {t.name} · {t.area} · Owner since {t.since}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
