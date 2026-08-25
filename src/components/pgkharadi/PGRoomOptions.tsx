'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { LayoutGrid, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

// Hub-and-spoke: these links are the reason this page exists. Every entry must
// point at a live route — see docs/site-registry.md in the content workspace.
const OPTIONS = [
  {
    title: 'Ladies PG in Kharadi',
    href: '/ladies-pg-kharadi',
    price: 'From ₹10,000/mo',
    body: '100% women-only, with biometric access, panic buttons and a female property captain on call.',
  },
  {
    title: 'Male PG in Kharadi',
    href: '/male-pg-kharadi',
    price: 'From ₹10,000/mo',
    body: 'Built for IT professionals who want to walk to work, with a community of residents in the same corridor.',
  },
  {
    title: 'Single Room PG',
    href: '/single-room-pg-kharadi',
    price: '₹18,000/mo',
    body: 'A private room with attached washroom. Premium AC rooms at ₹20,000/month.',
  },
  {
    title: 'PG near Eon IT Park',
    href: '/pg-near-eon-it-park',
    price: 'From ₹10,000/mo',
    body: 'The shortest commute in the Kharadi IT corridor — minutes from the Eon towers.',
  },
  {
    title: 'Co-living in Kharadi',
    href: '/co-living',
    price: 'From ₹10,000/mo',
    body: '1BHK and 1RK community living: privacy without isolation, shared spaces worth using.',
  },
  {
    title: 'Long-term Rentals',
    href: '/long-term-rentals',
    price: 'From ₹18,000/mo',
    body: 'Three months and up. Security deposit waived entirely on stays of six months or longer.',
  },
  {
    title: 'Short Stays',
    href: '/short-term-rentals',
    price: 'From ₹1,200/night',
    body: 'Book from a single night. Free cancellation up to 24 hours before check-in.',
  },
  {
    title: '1BHK & 1RK Flats',
    href: '/1bhk-flats-in-kharadi-pune',
    price: 'From ₹21,000/mo',
    body: 'A private furnished flat of your own — the right answer for couples and families.',
  },
]

export default function PGRoomOptions() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={containerRef}
      className="py-section bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <LayoutGrid size={16} className="inline mr-2 text-accent" />
              EVERY OPTION IN KHARADI
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Find the Right
            <span className="text-accent"> PG for You</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Every Cohousy home is run by our own team — the same standards, the same app,
            the same single all-inclusive bill. Pick your starting point.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {OPTIONS.map((option) => (
            <motion.div key={option.href + option.title} variants={withMotion(fadeInUp)}>
              <Link
                href={option.href}
                className="group flex h-full flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                    {option.title}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-accent transition-colors duration-300 shrink-0 mt-1"
                  />
                </div>
                <div className="text-sm font-semibold text-accent mb-3">{option.price}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{option.body}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
