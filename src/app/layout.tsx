// ... existing imports ...
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Sora, Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import LayoutShell from '@/components/LayoutShell'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Premium Co-living & PG in Kharadi Pune | Near Eon IT Park & WTC',
  description:
    'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com',
    siteName: 'Cohousy',
    locale: 'en_IN',
    title: 'Premium Co-living & PG in Kharadi Pune | Near Eon IT Park & WTC',
    description:
      'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
    // images intentionally omitted — src/app/opengraph-image.tsx supplies them
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Co-living & PG in Kharadi Pune | Near Eon IT Park & WTC',
    description:
      'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
  },
  alternates: {
    canonical: 'https://www.cohousy.com',
  },
  icons: {
    icon: '/white.png',
    apple:'/white.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1220',
}

// Single canonical business entity, referenced by @id from other pages.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'LodgingBusiness'],
  '@id': 'https://www.cohousy.com/#organization',
  name: 'Cohousy',
  url: 'https://www.cohousy.com',
  image: 'https://www.cohousy.com/opengraph-image',
  logo: 'https://www.cohousy.com/logo.png',
  description:
    'Premium co-living and PG accommodation in Kharadi, Pune for male and female professionals, within walking distance of Eon IT Park and World Trade Center. Also offers end-to-end property management for owners and NRIs.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kharadi',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411014',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5478,
    longitude: 73.9459,
  },
  areaServed: {
    '@type': 'City',
    name: 'Pune',
  },
  telephone: '+918908903900',
  email: 'contact@cohousy.com',
  priceRange: '₹10,000 - ₹26,000',
  currenciesAccepted: 'INR',
  sameAs: [
    'https://facebook.com/cohousy',
    'https://instagram.com/cohousy',
    'https://linkedin.com/company/cohousy',
    'https://x.com/cohousy',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Twin sharing PG in Kharadi',
      price: '10000',
      priceCurrency: 'INR',
      url: 'https://www.cohousy.com/co-living',
    },
    {
      '@type': 'Offer',
      name: 'Single room PG in Kharadi',
      price: '18000',
      priceCurrency: 'INR',
      url: 'https://www.cohousy.com/single-room-pg-kharadi',
    },
    {
      '@type': 'Offer',
      name: '1RK studio flat in Kharadi',
      price: '21000',
      priceCurrency: 'INR',
      url: 'https://www.cohousy.com/1bhk-flats-in-kharadi-pune',
    },
    {
      '@type': 'Offer',
      name: '1BHK apartment in Kharadi',
      price: '23000',
      priceCurrency: 'INR',
      url: 'https://www.cohousy.com/1bhk-flats-in-kharadi-pune',
    },
    {
      '@type': 'Offer',
      name: 'Executive 1BHK long-term rental in Kharadi',
      price: '26000',
      priceCurrency: 'INR',
      url: 'https://www.cohousy.com/long-term-rentals',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NMVT5S2Z');` }} />
        {/* End Google Tag Manager */}

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Base Google Ads Tag (no conversion here) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17638552425"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17638552425');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-white text-gray-900 antialiased montserrat selection:bg-blue-100 selection:text-blue-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMVT5S2Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[1] bg-[url('/textures/noise-light.png')] opacity-[0.02] mix-blend-overlay"
        />

        {/* Light gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30"
        />

        <LayoutShell>{children}</LayoutShell>
    
        {/* JSON-LD: LocalBusiness — server-rendered so crawlers see it in the
            initial HTML, without waiting for hydration. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  )
}
