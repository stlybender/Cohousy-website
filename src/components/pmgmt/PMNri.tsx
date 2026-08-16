'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const POINTS: Array<{ lead: string; body: React.ReactNode }> = [
  {
    lead: 'Rent in your account by the 7th.',
    body: 'NRO-account friendly. No reminders sent from another timezone.',
  },
  {
    lead: 'Quarterly photo inspections.',
    body: "You see your home's condition without booking a flight.",
  },
  {
    lead: 'Repairs with photo + quote, approved on WhatsApp.',
    body: 'One tap from anywhere on earth.',
  },
  {
    lead: 'One monthly report.',
    body: (
      <>
        Sent at hours that suit <em>your</em> clock, not ours.
      </>
    ),
  },
  {
    lead: 'Your parents stay parents.',
    body: 'Not rent collectors, not plumber coordinators. They visit as guests.',
  },
]

export default function PMNri() {
  return (
    <section id="nri" className="relative scroll-mt-24 bg-[#0F0E0C] py-24 md:py-36 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-white/55">
            For owners abroad or outside Pune
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]">
            Your Pune home, managed{' '}
            <em className="not-italic text-accent">from anywhere.</em>
          </h2>
          <p className="mt-7 text-base md:text-lg text-white/60 leading-relaxed">
            Dubai, Singapore, London, Bangalore — distance is the whole problem
            we remove.
          </p>
        </motion.div>

        <ul className="mt-14 md:mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point, i) => (
            <motion.li
              key={point.lead}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
              className="bg-[#0F0E0C] p-8 md:p-10 transition-colors duration-500 hover:bg-[#171512]"
            >
              <p className="text-lg md:text-xl font-medium leading-snug tracking-[-0.01em]">
                {point.lead}
              </p>
              <p className="mt-3 text-[15px] md:text-base text-white/55 leading-relaxed">
                {point.body}
              </p>
            </motion.li>
          ))}
          {/* Sixth cell — CTA, keeps the grid whole */}
          <motion.li
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="flex items-center justify-center bg-[#0F0E0C] p-8 md:p-10"
          >
            <a
              href="https://wa.me/918908903900"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.02]"
            >
              WhatsApp us from anywhere
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
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  )
}
