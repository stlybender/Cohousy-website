'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const PROPERTY_TYPES = ['1BHK', '2BHK', '3BHK', 'Villa', 'Commercial']

const inputClasses =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-accent/25'

export default function PMWaitlist() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: PROPERTY_TYPES[0],
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
          email: form.email,
          phone: form.phone,
          // City in the serviceType so every lead is tagged by city in the inbox
          serviceType: `Property Management Waitlist — ${form.city}`,
          message: `City of property: ${form.city}\nProperty type: ${form.propertyType}\nSource: Waitlist section, /property-management-pune`,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="relative scroll-mt-24 bg-[#F6F4EF] py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 md:gap-20 lg:grid-cols-[1fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
              Beyond Pune
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
              Pune today. <em className="not-italic text-accent">Mumbai next.</em>
            </h2>
            <p className="mt-7 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed">
              We&rsquo;re expanding city by city — deliberately, so the service
              never gets thinner. Own a home elsewhere in India? Tell us where.
              The city with the most hands raised is the city we open next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            {status === 'sent' ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)]">
                <p className="text-xl md:text-2xl font-light text-gray-900">
                  Your city is on the map.
                </p>
                <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                  One message when we launch there. That&rsquo;s it.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-200 bg-white p-7 md:p-9 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)]"
              >
                <div className="grid gap-4 sm:grid-cols-2">
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
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="Email"
                    aria-label="Email"
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={set('city')}
                    placeholder="City of property"
                    aria-label="City of property"
                    className={inputClasses}
                  />
                  <select
                    value={form.propertyType}
                    onChange={set('propertyType')}
                    aria-label="Property type"
                    className={`${inputClasses} sm:col-span-2`}
                  >
                    {PROPERTY_TYPES.map(t => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 w-full rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Put my city on the map'}
                </button>

                {status === 'error' && (
                  <p className="mt-4 text-center text-sm text-red-600">
                    Something went wrong. WhatsApp us instead: +91 89089 03900.
                  </p>
                )}

                <p className="mt-4 text-center text-[13px] italic text-gray-400">
                  No spam. One message when we launch in your city.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
