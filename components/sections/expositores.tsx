import Image from 'next/image';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

// `tall` marks badge/stacked lockups (roughly square or taller). Capping
// every logo at the same height makes those read much smaller than the wide
// wordmarks next to them, so they get a taller cap to even out the row.
const LOGOS = [
  { src: '/assets/silmaq-logo.png', alt: 'Silmaq', width: 140, height: 45 },
  { src: '/assets/ciabrafe-expositor.svg', alt: 'Ciabrafe', width: 140, height: 125, tall: true },
  { src: '/assets/chuahy-expositor.svg', alt: 'Chuahy Tecelagem', width: 140, height: 31 },
  { src: '/assets/omega-expositor.png', alt: 'Ômega Screen', width: 140, height: 126, tall: true },
  { src: '/assets/dicatex-expositor.webp', alt: 'Dicatex Aviamentos', width: 140, height: 36 },
  { src: '/assets/brito-expositor.png', alt: 'Brito Aviamentos', width: 140, height: 63 },
  { src: '/assets/fabricolor-logo.webp', alt: 'Fabricolor do Brasil', width: 140, height: 39 },
  { src: '/assets/lmabas-expositor.svg', alt: 'LM Abas', width: 140, height: 91, tall: true },
  { src: '/assets/ns-expositor.svg', alt: 'Grupo NS', width: 140, height: 33 },
  { src: '/assets/supricaps-logo.webp', alt: 'Supricaps', width: 140, height: 28 },
  { src: '/assets/santa-clara-expositor.svg', alt: 'Gráfica Santa Clara', width: 140, height: 95, tall: true },
  { src: '/assets/telas-tex-expositor.svg', alt: 'Telas Tex', width: 140, height: 50 },
  { src: '/assets/lola-expositor.svg', alt: 'Lola Soluções Têxteis', width: 140, height: 56 },
  { src: '/assets/fenix-expositor.webp', alt: 'Fênix Personalizados', width: 140, height: 113, tall: true },
  { src: '/assets/costura-fina-expositor.webp', alt: 'Costura Fina', width: 140, height: 179, tall: true },
  { src: '/assets/galpao-brindes-expositor.svg', alt: 'Galpão Brindes', width: 140, height: 200, tall: true },
  { src: '/assets/invictuz-horse-expositor.webp', alt: 'Invictuz Horse', width: 140, height: 150, tall: true },
  { src: '/assets/sindibones-logo.webp', alt: 'Sindibonés', width: 140, height: 105, tall: true },
  { src: '/assets/presente-de-deus-expositor.svg', alt: 'Confecções Presente de Deus', width: 140, height: 136, tall: true },
  { src: '/assets/rapido-figueiredo-expositor.svg', alt: 'Rápido Figueiredo', width: 140, height: 36 },
  { src: '/assets/schulz-expositor.svg', alt: 'Schulz Compressores', width: 140, height: 40 },
  { src: '/assets/seubone-expositor.svg', alt: 'SeuBoné', width: 140, height: 35 },
  { src: '/assets/weevo-expositor.webp', alt: 'Weevo', width: 140, height: 28 },
  { src: '/assets/dgnet-expositor.webp', alt: 'DGnet Internet Rápida', width: 140, height: 53 },
  { src: '/assets/carbone-educacao-expositor.webp', alt: 'Carbone Educação', width: 140, height: 46 },
  { src: '/assets/armazem-zezao-expositor.svg', alt: 'Armazém Zezão', width: 140, height: 82, tall: true },
  { src: '/assets/desenvolve-rn-expositor.svg', alt: 'Agência Desenvolve RN', width: 140, height: 26 },
];
// One pass already spans ~1700px — wider than the 1100px carousel — so a
// single repeat per track is enough for the duplicated tracks to loop
// seamlessly without inflating the DOM (13 logos × 2 tracks × 3 rows).
const REPEATS_PER_TRACK = 1;

function LogoTrack({ hidden }: { hidden?: boolean }) {
  return (
    <div className="expositores-track" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEATS_PER_TRACK }).flatMap((_, i) =>
        LOGOS.map((logo, j) => (
          <span className={`expositores-logo${logo.tall ? ' is-tall' : ''}`} key={`${i}-${j}`}>
            {/* Eager: the marquee scrolls these through continuously, so
                lazy-loading makes logos pop in mid-cycle. Same 13 files are
                reused across every track, so it is 13 requests either way. */}
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="eager"
            />
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
          <div className="expositores-row dir-a">
            <LogoTrack />
            <LogoTrack hidden />
          </div>
          <div className="expositores-row dir-b">
            <LogoTrack />
            <LogoTrack hidden />
          </div>
          <div className="expositores-row dir-c">
            <LogoTrack />
            <LogoTrack hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
