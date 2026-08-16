'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const inputClasses =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-accent/25'

export default function PMFinalCta() {
  return (
    <section
      id="talk-to-us"
      className="relative scroll-mt-24 bg-white py-24 md:py-36 overflow-hidden"
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
                Managing homes in Pune · NRI-friendly · No hidden fees · Mumbai
                waitlist open
              </motion.p>
            </div>
          </div>
        </div>

        {/* Callback form — some owners, especially NRIs, won't call */}
        <CallbackForm />
      </div>
    </section>
  )
}

function CallbackForm() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', note: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm(f => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          serviceType: 'Property Management — Callback Request',
          message: `Property area: ${form.area}${form.note ? `\nNote: ${form.note}` : ''}\nSource: Final CTA, /property-management-pune`,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="mx-auto mt-10 max-w-3xl"
    >
      {status === 'sent' ? (
        <div className="rounded-2xl border border-gray-200 bg-[#FBFAF7] p-10 text-center">
          <p className="text-xl md:text-2xl font-light text-gray-900">
            Done. We'll call you back.
          </p>
          <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
            Usually the same day, at a reasonable hour for your timezone.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-[#FBFAF7] p-7 md:p-9"
        >
          <p className="mb-5 text-center text-[15px] text-gray-500">
            Prefer we call you? Leave your details.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              required
              value={form.name}
              onChange={set('name')}
              placeholder="Name"
              aria-label="Name"
              className={inputClasses}
            />
            <input
              type="tel"
              required
              value={form.phone}
              onChange={set('phone')}
              placeholder="WhatsApp number"
              aria-label="WhatsApp number"
              className={inputClasses}
            />
            <input
              type="text"
              required
              value={form.area}
              onChange={set('area')}
              placeholder="Property area (e.g., Kharadi)"
              aria-label="Property area"
              className={inputClasses}
            />
            <input
              type="text"
              value={form.note}
              onChange={set('note')}
              placeholder="Anything we should know (optional)"
              aria-label="Anything we should know"
              className={`${inputClasses} sm:col-span-3`}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60 sm:w-auto sm:min-w-[240px] sm:mx-auto sm:block"
          >
            {status === 'sending' ? 'Sending…' : 'Request a call back'}
          </button>
          {status === 'error' && (
            <p className="mt-4 text-center text-sm text-red-600">
              Something went wrong. WhatsApp us instead: +91 89089 03900.
            </p>
          )}
        </form>
      )}
    </motion.div>
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
