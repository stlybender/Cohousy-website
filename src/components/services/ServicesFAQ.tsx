'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    id: 1,
    question: 'Will I be updated regularly, even if I live abroad?',
    answer: 'Absolutely. Inspection photo/video reports, monthly statements, and a structured support flow are built into our service model. We understand time zone challenges and ensure communication happens at times convenient for you.'
  },
  {
    id: 2,
    question: 'Do you handle tenant screening and police verification steps?',
    answer: 'Yes, tenant screening and verification are core parts of our tenant management process. We conduct ID verification, income/employer checks, background verification, and coordinate with local authorities for proper documentation.'
  },
  {
    id: 3,
    question: 'What if a repair cost is high?',
    answer: 'We maintain complete transparency with billing. All vendor costs are passed through without markup, and we have approval thresholds in place. Any expense above the defined limit requires your explicit approval before we proceed.'
  },
  {
    id: 4,
    question: 'Do you help with rent increases and renewals?',
    answer: 'Yes, we actively manage renewals and negotiations. We provide data-backed rent increase recommendations based on market analysis, handle tenant discussions, and ensure smooth agreement renewals or new tenant placement.'
  },
  {
    id: 5,
    question: 'Can you guarantee rent?',
    answer: 'Yes, through our Premium Assured Plan / Rent Assurance add-on. Even if rent gets delayed or a tenant defaults, Cohousy pays you on time—ensuring your income stays predictable and passive.'
  }
]

export default function ServicesFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
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
              <span className="w-2 h-2 bg-accent rounded-full inline-block mr-2" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Got
            <span className="text-accent"> Questions?</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Here are answers to the most common questions we receive from property owners.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={withMotion(fadeInUp)}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300 pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-accent flex items-center justify-center transition-all duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-black mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help. Reach out and we'll be happy to discuss your specific situation.
          </p>
          <a
            href="mailto:support@cohousy.com"
            className="inline-block px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}

