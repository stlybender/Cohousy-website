import { MetadataRoute } from 'next'

const baseUrl = 'https://www.cohousy.com'

/**
 * Only routes that actually exist under src/app are listed here.
 *
 * Deliberately excluded:
 *  - /thank-you             conversion confirmation page, noindex
 *  - /property-details/[id] hydrates from sessionStorage, no crawlable URL
 */
const routes: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/pg-kharadi', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/co-living', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ladies-pg-kharadi', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/male-pg-kharadi', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/single-room-pg-kharadi', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pg-near-eon-it-park', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/property-management-pune', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/long-term-rentals', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/short-term-rentals', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/1bhk-flats-in-kharadi-pune', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/explore', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/partners', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
