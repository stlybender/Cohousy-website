import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'About Cohousy | Co-living & Property Management in Kharadi, Pune',
  description:
    'Cohousy runs co-living homes in Kharadi, Pune — walking distance from Eon IT Park and WTC — and manages homes for individual owners. Operators, not brokers, since 2020.',
  alternates: { canonical: 'https://www.cohousy.com/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.cohousy.com/about',
    title: 'About Cohousy',
    description:
      'Co-living homes in Kharadi, Pune and end-to-end property management for homeowners. Operators, not brokers, since 2020.',
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Cohousy',
  url: 'https://www.cohousy.com/about',
  about: { '@id': 'https://www.cohousy.com/#organization' },
}

const VALUES = [
  {
    title: 'Operators, not brokers',
    body: 'A broker finds a tenant once and disappears. We run the homes we manage — tenants, rent, maintenance, taxes, paperwork — every day, from inside the buildings.',
  },
  {
    title: 'A single number to call',
    body: 'Residents and owners alike get one person who owns their question. No call centres, no "let me check with someone", no vanishing.',
  },
  {
    title: 'Honest numbers',
    body: 'Every claim on this site is one we can prove. When we say rent lands by the 7th, or that we run 30+ owner homes, those are live, verifiable numbers.',
  },
  {
    title: 'Digital-first, human-always',
    body: 'Onboarding, rent, reports and repair approvals happen on your phone. But the people fixing the geyser and answering the phone are ours, in Kharadi.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            About Cohousy
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.08] tracking-[-0.02em] text-gray-900">
            Homes in Pune,{' '}
            <span className="text-accent">quietly looked after.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            Cohousy runs premium co-living and PG homes in Kharadi, Pune —
            walking distance from Eon IT Park and the World Trade Center — and
            manages homes end-to-end for individual owners. We&rsquo;ve been
            operating since 2020, and we do both sides of renting: the living
            and the owning.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F6F4EF] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
              <Image
                src="/pmgmt/operators.jpg"
                alt="A Cohousy co-living common space in Kharadi, Pune"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] text-gray-900">
                We started by running homes.
                <br />
                Everything else followed.
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                Cohousy began in 2020 with co-living homes in Kharadi built for
                the professionals who work at Eon IT Park, WTC and Gera
                Commerzone — fully furnished rooms, verified flatmates, and an
                operations team that lives with the details.
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                Running those homes every day taught us the full job of
                ownership: sourcing tenants, collecting rent, handling plumbers,
                keeping paperwork clean. So we opened that same operation to
                individual homeowners in Pune — today we look after 30+ owner
                homes, with rent in owners&rsquo; accounts by the 7th.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl md:text-4xl font-light tracking-[-0.02em] text-gray-900">
            What we believe
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 sm:grid-cols-2">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white p-8 md:p-10">
                <h3 className="text-lg md:text-xl font-medium tracking-[-0.01em] text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-base text-gray-500 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#0F0E0C] p-8 md:p-12 text-white">
              <p className="mb-3 text-[11px] tracking-[0.28em] uppercase text-white/50">
                Looking for a home
              </p>
              <h3 className="text-xl md:text-2xl font-light tracking-[-0.01em]">
                Co-living &amp; PG in Kharadi
              </h3>
              <p className="mt-4 text-[15px] md:text-base text-white/60 leading-relaxed">
                Furnished rooms near Eon IT Park and WTC — single or shared,
                short or long term, with housekeeping, maintenance and a
                community of working professionals.
              </p>
              <Link
                href="/co-living"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Explore co-living →
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#FBFAF7] p-8 md:p-12">
              <p className="mb-3 text-[11px] tracking-[0.28em] uppercase text-gray-500">
                Own a home in Pune
              </p>
              <h3 className="text-xl md:text-2xl font-light tracking-[-0.01em] text-gray-900">
                Property management for owners
              </h3>
              <p className="mt-4 text-[15px] md:text-base text-gray-600 leading-relaxed">
                Tenant sourcing, rent by the 7th, maintenance, taxes and one
                number to call — for homeowners in Pune and NRIs anywhere in
                the world.
              </p>
              <Link
                href="/property-management-pune"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400"
              >
                See how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </main>
  )
}
