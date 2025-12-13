import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
  description: 'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
  keywords: 'property management services India, rental property management, NRI property management India, rent collection service, tenant management, property maintenance management, vacant home management, tenant verification, leave and license agreement, property inspection reports, rent guarantee plan, Bangalore property management, Pune property management',
  openGraph: {
    title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
    description: 'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
    images: ['/skyline.avif'],
    type: 'website',
    url: 'https://www.cohousy.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohousy Property Management India | Rent, Tenants, Maintenance',
    description: 'Own a property in India but don\'t want the daily hassle? Cohousy handles tenants, rent, repairs, inspections & paperwork—end-to-end, with full transparency.',
    images: ['/skyline.avif'],
  },
  alternates: {
    canonical: 'https://www.cohousy.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

