import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cohousy.com'),
  title: 'Privacy Policy | Cohousy',
  description:
    'How Cohousy collects, uses and protects your personal information across our co-living and property management services in Pune.',
  alternates: { canonical: 'https://www.cohousy.com/privacy-policy' },
}

const SECTIONS: Array<{ title: string; paragraphs: string[]; list?: string[] }> = [
  {
    title: '1. Who we are',
    paragraphs: [
      'Cohousy ("we", "us", "our") operates co-living and PG accommodation in Kharadi, Pune, and provides property management services to homeowners. This policy explains what personal information we collect through www.cohousy.com and our services, how we use it, and the choices you have.',
    ],
  },
  {
    title: '2. Information we collect',
    paragraphs: ['We collect information you give us directly when you:'],
    list: [
      'Fill in an enquiry, tour booking, or contact form — name, phone number, email address, preferred dates, and your message.',
      'Join the property management waitlist — name, WhatsApp number, email, city of property, and property type.',
      'Request a call back — name, WhatsApp number, property area, and any note you add.',
      'Contact us over phone, WhatsApp, or email.',
    ],
  },
  {
    title: '3. Information collected automatically',
    paragraphs: [
      'Like most websites, we use cookies and similar technologies through Google Tag Manager, Google Analytics, and Google Ads to understand how visitors use the site and to measure our advertising. This includes device information, pages visited, and approximate location. You can control cookies through your browser settings; the site works without them.',
    ],
  },
  {
    title: '4. How we use your information',
    paragraphs: ['We use the information you share to:'],
    list: [
      'Respond to your enquiry, schedule tours, and process bookings.',
      'Contact you about your property or tenancy, including reports, approvals, and rent-related communication.',
      'Notify you when we launch in your city (waitlist) — one message, no spam.',
      'Send a confirmation of your enquiry by email, when you have shared an email address.',
      'Improve our website and measure our marketing.',
    ],
  },
  {
    title: '5. What we never do',
    paragraphs: [
      'We do not sell your personal information. We do not share your details with brokers, marketers, or unrelated third parties. We only share information with service providers who help us run the website and communications (such as email delivery and analytics), and where the law requires it.',
    ],
  },
  {
    title: '6. Data retention',
    paragraphs: [
      'We keep enquiry and lead information for as long as needed to serve you and for reasonable business records. Tenancy and property management records are kept as required for legal, tax, and accounting purposes. You can ask us to delete your information at any time (see section 8).',
    ],
  },
  {
    title: '7. Data security',
    paragraphs: [
      'Form submissions are transmitted over HTTPS and delivered to our business mailbox. Access to personal information is limited to team members who need it to serve you.',
    ],
  },
  {
    title: '8. Your rights',
    paragraphs: [
      'In line with applicable Indian law, including the Digital Personal Data Protection Act, 2023, you can ask us to access, correct, or delete the personal information we hold about you, or withdraw consent for further communication. Email contact@cohousy.com with your request and we will act on it promptly.',
    ],
  },
  {
    title: '9. Third-party links',
    paragraphs: [
      'The site links to third-party platforms such as WhatsApp, Instagram, LinkedIn, Facebook, and X. Those platforms have their own privacy policies, and this policy does not cover them.',
    ],
  },
  {
    title: '10. Children',
    paragraphs: [
      'Our services are intended for adults. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '11. Changes to this policy',
    paragraphs: [
      'If we change this policy, we will update this page and the date below. Significant changes will be highlighted on the site.',
    ],
  },
  {
    title: '12. Contact us',
    paragraphs: [
      'Questions about privacy? Reach us at contact@cohousy.com, call +91 89089 03900, or write to Cohousy, Kharadi, Pune, Maharashtra 411014.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Privacy Policy
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
                {section.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] md:text-base text-gray-600 leading-relaxed">
                    {section.list.map(item => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
