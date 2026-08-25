'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, Receipt, Smartphone, HeartHandshake } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import { GOOGLE_RATING } from './reviewsData'

const REASONS = [
  {
    icon: Building,
    title: "We're the operator, not a middleman",
    body: 'Listing platforms will show you 300 PGs they have never set foot in. We run every Cohousy property with our own staff, from inside the buildings — so there is one number to call and one team accountable.',
  },
  {
    icon: Receipt,
    title: 'One bill, no games',
    body: 'The price you see is the price you pay. Zero brokerage, everything bundled, and no “extra charges” conversation waiting for you at the end of the month.',
  },
  {
    icon: Smartphone,
    title: 'The app runs your stay',
    body: 'Digital KYC in about 30 seconds, virtual tours, rent payments, maintenance requests and community events — under five minutes to book, paperless from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'People actually stay',
    body: `${GOOGLE_RATING.value}★ across ${GOOGLE_RATING.count} Google reviews, and residents who renew year after year — one has been with us three and a half years. In a market built on six-month churn, that is the number that matters.`,
  },
]

export default function WhyChoosePGKharadi() {
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
              <Building size={16} className="inline mr-2 text-accent" />
              WHY COHOUSY
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Not a Listing Site.
            <span className="text-accent"> Not a Broker.</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Most PG searches in Kharadi end on a portal that takes a fee and disappears.
            Cohousy owns the experience end to end — which is why the people living here
            say what they say.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={withMotion(fadeInUp)}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
              >
                <div className="rounded-xl bg-accent/10 p-3 w-fit mb-5">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
