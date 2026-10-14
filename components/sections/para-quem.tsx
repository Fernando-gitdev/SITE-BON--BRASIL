import { Check, Factory, ShoppingBag } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';
import { SELO_CADASTRO_URL, SELO_LOGIN_URL } from '@/lib/selo';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const COMPRADOR_MESSAGE = 'Olá! Sou comprador e quero conhecer as empresas certificadas com o Selo Boné Brasil.';

const EMPRESA_BENEFICIOS = [
  'Credibilidade para vender para todo o Brasil',
  'Presença na relação de empresas certificadas que os compradores consultam',
  'Diferencial frente a perfis e revendas sem estrutura',
];

const COMPRADOR_BENEFICIOS = [
  'Acesso à relação de empresas certificadas',
  'Menos risco de golpe e de pedido que não chega',
  'Fornecedores com fábrica e situação regular',
];

function Beneficios({ items }: { items: string[] }) {
  return (
    <ul className="para-quem-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ParaQuem() {
  return (
    <section id="para-quem" aria-label="Para quem é o selo" className="para-quem-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">Para quem é</span>
          <ScrollFloat>Bom para quem vende, seguro para quem compra</ScrollFloat>
        </Reveal>

        <div className="para-quem-grid">
          <Reveal className="para-quem-card is-highlight" delay={0.1}>
            <span className="stat-icon-wrapper">
              <Factory size={24} strokeWidth={1.5} />
            </span>
            <span className="para-quem-eyebrow">Para empresas</span>
            <h3>Mostre ao mercado que sua empresa é de verdade.</h3>
            <Beneficios items={EMPRESA_BENEFICIOS} />
            <div className="para-quem-actions">
              <a
                href={SELO_CADASTRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Solicitar o selo</span>
                <div className="btn-glow-effect"></div>
              </a>
              <a
                href={SELO_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="para-quem-link"
              >
                Já tenho conta
              </a>
            </div>
          </Reveal>

          <Reveal className="para-quem-card" delay={0.2}>
            <span className="stat-icon-wrapper">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </span>
            <span className="para-quem-eyebrow">Para compradores e lojistas</span>
            <h3>Saiba com quem você está negociando.</h3>
            <Beneficios items={COMPRADOR_BENEFICIOS} />
            <div className="para-quem-actions">
              <a
                href={buildWhatsAppUrl(COMPRADOR_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Conhecer as empresas certificadas
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
