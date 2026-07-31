import { Metadata } from 'next'
import { FAQS } from '@/components/ladiespg/faqData'

export const metadata: Metadata = {
  title: 'Ladies PG in Kharadi Pune | Safe & Secure Accommodation for Women',
  description: 'Premium ladies PG in Kharadi with single rooms, WiFi & 24/7 security. Near Eon IT Park. Book female accommodation in Kharadi, Pune.',
  keywords: 'ladies PG Kharadi, female accommodation Pune, women PG near Eon IT Park, safe PG for girls Kharadi, single room PG for female',
  openGraph: {
    title: 'Ladies PG in Kharadi Pune | Safe & Secure Accommodation for Women',
    description: 'Premium ladies PG in Kharadi with single rooms, WiFi & 24/7 security. Near Eon IT Park.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/ladies-pg-kharadi',
  },
}

export default function LadiesPGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cohousy.com/ladies-pg-kharadi#faq',
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
