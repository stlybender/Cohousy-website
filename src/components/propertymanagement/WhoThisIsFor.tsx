'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Briefcase, Building, ChevronRight } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const audiences = [
  {
    icon: Globe,
    title: 'NRIs',
    subtitle: 'Living Abroad, Property in India',
    description: 'You own 1–5 homes in India and want zero drama, real transparency, and someone dependable who can coordinate updates and calls sensibly (including across time zones).',
    highlights: [
      'Time zone friendly communication',
      'Monthly photo/video reports',
      'Complete transparency',
      'TDS & tax support'
    ],
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600'
  },
  {
    icon: Briefcase,
    title: 'Busy Professionals & HNIs',
    subtitle: 'Multiple Properties, Zero Time',
    description: 'You own multiple units and want structured tenant handling and consistent rent, without spending weekends on calls and follow-ups.',
    highlights: [
      'Structured tenant management',
      'Predictable rental income',
      'Premium service quality',
      'Dedicated relationship manager'
    ],
    gradient: 'from-accent/10 to-orange-500/10',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent'
  },
  {
    icon: Building,
    title: 'Builders / Investment Groups',
    subtitle: 'Bulk Inventory Management',
    description: 'You need reliable, end-to-end management with SLAs and reporting for multiple properties or entire buildings.',
    highlights: [
      'Bulk inventory handling',
      'SLA-based service delivery',
      'Custom reporting dashboards',
      'Scalable operations'
    ],
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600'
  }
]

export default function WhoThisIsFor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
              <Globe size={16} className="inline mr-2 text-accent" />
              WHO THIS IS FOR
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Property Management Built for
            <span className="text-accent"> Your Needs</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Whether you're an NRI managing from abroad, a busy professional with multiple properties, 
            or a builder with bulk inventory—we have a solution tailored for you.
          </motion.p>
        </motion.div>

        {/* Audience Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            const isHovered = hoveredCard === index

            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`relative h-full p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex p-4 ${audience.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className={audience.iconColor} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                      {audience.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                      {audience.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      {audience.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {audience.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ChevronRight size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Indicator */}
                    <div className={`flex items-center gap-2 text-accent font-semibold text-sm transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                      Learn more
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

