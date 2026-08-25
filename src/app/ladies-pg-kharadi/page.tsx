'use client'

import DigitalLiving from '@/components/ladiespg/DigitalLiving'
import LadiesPGAmenities from '@/components/ladiespg/LadiesPGAmenities'
import LadiesPGCTA from '@/components/ladiespg/LadiesPGCTA'
import LadiesPGFAQ from '@/components/ladiespg/LadiesPGFAQ'
import LadiesPGHero from '@/components/ladiespg/LadiesPGHero'
import LadiesPGPricing from '@/components/ladiespg/LadiesPGPricing'
import GoogleReviews from '@/components/GoogleReviews'
import { LEAD_BY_PAGE } from '@/lib/reviews'
import PrimeLocation from '@/components/ladiespg/PrimeLocation'
import SecurityFeatures from '@/components/ladiespg/SecurityFeatures'
import WhyChooseLadiesPG from '@/components/ladiespg/WhyChooseLadiesPG'
import { useState, useEffect } from 'react'

export default function LadiesPGPage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <LadiesPGHero />
            <WhyChooseLadiesPG />
            <PrimeLocation />
            <LadiesPGAmenities />
            <SecurityFeatures />
            <DigitalLiving />
            <LadiesPGPricing />
            <GoogleReviews
              bg="bg-pink-50"
              lead={LEAD_BY_PAGE.ladies}
              accentText="text-pink-600"
              accentBtn="bg-pink-600 text-white"
              accentAvatar="bg-pink-600 text-white"
              accentHover="hover:text-pink-600"
              heading={<>What Residents Say<span className="text-pink-600"> on Google</span></>}
            />
            <LadiesPGFAQ />
            <LadiesPGCTA />
            {/* Scroll Progress Indicator */}
            {/* <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50 pointer-events-none">
                <div
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 ease-out"
                    style={{
                        width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
                    }}
                />
            </div> */}
        </main>
    )
}