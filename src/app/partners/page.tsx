import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Partner with Cohousy | Owners, Corporates & Vendors in Pune',
  description:
    'Partner with Cohousy in Pune: lease your building for co-living, hand us your flat to manage, house your employees near Eon IT Park, or join our vendor network in Kharadi.',
  alternates: { canonical: 'https://www.cohousy.com/partners' },
}

const PARTNER_TYPES = [
  {
    eyebrow: 'Building & flat owners',
    title: 'Put your property to work',
    body: 'Own a building or multiple flats in Kharadi or nearby? We lease and operate properties as Cohousy co-living homes — long tenure, professional upkeep, rent without the management. Individual flat owners can hand us the whole job through our property management service.',
    cta: { label: 'Property management for owners →', href: '/property-management-pune' },
  },
  {
    eyebrow: 'Corporates & HR teams',
    title: 'House your people near their work',
    body: 'Relocating employees to Pune? Our homes are walking distance from Eon IT Park, WTC and Gera Commerzone. Furnished rooms, verified housemates, digital onboarding, single-invoice billing — accommodation your team actually likes.',
    cta: { label: 'Talk to us about corporate housing', href: 'https://wa.me/918908903900' },
  },
  {
    eyebrow: 'Vendors & service providers',
    title: 'Work with an operator that pays attention',
    body: 'Plumbing, electrical, deep cleaning, painting, furniture, appliances — we run homes every day and we need reliable hands. If your work survives a before-and-after photo, we should talk.',
    cta: { label: 'Introduce your business', href: 'mailto:contact@cohousy.com?subject=Vendor%20partnership' },
  },
  {
    eyebrow: 'Referral partners',
    title: 'Send us owners or residents. Get paid.',
    body: 'Brokers, CAs, society managers, relocation consultants — if you know homeowners who need management or professionals who need a home in Kharadi, refer them to us and earn on every conversion.',
    cta: { label: 'Become a referral partner', href: 'mailto:contact@cohousy.com?subject=Referral%20partnership' },
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            Partner with us
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.08] tracking-[-0.02em] text-gray-900">
            Grow with the operators of{' '}
            <span className="text-accent">Kharadi&rsquo;s co-living homes.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            Cohousy runs co-living homes in Kharadi, Pune and manages 30+ homes
            for individual owners. Four kinds of partners make that work —
            property owners, corporates, vendors and referrers. Here&rsquo;s
            what each looks like.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F4EF] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {PARTNER_TYPES.map(p => {
              const external = p.cta.href.startsWith('http') || p.cta.href.startsWith('mailto')
              return (
                <div
                  key={p.title}
                  className="flex flex-col rounded-2xl bg-white p-8 md:p-10 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.12)]"
                >
                  <p className="mb-3 text-[11px] tracking-[0.28em] uppercase text-gray-500">
                    {p.eyebrow}
                  </p>
                  <h2 className="text-xl md:text-2xl font-light tracking-[-0.01em] text-gray-900">
                    {p.title}
                  </h2>
                  <p className="mt-4 flex-1 text-[15px] md:text-base text-gray-500 leading-relaxed">
                    {p.body}
                  </p>
                  {external ? (
                    <a
                      href={p.cta.href}
                      target={p.cta.href.startsWith('http') ? '_blank' : undefined}
                      rel={p.cta.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="mt-6 text-sm font-medium text-accent hover:underline"
                    >
                      {p.cta.label}
                    </a>
                  ) : (
                    <Link
                      href={p.cta.href}
                      className="mt-6 text-sm font-medium text-accent hover:underline"
                    >
                      {p.cta.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-light tracking-[-0.02em] text-gray-900">
            One conversation is enough to know.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed">
            Tell us what you have — a building, a team to house, a service, a
            network — and we&rsquo;ll tell you honestly whether there&rsquo;s a
            fit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/918908903900"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.02]"
            >
              WhatsApp us
            </a>
            <a
              href="mailto:contact@cohousy.com?subject=Partnership"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm md:text-[15px] font-medium text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
            >
              contact@cohousy.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
