'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { MessageCircleMore } from 'lucide-react'
import Link from 'next/link'

export default function WhatsAppButton() {
  const controls = useAnimation()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const animateButton = async () => {
      await controls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        y: [0, -5, 0],
        transition: { duration: 0.5, ease: 'easeInOut' },
      })
      setIsAnimating(false)
    }

    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        animateButton()
      }
    }, 5000 + Math.random() * 2000) // 5-7 seconds

    return () => clearInterval(interval)
  }, [controls, isAnimating])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      animate={controls}
      whileHover={{ scale: 1.1 }}
    >
      <Link
      href="https://wa.me/918908903900"
      target="_blank"
      rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      aria-label="Chat with us on WhatsApp"
      >
        <MessageCircleMore size={28} strokeWidth={2} />
      </Link>
    </motion.div>
  )
}
