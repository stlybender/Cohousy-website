'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const STANDALONE_PATHS = ['/1bhk-flats-in-kharadi-pune'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PATHS.some(p => pathname.startsWith(p));

  return (
    <>
      {!isStandalone && <Navbar />}
      <div className={isStandalone ? '' : 'relative z-[2]'}>{children}</div>
      {!isStandalone && <Footer />}
      {!isStandalone && <WhatsAppButton />}
    </>
  );
}
