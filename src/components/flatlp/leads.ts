// Lead capture + click tracking for the flat landing pages.
// Leads go to the same /api/contact endpoint as the rest of the site, and every
// successful submit lands on /thank-you, which fires the Google Ads conversion.

export const PHONE_DISPLAY = '+91 89089 03900'
export const PHONE_TEL = 'tel:+918908903900'
const WA_NUMBER = '918908903900'

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[]
  gtag?: (...args: unknown[]) => void
}

/** Pushes a click/lead event to GTM and gtag so it can be set up as a
 *  conversion later (call clicks, WhatsApp clicks, form steps). */
export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  const w = window as DataLayerWindow
  w.dataLayer?.push({ event, ...params })
  w.gtag?.('event', event, params)
}

const SOURCE_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid']

/** Ad source details from the landing URL, so the team can see which
 *  campaign and keyword a lead came from. */
function adSource(): string {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(window.location.search)
  return SOURCE_PARAMS.filter((k) => params.get(k))
    .map((k) => `${k}: ${params.get(k)}`)
    .join('\n')
}

export async function sendLead({
  name,
  phone,
  serviceType,
  propertyName,
  details,
}: {
  name: string
  phone: string
  serviceType: string
  propertyName: string
  details: string[]
}) {
  const source = adSource()
  const message = [...details, `Page: ${window.location.pathname}`, source]
    .filter(Boolean)
    .join('\n')

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, serviceType, propertyName, message }),
  })
  if (!res.ok) throw new Error('Failed to send')
}
