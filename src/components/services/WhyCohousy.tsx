'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const features = [
  {
    id: 'tech',
    title: 'Technology-Driven',
    icon: '💻',
    description: 'Owner dashboard, tenant portal, maintenance ticketing, automated rent reminders & escalation.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'human',
    title: 'Human Accountability',
    icon: '🤝',
    description: 'Real people managing your property, not just algorithms. Responsive support across time zones.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'premium',
    title: 'Premium Service',
    icon: '⭐',
    description: 'Inspection checklists, digital agreements, transparent reporting, and quality vendor networks.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'ai',
    title: 'AI-Powered Insights',
    icon: '🤖',
    description: 'AI-powered rent estimation and market analysis coming soon to help you maximize returns.',
    gradient: 'from-green-500 to-teal-500'
  }
]

export default function WhyCohousy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-300 bg-white/10 border border-white/20 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              WHAT MAKES US DIFFERENT
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-white mb-6"
          >
            Not Just a Portal.
            <span className="text-accent"> Not Just a Broker.</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto"
          >
            A lot of property "management" in India is either too broker-led (one-time transaction mindset) 
            or too tech-only (no human accountability). Cohousy is designed as{' '}
            <span className="text-accent font-semibold">tech + human + premium service</span>, 
            with a clear focus on trust and outcomes.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={withMotion(fadeInUp)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            You Get Structure and <span className="text-accent">Visibility</span> Through:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Owner dashboard + tenant portal',
              'Maintenance ticketing system',
              'Automated rent reminders & escalation',
              'Inspection checklists + reports',
              'Digital lease agreements',
              'AI-powered rent estimation (coming soon)'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

