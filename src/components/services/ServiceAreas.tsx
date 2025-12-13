'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const cities = [
  {
    id: 'bangalore',
    name: 'Bangalore',
    status: 'Primary',
    icon: '🏙️',
    description: 'Full operational coverage with dedicated team and established vendor network.',
    badge: 'ACTIVE',
    badgeColor: 'bg-green-500'
  },
  {
    id: 'pune',
    name: 'Pune',
    status: 'Secondary',
    icon: '🌆',
    description: 'Growing operations with local presence and expanding service capabilities.',
    badge: 'ACTIVE',
    badgeColor: 'bg-green-500'
  }
]

const plannedCities = [
  { name: 'Mumbai', icon: '🏢' },
  { name: 'Hyderabad', icon: '🌃' },
  { name: 'Chennai', icon: '🏙️' },
  { name: 'Delhi NCR', icon: '🌇' }
]

export default function ServiceAreas() {
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
              SERVICE AREAS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Where We
            <span className="text-accent"> Operate</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Expanding city-by-city with full operational teams and established SOPs.
          </motion.p>
        </motion.div>

        {/* Active Cities */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              variants={withMotion(fadeInUp)}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-500 p-8"
            >
              {/* Badge */}
              <div className={`absolute top-6 right-6 ${city.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                {city.badge}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {city.icon}
              </div>

              {/* City Name */}
              <h3 className="text-3xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                {city.name}
              </h3>

              {/* Status */}
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                {city.status} Market
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {city.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-accent transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Planned Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-3">
              Planned <span className="text-accent">Expansion</span>
            </h3>
            <p className="text-gray-600">
              Coming soon to these major cities with the same quality standards
            </p>
          </div>

          {/* Planned Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {plannedCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">
                  {city.icon}
                </div>
                <p className="font-semibold text-gray-700">
                  {city.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Coming Soon
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 italic">
            Own property in a different city? Reach out—we may be able to help through our partner network.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

