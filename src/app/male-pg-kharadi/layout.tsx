import { Metadata } from 'next'
import { FAQS } from '@/components/malepg/faqData'

export const metadata: Metadata = {
  title: 'Male PG in Kharadi Pune | Boys Accommodation near Eon IT Park',
  description: 'Affordable male PG in Kharadi with single/shared rooms & amenities. Walking distance to Eon IT Park & WTC. Book boys PG in Kharadi now!',
  keywords: 'male PG Kharadi, boys accommodation Pune, men PG near Eon IT Park, single room PG for male, affordable PG Kharadi',
  openGraph: {
    title: 'Male PG in Kharadi Pune | Boys Accommodation near Eon IT Park',
    description: 'Affordable male PG in Kharadi with single/shared rooms & amenities. Walking distance to Eon IT Park & WTC.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/male-pg-kharadi',
  },
}

export default function MalePGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cohousy.com/male-pg-kharadi#faq',
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
