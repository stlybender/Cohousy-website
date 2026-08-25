'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Scale, Check, X } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

// Answers the top Quora question for this market: "PG or flat in Kharadi?"
// Competitors are never named — see docs/channel-guidelines.md.
const ROWS = [
  {
    label: 'Upfront cost',
    pg: 'Deposit, often a broker fee too',
    flat: '2–3 month deposit + 1 month brokerage + furniture',
    cohousy: 'Small refundable deposit, zero brokerage',
  },
  {
    label: 'Monthly bills',
    pg: 'Rent, then food, electricity and Wi-Fi separately',
    flat: 'Rent, utilities, maid, Wi-Fi, society maintenance',
    cohousy: 'One all-inclusive bill',
  },
  {
    label: 'Furnishing',
    pg: 'Basic',
    flat: 'Yours to buy and move',
    cohousy: 'Fully furnished',
  },
  {
    label: 'Flexibility',
    pg: 'Monthly, usually informal',
    flat: '11-month lock-in is typical',
    cohousy: 'A night to a year, managed in the app',
  },
  {
    label: 'Who fixes things',
    pg: 'The owner, eventually',
    flat: 'You',
    cohousy: 'Our own team, from inside the building',
  },
]

export default function PGComparison() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <Scale size={16} className="inline mr-2 text-accent" />
              PG VS FLAT VS CO-LIVING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Should You Take a PG
            <span className="text-accent"> or Rent a Flat?</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            It&rsquo;s the question everyone new to Kharadi asks. Here is the honest
            comparison, including where we don&rsquo;t win.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-sm font-medium uppercase tracking-wider text-gray-500" />
                  <th className="py-4 px-6 text-sm font-medium uppercase tracking-wider text-gray-500">
                    Traditional PG
                  </th>
                  <th className="py-4 px-6 text-sm font-medium uppercase tracking-wider text-gray-500">
                    Renting a flat
                  </th>
                  <th className="py-4 px-6 text-sm font-medium uppercase tracking-wider text-accent">
                    Cohousy
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 align-top last:border-0">
                    <td className="py-5 px-6 font-bold text-black whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="py-5 px-6 text-gray-600">
                      <X size={16} className="inline mr-2 text-gray-300" />
                      {row.pg}
                    </td>
                    <td className="py-5 px-6 text-gray-600">
                      <X size={16} className="inline mr-2 text-gray-300" />
                      {row.flat}
                    </td>
                    <td className="py-5 px-6 font-medium text-black bg-accent/5">
                      <Check size={16} className="inline mr-2 text-accent" />
                      {row.cohousy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-gray-600 mt-8"
        >
          Want the middle ground?{' '}
          <Link href="/co-living" className="text-accent hover:underline">
            Co-living in Kharadi
          </Link>{' '}
          gives you a private room in a managed home, or take a whole{' '}
          <Link href="/1bhk-flats-in-kharadi-pune" className="text-accent hover:underline">
            1BHK flat
          </Link>{' '}
          to yourself.
        </motion.p>
      </div>
    </section>
  )
}
