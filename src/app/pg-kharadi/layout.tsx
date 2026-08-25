import { Metadata } from 'next'
import { FAQS } from '@/components/pgkharadi/faqData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'PG in Kharadi, Pune — ₹10,000/mo, Zero Brokerage | Cohousy',
  description:
    'Premium PG in Kharadi from ₹10,000/month all-inclusive. Ladies, male & single rooms, 5–10 min from Eon IT Park & WTC. Zero brokerage. Book in 5 minutes.',
  alternates: { canonical: 'https://www.cohousy.com/pg-kharadi' },
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/pg-kharadi',
    title: 'PG in Kharadi, Pune — ₹10,000/mo, Zero Brokerage | Cohousy',
    description:
      'Fully furnished PG rooms in Kharadi with one all-inclusive bill. Ladies, male, single-room and co-living options near Eon IT Park, WTC and Gera Commerzone.',
    images: ['/opengraph-image'],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.cohousy.com/pg-kharadi#faq',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.cohousy.com/pg-kharadi#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cohousy.com/' },
    { '@type': 'ListItem', position: 2, name: 'PG in Kharadi', item: 'https://www.cohousy.com/pg-kharadi' },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.cohousy.com/pg-kharadi#service',
  name: 'PG Accommodation in Kharadi, Pune',
  serviceType: 'Paying guest accommodation and co-living',
  areaServed: { '@type': 'Place', name: 'Kharadi, Pune, Maharashtra, India' },
  provider: { '@id': 'https://www.cohousy.com/#organization' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Twin sharing PG room',
      price: '10000',
      priceCurrency: 'INR',
      description: 'All-inclusive monthly rent, zero brokerage',
    },
    {
      '@type': 'Offer',
      name: 'Single room PG (standard)',
      price: '18000',
      priceCurrency: 'INR',
      description: 'Private room with attached washroom, all-inclusive',
    },
    {
      '@type': 'Offer',
      name: 'Single room PG (premium, AC)',
      price: '20000',
      priceCurrency: 'INR',
      description: 'Private AC room with attached washroom, all-inclusive',
    },
  ],
}

export default function PGKharadiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      {/* Server-rendered so crawlers see it without waiting on hydration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  )
}
