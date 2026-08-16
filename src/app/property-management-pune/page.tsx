'use client'

import PMHeader from '@/components/pmgmt/PMHeader'
import PMHero from '@/components/pmgmt/PMHero'
import PMOutcomes from '@/components/pmgmt/PMOutcomes'
import PMHubAndSpoke from '@/components/pmgmt/PMHubAndSpoke'
import PMDeepDive from '@/components/pmgmt/PMDeepDive'
import PMComparison from '@/components/pmgmt/PMComparison'
import PMProcess from '@/components/pmgmt/PMProcess'
import PMTrust from '@/components/pmgmt/PMTrust'
import PMNri from '@/components/pmgmt/PMNri'
import PMTestimonials from '@/components/pmgmt/PMTestimonials'
import PMFaq from '@/components/pmgmt/PMFaq'
import PMWaitlist from '@/components/pmgmt/PMWaitlist'
import PMFinalCta from '@/components/pmgmt/PMFinalCta'
import PMFooter from '@/components/pmgmt/PMFooter'

export default function PropertyManagementNewPage() {
  return (
    <>
      <PMHeader />
      <main className="min-h-screen overflow-x-hidden bg-white">
        <PMHero />
        <PMOutcomes />
        <PMHubAndSpoke />
        <PMDeepDive />
        <PMComparison />
        <PMProcess />
        <PMTrust />
        <PMNri />
        {/* Renders nothing until SHOW_TESTIMONIALS is flipped with real quotes */}
        <PMTestimonials />
        <PMFaq />
        <PMWaitlist />
        <PMFinalCta />
      </main>
      <PMFooter />
    </>
  )
}
