import Reveal from '@/components/ui/reveal';
import SeloBadge from '@/components/ui/selo-badge';
import { SELO_CADASTRO_URL } from '@/lib/selo';

const WORDS = [
  { text: 'Qualidade', muted: false },
  { text: 'comprovada.', muted: false },
  { text: 'Negócio', muted: true },
  { text: 'seguro.', muted: true },
];

export default function Apresentacao() {
  return (
    <section id="selo" aria-label="O Selo Boné Brasil" className="apresentacao-section">
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
          O selo que separa quem tem fábrica, nota e palavra de quem só tem um
          perfil na internet.
        </p>
      </Reveal>

      <div className="selo-overview">
        <Reveal delay={0.4} className="selo-overview-badge">
          <SeloBadge ringId="selo-badge-ring-sobre" />
        </Reveal>

        <Reveal delay={0.5}>
          <div className="apresentacao-info">
            <h3 className="apresentacao-info-title">Sobre o Selo</h3>
            <p>
              O Selo Boné Brasil é a certificação de qualidade da cadeia produtiva do boné.
              Ele identifica as empresas do polo que cumprem critérios de regularidade fiscal
              e jurídica, capacidade produtiva, reputação e confiabilidade comercial.
            </p>
            <p>
              A iniciativa nasceu depois de relatos de golpes, fraudes e negociações feitas
              por empresas ou perfis sem estrutura produtiva. Com o selo, quem compra sabe
              com quem está negociando.
            </p>
            <p>
              Desenvolvido pela F7 Produções, organizadora da feira Boné Brasil, em parceria
              com a Prefeitura de Serra Negra do Norte/RN, o selo foi lançado na 2ª edição
              da feira, em agosto de 2026.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.6}>
        <a
          href={SELO_CADASTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary apresentacao-cta"
        >
          <span>Solicitar o selo</span>
          <div className="btn-glow-effect"></div>
        </a>
      </Reveal>
    </section>
  );
}
