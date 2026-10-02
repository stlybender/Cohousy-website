import { threeBhk } from '@/components/flatlp/data/threeBhk'
import { flatMetadata, FlatJsonLd } from '@/components/flatlp/seo'

export const metadata = flatMetadata(threeBhk, {
  title: 'Furnished 3BHK for Rent in Kharadi, Pune from ₹50,000 | Cohousy',
  description:
    'Fully furnished 3BHK flats near EON IT Park Phase 2 from ₹50,000 a month. Rent covers furniture, ACs, electricity and upkeep. Zero brokerage, one month deposit.',
})

export default function ThreeBhkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FlatJsonLd config={threeBhk} name="Furnished 3BHK flats in Kharadi" />
    </>
  )
}
