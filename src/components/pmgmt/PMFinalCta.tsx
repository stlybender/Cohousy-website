'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PMFinalCta() {
  return (
    <section
      id="talk-to-us"
      className="relative bg-white py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
            <Image
              src="/pmgmt/cta.jpg"
              alt="A Pune homeowner on a sunlit balcony — phone face-down, chai steaming, untroubled"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/35 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-3xl px-8 md:px-12 text-white">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mb-5 text-[11px] tracking-[0.32em] uppercase text-white/80"
              >
                Tell us about your home
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.1] tracking-[-0.02em] max-w-2xl"
              >
                One call. No obligation.
                <br />
                We'll show you{' '}
                <em className="not-italic text-accent">what it could earn.</em>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
              >
                <a
                  href="tel:+918908903900"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.35)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Talk to us
                  <Arrow />
                </a>
                <a
                  href="https://wa.me/918908903900"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm md:text-[15px] font-medium text-white transition hover:bg-white/15"
                >
                  WhatsApp us
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.34 }}
                className="mt-8 text-xs md:text-[13px] tracking-wide text-white/65"
              >
                Pune homeowners only · NRI-friendly · No hidden fees
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
