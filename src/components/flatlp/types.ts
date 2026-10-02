// Config for the furnished-flat Google Ads landing pages (/2bhk-..., /3bhk-...).
// Each route passes one of these to <FlatLanding />. Plain data only, so the
// route's server layout can import the same file for metadata and JSON-LD.

export interface FlatImage {
  src: string
  alt: string
  label: string
}

export interface Landmark {
  place: string
  distance: string
}

export interface FaqItem {
  q: string
  a: string
}

export type Audience = 'family' | 'couple' | 'sharing' | 'student'

/** Icon keys for the "what's included" cards (mapped to lucide icons in FlatLanding). */
export type IncludedIcon =
  | 'sofa' | 'fan' | 'zap' | 'wifi' | 'wrench' | 'car' | 'shield' | 'rupee' | 'kitchen' | 'building'

export interface IncludedItem {
  icon: IncludedIcon
  title: string
  desc: string
}

export interface FlatConfig {
  /** Route path, e.g. '/2bhk-flats-in-kharadi-pune'. */
  path: string
  /** '2BHK' or '3BHK'. Used in headings, form labels and lead emails. */
  unit: string
  bedrooms: number
  /** Starting monthly rent in rupees. */
  price: number
  /** Short area name, e.g. 'Kharadi Bypass'. */
  area: string
  /** Hero eyebrow, e.g. 'Kharadi Bypass, Pune'. */
  eyebrow: string
  /** H1 prefix, e.g. 'Fully Furnished' or 'Semi-Furnished'. */
  furnishing: string
  /** Short line after the price, e.g. 'Everything included.' */
  priceNote: string
  /** Line under the H1. */
  heroSub: string
  /** Four short ticks under the hero copy. */
  heroChips: string[]
  /** "What's included" section. */
  included: {
    eyebrow: string
    title: string
    accent: string
    intro: string
    items: IncludedItem[]
  }
  /** Extra ₹0 lines in the move-in cost card, after deposit, first month and brokerage. */
  moveInZeroRows: string[]
  galleryHeading: { title: string; accent: string }
  /** false = stock photos, shows "representative" labels. */
  photosAreReal: boolean
  /** Description used in the Offer JSON-LD. */
  offerDescription: string
  heroImage: FlatImage
  gallery: FlatImage[]
  /** One line per audience card, specific to this flat size. */
  audienceCopy: Record<Audience, string>
  location: {
    heading: string
    intro: string
    landmarks: Landmark[]
    /** Free-text query for the Google Maps embed. */
    mapQuery: string
  }
  faqs: FaqItem[]
  /** Reviewer to lead the Google reviews section (see LEAD_BY_PAGE). */
  reviewLead: string
  /** Cross-links shown in the page footer. */
  related: { label: string; href: string }[]
}

export const AUDIENCES: { id: Audience; label: string }[] = [
  { id: 'family', label: 'Family' },
  { id: 'couple', label: 'Couple' },
  { id: 'sharing', label: 'Friends or colleagues sharing' },
  { id: 'student', label: 'Students' },
]

export const formatRupees = (n: number) => `₹${n.toLocaleString('en-IN')}`
