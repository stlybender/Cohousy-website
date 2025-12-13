'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Monitor, Cpu, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const features = [
  {
    icon: Monitor,
    title: 'Owner Dashboard',
    description: 'Real-time visibility into rent payments, maintenance tickets, and property status.',
  },
  {
    icon: Smartphone,
    title: 'Tenant Portal',
    description: 'Tenants can raise tickets, pay rent, and communicate—all through our app.',
  },
  {
    icon: Cpu,
    title: 'Automated Workflows',
    description: 'Rent reminders, escalation protocols, and maintenance ticketing run on autopilot.',
  },
  {
    icon: CheckCircle,
    title: 'Digital Agreements',
    description: 'Leave & license agreements handled digitally with proper legal compliance.',
  },
]

const differentiators = [
  'Tech + Human + Premium service (not just a portal)',
  'Real accountability with dedicated property managers',
  'Inspection checklists + digital documentation',
  'AI-powered rent estimation (planned phase)',
  'Transparent billing and owner approvals',
  'Time zone friendly for NRIs',
]

export default function WhyChooseUs() {
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
              <Cpu size={16} className="inline mr-2 text-accent" />
              WHAT MAKES US DIFFERENT
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            What Makes Cohousy
            <span className="text-accent"> Different</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            A lot of property "management" in India is either too broker-led (one-time transaction mindset) 
            or too tech-only (no human accountability). Cohousy is designed as{' '}
            <span className="text-black font-semibold">tech + human + premium service</span>, 
            with a clear focus on trust and outcomes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Features Grid */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="group relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Differentiators List */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={withMotion(fadeInUp)}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-6">
                You Get Structure and
                <span className="text-accent"> Visibility Through:</span>
              </h3>

              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={withMotion(fadeInUp)}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <CheckCircle size={14} className="text-accent" />
                      </div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-black transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="relative p-8 bg-gradient-to-br from-accent/5 to-orange-500/5 border border-accent/20 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <Image
                  src="/skyline.avif"
                  alt="Technology background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tech-Enabled Service
                  </span>
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  Not Just Software, But Better Service
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our platform automates the routine tasks while your dedicated property manager 
                  handles the important decisions—giving you the best of both worlds.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

