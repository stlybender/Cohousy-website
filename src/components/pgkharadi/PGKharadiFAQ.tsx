'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import ContactFormDialog from '../ContactFormDialog'
import { FAQS as faqs } from './faqData'

export default function PGKharadiFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })
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

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-accent" />
              PG IN KHARADI FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Every Question,
            <span className="text-accent"> Answered</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Prices, deposits, safety, food, couples and commute times — the things people
            actually search for before choosing a PG in Kharadi.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={withMotion(fadeInUp)}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-bold text-black">{faq.question}</span>
                <span className="shrink-0 text-accent">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* Answers stay mounted and collapse via height, rather than
                  unmounting — this page's whole job is SEO, and conditionally
                  rendered answers would keep 15 of 16 out of the served HTML. */}
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Still have a question we haven&rsquo;t covered?</p>
          <ContactFormDialog
            trigger={
              <button className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Ask Us Directly
              </button>
            }
            title="Ask Us Anything"
            description="Send your question and we'll get back to you within 24 hours."
            serviceType="PG Question"
            propertyName="PG in Kharadi"
          />
        </motion.div>
      </div>
    </section>
  )
}
