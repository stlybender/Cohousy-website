import { Metadata } from 'next'
import { FAQS } from '@/components/pgneareonitp/faqData'

export const metadata: Metadata = {
  title: 'PG Near Eon IT Park, Kharadi — 5-Min Walk, from ₹10,000',
  description: 'A 5-minute walk to Eon IT Park. Furnished PG rooms in Kharadi from ₹10,000/month — WiFi, housekeeping and utilities included. Zero brokerage. Book a visit.',
  keywords: 'PG near Eon IT Park Kharadi, PG near Kharadi Eon IT Park, PG in Kharadi near Eon IT Park, best PG near Eon IT Park, PG near WTC Kharadi',
  openGraph: {
    title: 'PG Near Eon IT Park, Kharadi — 5-Min Walk, from ₹10,000',
    description: 'A 5-minute walk to Eon IT Park. Furnished PG rooms in Kharadi from ₹10,000/month, all utilities included. Zero brokerage.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/pg-near-eon-it-park',
  },
}

export default function PGNearEonITParkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cohousy.com/pg-near-eon-it-park#faq',
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      {children}
      {/* Server-rendered so crawlers see it without waiting on hydration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
