import { Handshake, Store, Users } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

// Static figures, not the animated `.stat-number` counters: these mix units
// ("mil", "R$ … mi") that the integer counter in SiteInteractions can't render.
// Source: post-event coverage of the 2nd edition (06–08 Aug 2026).
const RESULTADOS = [
  { Icon: Users, value: '30 mil', title: 'Visitantes', desc: 'Público de diferentes estados em três dias de feira.' },
  { Icon: Store, value: '45', title: 'Expositores', desc: 'Fábricas, fornecedores e instituições reunidos no polo.', highlight: true },
  { Icon: Handshake, value: 'R$ 3,5 mi', title: 'Em negócios', desc: 'Gerados entre as empresas participantes durante o evento.' },
];

export default function Feira2026() {
  return (
    <section id="feira" aria-label="Feira Boné Brasil 2026" className="feira-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">Onde tudo começou</span>
          <ScrollFloat>O selo nasceu na Boné Brasil 2026</ScrollFloat>
          <p className="section-subtitle">
            A 2ª edição da Feira Nacional da Cadeia Produtiva do Boné, de 06 a 08 de agosto em
            Serra Negra do Norte/RN, foi o palco de lançamento do Selo Boné Brasil.
          </p>
        </Reveal>

        <div className="stats-grid">
          {RESULTADOS.map(({ Icon, value, title, desc, highlight }, i) => (
            <Reveal className={`stat-card${highlight ? ' highlight-card' : ''}`} delay={0.1 * (i + 1)} key={title}>
              <div className="stat-icon-wrapper">
                <Icon className="stat-icon" size={24} strokeWidth={1.5} />
              </div>
              <div className="stat-number-wrapper">
                <span className="stat-number-static">{value}</span>
              </div>
              <h3 className="stat-title">{title}</h3>
              <p className="stat-desc">{desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="feira-next">
            Acompanhe as novidades da próxima edição no{' '}
            <a href="https://www.instagram.com/bonebrasilfeira/" target="_blank" rel="noopener noreferrer">
              Instagram @bonebrasilfeira
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
