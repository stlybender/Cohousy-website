'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Building2, MapPin, TrendingUp, Clock } from 'lucide-react'
import { staggerContainer, fadeInUp, splitLineReveal, withMotion } from '@/lib/motion'
import PropertyManagementForm from './PropertyManagementForm'

const stats = [
  { value: '500+', label: 'Properties Managed', icon: Building2 },
  { value: '2 Cities', label: 'Bangalore & Pune', icon: MapPin },
  { value: '98%', label: 'Rent Collection Rate', icon: TrendingUp },
  { value: '24/7', label: 'Support Available', icon: Clock }
]

export default function PropertyManagementHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      ref={containerRef}
      className="relative pt-28 lg:pt-36 pb-12 lg:pb-24 bg-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/skyline.avif"
          alt="Property Management Services in India"
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span
              variants={withMotion(fadeInUp)}
              className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6"
            >
              <Building2 size={16} className="text-accent" />
              FULL-SERVICE PROPERTY MANAGEMENT
            </motion.span>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1 className="text-display-xl font-bold text-black leading-tight lg:leading-[0.9]">
                <div className="overflow-hidden pb-2">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    Your India property
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-2">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    <span className="text-accent">fully managed</span>,
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-2">
                  <motion.span variants={withMotion(splitLineReveal)} className="block">
                    from anywhere
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subhead */}
            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-xl text-gray-600 font-light tracking-wide mb-6 leading-relaxed"
            >
              If owning property in India has started feeling like a second job (or a constant worry), you're not alone. 
              <span className="text-black font-medium"> Cohousy Property Management</span> is built for owners who want 
              <span className="text-accent font-semibold"> predictable rental income and zero day-to-day involvement</span>.
            </motion.p>

            {/* Single consolidated statement */}
            <motion.p
              variants={withMotion(fadeInUp)}
              className="text-lg leading-relaxed text-black font-medium mb-4"
            >
              Not a portal. Not a broker. Your full-service property partner.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="mt-6"
            >
              <PropertyManagementForm
                trigger={
                  <button className="group relative px-10 py-4 bg-accent text-black font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10 flex items-center gap-3">
                      Tell us about your property
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                }
                title="Get Your Management Quote"
                description="Share your property details and we'll provide a customized management plan."
              />
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={withMotion(fadeInUp)}
                  className="group relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

