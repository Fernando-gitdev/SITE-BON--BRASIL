import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import Sobre from '@/components/sections/sobre';
import Diferenciais from '@/components/sections/diferenciais';
import Publico from '@/components/sections/publico';
import Programacao from '@/components/sections/programacao';
import Local from '@/components/sections/local';
import Inscricao from '@/components/sections/inscricao';
import Footer from '@/components/sections/footer';
import SiteInteractions from '@/components/site-interactions';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Diferenciais />
        <Publico />
        <Programacao />
        <Local />
        <Inscricao />
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
