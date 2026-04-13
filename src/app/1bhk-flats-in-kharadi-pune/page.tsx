'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// ─── Shared colour tokens ──────────────────────────────────────────────────
const C = {
  dark: '#1a1c1e',
  darkForm: '#1e2340',
  darkInput: '#2a2d50',
  orange: '#ca4a26',
  red: '#a8320f',
  surface: '#fbf9f5',
  surfaceLow: '#f5f3ef',
  surfaceContainer: '#f0eeea',
  body: '#1b1c1a',
  muted: '#59413b',
  gradient: 'linear-gradient(135deg, #a8320f 0%, #ca4a26 100%)',
} as const;

async function submitToApi(payload: Record<string, string>) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send');
}

export default function GoogleAdsLanding() {
  const router = useRouter();

  // Hero form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [flatType, setFlatType] = useState('1rk');
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroError, setHeroError] = useState('');

  // CTA form
  const [ctaName, setCtaName] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaPhone, setCtaPhone] = useState('');
  const [ctaLoading, setCtaLoading] = useState(false);
  const [ctaError, setCtaError] = useState('');

  const submitHeroForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroLoading(true);
    setHeroError('');
    const label = flatType === '1rk' ? '1 RK Studio (₹21,000/mo)' : '1 BHK Apartment (₹23,000/mo)';
    try {
      await submitToApi({
        name, email, phone,
        serviceType: 'Flat Rental Inquiry',
        propertyName: 'Kharadi Flat — Google Ads',
        message: `Interested in: ${label}`,
      });
      router.push('/thank-you');
    } catch {
      setHeroError('Something went wrong. Please try again.');
      setHeroLoading(false);
    }
  };

  const submitCtaForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setCtaLoading(true);
    setCtaError('');
    try {
      await submitToApi({
        name: ctaName, email: ctaEmail, phone: ctaPhone,
        serviceType: 'Site Visit Request',
        propertyName: 'Kharadi Flat — Google Ads',
        message: 'Site visit request from landing page.',
      });
      router.push('/thank-you');
    } catch {
      setCtaError('Something went wrong. Please try again.');
      setCtaLoading(false);
    }
  };

  return (
    <>
      {/* ── Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..60,700;12..60,800&family=Inter:wght@400;500;600&family=Epilogue:wght@500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .lp { font-family: 'Inter', sans-serif; }
        .lp-hl { font-family: 'Bricolage Grotesque', sans-serif; letter-spacing: -0.04em; line-height: 1.05; }
        .lp-brand { font-family: 'Epilogue', sans-serif; }
        .lp-grad { background: ${C.gradient}; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: inherit; line-height: 1; display: inline-block;
        }
        .lp-img-zoom { transition: transform 0.7s ease; }
        .group:hover .lp-img-zoom { transform: scale(1.07); }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          PAGE WRAPPER — bottom padding makes room for sticky bar
      ════════════════════════════════════════════════════════ */}
      <div className="lp" style={{ backgroundColor: C.surface, color: C.body, paddingBottom: '52px' }}>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.dark }} className="min-h-screen flex flex-col md:flex-row overflow-hidden">

          {/* Left panel */}
          <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:px-20 py-16">

            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 w-fit text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}>location_on</span>
              Kharadi IT Park, Pune — Fully Managed Flats
            </div>

            <h1 className="lp-hl text-5xl md:text-7xl text-white mb-4">
              Your Premium Flat in Kharadi. Furnished. Ready.
            </h1>

            <p className="text-2xl font-bold mb-6" style={{ color: C.orange }}>
              Starting ₹21,000/month — Zero Brokerage
            </p>

            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: '#e9e8e6' }}>
              Fully furnished 1 RK &amp; 1 BHK flats for rent in Kharadi Pune — walking distance from IT parks.
              No brokerage. Instant move-in.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {['Fully Furnished', 'Zero Brokerage', 'Utilities Included', 'Instant Move-In'].map(f => (
                <div key={f} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <span className="material-symbols-outlined" style={{ color: C.orange, fontSize: '20px' }}>check_circle</span>
                  {f}
                </div>
              ))}
            </div>

            {/* Lead form */}
            <form onSubmit={submitHeroForm} className="p-8 rounded-2xl shadow-2xl" style={{ backgroundColor: C.darkForm }}>
              <h3 className="lp-hl text-white text-2xl mb-6">Check Flat Availability</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required value={name} onChange={e => setName(e.target.value)}
                  className="rounded-full px-6 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 border-0"
                  style={{ backgroundColor: C.darkInput }}
                  placeholder="Full Name" type="text"
                />
                <input
                  required value={phone} onChange={e => setPhone(e.target.value)}
                  className="rounded-full px-6 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 border-0"
                  style={{ backgroundColor: C.darkInput }}
                  placeholder="Phone Number" type="tel"
                />
                <input
                  required value={email} onChange={e => setEmail(e.target.value)}
                  className="rounded-full px-6 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 border-0 col-span-1 md:col-span-2"
                  style={{ backgroundColor: C.darkInput }}
                  placeholder="Email Address" type="email"
                />
                <select
                  value={flatType} onChange={e => setFlatType(e.target.value)}
                  className="rounded-full px-6 py-3 text-white focus:outline-none border-0 col-span-1 md:col-span-2"
                  style={{ backgroundColor: C.darkInput }}
                >
                  <option value="1rk">1 RK Studio — ₹21,000/mo</option>
                  <option value="1bhk">1 BHK Apartment — ₹23,000/mo</option>
                </select>
              </div>
              {heroError && <p className="mt-3 text-red-400 text-sm">{heroError}</p>}
              <button
                type="submit" disabled={heroLoading}
                className="w-full mt-6 lp-grad text-white py-4 rounded-full font-bold text-lg shadow-xl transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {heroLoading ? 'Sending...' : 'Get Free Site Visit →'}
              </button>
            </form>
          </div>

          {/* Right panel — hero image */}
          <div className="w-full md:w-[45%] relative min-h-[400px] md:min-h-0">
            <Image
              src="/Living Room.jpeg"
              alt="Premium living room in Cohousy flat, Kharadi Pune"
              fill className="object-cover" priority
            />
            <div
              className="absolute top-8 left-8 text-white px-4 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
            >
              📸 Actual Property
            </div>
            <div className="absolute bottom-12 right-12 bg-white p-6 rounded-2xl shadow-2xl border-l-4 border-red-600 flex items-center gap-4 animate-pulse">
              <div className="w-3 h-3 bg-red-600 rounded-full shrink-0" />
              <p className="font-bold text-gray-900 text-sm">Only 2 Flats Available This Month</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF BAR ──────────────────────────────────── */}
        <section
          className="py-8"
          style={{ backgroundColor: C.surfaceLow, borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm md:text-base font-semibold"
              style={{ color: C.muted, opacity: 0.75 }}
            >
              {['⭐ 4.9 Google Rating', '100+ Happy Residents', 'Featured in Times of India', "Kharadi's #1 Co-Living", 'Zero Brokerage — Always', 'Since 2021'].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-6">
                  {item}
                  {i < arr.length - 1 && <span className="hidden md:inline ml-6">·</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY COHOUSY ───────────────────────────────────────── */}
        <section id="why" className="py-24 px-8 md:px-20 overflow-hidden" style={{ backgroundColor: C.surface }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-3/5">
              <span className="font-bold tracking-widest text-sm mb-4 block uppercase" style={{ color: C.red }}>
                01 — Why Cohousy
              </span>
              <h2 className="lp-hl text-4xl md:text-6xl mb-12" style={{ color: C.body }}>
                Not Just a Flat.<br />An Elevated Life.
              </h2>
              <div className="space-y-10">
                {[
                  { icon: 'chair', title: 'Designer Furnished', desc: 'Custom-made modular furniture, orthopedic mattresses, and ergonomic workspaces built for productivity.' },
                  { icon: 'verified_user', title: 'Zero Hassle Experience', desc: 'Single monthly bill covering electricity, high-speed WiFi, housekeeping, and maintenance. Just move in.' },
                  { icon: 'directions_walk', title: '5-Min Walk to IT Parks', desc: 'Located in the heart of Kharadi. Walk to EON Free Zone, Wipro, and World Trade Center in minutes.' },
                  { icon: 'group', title: 'Professional Community', desc: 'Network with like-minded IT professionals in our curated common areas and rooftop spaces.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: C.surfaceContainer }}
                    >
                      <span className="material-symbols-outlined text-3xl" style={{ color: C.red, fontSize: '28px' }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openWA("Hi! I'd like to see available flats at Cohousy in Kharadi, Pune.")}
                className="mt-16 lp-grad text-white px-10 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-[1.02] active:scale-95"
              >
                See Available Flats →
              </button>
            </div>
            <div className="w-full md:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <Image src="/Siting Area 2.jpeg" alt="Modern seating area at Cohousy" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FLAT OPTIONS ──────────────────────────────────────── */}
        <section id="flats" className="py-24 px-8 md:px-20 text-white" style={{ backgroundColor: C.dark }}>
          <div className="max-w-7xl mx-auto">
            <span className="font-bold tracking-widest text-sm mb-4 block text-center uppercase" style={{ color: C.orange }}>
              02 — Your Flat
            </span>
            <h2 className="lp-hl text-4xl md:text-6xl mb-16 text-center text-white">
              Two Premium Options.<br />Both Move-In Ready.
            </h2>
            <div className="flex flex-col md:flex-row items-end gap-12">

              {/* 1 RK */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-2xl mb-8 shadow-2xl" style={{ aspectRatio: '4/3' }}>
                  <Image src="/Sofa and Table.jpeg" alt="1 RK Studio at Cohousy" fill className="object-cover lp-img-zoom" />
                  <div className="absolute top-6 left-6 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest" style={{ backgroundColor: C.red }}>
                    MOST POPULAR
                  </div>
                </div>
                <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="lp-hl text-3xl mb-2">1 RK Studio</h3>
                  <p className="mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>Perfect for solo professionals seeking privacy and efficiency.</p>
                  <p className="text-4xl font-bold mb-8" style={{ color: C.orange }}>
                    ₹21,000 <span className="text-lg font-normal" style={{ color: 'rgba(255,255,255,0.4)' }}>/ month</span>
                  </p>
                  <button
                    onClick={() => openWA("Hi! I'm interested in the 1 RK Studio at Cohousy Kharadi (₹21,000/mo). Can you share availability?")}
                    className="w-full lp-grad text-white py-4 rounded-full font-bold transition-transform hover:scale-[1.01] active:scale-95"
                  >
                    Check 1 RK Availability →
                  </button>
                </div>
              </div>

              {/* 1 BHK */}
              <div className="flex-1 group md:mb-12">
                <div className="relative overflow-hidden rounded-2xl mb-8 shadow-2xl" style={{ aspectRatio: '4/5' }}>
                  <Image src="/Bed room with balcony.jpeg" alt="1 BHK Apartment at Cohousy" fill className="object-cover lp-img-zoom" />
                  <div className="absolute top-6 left-6 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest" style={{ backgroundColor: '#5d5c74' }}>
                    BEST VALUE
                  </div>
                </div>
                <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="lp-hl text-3xl mb-2">1 BHK Apartment</h3>
                  <p className="mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>Extra space with separate living and bedroom areas.</p>
                  <p className="text-4xl font-bold mb-8" style={{ color: C.orange }}>
                    ₹23,000 <span className="text-lg font-normal" style={{ color: 'rgba(255,255,255,0.4)' }}>/ month</span>
                  </p>
                  <button
                    onClick={() => openWA("Hi! I'm interested in the 1 BHK Apartment at Cohousy Kharadi (₹23,000/mo). Can you share availability?")}
                    className="w-full lp-grad text-white py-4 rounded-full font-bold transition-transform hover:scale-[1.01] active:scale-95"
                  >
                    Check 1 BHK Availability →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── INSIDE LOOK ───────────────────────────────────────── */}
        <section className="py-24 px-8 md:px-20 overflow-hidden" style={{ backgroundColor: C.surface }}>
          <div className="max-w-7xl mx-auto">
            <span className="font-bold tracking-widest text-sm mb-4 block uppercase" style={{ color: C.red }}>
              03 — Inside Look
            </span>
            <h2 className="lp-hl text-4xl md:text-6xl mb-16" style={{ color: C.body }}>
              Every Detail, Considered.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8" style={{ minHeight: '560px' }}>
              <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/Living_room_into_202604091449.jpeg"
                  alt="Living room interior at Cohousy" fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8">
                  <span className="px-6 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
                    Premium Furniture
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col gap-8" style={{ minHeight: '560px' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1">
                  <Image
                    src="/long/Fully Furnished Room.jpg"
                    alt="Fully furnished bedroom" fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-6 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
                      Furnished Bedroom
                    </span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1">
                  <Image
                    src="/Kitchen setup.jpeg"
                    alt="Fully equipped modular kitchen" fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-6 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
                      Fully Equipped Kitchen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AMENITIES ─────────────────────────────────────────── */}
        <section id="amenities" className="py-24 px-8 md:px-20 text-white" style={{ backgroundColor: C.dark }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-bold tracking-widest text-sm mb-4 block uppercase" style={{ color: C.orange }}>
                04 — Amenities
              </span>
              <h2 className="lp-hl text-4xl md:text-6xl text-white">
                Everything Included.<br />No Surprises.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
              {[
                { icon: 'wifi', label: 'High-Speed WiFi' },
                { icon: 'ac_unit', label: 'Air Conditioning' },
                { icon: 'chair', label: 'Furniture' },
                { icon: 'water_drop', label: 'RO Water' },
                { icon: 'cleaning_services', label: 'Housekeeping' },
                { icon: 'security', label: '24/7 Security' },
                { icon: 'bolt', label: 'Power Backup' },
                { icon: 'local_parking', label: 'Covered Parking' },
                { icon: 'kitchen', label: 'Full Kitchen' },
                { icon: 'tv', label: 'Smart TV' },
                { icon: 'hot_tub', label: 'Hot Water' },
                { icon: 'fitness_center', label: 'Fitness Area' },
              ].map(a => (
                <div key={a.label} className="flex flex-col items-center text-center group cursor-default">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="material-symbols-outlined" style={{ color: C.orange, fontSize: '28px' }}>{a.icon}</span>
                  </div>
                  <span className="font-medium text-sm">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────── */}
        <section className="py-24 px-8 md:px-20" style={{ backgroundColor: C.surface }}>
          <div className="max-w-7xl mx-auto">
            <span className="font-bold tracking-widest text-sm mb-4 block uppercase" style={{ color: C.red }}>
              05 — Residents Say
            </span>
            <h2 className="lp-hl text-4xl md:text-6xl mb-16" style={{ color: C.body }}>
              Real People. Real Homes.
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  text: '"Moving from Mumbai to Pune for my job at EON was stressful until I found Cohousy. The 1 RK is beautifully designed, and the zero brokerage policy saved me a lot of upfront cash."',
                  name: 'Priya S.', role: 'Systems Engineer, Tata Communications',
                  img: '/Co-Living/Testimonial 1.jpg', dark: false, cls: 'md:mt-12',
                },
                {
                  text: '"The proximity to World Trade Center is unbeatable. I literally walk to work in 7 minutes. Housekeeping is timely, and the internet is actually fast enough for my late-night gaming."',
                  name: 'Rahul M.', role: 'Product Designer, Zensar',
                  img: '/Co-Living/Testimonial 2.jpg', dark: true, cls: 'md:-translate-y-6',
                },
                {
                  text: '"I took the 1 BHK and the extra space is worth every rupee. The kitchen is fully set up, so I didn\'t have to buy a single appliance. Highly recommend for professionals in Kharadi."',
                  name: 'Ananya K.', role: 'HR Lead, Barclays',
                  img: '/Co-Living/Testimonial 3.jpg', dark: false, cls: 'md:mt-12',
                },
              ].map(t => (
                <div
                  key={t.name}
                  className={`flex-1 p-10 rounded-2xl shadow-xl ${t.cls}`}
                  style={{ backgroundColor: t.dark ? C.dark : 'white', color: t.dark ? 'white' : C.body }}
                >
                  <div className="mb-6">
                    <span className="material-symbols-outlined" style={{ color: t.dark ? C.orange : C.red, fontSize: '28px' }}>format_quote</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-8 italic">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                      <Image src={t.img} alt={`Portrait of ${t.name}`} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-xs" style={{ color: t.dark ? 'rgba(255,255,255,0.6)' : C.muted }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION ──────────────────────────────────────────── */}
        <section className="py-24 px-8 md:px-20 text-white" style={{ backgroundColor: C.dark }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <span className="font-bold tracking-widest text-sm mb-4 block uppercase" style={{ color: C.orange }}>
                06 — Location
              </span>
              <h2 className="lp-hl text-4xl md:text-6xl mb-12 text-white">
                Heart of Kharadi.<br />Everything Close.
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  { place: 'EON Free Zone IT Park', dist: '450m — 5 Min Walk' },
                  { place: 'World Trade Center (WTC)', dist: '600m — 7 Min Walk' },
                  { place: 'Zensar IT Park', dist: '1.2km — 4 Min Drive' },
                  { place: 'Phoenix Market City Mall', dist: '3.5km — 10 Min Drive' },
                ].map(loc => (
                  <div
                    key={loc.place}
                    className="flex justify-between items-center py-4"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="text-lg">{loc.place}</span>
                    <span className="px-4 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      {loc.dist}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openWA("Hi! I'd like to book a site visit to Cohousy in Kharadi, Pune. Please share directions and available time slots.")}
                className="lp-grad text-white px-10 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-[1.02] active:scale-95"
              >
                Get Directions &amp; Book Visit →
              </button>
            </div>

            {/* Google Maps embed */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1878899882404!2d73.9100897!3d18.565566099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3bb9f17daa1%3A0x1a664f6f722abb15!2sShinde%20Sarkar%20%2301%20Complex!5e0!3m2!1sen!2sin!4v1742375299996!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cohousy location — Kharadi, Pune"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section className="relative py-32 flex items-center justify-center px-8 text-center overflow-hidden" style={{ backgroundColor: C.dark }}>
          <div className="absolute inset-0 z-0">
            <Image src="/Kitchen setup.jpeg" alt="" fill className="object-cover opacity-20" aria-hidden />
          </div>
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="lp-hl text-5xl md:text-7xl text-white mb-12">
              Your Kharadi Flat Is Waiting.
            </h2>
            <form
              onSubmit={submitCtaForm}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  required value={ctaName} onChange={e => setCtaName(e.target.value)}
                  className="flex-1 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none border-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  placeholder="Your Name" type="text"
                />
                <input
                  required value={ctaPhone} onChange={e => setCtaPhone(e.target.value)}
                  className="flex-1 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none border-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  placeholder="WhatsApp Number" type="tel"
                />
                <input
                  required value={ctaEmail} onChange={e => setCtaEmail(e.target.value)}
                  className="flex-1 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none border-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  placeholder="Email Address" type="email"
                />
                <button
                  type="submit" disabled={ctaLoading}
                  className="lp-grad text-white px-10 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-105 active:scale-95 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {ctaLoading ? 'Sending...' : 'Book Free Site Visit →'}
                </button>
              </div>
              {ctaError && <p className="mt-3 text-red-400 text-sm text-center">{ctaError}</p>}
            </form>
            <p className="mt-8 font-bold text-xl" style={{ color: '#f87171' }}>
              ⚡ Only 2 flats available this month.
            </p>
          </div>
        </section>

      </div>{/* end page wrapper */}

      {/* ── STICKY URGENCY BAR ────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 w-full z-40 py-3 px-4 flex justify-center items-center shadow-2xl"
        style={{ backgroundColor: C.red }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <p className="lp-hl text-white text-xs font-semibold tracking-widest uppercase">
            Only 2 Kharadi Flats Left This Month
          </p>
        </div>
      </div>

      {/* ── WHATSAPP FLOAT ────────────────────────────────────── */}
      <WhatsAppButton />
    </>
  );
}
