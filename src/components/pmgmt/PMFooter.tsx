'use client'

import Link from 'next/link'
import Image from 'next/image'

const PAGE_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'For NRIs', href: '#nri' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Waitlist', href: '#waitlist' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partner with us', href: '/partners' },
]

// Same accounts the main site footer uses.
const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/cohousy' },
  { label: 'Instagram', href: 'https://www.instagram.com/cohousy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cohousy/about/' },
  { label: 'X', href: 'https://x.com/cohousy' },
]

export default function PMFooter() {
  return (
    <footer className="relative bg-[#0F0E0C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Column 1 — Cohousy Property Management */}
          <div>
            <div className="flex items-center gap-3">
              {/* white.png is the light-on-dark logo variant */}
              <Image src="/white.png" alt="Cohousy" width={112} height={32} className="h-8 w-auto" />
              <span className="border-l border-white/20 pl-3 text-[11px] leading-tight tracking-[0.18em] uppercase text-white/50">
                Property
                <br />
                Management
              </span>
            </div>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Homes in Pune, quietly looked after.
            </p>
            <address className="mt-5 space-y-1.5 text-sm not-italic text-white/50 leading-relaxed">
              <p>Kharadi, Pune, Maharashtra 411014</p>
              <p>
                <a href="tel:+918908903900" className="transition-colors hover:text-white">
                  +91 89089 03900
                </a>
                {' · '}
                <a href="mailto:contact@cohousy.com" className="transition-colors hover:text-white">
                  contact@cohousy.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 2 — This page */}
          <div>
            <p className="mb-5 text-[11px] tracking-[0.28em] uppercase text-white/40">
              This page
            </p>
            <ul className="space-y-3">
              {PAGE_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="mb-5 text-[11px] tracking-[0.28em] uppercase text-white/40">
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/co-living"
                  className="text-sm italic text-white/65 transition-colors hover:text-white"
                >
                  We also run co-living homes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Follow */}
          <div>
            <p className="mb-5 text-[11px] tracking-[0.28em] uppercase text-white/40">
              Follow
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">© 2026 Cohousy</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-white/45 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-white/45 transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
