'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, UserCheck, Key, BarChart3 } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Share Property Details',
    description: 'Tell us about your property—location, rent expectation, current occupancy status, and any specific requirements.',
    details: ['Property location & type', 'Expected rental income', 'Current status (vacant/occupied)', 'Your preferences & constraints'],
  },
  {
    icon: UserCheck,
    number: '02',
    title: 'Onboarding + Inspection',
    description: 'We conduct a thorough inspection with baseline photos, videos, and a comprehensive checklist to document your property.',
    details: ['Professional property inspection', 'Photo & video documentation', 'Condition checklist', 'Inventory assessment'],
  },
  {
    icon: Key,
    number: '03',
    title: 'Tenant Placement + Agreement',
    description: 'Marketing across 8+ platforms, thorough tenant screening, and complete leave & license agreement handling.',
    details: ['Multi-platform marketing', 'Tenant verification & screening', 'Legal agreement drafting', 'Move-in coordination'],
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Ongoing Management',
    description: 'Rent collection, maintenance tickets, regular inspections, and monthly statements—everything on autopilot.',
    details: ['Automated rent collection', 'Maintenance management', 'Regular property inspections', 'Monthly owner reports'],
  },
]

export default function HowItWorks() {
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
              <BarChart3 size={16} className="inline mr-2 text-accent" />
              SIMPLE PROCESS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            How It Works
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            From initial consultation to ongoing management—we've streamlined the entire process 
            to get you started in just 4 simple steps.
          </motion.p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-6xl mx-auto"
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="relative"
                >
                  <div className="relative group">
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-300 z-10">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="relative pt-8 pl-8 pr-6 pb-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500 h-full">
                      
                      {/* Gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                          <Icon size={24} className="text-accent" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-accent transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Arrow - Desktop only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 z-20">
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

