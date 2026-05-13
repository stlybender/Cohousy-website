'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const SERVICES = [
  {
    n: '01',
    title: 'Tenant sourcing',
    body:
      'We bring you working professionals — verified, employed, paying market rent. Sourced from our existing co-living network and direct channels, not random walk-ins.',
  },
  {
    n: '02',
    title: 'Background verification',
    body:
      'Police verification. Employer check. ID, address, references. Done before keys move. The legal liability that\'s currently on you, isn\'t anymore.',
  },
  {
    n: '03',
    title: 'Lease & legal',
    body:
      'Leave-and-license drafted, registered, e-stamped, stored digitally. Long leases with rent escalations baked in. Not the 11-month treadmill.',
  },
  {
    n: '04',
    title: 'Rent collection',
    body:
      'Collected by the 5th. In your account by the 7th. Late-payment policy, deposit handling, invoicing — all standard, all transparent.',
  },
  {
    n: '05',
    title: 'Maintenance',
    body:
      'Trusted vendors for plumbing, electrical, paint, deep clean. Photo before, photo after, quote on WhatsApp. You approve with one tap.',
  },
  {
    n: '06',
    title: 'Tax & GST',
    body:
      'We structure the lease through corporate tenants where eligible, handle 12% GST cleanly, and give you what you need for your filing.',
  },
  {
    n: '07',
    title: 'Reports & dashboard',
    body:
      'A one-page email every month. A live dashboard if you want one. Rent, expenses, tickets, photos — all in one place.',
  },
  {
    n: '08',
    title: 'A single number to call',
    body:
      'One person owns your home from our side. No "let me check." No queue. No vanishing.',
  },
]

export default function PMDeepDive() {
  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            What we actually do
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            End-to-end. So you don't have to think about any of it.
          </h2>
        </motion.div>

        <div className="grid gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: (i % 2) * 0.08,
              }}
              className="group relative bg-white p-8 md:p-12 transition-colors duration-500 hover:bg-[#FBFAF7]"
            >
              <div className="flex items-baseline gap-5">
                <span className="text-[11px] tracking-[0.28em] uppercase text-accent">
                  {s.n}
                </span>
                <h3 className="text-xl md:text-2xl font-light leading-tight tracking-[-0.01em] text-gray-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-5 text-[15px] md:text-base text-gray-500 leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
