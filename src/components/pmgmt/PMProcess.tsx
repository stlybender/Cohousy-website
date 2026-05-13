'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const STEPS = [
  {
    n: '01',
    title: 'A conversation',
    body:
      'You tell us about your home. We share what we see in the market and what it could earn.',
  },
  {
    n: '02',
    title: 'A walkthrough',
    body:
      'We visit, photograph, suggest small things that lift rent (lighting, paint, soft styling) — only if they pay back.',
  },
  {
    n: '03',
    title: 'Tenant in. Lease signed.',
    body:
      'Verified working professional moves in. Lease registered. Deposit secure. Photos shared.',
  },
  {
    n: '04',
    title: 'You go back to your life.',
    body:
      'Rent lands monthly. Issues handled. A short report each month. You check your phone, smile, put it down.',
  },
]

export default function PMProcess() {
  return (
    <section className="relative bg-[#0F0E0C] py-24 md:py-36 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 md:gap-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-12 md:mb-16 max-w-xl"
            >
              <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-white/55">
                The process
              </p>
              <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]">
                Four steps. Roughly two weeks.{' '}
                <em className="not-italic text-accent">Then quiet.</em>
              </h2>
            </motion.div>

            <ol className="relative space-y-10 md:space-y-12 pl-8 md:pl-10">
              {/* Vertical line */}
              <span
                aria-hidden="true"
                className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-white/12"
              />
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-8 md:-left-10 top-0 flex h-[30px] w-[30px] md:h-[38px] md:w-[38px] items-center justify-center rounded-full border border-white/20 bg-[#0F0E0C] text-[10px] md:text-[11px] tracking-[0.18em] text-white/75">
                    {step.n}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light leading-tight tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] md:text-base text-white/55 leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, ease: EASE }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
              <Image
                src="/pmgmt/process.jpg"
                alt="A Pune homeowner couple reviewing the lease over chai with a Cohousy team member"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[13px] tracking-wide text-white/45">
              The first conversation. Notes on an iPad. Coffee on the table.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
