import Reveal from '@/components/ui/reveal';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function Contato() {
  return (
    <section id="contato" aria-label="Chamada final" className="contato-section">
      <div className="contato-content">
        <Reveal>
          <h2>
            Prontos para fazer parte <span className="muted-dark">da força produtiva nacional?</span>
          </h2>
          <p>Vagas limitadas com condições especiais pra quem garantir agora seu espaço na BONÉ BRASIL 2026.</p>
        </Reveal>

        <Reveal delay={0.15} className="whatsapp-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="whatsapp-icon" aria-hidden="true">
              <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.13-.27-.2-.56-.35z" />
              <path d="M12.01 2C6.49 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.52 22 22 17.52 22 12S17.52 2 12.01 2zm0 18.15a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3 .79.8-2.93-.19-.3a8.13 8.13 0 1 1 6.83 3.75z" />
            </svg>
            <span>Falar no WhatsApp</span>
            <div className="btn-glow-effect"></div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
