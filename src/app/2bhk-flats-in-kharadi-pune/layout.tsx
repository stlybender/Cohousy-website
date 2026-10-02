import { twoBhk } from '@/components/flatlp/data/twoBhk'
import { flatMetadata, FlatJsonLd } from '@/components/flatlp/seo'

export const metadata = flatMetadata(twoBhk, {
  title: 'Furnished 2BHK for Rent in Kharadi, Pune from ₹35,000 | Cohousy',
  description:
    'Fully furnished 2BHK flats on Kharadi Bypass from ₹35,000 a month. Rent covers furniture, ACs, electricity and upkeep. Zero brokerage, one month deposit.',
})

export default function TwoBhkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FlatJsonLd config={twoBhk} name="Furnished 2BHK flats in Kharadi" />
    </>
  )
}
