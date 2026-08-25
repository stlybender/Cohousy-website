'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Search, ShieldCheck, KeyRound, Building2 } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'

const STEPS = [
  {
    icon: Search,
    step: '1',
    title: 'Browse',
    body: 'See rooms, prices and virtual tours on the availability page or in the Cohousy app.',
  },
  {
    icon: ShieldCheck,
    step: '2',
    title: 'Verify',
    body: 'Digital KYC takes about 30 seconds. No paperwork, no office visits, no broker.',
  },
  {
    icon: KeyRound,
    step: '3',
    title: 'Move in',
    body: 'Instant confirmation, keys from the property captain, Wi-Fi password waiting for you.',
  },
]

// Phrased as the searches people actually type (GSC + autocomplete data), but every
// one points at a real route. Never add a label without a live page behind it.
const POPULAR_SEARCHES = [
  { label: 'PG in Kharadi for female', href: '/ladies-pg-kharadi' },
  { label: 'PG in Kharadi for male', href: '/male-pg-kharadi' },
  { label: 'Single room PG in Kharadi with price', href: '/single-room-pg-kharadi' },
  { label: 'PG near Eon IT Park Kharadi', href: '/pg-near-eon-it-park' },
  { label: 'Co-living PG in Pune', href: '/co-living' },
  { label: 'AC PG in Kharadi', href: '/single-room-pg-kharadi' },
  { label: '1BHK flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' },
  { label: 'Flats on rent in Kharadi', href: '/long-term-rentals' },
  { label: 'Daily basis PG in Kharadi', href: '/short-term-rentals' },
  { label: 'Couple-friendly stay in Kharadi', href: '/co-living' },
]

export default function PGKharadiCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/skyline.avif"
          alt="Book a PG in Kharadi Pune with Cohousy"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2 animate-pulse" />
              ROOMS AVAILABLE NOW
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Book a PG in Kharadi in
            <span className="text-accent"> Under 5 Minutes</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Rooms in the Kharadi corridor fill fast. Tell us your move-in date and we&rsquo;ll
            confirm what&rsquo;s available today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                variants={withMotion(fadeInUp)}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center"
              >
                <div className="rounded-xl bg-accent/10 p-3 w-fit mx-auto mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <ContactFormDialog
            trigger={
              <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Check Availability
              </button>
            }
            title="Check Availability"
            description="Tell us what you need and we'll share available rooms and prices."
            serviceType="PG Enquiry"
            propertyName="PG in Kharadi"
          />
          <ContactFormDialog
            trigger={
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Schedule a Visit
              </button>
            }
            title="Schedule a Visit"
            description="Book a visit to see the property in person."
            serviceType="Schedule Visit"
            propertyName="PG in Kharadi"
          />
        </motion.div>

        {/* Popular searches — real anchors to real routes, phrased the way people search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-100 pt-12"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-5">
            Popular searches in Kharadi
          </h3>
          <ul className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-start gap-4 bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <div className="rounded-xl bg-accent/10 p-3 shrink-0">
              <Building2 size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Own a flat in Pune?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cohousy manages properties end to end — tenants, rent, maintenance.{' '}
                <Link
                  href="/property-management-pune"
                  className="text-accent hover:underline font-medium"
                >
                  See how property management works →
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
