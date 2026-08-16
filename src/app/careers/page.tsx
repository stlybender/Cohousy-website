import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Careers at Cohousy | Work With Us in Kharadi, Pune',
  description:
    'Join the team that runs Cohousy co-living homes and property management in Kharadi, Pune. Operations, community, maintenance and growth roles — send us your CV.',
  alternates: { canonical: 'https://www.cohousy.com/careers' },
}

const AREAS = [
  {
    title: 'Operations & community',
    body: 'The people who run our co-living homes day to day — move-ins, resident experience, vendor coordination, the single number everyone calls.',
  },
  {
    title: 'Property & maintenance',
    body: 'Hands-on problem solvers who keep homes working: inspections, repairs, vendor quality, before-and-after photo discipline.',
  },
  {
    title: 'Owner relations',
    body: 'The bridge between homeowners (including NRIs across timezones) and their homes — reports, approvals, and calm, clear communication.',
  },
  {
    title: 'Growth & partnerships',
    body: 'Corporate housing tie-ups, owner acquisition, and the content that tells our story honestly. No inflated numbers — that applies to marketing too.',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            Careers
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.08] tracking-[-0.02em] text-gray-900">
            Do the work that makes a home{' '}
            <span className="text-accent">actually work.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            Cohousy is a small, operations-first team in Kharadi, Pune. We run
            co-living homes for hundreds of residents and manage 30+ homes for
            individual owners. Most of our work happens inside buildings, not
            behind dashboards — and we like it that way.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F4EF] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl md:text-4xl font-light tracking-[-0.02em] text-gray-900">
            The kind of people we hire
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {AREAS.map(area => (
              <div
                key={area.title}
                className="rounded-2xl bg-white p-8 md:p-10 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.12)]"
              >
                <h3 className="text-lg md:text-xl font-medium tracking-[-0.01em] text-gray-900">
                  {area.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-base text-gray-500 leading-relaxed">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-light tracking-[-0.02em] text-gray-900">
            No open-roles board. Just an inbox we actually read.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed">
            We hire when we find the right person, not on a schedule. If the
            work above sounds like you, send your CV and a few lines about
            what you&rsquo;d want to own.
          </p>
          <a
            href="mailto:contact@cohousy.com?subject=Careers%20at%20Cohousy"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-[15px] font-medium text-black shadow-[0_10px_40px_rgba(255,128,2,0.28)] transition-transform duration-300 hover:scale-[1.02]"
          >
            Email your CV → contact@cohousy.com
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Kharadi, Pune · In-person roles unless stated otherwise
          </p>
          <p className="mt-10 text-sm text-gray-500">
            Curious what we do first?{' '}
            <Link href="/about" className="text-accent hover:underline">
              Read about Cohousy →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
