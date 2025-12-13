'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Download, MapPin, Star, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import PropertyManagementForm from './PropertyManagementForm'

const quickStats = [
  { icon: MapPin, value: 'Bangalore & Pune', label: 'Active Service Areas' },
  { icon: Star, value: '98%', label: 'Rent Collection Rate' },
  { icon: CheckCircle, value: '500+', label: 'Properties Managed' }
]

export default function PropertyManagementCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section
      ref={containerRef}
      className="py-section bg-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/skyline.avif"
          alt="Book property management services"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Main CTA Section */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={withMotion(fadeInUp)}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2 animate-pulse" />
              READY TO GET STARTED?
            </span>

            <h2 className="text-display-lg font-bold text-black mb-6">
              Ready to Make Your Property
              <span className="text-accent"> Truly Passive?</span>
            </h2>

            <p className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto mb-8">
              Share your property details and we'll tell you the best plan (Standard / Assured / Vacant Care), 
              expected rental range, and next steps.
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <PropertyManagementForm
              trigger={
                <button className="group relative px-12 py-4 bg-accent text-black font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                  <Phone size={20} className="inline mr-3" />
                  Book a Call
                  <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              }
              title="Schedule a Call"
              description="Book a consultation call with our property management experts."
            />

            <PropertyManagementForm
              trigger={
                <button className="group relative px-12 py-4 bg-black text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Download size={20} className="inline mr-3" />
                  Get a Quote
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              }
              title="Request a Quote"
              description="Get a customized property management quote based on your needs."
            />
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {quickStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-black">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Form Fields Preview */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              What We'll Ask You
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Property Details</p>
                    <p className="text-sm text-gray-600">Location, type, and furnishing status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Current Status</p>
                    <p className="text-sm text-gray-600">Vacant or occupied</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Expected Rent</p>
                    <p className="text-sm text-gray-600">Your rental income expectations</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Contact Information</p>
                    <p className="text-sm text-gray-600">Name, phone, email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Service Preferences</p>
                    <p className="text-sm text-gray-600">Any specific requirements or notes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">City/Location</p>
                    <p className="text-sm text-gray-600">Service area verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PropertyManagementForm
                trigger={
                  <button className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-black font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group">
                    Start Your Application Now
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                }
                title="Property Management Application"
                description="Complete this form to get started with our property management services."
              />
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>No hidden charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

