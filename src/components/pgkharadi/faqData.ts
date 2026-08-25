// FAQ content for /pg-kharadi — single source of truth, consumed by the page
// section AND the FAQPage JSON-LD in the route layout. Keep answers in plain
// text (no markup) so the schema stays valid.
// Questions sourced from live People-Also-Ask data, Quora and search demand
// research (2026-08-17).

export interface FAQ {
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  {
    question: 'How much does a PG in Kharadi cost per month?',
    answer:
      'Market-wide, roughly ₹5,000 for a bed in a 3–4 sharing room (bare rent) to ₹20,000+ for premium private rooms. At Cohousy: twin sharing ₹10,000/month, single rooms ₹18,000/month, premium AC singles ₹20,000/month — all-inclusive of Wi-Fi, utilities, housekeeping, laundry, gym and security, with zero brokerage.',
  },
  {
    question: 'Can I find a PG in Kharadi under ₹5,000?',
    answer:
      'Yes — as a bed in a 3–4 person room with food, electricity and Wi-Fi billed separately, often plus a broker’s fee. Once you add everything, the real monthly cost usually lands close to an all-inclusive twin-sharing room, with less privacy. Always compare total monthly cost, not sticker rent.',
  },
  {
    question: 'Which is cheaper — a hostel or a PG?',
    answer:
      'Hostels are cheaper per bed but are built around dorm living: more sharing, less privacy, fewer services. A PG adds housekeeping, security and better rooms for a little more. For working professionals staying months, an all-inclusive PG usually wins on cost-per-comfort.',
  },
  {
    question: 'What exactly is included in Cohousy’s rent?',
    answer:
      'High-speed Wi-Fi, electricity and water, daily housekeeping, laundry service, gym access, kitchen facilities and common fridge, power backup, CCTV security and building maintenance. One bill. Zero brokerage. No hidden charges.',
  },
  {
    question: 'Is there a single room PG in Kharadi with an attached bathroom?',
    answer:
      'Yes — private single rooms with attached washrooms at ₹18,000/month (standard) or ₹20,000/month (premium with AC), all-inclusive.',
  },
  {
    question: 'Which PG in Kharadi is best for girls? Is it safe?',
    answer:
      'Cohousy’s Ladies PG in Kharadi is 100% women-only: biometric entry, CCTV, panic buttons, family location sharing, night security staff and a female property captain on call. Ladies-only gym hours and women’s community events are standard.',
  },
  {
    question: 'Do you have a PG for men near Eon IT Park?',
    answer:
      'Yes — the Cohousy male PG in Kharadi is minutes from Eon IT Park: ₹10,000/month double sharing, ₹18,000/month single.',
  },
  {
    question: 'Can couples stay in a PG in Kharadi?',
    answer:
      'Shared PG rooms are single-gender, but couples can take a private 1RK or 1BHK co-living unit from ₹18,000/month — a fully furnished home with zero brokerage and none of the shared-PG guest restrictions.',
  },
  {
    question: 'Are students welcome, or only working professionals?',
    answer:
      'Both. Most residents are IT and corporate professionals, but students and interns — especially those on placements in the Kharadi corridor — are welcome, with the same flexible stay options.',
  },
  {
    question: 'Is food included in the rent?',
    answer:
      'There is no compulsory mess plan — and that’s deliberate. Every property has equipped kitchen facilities and a common fridge; cook, share cooking duties, use a tiffin service, or order in. D-Mart is 800 m away for groceries.',
  },
  {
    question: 'How far are the PGs from Eon IT Park and WTC?',
    answer:
      'All four Cohousy properties are inside Kharadi’s residential pockets, a 5–10 minute commute from Eon IT Park, World Trade Center Kharadi and Gera Commerzone.',
  },
  {
    question: 'What deposit and lock-in should I expect?',
    answer:
      'PG stays run month-to-month with a small refundable deposit and flexible exit policies. On long-term rentals of 6 months or more, the security deposit is waived entirely.',
  },
  {
    question: 'Can I book for just a few days or weeks?',
    answer:
      'Yes — short stays start from one night: ₹1,500/night daily, ₹1,300/night weekly, ₹1,200/night monthly, with free cancellation up to 24 hours before check-in.',
  },
  {
    question: 'Is Kharadi a posh area in Pune?',
    answer:
      'It’s Pune’s fastest-grown IT corridor — premium housing, malls and offices side by side. Rents are higher than the Pune average because tens of thousands of professionals want to live within minutes of Eon IT Park and WTC; you’re paying to delete your commute.',
  },
  {
    question: 'Is Kharadi better than Hinjewadi?',
    answer:
      'Live where you work. Kharadi wins for anyone at Eon IT Park, WTC or Gera Commerzone — newer housing, closer airport, stronger weekend options. Hinjewadi makes sense only if your office is in Hinjewadi’s phases. A cross-city commute in Pune traffic is the one choice residents consistently regret.',
  },
  {
    question: 'How do I book, and is there really no brokerage?',
    answer:
      'Download the Cohousy app or message us on WhatsApp: digital KYC takes about 30 seconds, virtual tours, instant booking — under 5 minutes end to end. Cohousy is the operator, not a broker: there is no brokerage fee.',
  },
]
