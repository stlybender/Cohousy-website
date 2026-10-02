'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// Google Ads landing pages: no site nav/footer, each ships its own header,
// footer and WhatsApp/call buttons.
const STANDALONE_PATHS = [
  '/1bhk-flats-in-kharadi-pune',
  '/2bhk-flats-in-kharadi-pune',
  '/3bhk-flats-in-kharadi-pune',
];

// Owner-facing pages ship their own header/footer (no tenant nav, no PG links)
// but keep the WhatsApp float button.
const OWNER_PATHS = ['/property-management-pune'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PATHS.some(p => pathname.startsWith(p));
  const isOwnerPage = OWNER_PATHS.some(p => pathname.startsWith(p));

  return (
    <>
      {!isStandalone && !isOwnerPage && <Navbar />}
      <div className={isStandalone ? '' : 'relative z-[2]'}>{children}</div>
      {!isStandalone && !isOwnerPage && <Footer />}
      {!isStandalone && <WhatsAppButton />}
    </>
  );
}
