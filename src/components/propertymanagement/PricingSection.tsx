'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Check, Star } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import PropertyManagementForm from './PropertyManagementForm'

const pricingPlans = [
  {
    name: 'Standard Management',
    subtitle: 'Essential property management',
    price: '8–10%',
    period: 'of monthly rent',
    description: 'Comprehensive property management with all core services included.',
    features: [
      'Tenant placement & screening',
      'Rent collection & reminders',
      'Maintenance coordination',
      'Bi-annual inspections',
      'Monthly owner statements',
      'Digital agreements',
      'Owner dashboard access',
      'Tenant portal access',
    ],
    note: 'Charged only when property is occupied',
    popular: false,
  },
  {
    name: 'Premium Assured Plan',
    subtitle: 'Complete peace of mind',
    price: '12–15%',
    period: 'of monthly rent',
    description: 'Everything in Standard, plus rent guarantee and priority service.',
    features: [
      'Everything in Standard Plan',
      'Rent guarantee (no income gaps)',
      'Faster maintenance response',
      'Priority support channel',
      'Quarterly inspections',
      'Legal support for disputes',
      'Dedicated relationship manager',
      'Enhanced reporting',
    ],
    note: 'Ideal for NRIs and busy professionals',
    popular: true,
  },
]

const addOns = [
  {
    name: 'Vacant Home Care',
    price: '₹1,500–₹3,000',
    period: '/month',
    description: 'City-dependent pricing',
  },
  {
    name: 'NRI Tax Concierge',
    price: '₹12,000–₹30,000',
    period: '/year',
    description: 'Based on complexity',
  },
  {
    name: 'Interiors & Upgrades',
    price: 'Custom Quote',
    period: '',
    description: 'Project-based pricing',
  },
]

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

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
              <DollarSign size={16} className="inline mr-2 text-accent" />
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Pricing
            <span className="text-accent"> (Transparent, Aligned with Results)</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Simple, transparent pricing with no hidden fees. Choose the plan that works best for your property.
          </motion.p>
        </motion.div>

        {/* Main Pricing Plans */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              className="group relative"
            >
              <div className={`relative h-full p-8 bg-white rounded-2xl transition-all duration-500 ${
                plan.popular
                  ? 'border-2 border-accent shadow-2xl shadow-accent/10 scale-105'
                  : 'border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200'
              }`}>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </div>
                )}

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  plan.popular ? 'from-accent/5 to-orange-500/5' : 'from-gray-50/50 to-transparent'
                } rounded-2xl`} />
                
                <div className="relative">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-black">{plan.price}</span>
                      <span className="text-lg text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.popular ? 'bg-accent/20' : 'bg-gray-100'
                          }`}>
                            <Check size={12} className={plan.popular ? 'text-accent' : 'text-gray-600'} />
                          </div>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold text-gray-800">Note:</span> {plan.note}
                    </p>
                  </div>

                  {/* CTA */}
                  <PropertyManagementForm
                    trigger={
                      <button className={`w-full py-4 px-6 font-bold rounded-xl transition-all duration-300 ${
                        plan.popular
                          ? 'bg-accent text-white hover:bg-black hover:shadow-xl hover:shadow-accent/25'
                          : 'bg-gray-100 text-black hover:bg-accent hover:text-white hover:shadow-lg'
                      }`}>
                        Get Started with {plan.name}
                      </button>
                    }
                    title={`Request ${plan.name} Quote`}
                    description={`Get a customized quote for ${plan.name}.`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-black mb-3">
              Optional Add-On Services
            </h3>
            <p className="text-gray-600">
              Enhance your property management with these premium services
            </p>
          </motion.div>

          <motion.div
            variants={withMotion(fadeInUp)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-black mb-2">{addOn.name}</h4>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-accent">{addOn.price}</span>
                  {addOn.period && <span className="text-sm text-gray-600">{addOn.period}</span>}
                </div>
                <p className="text-sm text-gray-600">{addOn.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <PropertyManagementForm
            trigger={
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-accent hover:text-black transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 group">
                Request Pricing for Your Property
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            }
            title="Get Custom Pricing Quote"
            description="Share your property details and we'll provide a customized pricing plan."
          />
          
          <p className="mt-6 text-sm text-gray-500">
            Market pricing for property management in India commonly falls in the ~6–10% range, depending on scope.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

