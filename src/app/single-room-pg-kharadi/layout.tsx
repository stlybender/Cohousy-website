import { Metadata } from 'next'
import { FAQS } from '@/components/singleroomPG/faqData'

export const metadata: Metadata = {
  title: 'Single Room PG in Kharadi, Pune — Private AC Rooms from ₹18,000',
  description: 'Private single room PG in Kharadi from ₹18,000/mo, ₹20,000 with AC. Attached bathroom, WiFi and utilities included. 5 min from Eon IT Park. Zero brokerage.',
  keywords: 'single room PG Kharadi, private room PG Kharadi, single sharing PG Kharadi, AC PG Kharadi, luxury PG Kharadi, single occupancy PG Pune',
  openGraph: {
    title: 'Single Room PG in Kharadi, Pune — Private AC Rooms from ₹18,000',
    description: 'Private single room PG in Kharadi from ₹18,000/month, or ₹20,000 with AC. Attached bathroom, WiFi and utilities included. Zero brokerage.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/single-room-pg-kharadi',
  },
}

export default function SingleRoomPGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cohousy.com/single-room-pg-kharadi#faq',
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
