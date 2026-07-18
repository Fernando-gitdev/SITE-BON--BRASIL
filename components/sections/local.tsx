import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

export default function Local() {
  return (
    <section id="local" className="local-section section-padding">
      <div className="section-glow-orb orb-a" aria-hidden="true"></div>
      <div className="section-glow-orb orb-b" aria-hidden="true"></div>
      <div className="site-container local-grid-container">
        <Reveal className="local-content">
          <span className="section-tagline">O Polo Industrial</span>
          <h2>Serra Negra do Norte/RN</h2>
          <p className="local-lead">
            O maior polo de bonés do Nordeste — e um dos mais fortes do Brasil.
          </p>

          <div className="local-features">
            <div className="local-feat-item">
              <div className="local-feat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 0 0-7.36 16.76L12 22l7.36-5.24A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <div>
                <h4>Localização Estratégica</h4>
                <p>Acesso rodoviário fácil a todo o semiárido e ao restante do país.</p>
              </div>
            </div>

            <div className="local-feat-item">
              <div className="local-feat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h4>Qualidade Reconhecida</h4>
                <p>Mão de obra especializada em acabamento e costura de alto padrão.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="local-graphic" delay={0.2}>
          <div className="glow-map-container">
            <Image
              src="/assets/production_glow.png"
              alt="Produção do Polo de Bonés"
              className="local-production-img"
              width={1200}
              height={900}
            />
            <div className="map-overlay-badge">
              <span className="map-badge-pulse"></span>
              <div>
                <h5>Serra Negra do Norte</h5>
                <p>Polo do Boné - RN</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
