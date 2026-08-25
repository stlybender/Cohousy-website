'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, ShoppingBag, TrainFront } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const DESTINATIONS = [
  {
    icon: Building2,
    name: 'Eon IT Park',
    detail: 'Infosys, Zensar, Credit Suisse, Barclays, Honeywell and 50+ companies',
  },
  {
    icon: Building2,
    name: 'World Trade Center Kharadi',
    detail: 'Accenture, UBS and the major consulting floors',
  },
  {
    icon: Building2,
    name: 'Gera Commerzone',
    detail: "The corridor's newest offices, minutes away",
  },
  {
    icon: ShoppingBag,
    name: 'Everyday life',
    detail: 'D-Mart 800 m, Phoenix MarketCity and Seasons Mall close by',
  },
]

const AREAS = [
  'Thite Nagar',
  'Chandan Nagar side',
  'Kharadi Bypass',
  'Near City Vista',
  'Vitthal Nagar',
  'Yashwant Nagar',
]

export default function PGLocationAdvantage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={containerRef}
      className="py-section bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <MapPin size={16} className="inline mr-2 text-accent" />
              WALK TO WORK
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Minutes from Eon IT Park,
            <span className="text-accent"> WTC and Gera Commerzone</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Kharadi&rsquo;s entire appeal is the commute you don&rsquo;t have to make. Our
            properties sit inside Kharadi&rsquo;s residential pockets, a 5–10 minute commute
            from the towers you work in.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={withMotion(staggerContainer)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {DESTINATIONS.map((destination) => {
              const Icon = destination.icon
              return (
                <motion.div
                  key={destination.name}
                  variants={withMotion(fadeInUp)}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5"
                >
                  <div className="rounded-xl bg-accent/10 p-3 shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{destination.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">
                      {destination.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              variants={withMotion(fadeInUp)}
              className="bg-white rounded-2xl border border-gray-100 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrainFront size={18} className="text-accent" />
                <h3 className="font-bold text-black">Areas we serve in Kharadi</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {AREAS.map((area) => (
                  <span
                    key={area}
                    className="text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p variants={withMotion(fadeInUp)} className="text-gray-600 pt-2">
              Working in the Eon corridor specifically? Start with{' '}
              <Link href="/pg-near-eon-it-park" className="text-accent hover:underline">
                PG near Eon IT Park
              </Link>
              .
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/PG/500+ IT Professionals.jpg"
              alt="IT professionals living in a Cohousy PG near Eon IT Park Kharadi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
