import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1BHK & 1RK Flats in Kharadi Pune | Furnished, Zero Brokerage | Cohousy',
  description:
    'Fully furnished 1RK studios at ₹21,000/month and 1BHK apartments at ₹23,000/month in Kharadi, Pune. Zero brokerage, single monthly bill, instant move-in. 5-minute walk to EON Free Zone and WTC.',
  keywords:
    '1BHK flats Kharadi, 1RK Kharadi Pune, furnished flats Kharadi, flats near Eon IT Park, zero brokerage flats Pune, rent 1BHK Kharadi',
  alternates: {
    canonical: 'https://www.cohousy.com/1bhk-flats-in-kharadi-pune',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/1bhk-flats-in-kharadi-pune',
    title: 'Furnished 1BHK & 1RK Flats in Kharadi Pune | Zero Brokerage',
    description:
      '1RK studios from ₹21,000/month and 1BHK apartments from ₹23,000/month. Designer furnished, single monthly bill, instant move-in, 5 minutes from the IT parks.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furnished 1BHK & 1RK Flats in Kharadi Pune | Zero Brokerage',
    description:
      '1RK studios from ₹21,000/month and 1BHK apartments from ₹23,000/month. Designer furnished, instant move-in.',
    images: ['/opengraph-image'],
  },
}

export default function FlatsKharadiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
