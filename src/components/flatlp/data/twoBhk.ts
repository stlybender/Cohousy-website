import { LEAD_BY_PAGE } from '@/lib/reviews'
import type { FlatConfig } from '../types'

// Photos are Unsplash stock (free for commercial use) until the real flat is
// shot. Swap the files in public/flats-2bhk/ and keep the "representative"
// labels until then.

export const twoBhk: FlatConfig = {
  path: '/2bhk-flats-in-kharadi-pune',
  unit: '2BHK',
  bedrooms: 2,
  price: 35000,
  area: 'Kharadi Bypass',
  eyebrow: 'Kharadi Bypass, Pune',
  heroSub:
    'Two bedrooms on Kharadi Bypass, ready to live in. Furniture, ACs, electricity and upkeep are all part of the rent. No brokerage.',
  heroImage: {
    src: '/flats-2bhk/living-room.jpg',
    alt: 'Furnished living room in a 2BHK flat for rent in Kharadi, Pune',
    label: 'Living room',
  },
  gallery: [
    { src: '/flats-2bhk/living-room-2.jpg', alt: 'Bright furnished living room in a Kharadi 2BHK', label: 'Living room' },
    { src: '/flats-2bhk/master-bedroom.jpg', alt: 'Furnished bedroom with AC in a 2BHK flat, Kharadi', label: 'Bedroom with AC' },
    { src: '/flats-2bhk/second-bedroom.jpg', alt: 'Second bedroom in a furnished 2BHK on Kharadi Bypass', label: 'Second bedroom' },
    { src: '/flats-2bhk/kitchen.jpg', alt: 'Modular kitchen in a furnished 2BHK flat in Pune', label: 'Modular kitchen' },
    { src: '/flats-2bhk/dining.jpg', alt: 'Kitchen and dining area in a 2BHK flat for rent', label: 'Kitchen and dining' },
    { src: '/flats-2bhk/living-room.jpg', alt: 'Sofa and TV area in a 2BHK flat for rent in Kharadi', label: 'Sitting area' },
  ],
  audienceCopy: {
    family: 'Two bedrooms, a full kitchen and a gated society with parking. Room for a small family to settle in.',
    couple: 'One bedroom for you, and one for a home office or for family when they visit.',
    sharing: "Split it two ways and it's about {perPerson} each, with every bill already included.",
    student: 'Share with a friend. Nothing to buy and no bills to split at the end of the month.',
  },
  location: {
    heading: 'On Kharadi Bypass',
    intro:
      'Kharadi Bypass runs from Nagar Road down to the Mundhwa bridge, on the west side of Kharadi. The IT parks are a short drive away, and Hadapsar, Magarpatta and the airport are easy to reach. A Kharadi Bypass station is planned on the Ramwadi to Wagholi metro extension, where work started in September 2026.',
    landmarks: [
      { place: 'EON IT Park and WTC', distance: 'About 2 to 4 km' },
      { place: 'Manipal Hospital and Motherhood Hospital', distance: 'On Kharadi Bypass' },
      { place: 'Reliance Smart and More supermarkets', distance: 'On Kharadi Bypass' },
      { place: 'Zensar IT Park', distance: 'About 2 to 5 km' },
      { place: 'Phoenix Marketcity, Viman Nagar', distance: 'About 5 km' },
      { place: 'Magarpatta and Hadapsar', distance: 'About 5 to 9 km' },
      { place: 'Pune Airport', distance: 'About 8 to 9 km' },
      { place: 'Pune Railway Station', distance: 'About 11 km' },
    ],
    mapQuery: 'Kharadi Bypass, Kharadi, Pune',
  },
  faqs: [
    {
      q: 'What does the ₹35,000 rent include?',
      a: "The flat comes fully furnished, with ACs, electricity, WiFi, repairs and upkeep, and a car parking slot. You don't get separate bills for any of these. ₹35,000 is the starting rent, and the exact price depends on the flat.",
    },
    {
      q: 'Do I have to pay brokerage?',
      a: "No. You rent directly from Cohousy, so there's no broker and no brokerage fee.",
    },
    {
      q: 'How much is the security deposit?',
      a: "One month's rent. For a ₹35,000 flat that's ₹35,000, and it's refundable when you move out.",
    },
    {
      q: 'Who can rent these 2BHK flats?',
      a: 'Families, couples, working professionals and students. If two of you share the flat, it works out to about ₹17,500 each, with everything included.',
    },
    {
      q: 'Where exactly is the flat?',
      a: 'On Kharadi Bypass in Kharadi, Pune. We share the exact address and directions when we book your visit.',
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
    { label: '3BHK flats in Kharadi', href: '/3bhk-flats-in-kharadi-pune' },
    { label: '1BHK and 1RK flats in Kharadi', href: '/1bhk-flats-in-kharadi-pune' },
    { label: 'Long-term rentals in Kharadi', href: '/long-term-rentals' },
  ],
}
