import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import Manifesto from '@/components/sections/manifesto';
import Marquee from '@/components/sections/marquee';
import Apresentacao from '@/components/sections/apresentacao';
import Pilares from '@/components/sections/pilares';
import ComoFunciona from '@/components/sections/como-funciona';
import ParaQuem from '@/components/sections/para-quem';
import Feira2026 from '@/components/sections/feira-2026';
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
        <Manifesto />
        <Marquee />
        <Apresentacao />
        <Pilares />
        <ComoFunciona />
        <ParaQuem />
        <Feira2026 />
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
