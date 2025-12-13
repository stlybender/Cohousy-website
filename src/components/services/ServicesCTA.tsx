'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '@/components/ContactFormDialog'

export default function ServicesCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-300 bg-white/10 border border-white/20 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              GET STARTED TODAY
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Make Your Property
            <span className="text-accent"> Truly Passive?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Share your property details and we'll tell you the best plan 
            (Standard / Assured / Vacant Care), expected rental range, and next steps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <ContactFormDialog
              title="Get Your Property Quote"
              description="Tell us about your property and we'll provide a customized management plan with pricing."
              serviceType="Property Management Quote"
              trigger={
                <button className="px-8 py-4 bg-accent text-black font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Get a Quote
                </button>
              }
            />

            <a
              href="tel:+918908903900"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Call
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-gray-400 text-sm">Transparent Pricing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Owner Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">0</div>
              <p className="text-gray-400 text-sm">Hidden Fees</p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
          >
            <p className="text-gray-300 text-sm mb-4">
              <span className="font-semibold text-white">What we'll need:</span> Name, Phone/WhatsApp, Email, 
              City, Property Type, Furnishing Status, Occupancy (Vacant/Occupied), Expected Rent, and any specific notes.
            </p>
            <p className="text-gray-400 text-xs italic">
              Your information is secure and will only be used to provide you with a customized property management quote.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

