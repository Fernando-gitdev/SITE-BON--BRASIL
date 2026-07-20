import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import Marquee from '@/components/sections/marquee';
import Apresentacao from '@/components/sections/apresentacao';
import Pilares from '@/components/sections/pilares';
import Numeros from '@/components/sections/numeros';
import Processo from '@/components/sections/processo';
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
        <Marquee />
        <Apresentacao />
        <Pilares />
        <Numeros />
        <Processo />
        <Apoio />
        <Contato />
      </main>
      <Footer />
      <SiteInteractions />
      <FloatingWhatsapp />
    </>
  );
}
