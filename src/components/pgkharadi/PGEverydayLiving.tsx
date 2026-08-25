'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { UtensilsCrossed, Compass, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const GUIDES = [
  {
    title: 'Is Kharadi posh — and why is it expensive?',
    body: 'Kharadi has gone from farmland to Pune’s highest-demand IT corridor in fifteen years. Rents follow the location maths: tens of thousands of professionals work at Eon, WTC and Gera Commerzone, and housing within walking distance is limited. You’re paying to delete your commute.',
  },
  {
    title: 'Kharadi or Hinjewadi — which side of Pune?',
    body: 'Live where you work. Hinjewadi (west) suits Infosys and Wipro Phase 1–3 employees; Kharadi (east) is the base for Eon IT Park, WTC and Gera Commerzone, with newer housing, a closer airport and Koregaon Park fifteen minutes away. Crossing the city daily is the choice residents most regret.',
  },
]

const CHECKLIST = [
  'Government ID and a passport photo — digital KYC takes about 30 seconds',
  'Budget ₹10,000–₹20,000/month all-in for a good room',
  'Book before you arrive — virtual tours mean no couch-surfing while you hunt',
]

export default function PGEverydayLiving() {
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
              <Compass size={16} className="inline mr-2 text-accent" />
              EVERYDAY LIVING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Food, Kitchens and
            <span className="text-accent"> Landing in Pune</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            The practical questions nobody answers properly until after you&rsquo;ve moved in.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/11] overflow-hidden rounded-2xl order-2 lg:order-1"
          >
            <Image
              src="/PG/Kitchen& Dining.jpg"
              alt="Shared kitchen and dining area at a Cohousy PG in Kharadi Pune"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.div variants={withMotion(fadeInUp)} className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-accent/10 p-3">
                <UtensilsCrossed size={22} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-black">No forced mess plan</h3>
            </motion.div>

            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-gray-600 leading-relaxed mb-4"
            >
              Cohousy PGs don&rsquo;t make you buy a food package you didn&rsquo;t ask for.
              Every property has fully equipped kitchen facilities and a common fridge — cook
              for yourself, split cooking with flatmates, use a tiffin service, or order in.
            </motion.p>

            <motion.p variants={withMotion(fadeInUp)} className="text-gray-600 leading-relaxed">
              D-Mart is 800 m away for groceries, and Kharadi&rsquo;s food scene covers
              everything from daily tiffin to late-night delivery. Daily housekeeping and
              laundry are already in your rent, so the tedious parts of adult life are handled.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {GUIDES.map((guide) => (
            <motion.div
              key={guide.title}
              variants={withMotion(fadeInUp)}
              className="bg-white rounded-2xl border border-gray-100 p-6"
            >
              <h3 className="text-lg font-bold text-black mb-3">{guide.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{guide.body}</p>
            </motion.div>
          ))}

          <motion.div
            variants={withMotion(fadeInUp)}
            className="bg-white rounded-2xl border border-gray-100 p-6"
          >
            <h3 className="text-lg font-bold text-black mb-3">New to Pune? Moving checklist</h3>
            <ul className="space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start text-sm text-gray-600">
                  <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Staying briefly first?{' '}
              <Link href="/short-term-rentals" className="text-accent hover:underline">
                Short stays
              </Link>{' '}
              start at ₹1,200/night. Settling in properly?{' '}
              <Link href="/long-term-rentals" className="text-accent hover:underline">
                Long-term rentals
              </Link>{' '}
              waive the deposit on six months or more.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
