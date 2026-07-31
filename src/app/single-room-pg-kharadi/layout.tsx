import { Metadata } from 'next'
import { FAQS } from '@/components/singleroomPG/faqData'

export const metadata: Metadata = {
  title: 'Single Room PG in Kharadi Pune | Private Accommodation Near Eon IT Park',
  description: 'Discover private single room PG in Kharadi Pune with attached bathroom, AC, WiFi for male & female professionals. Near Eon IT Park & WTC. Book luxury single occupancy PG now!',
  keywords: 'single room PG Kharadi, private accommodation Pune, single occupancy PG, AC PG Kharadi, female male single room',
  openGraph: {
    title: 'Single Room PG in Kharadi Pune | Private Accommodation Near Eon IT Park',
    description: 'Discover private single room PG in Kharadi Pune with attached bathroom, AC, WiFi for male & female professionals.',
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
