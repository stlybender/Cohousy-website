'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const services = [
  {
    id: 'tenant',
    title: 'Tenant Management',
    icon: '👥',
    description: 'We find tenants, screen them properly, and manage move-in/move-out so your property stays protected.',
    features: [
      'Listing & marketing across 8+ portals',
      'Tenant screening (ID, income/employer checks, background + verification steps)',
      'Leave & license drafting + registration support',
      'Photo/video inventory during move-in & move-out'
    ]
  },
  {
    id: 'rent',
    title: 'Rent Management',
    icon: '💰',
    description: 'No awkward calls. No "I\'ll pay tomorrow."',
    features: [
      'Rent collection via UPI/NEFT/card',
      'Late rent reminders + follow-ups',
      'Monthly payout + downloadable owner statement',
      'TDS handling support (especially helpful for NRIs)'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repairs',
    icon: '🔧',
    description: 'You get a vetted vendor network and clean approvals—no inflated bills, no chaos.',
    features: [
      'Dedicated tenant support desk',
      'Vetted vendors (electrician, plumbing, AC, painting, cleaning)',
      'Preventive maintenance scheduling',
      'Transparent billing + owner approval above a threshold'
    ]
  },
  {
    id: 'inspections',
    title: 'Inspections & Property Care',
    icon: '🔍',
    description: 'We don\'t "manage" from a desk—we actually check the home.',
    features: [
      'Structured inspections (bi-annual)',
      'Photo/video inspection reports sent to you',
      'Society rule coordination & compliance'
    ]
  },
  {
    id: 'renewal',
    title: 'Renewal & Exit Management',
    icon: '📋',
    description: 'We handle renewals, rent increases, and clean exits.',
    features: [
      'Rent increase recommendations (data-backed)',
      'Renewal negotiations',
      'Damage settlement + deposit handling'
    ]
  }
]

export default function ServicesOffered() {
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
              WHAT WE HANDLE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            End-to-End
            <span className="text-accent"> Property Management</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            From finding quality tenants to handling daily operations, 
            we manage every aspect of your property with transparency and professionalism.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={withMotion(fadeInUp)}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-xl p-8"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

