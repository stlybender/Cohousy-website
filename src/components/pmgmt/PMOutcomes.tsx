'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const OUTCOMES = [
  {
    n: '01',
    title: 'Rent that lands on the 7th. Like a salary.',
    body: 'Predictable, on time, in your account. Without the chase.',
  },
  {
    n: '02',
    title: 'A tenant who\'s been verified before they hold your keys.',
    body: 'Working professional. Background-checked. References called.',
  },
  {
    n: '03',
    title: 'Maintenance you don\'t think about.',
    body: 'Plumbing, electrical, deep clean, paint. Photos before and after. Approved over WhatsApp.',
  },
  {
    n: '04',
    title: 'A monthly report that fits on one page.',
    body: 'Rent, expenses, tickets, photos. Five minutes to read. Filed and searchable.',
  },
  {
    n: '05',
    title: 'A single number to call.',
    body: 'No vanishing brokers. No "let me check with the owner." One person. One thread.',
  },
]

export default function PMOutcomes() {
  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 md:gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, ease: EASE }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <Image
                src="/pmgmt/outcomes.jpg"
                alt="Filter coffee being poured in a sunlit Pune apartment — a small daily moment, untroubled"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: outcomes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-12 md:mb-16"
            >
              <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
                What to expect
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.08] tracking-[-0.02em] text-gray-900">
                This is what owning a home in Pune
                <br className="hidden md:block" />{' '}
                <em className="not-italic text-accent">should feel like.</em>
              </h2>
            </motion.div>

            <ul className="space-y-10 md:space-y-12">
              {OUTCOMES.map((o, i) => (
                <motion.li
                  key={o.n}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
                  className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 border-t border-gray-100 pt-8 md:pt-10 first:border-t-0 first:pt-0"
                >
                  <span className="text-[11px] tracking-[0.28em] uppercase text-accent pt-2">
                    {o.n}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light leading-snug tracking-[-0.01em] text-gray-900">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-base text-gray-500 leading-relaxed">
                      {o.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
