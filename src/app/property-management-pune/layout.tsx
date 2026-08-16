import type { Metadata } from 'next'
import { FAQS } from '@/components/pmgmt/faqData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Property Management in Pune | Cohousy',
  description:
    'End-to-end property management for Pune homeowners. Tenant sourcing, rent by the 7th, maintenance, taxes, one number to call. NRI-friendly. Mumbai waitlist open.',
  alternates: {
    canonical: 'https://www.cohousy.com/property-management-pune',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/property-management-pune',
    title: 'Your home. Looked after. Always. — Property Management in Pune',
    description:
      "For homeowners in Pune. We find the right tenant, collect rent on time, and look after your home like it's ours.",
    images: [
      {
        url: '/pmgmt/hero.jpg',
        width: 1376,
        height: 768,
        alt: 'A beautifully kept Pune apartment in soft morning light — Cohousy property management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your home. Looked after. Always. — Property Management in Pune',
    description:
      "For homeowners in Pune. We find the right tenant, collect rent on time, and look after your home like it's ours.",
    images: ['/pmgmt/hero.jpg'],
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
      '@type': 'RealEstateAgent',
      name: 'Cohousy',
      url: 'https://www.cohousy.com',
      telephone: '+918908903900',
      email: 'contact@cohousy.com',
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
