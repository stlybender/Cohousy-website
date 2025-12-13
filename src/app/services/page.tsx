'use client'

import { useState, useEffect } from 'react'
import ServicesHero from '@/components/services/ServicesHero'
import WhoThisIsFor from '@/components/services/WhoThisIsFor'
import ServicesOffered from '@/components/services/ServicesOffered'
import HowItWorks from '@/components/services/HowItWorks'
import OptionalUpgrades from '@/components/services/OptionalUpgrades'
import WhyCohousy from '@/components/services/WhyCohousy'
import ServicesPricing from '@/components/services/ServicesPricing'
import ServiceAreas from '@/components/services/ServiceAreas'
import ServicesFAQ from '@/components/services/ServicesFAQ'
import ServicesCTA from '@/components/services/ServicesCTA'

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <ServicesHero />
      <WhoThisIsFor />
      <ServicesOffered />
      <HowItWorks />
      <OptionalUpgrades />
      <WhyCohousy />
      <ServicesPricing />
      <ServiceAreas />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  )
}

