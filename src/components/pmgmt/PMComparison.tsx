'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const ROWS: Array<{ before: string; after: string }> = [
  {
    before: 'Two brokers, three showings, a handover that ghosts.',
    after: 'A verified tenant, sourced and screened, signed off by you.',
  },
  {
    before: 'Rent reminded, chased, half-paid by the 12th.',
    after: 'Rent collected by the 5th. In your account by the 7th.',
  },
  {
    before:
      'A WhatsApp from the tenant. A plumber you don\'t know. A bill you didn\'t approve.',
    after: 'A photo. A quote. Your one-tap yes.',
  },
  {
    before: 'An 11-month renewal cycle that benefits everyone but you.',
    after: 'Long leases, registered properly, with rent escalations baked in.',
  },
  {
    before: 'A spreadsheet. Or no spreadsheet.',
    after: 'A one-page report. Every month. Filed. Searchable.',
  },
  {
    before: '"Let me check with the owner."',
    after: 'One number. One person. One thread.',
  },
]

export default function PMComparison() {
  return (
    <section className="relative bg-[#F6F4EF] py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            The difference
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Two ways to own a home in Pune.
          </h2>
        </motion.div>

        {/* Header */}
        <div className="hidden md:grid grid-cols-2 gap-8 mb-6">
          <p className="text-[11px] tracking-[0.32em] uppercase text-gray-400">
            What it usually looks like
          </p>
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent">
            What it looks like with Cohousy
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200/70 bg-white">
          {ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
              className="grid md:grid-cols-2 border-t border-gray-100 first:border-t-0"
            >
              {/* Before */}
              <div className="relative p-7 md:p-9 bg-[#FAF8F4]">
                <span className="md:hidden mb-2 block text-[10px] tracking-[0.3em] uppercase text-gray-400">
                  Usually
                </span>
                <p className="text-[15px] md:text-base text-gray-700 leading-relaxed line-through-soft">
                  {row.before}
                </p>
              </div>
              {/* After */}
              <div className="relative p-7 md:p-9 bg-white border-t md:border-t-0 md:border-l border-gray-100">
                <span className="md:hidden mb-2 block text-[10px] tracking-[0.3em] uppercase text-accent">
                  With Cohousy
                </span>
                <p className="text-[15px] md:text-base text-gray-900 leading-relaxed font-medium">
                  {row.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Local style for soft strikethrough so it reads "old way" without screaming */}
      <style>{`
        .line-through-soft {
          text-decoration: none;
        }
      `}</style>
    </section>
  )
}
