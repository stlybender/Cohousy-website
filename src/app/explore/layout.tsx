import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore Cohousy Properties in Kharadi Pune | Co-living & PG on the Map',
  description:
    'Browse all Cohousy co-living and PG properties in Kharadi, Pune on a map. Compare Common 01, Cohome 1, Cohome 2 and Cohome 3 by price, room type, amenities and distance to Eon IT Park.',
  keywords:
    'Cohousy properties, co-living Kharadi map, PG properties Kharadi, accommodation near Eon IT Park, Cohome Kharadi',
  alternates: {
    canonical: 'https://www.cohousy.com/explore',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/explore',
    title: 'Explore Cohousy Properties in Kharadi Pune',
    description:
      'Browse all Cohousy co-living and PG properties in Kharadi, Pune on a map. Compare by price, room type, amenities and distance to Eon IT Park.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Cohousy Properties in Kharadi Pune',
    description:
      'Browse all Cohousy co-living and PG properties in Kharadi, Pune on a map.',
    images: ['/opengraph-image'],
  },
}

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
