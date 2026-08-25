'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Download,
  Star,
  Building2,
  Users,
  Shield,
  ChevronRight
} from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from './ContactFormDialog'

const XIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Every link here must point to a real route under src/app — no dead pages.
const footerLinks = {
  'Accommodation': [
    { title: 'PG in Kharadi', href: '/pg-kharadi' },
    { title: 'Co-living Spaces in Kharadi', href: '/co-living' },
    { title: 'PG near Eon IT Park', href: '/pg-near-eon-it-park' },
    { title: 'Ladies PG in Kharadi', href: '/ladies-pg-kharadi' },
    { title: 'Male PG in Kharadi', href: '/male-pg-kharadi' },
    { title: 'Single Room PG', href: '/single-room-pg-kharadi' },
    { title: 'Long-term Rentals', href: '/long-term-rentals' },
    { title: 'Short-term Stays', href: '/short-term-rentals' }
  ],
  'Services': [
    { title: 'Our Services', href: '/services' },
    { title: 'Property Management', href: '/property-management-pune' },
    { title: 'Explore Residences', href: '/explore' },
    { title: '1BHK Flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' }
  ],
  'Company': [
    { title: 'About Cohousy', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Partner with Us', href: '/partners' }
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/cohousy', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/cohousy', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cohousy/about/', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com/cohousy', label: 'X' }
]

const contactInfo = {
  address: 'Kharadi, Pune, Maharashtra 411014',
  phone: '+91 8908903900',
  email: 'contact@cohousy.com',
  whatsapp: '+91 8908903900'
}

const quickStats = [
  { icon: Building2, value: '10+', label: 'Properties' },
  { icon: Users, value: '500+', label: 'Happy Residents' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
  { icon: Shield, value: '100%', label: 'Verified Safe' }
]

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <footer
      ref={containerRef}
      className="relative bg-gray-900 text-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container mx-auto px-6 pt-16 pb-12"
        >
          {/* Header with CTA */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience
              <span className="text-accent"> Premium Living?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of professionals who've made Cohousy their home in Kharadi's tech hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactFormDialog
                trigger={
                  <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Schedule a Tour
                  </button>
                }
                title="Schedule Your Tour"
                description="Book a personalized tour of our premium co-living spaces at your convenience."
                serviceType="Property Tour"
              />
              <ContactFormDialog
                trigger={
                  <button className="w-fit flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300">
                    <Download />    Download App
                  </button>
                }
                title="Get Cohousy App"
                description="Download our app for seamless booking and management of your PG accommodation."
                serviceType="App Download"
              />
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <IconComponent size={32} className="text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>

          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Brand Section */}
            <motion.div
              variants={withMotion(fadeInUp)}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img src='/white.png' className='h-20' />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Redefining urban living with premium co-living spaces in Kharadi's tech hub.
                Modern amenities, vibrant community, digital-first experience.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-gray-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                variants={withMotion(fadeInUp)}
                className="space-y-4"
              >
                <h3 className="text-lg ml-6 font-semibold text-accent">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-300 hover:text-accent transition-colors duration-300"
                      >
                        <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-sm">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* App Download Section */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="bg-gray-800 rounded-2xl p-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Get the Cohousy App
                </h3>
                <p className="text-gray-300 mb-6">
                  100% digital experience - from booking to community events,
                  manage everything seamlessly with our smart app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                    <Download size={20} />
                    App Store
                  </button>
                  <button className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                    <Download size={20} />
                    Google Play
                  </button>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-block p-4 bg-accent/10 rounded-2xl">
                  <div className="text-3xl font-bold text-accent mb-2">4.8★</div>
                  <div className="text-sm text-gray-300">App Store Rating</div>
                  <div className="text-xs text-gray-400">(1000+ reviews)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={withMotion(fadeInUp)}
            className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-700"
          >
            <div className="flex items-center space-x-6 mb-6 sm:mb-0">
              <span className="text-gray-300">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </Link>
                )
              })}
            </div>

            <div className="text-sm text-gray-400">
              Join our community of <span className="text-accent font-semibold">500+</span> professionals
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="container mx-auto px-6 py-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © 2026 Cohousy. All rights reserved. | Transforming urban living in Pune since 2020.
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Owner cross-link — owner traffic hiding in tenant pages */}
            <div className="mt-6 text-sm text-gray-400">
              Own a flat in Pune?{' '}
              <Link
                href="/property-management-pune"
                className="text-accent hover:underline"
              >
                We manage those too →
              </Link>
            </div>

            {/* Additional SEO Links — real anchors to real routes, phrased as
                the searches people actually type (GSC + autocomplete data) */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="text-xs text-gray-500 leading-relaxed">
                <strong>Popular Searches:</strong>{' '}
                {[
                  { label: 'PG in Kharadi Pune', href: '/pg-kharadi' },
                  { label: 'PG in Kharadi for female', href: '/ladies-pg-kharadi' },
                  { label: 'PG in Kharadi for male', href: '/male-pg-kharadi' },
                  { label: 'Single room PG in Kharadi with price', href: '/single-room-pg-kharadi' },
                  { label: 'PG near Eon IT Park', href: '/pg-near-eon-it-park' },
                  { label: 'Best PG in Kharadi', href: '/pg-kharadi' },
                  { label: 'Co-living spaces in Pune', href: '/co-living' },
                  { label: 'PG in Kharadi with food', href: '/pg-kharadi' },
                  { label: '1BHK flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' },
                  { label: 'Daily basis PG in Kharadi', href: '/short-term-rentals' },
                  { label: 'Flats on rent in Kharadi', href: '/long-term-rentals' },
                ].map((item, i, arr) => (
                  <span key={item.label}>
                    <Link href={item.href} className="hover:text-accent transition-colors duration-300">
                      {item.label}
                    </Link>
                    {i < arr.length - 1 ? ', ' : '.'}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  )
}
