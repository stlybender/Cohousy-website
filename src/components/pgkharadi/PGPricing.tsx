'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { IndianRupee, CheckCircle, Info } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'

const PLANS = [
  {
    type: 'Twin Sharing',
    subtitle: 'Best value',
    price: '₹10,000',
    period: '/month',
    popular: true,
    features: ['Shared room, own bed & storage', 'Attached washroom', 'All utilities included', 'Male and female floors'],
  },
  {
    type: 'Single Room',
    subtitle: 'Standard private',
    price: '₹18,000',
    period: '/month',
    popular: false,
    features: ['Completely private room', 'Attached washroom', 'Study desk & wardrobe', 'All utilities included'],
  },
  {
    type: 'Single Room Premium',
    subtitle: 'Private with AC',
    price: '₹20,000',
    period: '/month',
    popular: false,
    features: ['Private room with AC', 'Attached washroom', 'Balcony in select rooms', 'All utilities included'],
  },
]

const INCLUDED = [
  'High-speed Wi-Fi',
  'Electricity and water',
  'Daily housekeeping',
  'Laundry service',
  'Gym access',
  'Kitchen facilities and common fridge',
  'Power backup',
  'CCTV security and maintenance',
]

export default function PGPricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

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
              <IndianRupee size={16} className="inline mr-2 text-accent" />
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            How Much Does a PG in
            <span className="text-accent"> Kharadi Cost?</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Across Kharadi, PG beds run from roughly ₹5,000 for a bed in a 3–4 person room to
            ₹20,000+ for a premium private room. Most listings quote a bare rent and add food,
            electricity, Wi-Fi and maintenance later. Ours is one all-inclusive bill, with no
            brokerage.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.type}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-black">{plan.type}</h3>
                  {plan.popular && (
                    <span className="bg-accent text-black text-xs font-bold px-2 py-1 rounded">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{plan.subtitle}</div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-sm text-gray-500 font-normal">{plan.period}</span>
                  <div className="text-sm text-accent font-medium mt-1">
                    All-inclusive · zero brokerage
                  </div>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ContactFormDialog
                  trigger={
                    <button className="w-full mt-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                      Check Availability
                    </button>
                  }
                  title="Room Availability & Booking"
                  description="Tell us your move-in date and we'll confirm what's available."
                  serviceType="PG Room Enquiry"
                  propertyName={`PG in Kharadi — ${plan.type}`}
                />
              </div>

              <div
                className={`h-0.5 bg-accent transition-all duration-500 ${
                  hoveredPlan === index ? 'w-full' : 'w-0'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl border border-gray-100 p-8 mb-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Everything Included in Your Rent
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One bill covers all of it. No brokerage, and no &ldquo;extra charges&rdquo;
              conversation at the end of the month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INCLUDED.map((feature) => (
              <div key={feature} className="flex items-center">
                <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The honest answer to "PG in Kharadi under 5000" — a real search, and the
            page loses trust if it pretends the budget end of the market doesn't exist. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
        >
          <div className="flex items-start gap-4">
            <Info size={24} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Looking for a PG in Kharadi under ₹5,000?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                They exist — usually a bed in a 3–4 person room, with food, electricity and
                Wi-Fi billed on top, and often a broker&rsquo;s fee to get in. Add it all up
                and many residents land within a couple of thousand rupees of an all-inclusive
                twin-sharing room, with far less privacy. Compare total monthly cost, not
                sticker rent, before you decide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
