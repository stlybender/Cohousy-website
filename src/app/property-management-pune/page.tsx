'use client'

import PMHero from '@/components/pmgmt/PMHero'
import PMOutcomes from '@/components/pmgmt/PMOutcomes'
import PMHubAndSpoke from '@/components/pmgmt/PMHubAndSpoke'
import PMDeepDive from '@/components/pmgmt/PMDeepDive'
import PMComparison from '@/components/pmgmt/PMComparison'
import PMProcess from '@/components/pmgmt/PMProcess'
import PMPricing from '@/components/pmgmt/PMPricing'
import PMTrust from '@/components/pmgmt/PMTrust'
import PMFaq from '@/components/pmgmt/PMFaq'
import PMFinalCta from '@/components/pmgmt/PMFinalCta'

export default function PropertyManagementNewPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <PMHero />
      <PMOutcomes />
      <PMHubAndSpoke />
      <PMDeepDive />
      <PMComparison />
      <PMProcess />
      <PMPricing />
      <PMTrust />
      <PMFaq />
      <PMFinalCta />
    </main>
  )
}
