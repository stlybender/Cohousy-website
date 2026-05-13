'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PMPricing() {
  return (
    <section className="relative bg-white py-28 md:py-44">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500"
        >
          Pricing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative inline-block"
        >
          <span className="block text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] leading-[0.85] font-light tracking-[-0.04em] text-gray-900">
            3<span className="text-accent">%</span>
          </span>
          <span
            aria-hidden="true"
            className="absolute -inset-x-12 -inset-y-6 rounded-full bg-gradient-to-tr from-accent/0 via-accent/8 to-accent/0 -z-10 blur-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-8 text-2xl md:text-3xl font-light leading-snug tracking-[-0.01em] text-gray-900"
        >
          That's what we take. <em className="not-italic text-gray-500">All-in.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mx-auto mt-12 max-w-2xl text-base md:text-lg text-gray-500 leading-relaxed"
        >
          Most owners in Pune are paying double or triple. Brokers charge 3–5% on the
          tenant side and another 3–5% on yours. Newer portals charge anywhere from
          20% to 50% of monthly rent.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.44 }}
          className="mt-8 text-lg md:text-xl text-gray-900 font-medium"
        >
          We're holding ours at 3% while we build this category in Pune.{' '}
          <span className="text-accent">Be early.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.56 }}
          className="mt-12 grid grid-cols-3 gap-px max-w-2xl mx-auto bg-gray-100 rounded-2xl overflow-hidden border border-gray-100"
        >
          <PriceCell label="Brokers (both sides)" value="6–10%" muted />
          <PriceCell label="Newer portals" value="20–50%" muted />
          <PriceCell label="Cohousy" value="3%" highlight />
        </motion.div>
      </div>
    </section>
  )
}

function PriceCell({
  label,
  value,
  muted = false,
  highlight = false,
}: {
  label: string
  value: string
  muted?: boolean
  highlight?: boolean
}) {
  return (
    <div
      className={`p-6 md:p-8 ${
        highlight ? 'bg-accent text-black' : 'bg-white'
      }`}
    >
      <p
        className={`text-[10px] md:text-[11px] tracking-[0.28em] uppercase ${
          highlight ? 'text-black/70' : muted ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-3 text-2xl md:text-3xl font-light tracking-[-0.01em] ${
          highlight ? 'text-black' : 'text-gray-700'
        }`}
      >
        {value}
      </p>
    </div>
  )
}
