'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from './faqData'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PMFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 md:mb-20 text-center"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            Things you're probably wondering
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            The honest answers.
          </h2>
        </motion.div>

        <ul className="border-t border-gray-200">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={i} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium tracking-[-0.005em] text-gray-900">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-accent border-accent text-black' : 'text-gray-700'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-8 pr-12 text-[15px] md:text-base text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
