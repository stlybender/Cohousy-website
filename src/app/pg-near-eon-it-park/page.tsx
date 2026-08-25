'use client'

import BookNowCTA from '@/components/pgneareonitp/BookNowCTA'
import CommunityAndSafety from '@/components/pgneareonitp/CommunityAndSafety'
import DigitalExperience from '@/components/pgneareonitp/DigitalExperience'
import EonITParkFAQ from '@/components/pgneareonitp/EonITParkFAQ'
import FlexibleRoomOptions from '@/components/pgneareonitp/FlexibleRoomOptions'
import LuxuryAmenities from '@/components/pgneareonitp/LuxuryAmenities'
import PGComparison from '@/components/pgneareonitp/PGComparison'
import PGNearEonHero from '@/components/pgneareonitp/PGNearEonHero'
import PrimeLocationBenefits from '@/components/pgneareonitp/PrimeLocationBenefits'
import GoogleReviews from '@/components/GoogleReviews'
import { LEAD_BY_PAGE } from '@/lib/reviews'
import WhyChooseEonPG from '@/components/pgneareonitp/WhyChooseEonPG'
import { useState, useEffect } from 'react'

export default function PGNearEonITParkPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <PGNearEonHero />
      <WhyChooseEonPG />
      <PrimeLocationBenefits />
      <LuxuryAmenities />
      <DigitalExperience />
      <FlexibleRoomOptions />
      <PGComparison />
      <CommunityAndSafety />
      <GoogleReviews
        bg="bg-white"
        lead={LEAD_BY_PAGE.eon}
        accentText="text-orange-600"
        accentBtn="bg-orange-600 text-white"
        accentAvatar="bg-orange-600 text-white"
        accentHover="hover:text-orange-600"
        heading={<>What Residents Say<span className="text-orange-600"> on Google</span></>}
        intro="Not testimonials we wrote — real Google reviews from people who live here and walk to Eon IT Park. Every one is clickable, so you can verify it yourself."
      />
      <EonITParkFAQ />
      <BookNowCTA />

      {/* Scroll Progress Indicator */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div> */}
    </main>
  )
}