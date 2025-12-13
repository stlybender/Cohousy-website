'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '@/components/ContactFormDialog'

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard Property Management',
    price: '8–10%',
    subtitle: 'of monthly rent',
    description: 'Comprehensive property management for occupied properties.',
    features: [
      'Tenant screening & placement',
      'Rent collection & reminders',
      'Maintenance coordination',
      'Bi-annual inspections',
      'Monthly owner statements',
      'Digital lease agreements'
    ],
    popular: false,
    note: 'Charged only when property is occupied'
  },
  {
    id: 'premium',
    name: 'Premium Assured Plan',
    price: '12–15%',
    subtitle: 'of monthly rent',
    description: 'Everything in Standard, plus guaranteed rent and priority service.',
    features: [
      'All Standard features included',
      'Rent guarantee (even if tenant defaults)',
      'Priority maintenance response',
      'Quarterly property reports',
      'Dedicated account manager',
      'Premium vendor network'
    ],
    popular: true,
    note: 'Best for complete peace of mind'
  },
  {
    id: 'vacant',
    name: 'Vacant Home Care',
    price: '₹1,500–₹3,000',
    subtitle: 'per month',
    description: 'Perfect for empty properties needing regular care.',
    features: [
      'Monthly property check-ups',
      'Deep cleaning service',
      'Utility & appliance checks',
      'Society bill management',
      'Photo/video reports',
      'Emergency response'
    ],
    popular: false,
    note: 'Pricing varies by city'
  },
  {
    id: 'nri-tax',
    name: 'NRI Tax Concierge',
    price: '₹12,000–₹30,000',
    subtitle: 'per year',
    description: 'CA partner-led tax and repatriation support for NRI owners.',
    features: [
      'Rental tax filing',
      'TDS compliance & filing',
      'Repatriation documentation',
      'Tax optimization advice',
      'Annual financial statements',
      'Expert CA consultation'
    ],
    popular: false,
    note: 'Pricing depends on complexity'
  }
]

export default function ServicesPricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

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
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Pricing Aligned with
            <span className="text-accent"> Results</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            No hidden fees. No surprises. Choose the plan that fits your property and goals.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={withMotion(fadeInUp)}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 p-6 ${
                plan.popular
                  ? 'border-accent shadow-xl scale-105 lg:scale-110'
                  : 'border-gray-100 hover:border-accent hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-black mb-2 mt-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-black">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-500">
                  {plan.subtitle}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-gray-700 flex items-start"
                  >
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-xs text-gray-500 italic mb-6 border-t border-gray-100 pt-4">
                {plan.note}
              </p>

              {/* CTA Button */}
              <ContactFormDialog
                title={`Request ${plan.name}`}
                description="Tell us about your property and we'll provide a customized quote."
                serviceType={`Property Management - ${plan.name}`}
                trigger={
                  <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent text-black hover:bg-orange-600'
                      : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}>
                    Request Pricing
                  </button>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you? <span className="font-semibold">Let's talk.</span>
          </p>
          <ContactFormDialog
            title="Get Custom Quote"
            description="Tell us about your property and we'll recommend the best plan for your needs."
            serviceType="Property Management - Custom Quote"
            trigger={
              <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Get Custom Quote
              </button>
            }
          />
        </motion.div>
      </div>
    </section>
  )
}

