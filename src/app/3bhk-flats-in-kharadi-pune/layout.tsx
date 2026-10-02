import { threeBhk } from '@/components/flatlp/data/threeBhk'
import { flatMetadata, FlatJsonLd } from '@/components/flatlp/seo'

export const metadata = flatMetadata(threeBhk, {
  title: 'Semi-Furnished 3BHK for Rent in Kharadi, Pune from ₹50,000 | Cohousy',
  description:
    'Semi-furnished 3BHK flats near EON IT Park Phase 2 from ₹50,000 a month. Modular kitchen, electricity, society maintenance and parking included. Zero brokerage.',
})

export default function ThreeBhkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FlatJsonLd config={threeBhk} name="Semi-furnished 3BHK flats in Kharadi" />
    </>
  )
}
