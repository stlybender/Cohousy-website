'use client'

import PGKharadiHero from '@/components/pgkharadi/PGKharadiHero'
import WhyChoosePGKharadi from '@/components/pgkharadi/WhyChoosePGKharadi'
import PGRoomOptions from '@/components/pgkharadi/PGRoomOptions'
import PGPricing from '@/components/pgkharadi/PGPricing'
import PGLocationAdvantage from '@/components/pgkharadi/PGLocationAdvantage'
import PGSafetySegments from '@/components/pgkharadi/PGSafetySegments'
import PGEverydayLiving from '@/components/pgkharadi/PGEverydayLiving'
import PGComparison from '@/components/pgkharadi/PGComparison'
import PGResidentTestimonials from '@/components/pgkharadi/PGResidentTestimonials'
import PGKharadiFAQ from '@/components/pgkharadi/PGKharadiFAQ'
import PGKharadiCTA from '@/components/pgkharadi/PGKharadiCTA'

export default function PGKharadiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <PGKharadiHero />
      <WhyChoosePGKharadi />
      <PGRoomOptions />
      <PGPricing />
      <PGLocationAdvantage />
      <PGSafetySegments />
      <PGEverydayLiving />
      <PGComparison />
      <PGResidentTestimonials />
      <PGKharadiFAQ />
      <PGKharadiCTA />
    </main>
  )
}
