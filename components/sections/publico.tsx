import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

export default function Publico() {
  return (
    <section id="publico" className="publico-section section-padding">
      <div className="section-glow-orb orb-a" aria-hidden="true"></div>
      <div className="section-glow-orb orb-b" aria-hidden="true"></div>
      <div className="site-container">
        <Reveal className="impact-card">
          <div className="impact-card-text">
            <span className="section-tagline">Oportunidade</span>
            <h2>Pare de perder negócios por não estar no maior encontro do setor.</h2>
            <p className="impact-card-subtitle">
              Fabricantes, fornecedores, compradores e parceiros de crédito se
              encontram num só lugar. Garanta sua vaga na BONÉ BRASIL 2026.
            </p>
          </div>
          <div className="impact-card-media">
            <Image
              src="/assets/production_glow.png"
              alt="Produção do polo boneleiro de Serra Negra do Norte"
              fill
              className="impact-card-img"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
