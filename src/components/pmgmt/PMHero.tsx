'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PMHero() {
  return (
    <section className="relative bg-white pt-32 md:pt-40 pb-0">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-8 text-[11px] tracking-[0.32em] uppercase text-gray-500"
        >
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gray-300" />
            Property Management · Pune
            <span className="h-px w-8 bg-gray-300" />
          </span>
        </motion.p>

        <h1 className="mx-auto max-w-4xl">
          <Line delay={0.15} className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.025em] text-gray-900">
            <span className="font-semibold">Your home.</span>{' '}
            <span className="text-gray-900">Looked after.</span>{' '}
            <span className="text-accent">Always.</span>
          </Line>
          <Line delay={0.55} className="mt-5 md:mt-7 text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] font-light leading-[1.25] tracking-[-0.01em] text-gray-700">
            Owned by you. Lived in beautifully. Earning every month.
          </Line>
          <Line delay={0.95} className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl italic font-light leading-relaxed text-gray-500">
            The way owning property should feel.
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.4 }}
          className="mx-auto mt-12 md:mt-14 max-w-2xl text-[15px] md:text-base text-gray-500 leading-relaxed"
        >
          For homeowners in Pune. We find the right tenant, collect rent on time,
          and look after your home like it's ours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#talk-to-us"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.02]"
          >
            Talk to us about your home
            <Arrow />
          </a>
          <a
            href="https://wa.me/918908903900"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm md:text-[15px] font-medium text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
          >
            WhatsApp us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 1.0 }}
        className="relative mt-20 md:mt-28 mx-auto max-w-7xl px-4 md:px-6"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]">
          <Image
            src="/pmgmt/hero.jpg"
            alt="A beautifully kept Pune apartment in soft morning light — a linen armchair, plants, filter coffee, and a balcony beyond sheer curtains"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}

function Line({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: EASE, delay }}
        className={`block ${className ?? ''}`}
      >
        {children}
      </motion.span>
    </span>
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
