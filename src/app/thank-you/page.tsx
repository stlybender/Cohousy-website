'use client'

import Script from 'next/script'

export default function ThankYouPage() {
  return (
    <>
      {/* Google Conversion Event for form submission */}
      <Script id="google-conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-17638552425/8smrCPnPiqobEOnm29pB'});
        `}
      </Script>

      <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600">
          Your form has been submitted successfully. We’ll get back to you soon.
        </p>
      </main>
    </>
  )
}
