import { Metadata } from 'next'
import { FAQS } from '@/components/coliving/faqData'

export const metadata: Metadata = {
  title: 'Co-living Spaces in Kharadi Pune | Modern Shared Living near Eon IT Park',
  description: 'Book premium co-living spaces in Kharadi with modern amenities, vibrant community, and flexible stays. Walking distance to Eon IT Park & WTC Pune. Single & double rooms available.',
  keywords: 'co-living Kharadi, PG in Kharadi, shared living Pune, accommodation near Eon IT Park, WTC Kharadi PG, modern co-living spaces',
  alternates: {
    canonical: 'https://www.cohousy.com/co-living',
  },
  openGraph: {
    url: 'https://www.cohousy.com/co-living',
    title: 'Co-living Spaces in Kharadi Pune | Modern Shared Living near Eon IT Park',
    description: 'Book premium co-living spaces in Kharadi with modern amenities, vibrant community, and flexible stays. Walking distance to Eon IT Park & WTC Pune.',
    images: ['/opengraph-image'],
  },
}

export default function ColivingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.cohousy.com/co-living#faq',
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
