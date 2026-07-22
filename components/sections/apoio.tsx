import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

export default function Apoio() {
  return (
    <section id="apoio" aria-label="Apoio institucional" className="apoio-section">
      <Reveal className="apoio-card">
        <div className="apoio-card-panel">
          <h2 className="apoio-card-title">
            Uma estrutura de apoio pensada para o{' '}
            <span className="text-brand-accent">crescimento do setor</span>.
          </h2>
          <p className="apoio-card-lead">
            <span className="text-brand-accent">Crédito, capacitação e conexão de mercado</span>{' '}
            num só lugar, o suporte institucional que profissionaliza toda a
            cadeia produtiva do boné.
          </p>
        </div>

        <div className="apoio-card-media">
          <Image
            src="/assets/foto-apoio-banner.webp"
            alt="Equipe da BONÉ BRASIL 2026 com bonés da marca"
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
