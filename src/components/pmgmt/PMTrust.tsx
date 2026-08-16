'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PMTrust() {
  return (
    <section className="relative bg-[#F6F4EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:gap-20 lg:grid-cols-[1fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
              <Image
                src="/pmgmt/operators.jpg"
                alt="A Cohousy co-living common space in Kharadi, Pune — warm, lived-in, lit by pendant lamps"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[13px] tracking-wide text-gray-500 italic">
              A Cohousy home in Kharadi. The same hands that look after this will look after yours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
              Who we are
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-[1.08] tracking-[-0.02em] text-gray-900">
              We're not brokers.
              <br />
              <em className="not-italic text-accent">We're operators.</em>
            </h2>
            <p className="mt-7 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We run Cohousy co-living homes in Kharadi — tenants, maintenance,
              taxes, paperwork, and a single number to call, every day, for
              hundreds of residents.
            </p>
            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Most property managers manage from an office. We manage from
              inside the buildings. When we say &ldquo;we&rsquo;ll handle the
              plumber,&rdquo; it&rsquo;s because we handled three yesterday.
            </p>
            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Property management for individual owners is the same operation,
              just for your home.
            </p>
            <p className="mt-7 text-lg md:text-xl text-gray-900 font-medium tracking-[-0.005em] max-w-xl">
              We know it works because we live it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
