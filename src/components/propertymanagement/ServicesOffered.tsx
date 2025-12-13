'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, DollarSign, Wrench, ClipboardCheck, RefreshCw, ChevronDown, Check } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const services = [
  {
    icon: Users,
    title: 'Tenant Management',
    subtitle: 'Find, screen, and manage tenants professionally',
    description: 'We find tenants, screen them properly, and manage move-in/move-out so your property stays protected.',
    features: [
      'Listing & marketing across 8+ portals',
      'Tenant screening (ID, income/employer checks, background + verification steps)',
      'Leave & license drafting + registration support',
      'Photo/video inventory during move-in & move-out',
    ],
    note: 'Tenant verification is increasingly taken seriously by authorities, so doing this right matters.',
    color: 'blue',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: DollarSign,
    title: 'Rent Management',
    subtitle: 'No awkward calls. No "I\'ll pay tomorrow."',
    description: 'Automated rent collection with professional follow-ups and transparent reporting.',
    features: [
      'Rent collection via UPI/NEFT/card',
      'Late rent reminders + follow-ups',
      'Monthly payout + downloadable owner statement',
      'TDS handling support (especially helpful for NRIs)',
    ],
    color: 'green',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    subtitle: 'Vetted vendors, transparent pricing',
    description: 'You get a vetted vendor network and clean approvals—no inflated bills, no chaos.',
    features: [
      'Dedicated tenant support desk',
      'Vetted vendors (electrician, plumbing, AC, painting, cleaning)',
      'Preventive maintenance scheduling',
      'Transparent billing + owner approval above a threshold',
    ],
    color: 'orange',
    gradient: 'from-accent/10 to-orange-500/10',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspections & Property Care',
    subtitle: `We don't "manage" from a desk—we check the home`,
    description: 'Regular property inspections with detailed photo and video reports sent directly to you.',
    features: [
      'Structured inspections (bi-annual)',
      'Photo/video inspection reports sent to you',
      'Society rule coordination & compliance',
      'Preventive issue identification',
    ],
    color: 'purple',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: RefreshCw,
    title: 'Renewal & Exit Management',
    subtitle: 'Clean renewals and hassle-free exits',
    description: 'We handle renewals, rent increases, and clean exits so you never have to chase or negotiate.',
    features: [
      'Rent increase recommendations (data-backed)',
      'Renewal negotiations',
      'Damage settlement + deposit handling',
      'Smooth tenant transitions',
    ],
    color: 'indigo',
    gradient: 'from-indigo-500/10 to-blue-500/10',
  },
]

export default function ServicesOffered() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [expandedService, setExpandedService] = useState<number | null>(0)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <ClipboardCheck size={16} className="inline mr-2 text-accent" />
              COMPREHENSIVE SERVICES
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            What We Handle
            <span className="text-accent"> (End-to-End)</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            From finding the right tenant to handling every maintenance call—we manage it all 
            so you can truly treat your property as a passive investment.
          </motion.p>
        </motion.div>

        {/* Services Accordion */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto space-y-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === index

            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                className="group"
              >
                <div className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                  isExpanded 
                    ? 'border-accent shadow-xl shadow-accent/10' 
                    : 'border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200'
                }`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : ''}`} />
                  
                  {/* Header - Clickable */}
                  <button
                    onClick={() => toggleService(index)}
                    className="relative w-full text-left p-6 lg:p-8 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`flex-shrink-0 p-4 rounded-xl transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-accent text-white scale-110' 
                          : 'bg-gray-50 text-gray-600 group-hover:bg-accent/10 group-hover:text-accent'
                      }`}>
                        <Icon size={28} />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                          isExpanded ? 'text-accent' : 'text-black group-hover:text-accent'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={24} className={`transition-colors duration-300 ${
                        isExpanded ? 'text-accent' : 'text-gray-400 group-hover:text-accent'
                      }`} />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="relative px-6 lg:px-8 pb-8 pt-2">
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                <Check size={12} className="text-accent" />
                              </div>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {service.note && (
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <p className="text-sm text-gray-600 italic">
                            <span className="font-semibold text-gray-800">Note:</span> {service.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

