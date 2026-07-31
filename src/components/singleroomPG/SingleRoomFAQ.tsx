'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'
import { FAQS as faqs } from './faqData'


export default function SingleRoomFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-purple-50 border border-purple-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-purple-600" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Frequently Asked Questions About
            <span className="text-purple-600"> Single Room PG in Kharadi</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our single room PG accommodation in Kharadi Pune.
            We address concerns about privacy, amenities, location, safety, and all aspects of luxury single room living.
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
              className="bg-purple-50 border border-purple-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-100 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-purple-600" />
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
          className="text-center mt-16 p-8 bg-purple-50 rounded-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Single Room Living?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team understands the specific needs of professionals seeking private accommodation
            in Kharadi's IT corridor. We're available 24/7 to help with any queries about our single room
            PG options, amenities, and booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Chat with Single Room Residents
                </button>
              }
              title="Chat with Single Room Residents"
              description="Connect with our current single room residents to learn about their private living experience."
              serviceType="Single Room Resident Chat"
            />
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Schedule Private Room Tour
                </button>
              }
              title="Schedule Private Room Tour"
              description="Book a personalized tour of our single room PG accommodations and see the privacy benefits firsthand."
              serviceType="Private Room Tour"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
