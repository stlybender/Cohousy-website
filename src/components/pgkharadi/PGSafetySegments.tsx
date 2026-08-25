'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, Heart, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'

const SEGMENTS = [
  {
    icon: Shield,
    image: '/ladies/Hero.jpg',
    alt: 'Women-only ladies PG in Kharadi Pune with 24/7 security',
    title: 'For women: safety you can verify',
    body: 'Ask anyone hunting for a girls PG in Kharadi what matters most and the answer is the same — safety you can check, not promises on a poster. Our ladies PG is 100% women-only, with biometric entry, CCTV, panic buttons, family location sharing, night security staff and a female property captain on call. Ladies-only gym hours and women’s community events come as standard.',
    href: '/ladies-pg-kharadi',
    linkLabel: 'Ladies PG in Kharadi',
  },
  {
    icon: Users,
    image: '/male/Hero.jpg',
    alt: 'Male PG in Kharadi Pune for IT professionals near Eon IT Park',
    title: 'For men: walk to Eon, live with your peers',
    body: 'Our male PG is built for IT professionals: double sharing at ₹10,000/month or a private single at ₹18,000/month, minutes from Eon IT Park, alongside a community of residents who work in the same corridor you do.',
    href: '/male-pg-kharadi',
    linkLabel: 'Male PG in Kharadi',
  },
  {
    icon: Heart,
    image: '/Home/Premium Co-living.jpg',
    alt: 'Private 1BHK co-living unit in Kharadi Pune suitable for couples',
    title: 'For couples: take a private unit instead',
    body: 'Shared PG rooms are single-gender, ours included. But couples don’t need a “couple PG” — a private 1RK or 1BHK co-living unit from ₹18,000/month gives you a fully furnished home with zero brokerage and none of the guest-policy friction of a shared PG.',
    href: '/co-living',
    linkLabel: 'Co-living in Kharadi',
  },
]

export default function PGSafetySegments() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })

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
              <Shield size={16} className="inline mr-2 text-accent" />
              WHO LIVES HERE
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            Built for Women, Men
            <span className="text-accent"> and Couples</span>
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            Different people need different things from a home in Kharadi. Here is exactly
            what each option gives you — including a straight answer on couples.
          </motion.p>
        </motion.div>

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {SEGMENTS.map((segment) => {
            const Icon = segment.icon
            return (
              <motion.div
                key={segment.href}
                variants={withMotion(fadeInUp)}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={segment.image}
                    alt={segment.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-xl bg-accent/10 p-2">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-black">{segment.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{segment.body}</p>

                  <Link
                    href={segment.href}
                    className="inline-flex items-center gap-2 mt-5 font-semibold text-accent hover:gap-3 transition-all duration-300"
                  >
                    {segment.linkLabel}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
