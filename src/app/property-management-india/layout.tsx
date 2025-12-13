import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
  description:
    'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
  keywords: [
    'property management services India',
    'rental property management',
    'NRI property management India',
    'rent collection service',
    'tenant management',
    'property maintenance management',
    'vacant home management',
    'tenant verification',
    'leave and license agreement',
    'property inspection reports',
    'rent guarantee plan',
    'Bangalore property management',
    'Pune property management',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/property-management-india',
    title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
    description:
      'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
    images: [
      {
        url: '/og/property-management-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cohousy Property Management Services India - Full-service property partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
    description:
      'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
    images: ['/og/property-management-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/property-management-india',
  },
}

export default function PropertyManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

