import type { Metadata } from 'next'
import type { FlatConfig } from './types'

// Metadata + JSON-LD for the flat landing pages. Used by each route's
// server layout so crawlers get it without waiting on hydration.

const SITE = 'https://www.cohousy.com'

export function flatMetadata(
  config: FlatConfig,
  { title, description }: { title: string; description: string },
): Metadata {
  const url = `${SITE}${config.path}`
  return {
    metadataBase: new URL(SITE),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: [config.heroImage.src],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [config.heroImage.src],
    },
  }
}

export function FlatJsonLd({ config, name }: { config: FlatConfig; name: string }) {
  const url = `${SITE}${config.path}`

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: config.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  }

  const offer = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${url}#offer`,
    name,
    url,
    price: String(config.price),
    priceCurrency: 'INR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(config.price),
      priceCurrency: 'INR',
      unitText: 'MONTH',
    },
    description:
      'Starting monthly rent. Fully furnished, with ACs, electricity, WiFi, upkeep and car parking included. Zero brokerage, one month deposit.',
    offeredBy: { '@id': `${SITE}/#organization` },
    itemOffered: {
      '@type': 'Apartment',
      name: `Furnished ${config.unit} flat in ${config.area}, Kharadi`,
      numberOfBedrooms: config.bedrooms,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.area,
        addressLocality: 'Kharadi, Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411014',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <>
      {[faq, breadcrumb, offer].map((data) => (
        <script
          key={data['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}
