import type { Metadata } from 'next';
import Navbar from '@/components/sections/navbar';
import HospedagensCompleta from '@/components/sections/hospedagens-completa';
import Footer from '@/components/sections/footer';
import SiteInteractions from '@/components/site-interactions';
import FloatingWhatsapp from '@/components/floating-whatsapp';

export const metadata: Metadata = {
  title: 'Hospedagens: BONÉ BRASIL 2026',
  description:
    'Pousadas e hotéis em Serra Negra do Norte/RN, Patos/PB, Caicó/RN, Paulista/PB e São Bento/PB para quem vai à BONÉ BRASIL 2026.',
};

export default function HospedagensPage() {
  return (
    <>
      <Navbar />
      <main>
        <HospedagensCompleta />
      </main>
      <Footer />
      <SiteInteractions />
      <FloatingWhatsapp />
    </>
  );
}
