import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Terms of Service | Cohousy',
  description:
    'The terms that govern your use of the Cohousy website and enquiries about our co-living and property management services in Pune.',
  alternates: { canonical: 'https://www.cohousy.com/terms-of-service' },
}

const SECTIONS: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: '1. Acceptance of these terms',
    paragraphs: [
      'By using www.cohousy.com ("the site"), you agree to these terms. If you do not agree, please do not use the site. These terms apply to the website only; stays at Cohousy homes and property management engagements are governed by their own written agreements.',
    ],
  },
  {
    title: '2. Who we are',
    paragraphs: [
      'Cohousy operates co-living and PG accommodation in Kharadi, Pune, and provides property management services to homeowners. Contact: contact@cohousy.com · +91 89089 03900 · Kharadi, Pune, Maharashtra 411014.',
    ],
  },
  {
    title: '3. The website is informational',
    paragraphs: [
      'Content on the site — including room types, amenities, service descriptions, and area information — is provided to help you make an enquiry. It is not a contractual offer. Availability changes daily, and a booking or management engagement exists only once confirmed in writing and covered by its own agreement.',
    ],
  },
  {
    title: '4. Prices and numbers',
    paragraphs: [
      'Prices shown on the site are indicative and subject to change without notice. Final tariffs, deposits, and fees are confirmed at the time of booking or engagement. We keep our published numbers (such as homes under management) honest and update them as they change.',
    ],
  },
  {
    title: '5. Enquiries and communication',
    paragraphs: [
      'When you submit a form on the site, you consent to us contacting you about your enquiry by phone, WhatsApp, or email. Waitlist submissions receive one message when we launch in the relevant city. Our use of your information is described in the Privacy Policy.',
    ],
  },
  {
    title: '6. Acceptable use',
    paragraphs: [
      'You agree not to misuse the site — including submitting false enquiries, attempting to disrupt or probe the site, scraping content at scale, or using the site for any unlawful purpose.',
    ],
  },
  {
    title: '7. Intellectual property',
    paragraphs: [
      'The Cohousy name, logo, photography, and site content belong to Cohousy or are used with permission. You may not reproduce them commercially without our written consent.',
    ],
  },
  {
    title: '8. Third-party services',
    paragraphs: [
      'The site links to third-party services such as WhatsApp, Google Maps, and social media platforms. We are not responsible for their content or how they handle your data.',
    ],
  },
  {
    title: '9. Limitation of liability',
    paragraphs: [
      'We work to keep the site accurate and available, but it is provided "as is". To the extent permitted by law, Cohousy is not liable for indirect or consequential loss arising from use of the site. Nothing in these terms limits liability that cannot be limited under Indian law.',
    ],
  },
  {
    title: '10. Governing law',
    paragraphs: [
      'These terms are governed by the laws of India, and the courts of Pune, Maharashtra have exclusive jurisdiction over any dispute relating to them.',
    ],
  },
  {
    title: '11. Changes',
    paragraphs: [
      'We may update these terms from time to time. The date below reflects the latest version; continued use of the site after changes means you accept them.',
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: 16 August 2026</p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map(section => (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-medium tracking-[-0.01em] text-gray-900">
                  {section.title}
                </h2>
                {section.paragraphs.map(p => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[15px] md:text-base text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
