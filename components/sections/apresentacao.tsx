import Reveal from '@/components/ui/reveal';
import SobreVideo from './sobre-video';

const WORDS = [
  { text: 'Produção', muted: false },
  { text: 'escala.', muted: false },
  { text: 'Isolamento', muted: true },
  { text: 'não.', muted: true },
];

export default function Apresentacao() {
  return (
    <section id="apresentacao" aria-label="Apresentação" className="apresentacao-section">
      <h2 className="apresentacao-heading">
        {WORDS.map((w, i) => (
          <Reveal
            key={w.text}
            delay={i * 0.08}
            className={`apresentacao-word${w.muted ? ' muted' : ''}`}
          >
            {w.text}
          </Reveal>
        ))}
      </h2>

      <Reveal delay={0.3}>
        <p className="apresentacao-lead">
          Cada fábrica do polo já domina a produção. A BONÉ BRASIL 2026 é o
          palco pra transformar essa capacidade em negócio, rodadas
          comerciais e visibilidade nacional.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="apresentacao-video-box">
          <SobreVideo />
        </div>
        <p className="apresentacao-video-caption">Serra Negra do Norte/RN · vídeo institucional</p>
      </Reveal>

      <Reveal delay={0.55}>
        <a href="#processo" className="btn btn-primary apresentacao-cta">
          <span>Ver como funciona</span>
          <div className="btn-glow-effect"></div>
        </a>
      </Reveal>
    </section>
  );
}
