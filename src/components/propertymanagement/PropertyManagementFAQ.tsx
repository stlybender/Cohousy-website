'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const faqs = [
  {
    question: 'Will I be updated regularly, even if I live abroad?',
    answer: 'Yes—inspection photo/video reports, monthly statements, and a structured support flow are part of the model. We understand time zone differences and schedule calls at convenient times for NRIs. You\'ll receive monthly detailed reports with photos and videos showing your property\'s condition.',
  },
  {
    question: 'Do you handle tenant screening and police verification steps?',
    answer: 'Tenant screening and verification are part of the tenant management process. We conduct thorough background checks including ID verification, income/employer verification, previous landlord references, and coordinate with local authorities for police verification as required by law.',
  },
  {
    question: 'What if a repair cost is high?',
    answer: 'Billing stays transparent, and approvals kick in above a defined threshold (typically ₹5,000). For any major repairs, we provide you with multiple vendor quotes, photos/videos of the issue, and detailed explanations before proceeding. You have full visibility and control over significant expenses.',
  },
  {
    question: 'Do you help with rent increases and renewals?',
    answer: 'Yes—renewals, negotiations, and rent increase recommendations are included. We provide data-backed market analysis to suggest optimal rent increases, handle all renewal negotiations with tenants, and ensure lease agreements are updated properly with legal compliance.',
  },
  {
    question: 'Can you guarantee rent?',
    answer: 'Yes, through the Premium Assured / Rent Assurance Plan. With this plan, Cohousy guarantees your rental income even if a tenant delays payment or defaults. You receive your rent on time, every time, while we handle the recovery process.',
  },
  {
    question: 'What happens if a tenant damages my property?',
    answer: 'We document property condition thoroughly during move-in with photos and videos. At move-out, we conduct a detailed inspection and handle damage settlements from the security deposit. Any disputes are managed professionally with proper documentation and legal support if needed.',
  },
  {
    question: 'How quickly can you find a tenant for my vacant property?',
    answer: 'Typically within 15-30 days depending on location and market conditions. We list your property across 8+ major portals, conduct professional photography, and leverage our network of potential tenants. Premium plan members get priority marketing.',
  },
  {
    question: 'What if I want to sell my property later?',
    answer: 'We offer a Manage-to-Sell service where we help position and sell your property through our partner channels. We can coordinate with tenants for viewings, provide detailed property maintenance records, and work with real estate partners to maximize your sale value.',
  },
  {
    question: 'Are there any lock-in periods or contracts?',
    answer: 'Standard agreements are typically annual with mutual notice periods. However, we offer flexible terms especially for NRIs and can customize based on your needs. There are no hidden lock-in penalties—we believe in earning your business through quality service.',
  },
]

export default function PropertyManagementFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
              <HelpCircle size={16} className="inline mr-2 text-accent" />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Got Questions?
            <span className="text-accent"> We've Got Answers</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Everything you need to know about our property management services. 
            Can't find your answer? Reach out to us directly.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <motion.div
                key={index}
                variants={withMotion(fadeInUp)}
                className="group"
              >
                <div className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? 'border-accent shadow-lg shadow-accent/10' 
                    : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
                }`}>
                  
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                  >
                    <span className={`text-lg font-bold transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-black group-hover:text-accent'
                    }`}>
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      {isActive ? (
                        <Minus size={20} className="text-accent" />
                      ) : (
                        <Plus size={20} className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={withMotion(fadeInUp)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="tel:+918908903900"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-black font-semibold rounded-xl hover:bg-accent hover:text-white transition-all duration-300"
          >
            <HelpCircle size={20} />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

