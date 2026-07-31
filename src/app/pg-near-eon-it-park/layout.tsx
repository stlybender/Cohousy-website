import { Metadata } from 'next'
import { FAQS } from '@/components/pgneareonitp/faqData'

export const metadata: Metadata = {
  title: 'PG near Eon IT Park Kharadi | Walking Distance Accommodation',
  description: 'PG accommodation within walking distance of Eon IT Park Kharadi. Single & shared rooms for male/female professionals. Book convenient PG now with amenities, security & app features!',
  keywords: 'PG near Eon IT Park, Kharadi accommodation, walking distance PG, IT professionals accommodation, Eon IT Park PG',
  openGraph: {
    title: 'PG near Eon IT Park Kharadi | Walking Distance Accommodation',
    description: 'PG accommodation within walking distance of Eon IT Park Kharadi. Single & shared rooms for male/female professionals.',
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
