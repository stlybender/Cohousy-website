'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Home, Sparkles, FileText, Check } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import PropertyManagementForm from './PropertyManagementForm'

const upgrades = [
  {
    icon: Shield,
    title: 'Rent Assurance Plan',
    subtitle: 'Guaranteed Rent',
    description: 'If rent gets delayed or a tenant defaults, Cohousy still pays you—so your income stays predictable.',
    features: [
      'Guaranteed monthly rent payment',
      'Zero income gap during defaults',
      'Legal support for recovery',
      'Peace of mind for NRIs',
    ],
    pricing: 'Premium plan included',
    badge: 'Most Popular',
    color: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
  {
    icon: Home,
    title: 'Vacant Home Care',
    subtitle: 'For Empty Properties',
    description: 'Perfect if your home is vacant and you want it clean, safe, and ready anytime.',
    features: [
      'Monthly check-up visits',
      'Deep cleaning service',
      'Utility & bill management',
      'Photo/video reports',
    ],
    pricing: '₹1,500–₹3,000/month',
    badge: 'NRI Favorite',
    color: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Interiors & Rental Upgrade',
    subtitle: 'Boost Rental Value',
    description: 'Furnishing + upgrades that can boost rental value significantly with professional interior design.',
    features: [
      'Professional interior consultation',
      'Rental-optimized furnishing',
      'Quick ROI on investments',
      'Increased property appeal',
    ],
    pricing: 'Custom quote',
    color: 'from-accent/10 to-orange-500/10',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: FileText,
    title: 'NRI Tax & Repatriation Concierge',
    subtitle: 'CA Partner-Led Service',
    description: 'CA partner-led subscription for rental tax filing, TDS, and repatriation documentation.',
    features: [
      'Rental income tax filing',
      'TDS compliance & returns',
      'Repatriation documentation',
      'Year-round CA support',
    ],
    pricing: '₹12,000–₹30,000/year',
    badge: 'NRI Essential',
    color: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
  },
]

export default function OptionalUpgrades() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
              <Sparkles size={16} className="inline mr-2 text-accent" />
              PREMIUM ADD-ONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Optional Upgrades
            <span className="text-accent"> (Fully Hands-Off)</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Enhance your property management experience with our premium add-on services 
            designed for complete peace of mind.
          </motion.p>
        </motion.div>

        {/* Upgrade Cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {upgrades.map((upgrade, index) => {
            const Icon = upgrade.icon
            const isHovered = hoveredCard === index

            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`relative h-full p-8 bg-white border-2 rounded-2xl transition-all duration-500 ${
                  isHovered 
                    ? 'border-accent shadow-2xl shadow-accent/10 scale-105' 
                    : 'border-gray-100 shadow-sm'
                }`}>
                  
                  {/* Badge */}
                  {upgrade.badge && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                      {upgrade.badge}
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${upgrade.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex p-4 ${upgrade.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className={upgrade.iconColor} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                      {upgrade.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                      {upgrade.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      {upgrade.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {upgrade.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                              <Check size={12} className="text-accent" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pricing</p>
                          <p className="text-xl font-bold text-black">{upgrade.pricing}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <PropertyManagementForm
                        trigger={
                          <button className="w-full py-3 px-6 bg-accent/10 text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 group/btn">
                            <span className="flex items-center justify-center gap-2">
                              Add to Quote
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </button>
                        }
                        title={`Add ${upgrade.title}`}
                        description={`Get a customized quote with ${upgrade.title} included.`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            All pricing estimates are subject to property size, location, and specific requirements. 
            Contact us for a detailed quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

