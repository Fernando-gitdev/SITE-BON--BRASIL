import type { Metadata } from 'next';
import Navbar from '@/components/sections/navbar';
import ProgramacaoCompleta from '@/components/sections/programacao-completa';
import Footer from '@/components/sections/footer';
import SiteInteractions from '@/components/site-interactions';
import FloatingWhatsapp from '@/components/floating-whatsapp';

export const metadata: Metadata = {
  title: 'Programação Oficial: BONÉ BRASIL 2026',
  description:
    'Confira a programação completa da BONÉ BRASIL 2026 — abertura, rodadas de negócios, palestras do Summit e atrações culturais dos dias 06 a 08 de agosto em Serra Negra do Norte/RN.',
};

export default function ProgramacaoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProgramacaoCompleta />
      </main>
      <Footer />
      <SiteInteractions />
      <FloatingWhatsapp />
    </>
  );
}
