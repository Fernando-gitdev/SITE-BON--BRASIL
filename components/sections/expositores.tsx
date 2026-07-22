import Image from 'next/image';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

const LOGOS = [
  { src: '/assets/silmaq-logo.png', alt: 'Silmaq', width: 140, height: 45 },
  { src: '/assets/omega-expositor.png', alt: 'Ômega Screen', width: 140, height: 126 },
  { src: '/assets/fabricolor-logo.webp', alt: 'Fabricolor do Brasil', width: 140, height: 39 },
  { src: '/assets/supricaps-logo.webp', alt: 'Supricaps', width: 140, height: 28 },
];
const REPEATS_PER_TRACK = 5;

function LogoTrack({ speedClass, hidden }: { speedClass: string; hidden?: boolean }) {
  return (
    <div className={`expositores-track ${speedClass}`} aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEATS_PER_TRACK }).flatMap((_, i) =>
        LOGOS.map((logo, j) => (
          <span className="expositores-logo" key={`${i}-${j}`}>
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </span>
        ))
      )}
    </div>
  );
}

export default function Expositores() {
  return (
    <section id="expositores" aria-label="Expositores" className="expositores-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="expositores-eyebrow">Expositores confirmados</span>
          <h2 className="expositores-heading">
            <ScrollFloat as="span" containerClassName="expositores-heading-line">
              Marcas que já confirmaram
            </ScrollFloat>
            <ScrollFloat as="span" containerClassName="expositores-heading-line">
              presença na feira
            </ScrollFloat>
          </h2>
        </Reveal>
      </div>

      <div className="site-container">
        <div className="expositores-carousel">
          <div className="expositores-row">
            <LogoTrack speedClass="dir-a" />
            <LogoTrack speedClass="dir-a" hidden />
          </div>
          <div className="expositores-row">
            <LogoTrack speedClass="dir-b" />
            <LogoTrack speedClass="dir-b" hidden />
          </div>
          <div className="expositores-row">
            <LogoTrack speedClass="dir-c" />
            <LogoTrack speedClass="dir-c" hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
