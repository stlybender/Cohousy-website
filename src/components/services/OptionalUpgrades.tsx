'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const upgrades = [
  {
    id: 'rent-assurance',
    title: 'Rent Assurance Plan',
    subtitle: 'Guaranteed Rent',
    icon: '🛡️',
    description: 'If rent gets delayed or a tenant defaults, Cohousy still pays you—so your income stays predictable.',
    badge: 'PREMIUM',
    color: 'from-blue-50 to-indigo-50'
  },
  {
    id: 'vacant-care',
    title: 'Vacant Home Care',
    subtitle: 'For Empty Properties',
    icon: '🏠',
    description: 'Perfect if your home is vacant and you want it clean, safe, and ready anytime. Monthly check-up, deep cleaning, utility checks, society bill support.',
    badge: 'POPULAR',
    color: 'from-green-50 to-emerald-50'
  },
  {
    id: 'interiors',
    title: 'Interiors & Rental Upgrade',
    subtitle: 'Boost Rental Value',
    icon: '✨',
    description: 'Furnishing + upgrades that can boost rental value significantly.',
    badge: null,
    color: 'from-purple-50 to-pink-50'
  },
  {
    id: 'nri-tax',
    title: 'NRI Tax & Repatriation Concierge',
    subtitle: 'For NRI Owners',
    icon: '📊',
    description: 'CA partner-led subscription for rental tax filing, TDS, and repatriation documentation.',
    badge: null,
    color: 'from-orange-50 to-amber-50'
  }
]

export default function OptionalUpgrades() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              OPTIONAL UPGRADES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Fully Hands-Off
            <span className="text-accent"> Management</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            For owners who want complete peace of mind, 
            we offer premium add-ons that take care of absolutely everything.
          </motion.p>
        </motion.div>

        {/* Upgrades Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {upgrades.map((upgrade, index) => (
            <motion.div
              key={upgrade.id}
              variants={withMotion(fadeInUp)}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-xl p-8"
            >
              {/* Badge */}
              {upgrade.badge && (
                <div className="absolute top-6 right-6 z-20 bg-accent text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {upgrade.badge}
                </div>
              )}

              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${upgrade.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {upgrade.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                  {upgrade.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {upgrade.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {upgrade.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-accent transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            Mix and match these services based on your specific needs and property requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

