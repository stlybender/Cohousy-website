'use client'

import { useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  BadgeIndianRupee,
  Briefcase,
  Camera,
  Car,
  CheckCircle2,
  ChevronDown,
  CookingPot,
  Building2,
  Fan,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  KeyRound,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sofa,
  Star,
  Users,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react'
import { fadeInUp, withMotion } from '@/lib/motion'
import { GOOGLE_RATING } from '@/lib/reviews'
import GoogleReviews from '@/components/GoogleReviews'
import GoogleLogo from '@/components/GoogleLogo'
import LeadForm from './LeadForm'
import { PHONE_DISPLAY, PHONE_TEL, track, waLink } from './leads'
import { AUDIENCES, formatRupees, type Audience, type FlatConfig, type IncludedIcon } from './types'

// ─── Small building blocks ──────────────────────────────────────────────────

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  return (
    <motion.div
      ref={ref}
      variants={withMotion(fadeInUp)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  accent,
  intro,
}: {
  icon: typeof Home
  eyebrow: string
  title: string
  accent?: string
  intro?: ReactNode
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <span className="mb-6 inline-block rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium tracking-wider text-gray-700 shadow-sm">
        <Icon size={16} className="mr-2 inline text-accent" />
        {eyebrow}
      </span>
      <h2 className="text-display-lg mb-6 font-bold text-black">
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
      {intro && <p className="text-xl font-light tracking-wide text-gray-600">{intro}</p>}
    </Reveal>
  )
}

const scrollToForm = () =>
  document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function WhatsAppCta({ message, label, unit }: { message: string; label: string; unit: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('flat_whatsapp_click', { unit })}
      className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-[10px] font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
    >
      <MessageCircleMore size={18} /> {label}
    </a>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

const INCLUDED_ICONS: Record<IncludedIcon, typeof Home> = {
  sofa: Sofa,
  fan: Fan,
  zap: Zap,
  wifi: Wifi,
  wrench: Wrench,
  car: Car,
  shield: ShieldCheck,
  rupee: BadgeIndianRupee,
  kitchen: CookingPot,
  building: Building2,
}

const AUDIENCE_ICONS: Record<Audience, typeof Home> = {
  family: Users,
  couple: Heart,
  sharing: Briefcase,
  student: GraduationCap,
}

const STEPS = [
  { icon: MessageCircleMore, title: 'Tell us what you need', desc: 'Fill a form on this page, call, or message us on WhatsApp.' },
  { icon: MapPin, title: 'Visit the flat', desc: 'We show you around at a time that suits you.' },
  { icon: KeyRound, title: 'Move in', desc: 'Pay the deposit and first month, sign the agreement, and move in.' },
]

export default function FlatLanding({ config }: { config: FlatConfig }) {
  const [audience, setAudience] = useState<Audience | null>(null)
  const { unit, price, bedrooms } = config
  const perPerson = Math.round(price / bedrooms / 100) * 100
  const waIntro = `Hi! I'm interested in the ${unit} flat in ${config.area}, Kharadi (from ${formatRupees(price)}/month). Can you share availability?`

  const enquireAs = (a: Audience) => {
    setAudience(a)
    track('flat_audience_click', { unit, audience: a })
    scrollToForm()
  }

  return (
    <div className="bg-white pb-20 md:pb-0">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Image src="/logo.png" alt="Cohousy" width={112} height={46} className="h-8 w-auto" priority />
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              onClick={() => track('flat_call_click', { unit, where: 'header' })}
              className="hidden items-center gap-2 font-semibold text-gray-900 hover:text-accent sm:flex"
            >
              <Phone size={18} className="text-accent" /> {PHONE_DISPLAY}
            </a>
            <button
              onClick={scrollToForm}
              className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg"
            >
              Book a visit
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pb-16 pt-6 md:pt-12">
        <div className="container mx-auto grid items-start gap-8 px-6 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <span className="mb-4 inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium tracking-wider text-gray-700 shadow-sm md:mb-6 md:px-4 md:py-2 md:text-sm">
              <MapPin size={16} className="mr-2 text-accent" />
              {config.eyebrow.toUpperCase()}
            </span>
            <h1 className="mb-4 text-[2rem] font-bold leading-[1.05] text-black md:mb-5 md:text-5xl lg:text-[3.5rem]">
              {config.furnishing} <span className="text-accent">{unit} Flats</span> for Rent in Kharadi, Pune
            </h1>
            <p className="mb-4 text-xl font-bold text-black md:text-2xl">
              From {formatRupees(price)} a month.{' '}
              <span className="font-semibold text-gray-600">{config.priceNote}</span>
            </p>
            <p className="mb-6 hidden max-w-2xl text-lg leading-relaxed text-gray-600 sm:block">{config.heroSub}</p>
            <ul className="mb-4 grid max-w-xl grid-cols-2 gap-2 text-sm md:mb-6 md:gap-3 md:text-base">
              {config.heroChips.map((f) => (
                <li key={f} className="flex items-center gap-2 font-medium text-gray-800">
                  <CheckCircle2 size={18} className="shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={GOOGLE_RATING.mapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
            >
              <GoogleLogo size={18} />
              <span className="font-bold text-black">{GOOGLE_RATING.value}</span>
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span>from {GOOGLE_RATING.count} Google reviews</span>
            </a>
          </div>

          {/* Form: right column on desktop, straight after the copy on mobile */}
          <div id="enquire" className="scroll-mt-24 lg:sticky lg:top-24 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-start">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl md:p-8">
              <p className="mb-1 text-xl font-bold text-black">Check {unit} availability</p>
              <p className="mb-6 text-sm text-gray-600">
                Tell us a little, and our team will call you with available flats and visit slots.
              </p>
              <LeadForm config={config} variant="stepped" audience={audience} onAudienceChange={setAudience} />
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-7">
            <Image
              src={config.heroImage.src}
              alt={config.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              {config.photosAreReal ? config.heroImage.label : 'Representative photo'}
            </span>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
          {[
            { big: `${GOOGLE_RATING.value}★`, small: `${GOOGLE_RATING.count} Google reviews` },
            { big: '₹0', small: 'Brokerage' },
            { big: '1 month', small: 'Security deposit' },
            { big: '30+', small: 'Homes managed in Pune' },
          ].map((s) => (
            <div key={s.small}>
              <p className="text-3xl font-bold text-black">{s.big}</p>
              <p className="text-sm text-gray-600">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ────────────────────────────────────── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            icon={CheckCircle2}
            eyebrow={config.included.eyebrow}
            title={config.included.title}
            accent={config.included.accent}
            intro={config.included.intro}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.included.items.map(({ icon, title, desc }) => {
              const Icon = INCLUDED_ICONS[icon]
              return (
              <Reveal key={title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <Icon size={28} className="mb-4 text-accent" />
                <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
                <p className="leading-relaxed text-gray-600">{desc}</p>
              </Reveal>
              )
            })}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-lg"
            >
              Check availability <ArrowRight size={18} />
            </button>
            <WhatsAppCta message={waIntro} label="Ask on WhatsApp" unit={unit} />
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ───────────────────────────────────────── */}
      <section className="py-section bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            icon={Users}
            eyebrow="WHO LIVES HERE"
            title={`A ${unit} that works for`}
            accent="everyone"
            intro="Families, couples, working professionals and students all rent with us. Pick yours and we'll send flats that fit."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map(({ id, label }) => {
              const Icon = AUDIENCE_ICONS[id]
              return (
                <Reveal key={id} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                  <Icon size={28} className="mb-4 text-accent" />
                  <h3 className="mb-2 text-xl font-bold text-black">{label}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-gray-600">
                    {config.audienceCopy[id].replace('{perPerson}', formatRupees(perPerson))}
                  </p>
                  <button
                    onClick={() => enquireAs(id)}
                    className="inline-flex items-center gap-1 self-start font-semibold text-black hover:text-accent"
                  >
                    Enquire as {id === 'family' ? 'a family' : id === 'couple' ? 'a couple' : id === 'sharing' ? 'a group' : 'a student'}
                    <ArrowRight size={16} />
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            icon={Camera}
            eyebrow="INSIDE THE FLAT"
            title={config.galleryHeading.title}
            accent={config.galleryHeading.accent}
            intro={
              config.photosAreReal ? (
                <>
                  Real photos of the flat.{' '}
                  <button
                    onClick={scrollToForm}
                    className="font-semibold text-black underline underline-offset-4 hover:text-accent"
                  >
                    Book a visit
                  </button>{' '}
                  to see it in person.
                </>
              ) : (
              <>
                These are representative photos.{' '}
                <button
                  onClick={scrollToForm}
                  className="font-semibold text-black underline underline-offset-4 hover:text-accent"
                >
                  Book a visit
                </button>{' '}
                to see the actual flat.
              </>
              )
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {config.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-black">
                  {img.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE FORM ──────────────────────────────────────── */}
      <section className="py-section bg-gray-50">
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <span className="mb-6 inline-block rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium tracking-wider text-gray-700 shadow-sm">
              <BadgeIndianRupee size={16} className="mr-2 inline text-accent" />
              EXACT PRICE
            </span>
            <h2 className="text-display-lg mb-6 font-bold text-black">
              Get the exact price <span className="text-accent">on WhatsApp</span>
            </h2>
            <p className="text-xl font-light tracking-wide text-gray-600">
              Rent starts at {formatRupees(price)}. Leave your number and we&apos;ll WhatsApp you the exact
              price and which {unit} flats are available right now.
            </p>
          </Reveal>
          <Reveal className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:p-8">
            <LeadForm config={config} variant="quick" audience={audience} submitLabel="Send me the price" />
          </Reveal>
        </div>
      </section>

      {/* ── LOCATION ───────────────────────────────────────────── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader icon={MapPin} eyebrow="LOCATION" title={config.location.heading} intro={config.location.intro} />
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <ul className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white px-6">
                {config.location.landmarks.map((l) => (
                  <li key={l.place} className="flex items-center justify-between gap-4 py-4">
                    <span className="font-medium text-black">{l.place}</span>
                    <span className="shrink-0 rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-700">{l.distance}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Distances are approximate. We share the exact address when we book your visit.
              </p>
            </Reveal>
            <Reveal className="h-[380px] overflow-hidden rounded-2xl border border-gray-100">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(config.location.mapQuery)}&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${config.area}, Kharadi, Pune`}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="py-section bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeader icon={KeyRound} eyebrow="HOW IT WORKS" title="Three steps to" accent="move in" />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-black">
                    {i + 1}
                  </span>
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
                <p className="leading-relaxed text-gray-600">{desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-lg"
            >
              Start with step 1 <ArrowRight size={18} />
            </button>
            <a
              href={PHONE_TEL}
              onClick={() => track('flat_call_click', { unit, where: 'steps' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-[10px] font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS (real Google reviews, shared component) ────── */}
      <GoogleReviews
        bg="bg-white"
        lead={config.reviewLead}
        heading={
          <>
            What residents say about <span className="text-accent">Cohousy</span>
          </>
        }
      />

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-section bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeader icon={HelpCircle} eyebrow="FAQ" title="Questions people" accent="ask us" />
          <div className="mx-auto max-w-3xl space-y-3">
            {config.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gray-100 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-black">
                  {f.q}
                  <ChevronDown size={20} className="shrink-0 text-accent transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA: SITE VISIT ──────────────────────────────── */}
      <section className="py-section bg-white">
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-display-lg mb-6 font-bold text-black">
              See the {unit} <span className="text-accent">this week</span>
            </h2>
            <p className="mb-8 text-xl font-light tracking-wide text-gray-600">
              Pick a day and we&apos;ll call to fix a time. Prefer to talk now? Call or WhatsApp us.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_TEL}
                onClick={() => track('flat_call_click', { unit, where: 'final' })}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-[10px] font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
              >
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
              <WhatsAppCta message={waIntro} label="WhatsApp us" unit={unit} />
            </div>
          </Reveal>
          <Reveal className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:p-8">
            <p className="mb-6 text-xl font-bold text-black">Book a free site visit</p>
            <LeadForm config={config} variant="visit" audience={audience} submitLabel="Book my visit" />
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto flex flex-col gap-6 px-6 text-sm text-gray-600 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image src="/logo.png" alt="Cohousy" width={98} height={40} className="mb-3 h-7 w-auto" />
            <p>
              Cohousy manages homes in Kharadi, Pune.
              {!config.photosAreReal && ' Photos on this page are representative.'}
            </p>
          </div>
          <nav aria-label="More homes" className="flex flex-col gap-2">
            <p className="font-semibold text-black">More homes in Kharadi</p>
            {config.related.map((r) => (
              <a key={r.href} href={r.href} className="hover:text-black">
                {r.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <a href="/privacy-policy" className="hover:text-black">Privacy policy</a>
            <a href="/terms-of-service" className="hover:text-black">Terms of service</a>
            <p>© {new Date().getFullYear()} Cohousy</p>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT (desktop) ───────────────────────────── */}
      <a
        href={waLink(waIntro)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('flat_whatsapp_click', { unit, where: 'float' })}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors hover:bg-green-600 md:flex"
      >
        <MessageCircleMore size={28} />
      </a>

      {/* ── STICKY ACTION BAR (mobile) ─────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gray-200 bg-white md:hidden">
        <a
          href={PHONE_TEL}
          onClick={() => track('flat_call_click', { unit, where: 'sticky' })}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-gray-900"
        >
          <Phone size={20} className="text-accent" /> Call
        </a>
        <a
          href={waLink(waIntro)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('flat_whatsapp_click', { unit, where: 'sticky' })}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-gray-900"
        >
          <MessageCircleMore size={20} className="text-green-600" /> WhatsApp
        </a>
        <button
          onClick={scrollToForm}
          className="flex flex-col items-center gap-1 bg-accent py-3 text-xs font-semibold text-black"
        >
          <Home size={20} /> Book visit
        </button>
      </div>
    </div>
  )
}
