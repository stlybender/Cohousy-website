'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const steps = [
  {
    number: '01',
    title: 'Share Property Details',
    description: 'Tell us about your property location, rent expectation, and current occupancy status.',
    icon: '📝'
  },
  {
    number: '02',
    title: 'Onboarding + Inspection',
    description: 'We conduct a baseline inspection with photos/videos and create a comprehensive checklist.',
    icon: '🔍'
  },
  {
    number: '03',
    title: 'Tenant Placement + Agreement',
    description: 'Marketing across platforms, thorough screening, and leave & license preparation.',
    icon: '🤝'
  },
  {
    number: '04',
    title: 'Ongoing Management',
    description: 'Rent collection, maintenance tickets, regular inspections, and monthly statements.',
    icon: '⚙️'
  }
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Simple
            <span className="text-accent"> 4-Step Process</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            From onboarding to ongoing management, we make the entire process seamless and transparent.
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200">
            <div className="h-full bg-gradient-to-r from-accent via-accent to-gray-200 w-0 animate-[expand_2s_ease-in-out_forwards]" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="text-2xl font-bold text-black">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center lg:text-left">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black mb-3 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from { width: 0; }
          to { width: 75%; }
        }
      `}</style>
    </section>
  )
}

