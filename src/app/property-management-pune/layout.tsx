import type { Metadata } from 'next'
import { FAQS } from '@/components/pmgmt/faqData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Property Management in Pune | Cohousy',
  description:
    "For homeowners in Pune. Tenants, rent, maintenance, taxes, paperwork — managed end-to-end. Built by an operator who lives this every day.",
  alternates: {
    canonical: 'https://www.cohousy.com/property-management-pune',
  },
}

export default function PropertyManagementPuneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Property Management',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Cohousy',
      url: 'https://www.cohousy.com',
      telephone: '+918908903900',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kharadi',
        addressRegion: 'Pune',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
    description:
      'End-to-end property management for homeowners in Pune. Tenant sourcing, verification, lease, rent collection, maintenance, taxes, and a single point of contact.',
  }

  return (
    <>
      {children}
      {/* Server-rendered JSON-LD so Google sees it without waiting on hydration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  )
}
