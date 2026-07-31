'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'
import { FAQS as faqs } from './faqData'


export default function EonITParkFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      ref={containerRef}
      className="py-section bg-orange-50 relative overflow-hidden"
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-orange-200 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-orange-600" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            FAQs About PG near
            <span className="text-orange-600"> Eon IT Park Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our PG accommodation near Eon IT Park.
            We understand the specific needs of IT professionals and address all concerns about
            location, amenities, community, and convenience.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={withMotion(fadeInUp)}
              className="bg-white border border-orange-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-orange-600" />
                  ) : (
                    <Plus size={20} className="text-gray-600" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-white rounded-2xl border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Our Location?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team understands the specific location advantages and needs of
            professionals working at Eon IT Park and nearby companies. We're available
            24/7 to help with any queries about proximity, transport, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Chat with Current Residents
                </button>
              }
              title="Connect with Current Residents"
              description="Chat with our current residents to learn about their experience living near Eon IT Park."
              serviceType="Resident Chat"
            />
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Schedule Location Visit
                </button>
              }
              title="Schedule Location Visit"
              description="Visit our PG near Eon IT Park to see the prime location and proximity advantages firsthand."
              serviceType="Location Visit"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
