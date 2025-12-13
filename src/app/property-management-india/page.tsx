'use client'

import PropertyManagementHero from '@/components/propertymanagement/PropertyManagementHero'
import WhoThisIsFor from '@/components/propertymanagement/WhoThisIsFor'
import ServicesOffered from '@/components/propertymanagement/ServicesOffered'
import OptionalUpgrades from '@/components/propertymanagement/OptionalUpgrades'
import HowItWorks from '@/components/propertymanagement/HowItWorks'
import WhyChooseUs from '@/components/propertymanagement/WhyChooseUs'
import PricingSection from '@/components/propertymanagement/PricingSection'
import ServiceAreas from '@/components/propertymanagement/ServiceAreas'
import PropertyManagementFAQ from '@/components/propertymanagement/PropertyManagementFAQ'
import PropertyManagementCTA from '@/components/propertymanagement/PropertyManagementCTA'

export default function PropertyManagementPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <PropertyManagementHero />
      <WhoThisIsFor />
      <ServicesOffered />
      <HowItWorks />
      <OptionalUpgrades />
      <WhyChooseUs />
      <PricingSection />
      <ServiceAreas />
      <PropertyManagementFAQ />
      <PropertyManagementCTA />
    </main>
  )
}

