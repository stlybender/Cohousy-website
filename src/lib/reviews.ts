// REAL Google reviews for the Cohousy listing in Kharadi.
//
// Source: Google Places API (New), place ID ChIJmyEwvSzDwjsRj8_M90Ezwws
// Pulled 2026-11-06 with tools/gmb/fetch_place_reviews.py in the content workspace.
//
// ── RULES ────────────────────────────────────────────────────────────────────
// 1. DO NOT add invented reviews. Every entry must be a real, published Google
//    review, quoted accurately and attributed to the name the reviewer used.
//    Long reviews may be trimmed at a sentence boundary with an ellipsis, never
//    reworded.
// 2. REFRESH AT LEAST EVERY 30 DAYS. Google Maps Platform terms don't allow
//    caching Places content (other than place IDs) beyond 30 days. Re-run:
//      python3 tools/gmb/fetch_place_reviews.py \
//        --place-id ChIJmyEwvSzDwjsRj8_M90Ezwws --min-rating 4 \
//        --download-photos "<repo>/public/reviews" \
//        --out .tmp/reviews/cohousy-google-reviews.json
//    then update REVIEWS, GOOGLE_RATING.count/value and pulledOn below.
// 3. Attribution is required: author name, author photo, and a link back to
//    Google must stay visible in the UI.
// 4. NEVER add AggregateRating/Review schema for these. Google's structured-data
//    policy forbids marking up third-party-platform reviews as first-party review
//    data — it risks a manual action. The rating already surfaces through the
//    Business Profile in the Local Pack. Display these for HUMAN trust only.
//
// The Places API returns a maximum of 5 reviews per place, so every page draws
// from this same set of five. What varies per page is the ORDER — see
// orderReviews() below. Nothing is filtered out; the most topically relevant
// review simply leads.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name: string
  text: string
  rating: number
  /** Relative age at time of pull — refresh when re-pulling. */
  when: string
  /** ISO date the review was published. */
  publishedAt: string
  /** Local copy of the reviewer's Google photo, under public/reviews/.
   * Hotlinking Google's CDN gets rate-limited (429) and breaks — see the tool's
   * --download-photos flag, which refreshes these alongside the review text. */
  photo: string
  /** The reviewer's public Google Maps contributions page. */
  authorUri: string
}

export const GOOGLE_RATING = {
  value: 4.9,
  count: 86,
  /** Last verified against the Places API. Refresh monthly — see rule 2 above. */
  pulledOn: '2026-11-06',
  placeId: 'ChIJmyEwvSzDwjsRj8_M90Ezwws',
  mapsUri: 'https://maps.google.com/?cid=847577513299070863',
  /** Deep link that opens the "write a review" dialog for this listing. */
  writeReviewUri:
    'https://search.google.com/local/writereview?placeid=ChIJmyEwvSzDwjsRj8_M90Ezwws',
}

export const REVIEWS: Review[] = [
  {
    name: 'Nitin Banne',
    text: 'Had a great stay at cohousy The rooms were clean and well-maintained, and the staff was really helpful and friendly throughout stay. the overall environment felt safe and homely. Would definitely recommend this PG to anyone looking for a comfortable place to stay',
    rating: 5,
    when: 'a month ago',
    publishedAt: '2026-09-27',
    photo: '/reviews/nitin-banne.jpg',
    authorUri: 'https://www.google.com/maps/contrib/115994835918184382631/reviews',
  },
  {
    name: 'Sugandh Gautam',
    text: 'Having stayed here for 3.5 years, I can confidently say this property offers an exceptional, hassle-free co-housing experience with good amenities and a great sense of community.',
    rating: 5,
    when: '3 months ago',
    publishedAt: '2026-08-04',
    photo: '/reviews/sugandh-gautam.jpg',
    authorUri: 'https://www.google.com/maps/contrib/102801596572121215776/reviews',
  },
  {
    name: 'Sweta Roy',
    text: 'Great place with comfort, sanitation, peace, security n hygiene with all required amenities. If you are looking for peace alongwith comfort after long tiring day at your workplace, then this is the only one stop solution… Also, for the IT professionals, one of the best places to stay in Kharadi as it is just nearby and walking distance from EON IT Park and WTC.',
    rating: 5,
    when: '5 months ago',
    publishedAt: '2026-05-18',
    photo: '/reviews/sweta-roy.jpg',
    authorUri: 'https://www.google.com/maps/contrib/101655038422614425836/reviews',
  },
  {
    name: 'Devashish Padgaonkar',
    text: 'Very nice place to live, in vicinity of all major IT parks in Kharadi. This place is well managed with all problems attended at earliest. Definitely recommend this place even for long stays.',
    rating: 5,
    when: '3 months ago',
    publishedAt: '2026-08-01',
    photo: '/reviews/devashish-padgaonkar.jpg',
    authorUri: 'https://www.google.com/maps/contrib/103514082842562196095/reviews',
  },
  {
    name: 'Prachi Jain',
    text: 'Hi, the rooms are very spacious and clean, staff is very supportive and you’ll get your privacy. Will recommend staying here.',
    rating: 5,
    when: '3 months ago',
    publishedAt: '2026-08-01',
    photo: '/reviews/prachi-jain.jpg',
    authorUri: 'https://www.google.com/maps/contrib/110583788960202381027/reviews',
  },
]

/**
 * Returns all five reviews with the most topically relevant one first.
 *
 * This is ordering, not filtering — every page still shows every review, so a
 * visitor never sees a curated subset that flatters one page. `lead` is matched
 * against the reviewer's name; an unknown name just leaves the order untouched.
 */
export function orderReviews(lead?: string): Review[] {
  if (!lead) return REVIEWS
  const index = REVIEWS.findIndex((r) => r.name === lead)
  if (index < 0) return REVIEWS
  return [REVIEWS[index], ...REVIEWS.filter((_, i) => i !== index)]
}

/**
 * Which review leads on which page, and why. Each pairing is grounded in what
 * the reviewer actually wrote — not in what would be convenient for the page.
 */
export const LEAD_BY_PAGE = {
  /** "great sense of community", 3.5-year stay — the hub's whole pitch. */
  hub: 'Sugandh Gautam',
  /** "co-housing experience... great sense of community". */
  coliving: 'Sugandh Gautam',
  /** Woman reviewer citing "peace, security n hygiene" — the ladies page's core concern. */
  ladies: 'Sweta Roy',
  /** Male reviewer: "staff was really helpful and friendly", "safe and homely", "recommend this PG". */
  male: 'Nitin Banne',
  /** "rooms are very spacious and clean... you'll get your privacy" — the private-room promise. */
  singleRoom: 'Prachi Jain',
  /** Explicitly "walking distance from EON IT Park and WTC". */
  eon: 'Sweta Roy',
  /** Says it outright: "Definitely recommend this place even for long stays". */
  longTerm: 'Devashish Padgaonkar',
  /** "Had a great stay... rooms were clean and well-maintained" — a finished stay, told as one. */
  shortTerm: 'Nitin Banne',
  /** 3.5-year stay: the closest match to someone renting a whole flat for the long term. */
  flats: 'Sugandh Gautam',
} as const
