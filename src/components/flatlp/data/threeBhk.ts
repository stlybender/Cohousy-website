import { LEAD_BY_PAGE } from '@/lib/reviews'
import type { FlatConfig } from '../types'

// Real photos of the flat (Zen Elite), received 2026-10-02. They came
// Gemini-enhanced; the visible Gemini mark was removed before upload.
// The 3BHK is SEMI-furnished (client, 2026-10-02): modular kitchen with chimney
// and hob, fans and lights. No beds, sofas, ACs or WiFi. Don't claim them.

export const threeBhk: FlatConfig = {
  path: '/3bhk-flats-in-kharadi-pune',
  unit: '3BHK',
  bedrooms: 3,
  price: 50000,
  area: 'EON IT Park Phase 2',
  eyebrow: 'Near EON IT Park Phase 2, Kharadi',
  furnishing: 'Semi-Furnished',
  priceNote: 'Electricity and maintenance included.',
  heroSub:
    'Three bedrooms near EON IT Park Phase 2, with a modular kitchen, fans and lights already fitted. Electricity, society maintenance and parking are part of the rent. No brokerage.',
  heroChips: ['Zero brokerage', '1 month deposit', 'Electricity included', 'Car parking'],
  included: {
    eyebrow: 'WHAT THE RENT COVERS',
    title: 'Fewer bills,',
    accent: 'less running around',
    intro:
      'The kitchen is fitted and the flat is ready for your own furniture. Electricity, society charges and repairs are part of the monthly rent.',
    items: [
      { icon: 'kitchen', title: 'Modular kitchen', desc: 'Fitted cabinets, chimney and hob, ready to cook on day one.' },
      { icon: 'fan', title: 'Fans and lights', desc: 'Already fitted in every room.' },
      { icon: 'zap', title: 'Electricity', desc: 'No separate bill at the end of the month.' },
      { icon: 'building', title: 'Society maintenance', desc: 'Society charges are part of the rent. Nothing extra to pay.' },
      { icon: 'wrench', title: 'Repairs and upkeep', desc: 'Something breaks? You call Cohousy, not the owner, and we fix it.' },
      { icon: 'car', title: 'Car parking', desc: 'A parking slot comes with the flat.' },
      { icon: 'shield', title: 'Gated society', desc: 'Security at the gate, lifts and power backup.' },
      { icon: 'rupee', title: 'Zero brokerage', desc: 'You rent directly from Cohousy. No broker, no fee.' },
    ],
  },
  moveInZeroRows: [],
  galleryHeading: { title: 'Bright rooms,', accent: 'open views' },
  photosAreReal: true,
  offerDescription:
    'Starting monthly rent. Semi-furnished with a modular kitchen, fans and lights. Electricity, society maintenance, repairs and car parking included. Zero brokerage, one month deposit.',
  heroImage: {
    src: '/flats/3bhk/balcony-view.jpg',
    alt: 'View from the balcony of a 3BHK flat for rent near EON IT Park Phase 2, Kharadi',
    label: 'View from the balcony',
  },
  gallery: [
    { src: '/flats/3bhk/bedroom-river-view.jpg', alt: 'Bedroom with a river view in a 3BHK flat near EON IT Park, Kharadi', label: 'Bedroom with river view' },
    { src: '/flats/3bhk/kitchen.jpg', alt: 'Modular kitchen with chimney and hob in a semi-furnished 3BHK, Kharadi', label: 'Modular kitchen' },
    { src: '/flats/3bhk/kitchen-2.jpg', alt: 'Fitted L-shaped kitchen in a 3BHK flat for rent in Pune', label: 'Kitchen' },
    { src: '/flats/3bhk/bedroom-1.jpg', alt: 'Large bedroom with full-width window in a Kharadi 3BHK', label: 'Bedroom 1' },
    { src: '/flats/3bhk/bedroom-2.jpg', alt: 'Bedroom with balcony door in a 3BHK near EON IT Park Phase 2', label: 'Bedroom 2' },
    { src: '/flats/3bhk/living-room.jpg', alt: 'Living room of a semi-furnished 3BHK flat in Kharadi, Pune', label: 'Living room' },
  ],
  audienceCopy: {
    family: 'Three bedrooms, so the kids get their own room or your parents can stay with you.',
    couple: 'Plenty of space for a home office, a guest room and everything else.',
    sharing: "Split it three ways and it's about {perPerson} each, with electricity and maintenance already included.",
    student: 'Share with two friends and split one rent. Electricity and society charges are already in it.',
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
      a: 'Electricity, society maintenance, repairs and upkeep, and a car parking slot. The flat comes with a fitted modular kitchen, chimney, hob, fans and lights. ₹50,000 is the starting rent, and the exact price depends on the flat.',
    },
    {
      q: 'Is the 3BHK furnished?',
      a: "It's semi-furnished. The kitchen is fully fitted and every room has fans and lights, but there are no beds, sofas or ACs, so you can set it up with your own furniture.",
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
      a: 'Families, couples, working professionals and students. If three of you share the flat, it works out to about ₹16,700 each, with electricity and maintenance included.',
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
      a: "Once you've paid the deposit and first month's rent and signed the agreement, the flat is yours to move into. Tell us your date when you enquire.",
    },
    {
      q: 'Who do I call if something stops working?',
      a: "Cohousy. We look after repairs and upkeep for the flat, so you don't have to chase the owner for every small thing.",
    },
  ],
  reviewLead: LEAD_BY_PAGE.flats,
  related: [
    { label: 'Furnished 2BHK flats in Kharadi', href: '/2bhk-flats-in-kharadi-pune' },
    { label: '1BHK and 1RK flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' },
    { label: 'Long-term rentals in Kharadi', href: '/long-term-rentals' },
  ],
}
