import { LEAD_BY_PAGE } from '@/lib/reviews'
import type { FlatConfig } from '../types'

// Photos are Unsplash stock (free for commercial use) until the real flat is
// shot. Swap the files in public/flats-3bhk/ and keep the "representative"
// labels until then.

export const threeBhk: FlatConfig = {
  path: '/3bhk-flats-in-kharadi-pune',
  unit: '3BHK',
  bedrooms: 3,
  price: 50000,
  area: 'EON IT Park Phase 2',
  eyebrow: 'Near EON IT Park Phase 2, Kharadi',
  heroSub:
    'Three bedrooms near EON IT Park Phase 2, ready to live in. Furniture, ACs, electricity and upkeep are all part of the rent. No brokerage.',
  heroImage: {
    src: '/flats-3bhk/living-room.jpg',
    alt: 'Furnished living room in a 3BHK flat for rent in Kharadi, Pune',
    label: 'Living room',
  },
  gallery: [
    { src: '/flats-3bhk/living-room-2.jpg', alt: 'Spacious furnished living room in a Kharadi 3BHK', label: 'Living room' },
    { src: '/flats-3bhk/master-bedroom.jpg', alt: 'Furnished master bedroom in a 3BHK flat, Kharadi', label: 'Master bedroom' },
    { src: '/flats-3bhk/kids-bedroom.jpg', alt: "Children's bedroom in a furnished 3BHK near EON IT Park", label: "Kids' room" },
    { src: '/flats-3bhk/third-bedroom.jpg', alt: 'Third bedroom with a study desk in a 3BHK flat, Pune', label: 'Third bedroom' },
    { src: '/flats-3bhk/dining.jpg', alt: 'Kitchen and dining area in a 3BHK flat for rent in Kharadi', label: 'Kitchen and dining' },
    { src: '/flats-3bhk/living-room.jpg', alt: 'Family sitting area in a furnished 3BHK in Kharadi', label: 'Family sitting area' },
  ],
  audienceCopy: {
    family: 'Three bedrooms, so the kids get their own room or your parents can stay with you.',
    couple: 'Plenty of space for a home office, a guest room and everything else.',
    sharing: "Split it three ways and it's about {perPerson} each, with every bill already included.",
    student: 'Share with two friends. Nothing to buy and no bills to split at the end of the month.',
  },
  location: {
    heading: 'Near EON IT Park Phase 2',
    intro:
      'EON IT Park Phase 2 sits on Grant Road, just east of Phase 1 and the World Trade Center. If you work at EON, WTC or Zensar, the commute is short. Schools, D-Mart and Phoenix Marketcity are all within a few kilometres.',
    landmarks: [
      { place: 'EON IT Park Phase 1', distance: 'Walking distance' },
      { place: 'World Trade Center (WTC)', distance: 'About 1 km' },
      { place: 'EuroSchool Kharadi', distance: 'Near EON Free Zone' },
      { place: 'D-Mart Kharadi', distance: 'About 1.5 km' },
      { place: 'Zensar IT Park', distance: 'About 2 km' },
      { place: 'Manipal Hospital Kharadi', distance: 'About 4 km' },
      { place: 'Phoenix Marketcity, Viman Nagar', distance: 'About 6.5 km' },
      { place: 'Pune Airport', distance: 'About 10 km' },
    ],
    mapQuery: 'EON Free Zone Phase 2, Kharadi, Pune',
  },
  faqs: [
    {
      q: 'What does the ₹50,000 rent include?',
      a: "The flat comes fully furnished, with ACs, electricity, WiFi, repairs and upkeep, and a car parking slot. You don't get separate bills for any of these. ₹50,000 is the starting rent, and the exact price depends on the flat.",
    },
    {
      q: 'Do I have to pay brokerage?',
      a: "No. You rent directly from Cohousy, so there's no broker and no brokerage fee.",
    },
    {
      q: 'How much is the security deposit?',
      a: "One month's rent. For a ₹50,000 flat that's ₹50,000, and it's refundable when you move out.",
    },
    {
      q: 'Who can rent these 3BHK flats?',
      a: 'Families, couples, working professionals and students. If three of you share the flat, it works out to about ₹16,700 each, with everything included.',
    },
    {
      q: 'Where exactly is the flat?',
      a: 'Near EON IT Park Phase 2 in Kharadi, Pune. We share the exact address and directions when we book your visit.',
    },
    {
      q: 'Can I see the flat before I pay anything?',
      a: "Yes. Fill any form on this page, call +91 89089 03900 or WhatsApp us, and we'll fix a time for you to visit.",
    },
    {
      q: 'How soon can I move in?',
      a: "The flats are already furnished. Once you've paid the deposit and first month's rent and signed the agreement, you can move in. Tell us your date when you enquire.",
    },
    {
      q: 'Who do I call if something stops working?',
      a: "Cohousy. We look after repairs and upkeep for the flat, so you don't have to chase the owner for every small thing.",
    },
  ],
  reviewLead: LEAD_BY_PAGE.flats,
  related: [
    { label: '2BHK flats in Kharadi', href: '/2bhk-flats-in-kharadi-pune' },
    { label: '1BHK and 1RK flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' },
    { label: 'Long-term rentals in Kharadi', href: '/long-term-rentals' },
  ],
}
