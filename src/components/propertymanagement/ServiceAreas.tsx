'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, CheckCircle, Clock } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const cities = [
  {
    name: 'Bangalore',
    status: 'Secondary',
    description: 'Growing presence with dedicated property managers',
    badge: 'Active',
    color: 'from-green-500/10 to-emerald-500/10',
    badgeColor: 'bg-green-500 text-white',
  },
  {
    name: 'Pune',
    status: 'Primary',
    description: 'Full operational team with established vendor network',
    badge: 'Active',
    color: 'from-blue-500/10 to-cyan-500/10',
    badgeColor: 'bg-blue-500 text-white',
  },
  {
    name: 'Mumbai',
    status: 'Coming Soon',
    description: 'Expansion planned with full SOPs and team',
    badge: 'Q2 2025',
    color: 'from-accent/10 to-orange-500/10',
    badgeColor: 'bg-accent text-white',
  },
  {
    name: 'Hyderabad',
    status: 'Coming Soon',
    description: 'Market evaluation and team setup in progress',
    badge: 'Q3 2025',
    color: 'from-purple-500/10 to-pink-500/10',
    badgeColor: 'bg-purple-500 text-white',
  },
]

const serviceHighlights = [
  'Full operational teams in active cities',
  'Vetted vendor networks established',
  'Standard Operating Procedures (SOPs)',
  'City-by-city expansion with quality focus',
]

export default function ServiceAreas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-section bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

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
              <MapPin size={16} className="inline mr-2 text-accent" />
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
            We're starting with Pune (primary) and Bangalore (secondary), and expanding city-by-city 
            with full operational teams and SOPs.
          </motion.p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {cities.map((city, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500">
                
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 ${city.badgeColor} text-xs font-bold rounded-full`}>
                  {city.badge}
                </div>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin size={24} className="text-accent" />
                  </div>

                  {/* City Name */}
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                    {city.name}
                  </h3>

                  {/* Status */}
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    {city.status}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <CheckCircle size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-black">
                Quality-First Expansion
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We don't just add cities on a map. Each expansion is backed by dedicated teams, 
              established vendor networks, and proven operational procedures to ensure consistent, 
              high-quality service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle size={12} className="text-accent" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Expansion Notice */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full">
            <Clock size={16} />
            <span className="text-sm font-semibold">
              More cities coming soon—stay tuned for updates!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

