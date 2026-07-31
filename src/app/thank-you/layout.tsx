import type { Metadata } from 'next'

// Conversion confirmation page — must never appear in search results.
export const metadata: Metadata = {
  title: 'Thank You | Cohousy',
  description: 'Your enquiry has been received. The Cohousy team will be in touch shortly.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
