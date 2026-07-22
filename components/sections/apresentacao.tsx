import Reveal from '@/components/ui/reveal';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import SobreVideo from './sobre-video';

const WORDS = [
  { text: 'Potência', muted: false },
  { text: 'local.', muted: false },
  { text: 'Conexão', muted: true },
  { text: 'nacional.', muted: true },
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
          A BONÉ BRASIL 2026 transforma a capacidade produtiva do polo em
          negócio, rodadas comerciais e visibilidade nacional.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="apresentacao-video-box">
          <SobreVideo />
        </div>
        <p className="apresentacao-video-caption">Serra Negra do Norte/RN · vídeo institucional</p>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="apresentacao-info">
          <h3 className="apresentacao-info-title">Sobre o Evento</h3>
          <p>
            A Boné Brasil 2026 é a 2ª edição da Feira Nacional da Cadeia Produtiva do Boné,
            realizada de 06 a 08 de agosto, em Serra Negra do Norte/RN.
          </p>
          <p>
            O evento reúne fabricantes, fornecedores, compradores, instituições e visitantes
            em uma programação com feira de negócios, palestras, rodadas comerciais, moda,
            cultura, artesanato e gastronomia.
          </p>
          <p>
            Mais do que uma feira, a Boné Brasil fortalece a indústria local, gera
            oportunidades e projeta Serra Negra do Norte para todo o país.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.6}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary apresentacao-cta"
        >
          <span>Entrar em contato</span>
          <div className="btn-glow-effect"></div>
        </a>
      </Reveal>
    </section>
  );
}
