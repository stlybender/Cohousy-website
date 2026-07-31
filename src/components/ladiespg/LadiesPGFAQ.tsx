'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'
import { FAQS as faqs } from './faqData'


export default function LadiesPGFAQ() {
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-pink-50 border border-pink-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-pink-600" />
              LADIES PG FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Common Questions About
            <span className="text-pink-600"> Women's Safety & Comfort</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Get answers to the most important questions about our ladies PG in Kharadi Pune.
            We understand that safety and comfort are paramount when choosing accommodation as a woman,
            and we're here to address all your concerns.
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
              className="bg-pink-50 border border-pink-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-pink-100 transition-colors duration-300"
              >
                <span className="font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} className="text-pink-600" />
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
          className="text-center mt-16 p-8 bg-pink-50 rounded-2xl border border-pink-100"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still Have Questions About Women's Safety?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our women-focused support team is available 24/7 to address any specific concerns
            about safety, amenities, or accommodation options for ladies in Kharadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Talk to Female Counselor
                </button>
              }
              title="Talk to Female Counselor"
              description="Connect with our female counselor for personalized support and guidance on women's accommodation."
              serviceType="Female Counselor Support"
            />
            <ContactFormDialog
              trigger={
                <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300">
                  Schedule Women-Only Tour
                </button>
              }
              title="Schedule Women-Only Tour"
              description="Book an exclusive women-only tour to experience our safe and secure ladies PG environment."
              serviceType="Women-Only Tour"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
