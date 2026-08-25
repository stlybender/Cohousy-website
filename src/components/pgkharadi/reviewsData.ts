// REAL Google reviews for the Cohousy listing in Kharadi.
//
// Source: Google Places API (New), place ID ChIJmyEwvSzDwjsRj8_M90Ezwws
// Pulled 2026-08-24 with tools/gmb/fetch_place_reviews.py in the content workspace.
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
//        --out .tmp/reviews/cohousy-google-reviews.json
//    then update REVIEWS, GOOGLE_RATING.count/value and pulledOn below.
// 3. Attribution is required: author name, author photo, and a link back to
//    Google must stay visible in the UI.
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
  count: 83,
  /** Last verified against the Places API. Refresh monthly — see rule 2 above. */
  pulledOn: '2026-08-24',
  placeId: 'ChIJmyEwvSzDwjsRj8_M90Ezwws',
  mapsUri: 'https://maps.google.com/?cid=847577513299070863',
  /** Deep link that opens the "write a review" dialog for this listing. */
  writeReviewUri:
    'https://search.google.com/local/writereview?placeid=ChIJmyEwvSzDwjsRj8_M90Ezwws',
}

export const REVIEWS: Review[] = [
  {
    name: 'Sugandh Gautam',
    text: 'Having stayed here for 3.5 years, I can confidently say this property offers an exceptional, hassle-free co-housing experience with good amenities and a great sense of community.',
    rating: 5,
    when: '2 weeks ago',
    publishedAt: '2026-08-04',
    photo: '/reviews/sugandh-gautam.jpg',
    authorUri: 'https://www.google.com/maps/contrib/102801596572121215776/reviews',
  },
  {
    name: 'Sweta Roy',
    text: 'Great place with comfort, sanitation, peace, security n hygiene with all required amenities. If you are looking for peace alongwith comfort after long tiring day at your workplace, then this is the only one stop solution… Also, for the IT professionals, one of the best places to stay in Kharadi as it is just nearby and walking distance from EON IT Park and WTC.',
    rating: 5,
    when: '3 months ago',
    publishedAt: '2026-05-18',
    photo: '/reviews/sweta-roy.jpg',
    authorUri: 'https://www.google.com/maps/contrib/101655038422614425836/reviews',
  },
  {
    name: 'Harshit Dave',
    text: 'The rooms are clean, hygienic, and well-maintained. The location is perfect, with easy access to the market. The owner is very helpful, creating a warm, safe, and homely atmosphere. Highly recommended for working professionals!',
    rating: 5,
    when: '6 months ago',
    publishedAt: '2026-02-01',
    photo: '/reviews/harshit-dave.jpg',
    authorUri: 'https://www.google.com/maps/contrib/107934827961179132970/reviews',
  },
  {
    name: 'Hardik Sharma',
    text: 'Good rooms, nice location, peaceful environment, polite staff. Special thanks to Santosh, great guy!',
    rating: 5,
    when: '3 weeks ago',
    publishedAt: '2026-08-01',
    photo: '/reviews/hardik-sharma.jpg',
    authorUri: 'https://www.google.com/maps/contrib/105387262467913465438/reviews',
  },
  {
    name: 'Sourav Bansal',
    text: 'This place offers everything what a working professional require such as ironing, washing machine, fridge etc. Rooms are also perfect.',
    rating: 5,
    when: '8 months ago',
    publishedAt: '2025-12-01',
    photo: '/reviews/sourav-bansal.jpg',
    authorUri: 'https://www.google.com/maps/contrib/116576215769650314475/reviews',
  },
]
