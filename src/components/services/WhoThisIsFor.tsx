'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const audiences = [
  {
    id: 'nris',
    title: 'NRIs',
    icon: '🌍',
    description: 'You own 1–5 homes in India and want zero drama, real transparency, and someone dependable who can coordinate updates and calls sensibly (including across time zones).',
    color: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'professionals',
    title: 'Busy Professionals & HNIs',
    icon: '💼',
    description: 'You own multiple units and want structured tenant handling and consistent rent, without spending weekends on calls and follow-ups.',
    color: 'from-purple-50 to-pink-50'
  },
  {
    id: 'builders',
    title: 'Builders / Investment Groups',
    icon: '🏢',
    description: 'You need reliable, end-to-end management with SLAs and reporting for bulk inventory.',
    color: 'from-green-50 to-teal-50'
  }
]

export default function WhoThisIsFor() {
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
              WHO THIS IS FOR
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Built for Property
            <span className="text-accent"> Owners Like You</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Whether you're managing from abroad or juggling multiple properties locally, 
            we handle the complexity so you can focus on what matters.
          </motion.p>
        </motion.div>

        {/* Audience Cards Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              variants={withMotion(fadeInUp)}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl p-8"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">
                  {audience.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {audience.description}
                </p>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

