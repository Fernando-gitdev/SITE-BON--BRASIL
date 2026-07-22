import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import DataEvento from '@/components/sections/data-evento';
import Marquee from '@/components/sections/marquee';
import Apresentacao from '@/components/sections/apresentacao';
import Pilares from '@/components/sections/pilares';
import Numeros from '@/components/sections/numeros';
import Expositores from '@/components/sections/expositores';
import Apoio from '@/components/sections/apoio';
import Contato from '@/components/sections/contato';
import Footer from '@/components/sections/footer';
import SiteInteractions from '@/components/site-interactions';
import FloatingWhatsapp from '@/components/floating-whatsapp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DataEvento />
        <Marquee />
        <Apresentacao />
        <Pilares />
        <Numeros />
        <Expositores />
        <Apoio />
        <Contato />
      </main>
      <Footer />
      <SiteInteractions />
      <FloatingWhatsapp />
    </>
  );
}
