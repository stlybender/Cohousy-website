'use client'

import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'For NRIs', href: '#nri' },
  { label: 'FAQ', href: '#faq' },
]

export default function PMHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/property-management-pune" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Cohousy" width={112} height={32} className="h-7 md:h-8 w-auto" />
          <span className="hidden sm:block border-l border-gray-200 pl-3 text-[11px] leading-tight tracking-[0.18em] uppercase text-gray-500">
            Property
            <br />
            Management
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/co-living"
            className="hidden md:block text-[13px] text-gray-400 transition-colors hover:text-gray-600"
          >
            Looking for a room? → Co-living
          </Link>
          <a
            href="#talk-to-us"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            Talk to us
          </a>
        </div>
      </div>
    </header>
  )
}
