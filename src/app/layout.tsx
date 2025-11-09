// ... existing imports ...
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Sora, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

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
    title: 'Premium Co-living & PG in Kharadi Pune | Near Eon IT Park & WTC',
    description:
      'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
    images: [
      {
        url: '/og/kharadi-skyline-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cohousy co-living & PG in Kharadi Pune near Eon IT Park & WTC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Co-living & PG in Kharadi Pune | Near Eon IT Park & WTC',
    description:
      'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
    images: ['/og/kharadi-skyline-og.jpg'],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[1] bg-[url('/textures/noise-light.png')] opacity-[0.02] mix-blend-overlay"
        />

        {/* Light gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30"
        />

        {/* Navbar */}
        <Navbar />

        <div className="relative z-[2]">{children}</div>

        {/* Footer */}
        <Footer />

        {/* Whatapp Floting Button*/}
        <WhatsAppButton/>
    
        {/* JSON-LD: LocalBusiness */}
        <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Cohousy',
            url: 'https://www.cohousy.com',
            image: 'https://www.cohousy.com/og/kharadi-skyline-og.jpg',
            description:
              'Luxury co-living spaces & PG accommodation in Kharadi for male/female professionals. Single rooms, shared accommodation near Eon IT Park. Book now!',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kharadi',
              addressRegion: 'Pune',
              addressCountry: 'IN',
            },
            areaServed: 'Pune',
            telephone: '+918908903900',
          })}
        </Script>
      </body>
    </html>
  )
}
