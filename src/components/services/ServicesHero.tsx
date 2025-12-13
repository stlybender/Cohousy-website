'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, splitLineReveal, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '@/components/ContactFormDialog'

export default function ServicesHero() {
  return (
    <section className="relative pt-12 bg-white">
      {/* Background (very subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/skyline.avif"
          alt="Property management services across India"
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content area */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.span
            variants={withMotion(fadeInUp)}
            className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            PROPERTY MANAGEMENT SERVICES
          </motion.span>

          {/* Headline */}
          <div className="mb-6">
            <motion.h1 className="text-display-xl font-bold text-black leading-[1.1] mb-4">
              <div className="overflow-hidden">
                <motion.span variants={withMotion(splitLineReveal)} className="block">
                  Your India property—
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={withMotion(splitLineReveal)} className="block text-accent">
                  fully managed, from anywhere
                </motion.span>
              </div>
            </motion.h1>
          </div>

          {/* Description paragraph */}
          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl leading-relaxed text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            If owning property in India has started feeling like a second job (or a constant worry), you're not alone. 
            Chasing rent. Tenant drama. Society follow-ups. Random repair calls at the worst time. 
            And if you're an NRI, the time zone gap makes everything harder.
          </motion.p>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl leading-relaxed text-gray-900 font-medium mb-8 max-w-3xl mx-auto"
          >
            <span className="text-accent font-semibold">Cohousy Property Management</span> is built for owners who want{' '}
            <span className="font-bold">predictable rental income and zero day-to-day involvement</span>—with the right mix of{' '}
            <span className="font-bold">technology + real humans + premium accountability</span>.
          </motion.p>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-lg text-gray-600 mb-10 italic"
          >
            Not a portal. Not a broker. A full-service property partner.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ContactFormDialog
              title="Get a Management Quote"
              description="Tell us about your property and we'll provide a customized management plan."
              serviceType="Property Management"
              trigger={
                <button className="px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get a Management Quote
                </button>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

