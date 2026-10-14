import { BadgeCheck, ClipboardCheck, FileText, UserPlus } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';
import { SELO_CADASTRO_URL } from '@/lib/selo';

const PASSOS = [
  {
    n: '01',
    Icon: UserPlus,
    title: 'Crie sua conta',
    desc: 'Cadastre-se em selobonebrasil.com com o e-mail da empresa. É por ele que chegam os avisos da inscrição e o selo.',
  },
  {
    n: '02',
    Icon: FileText,
    title: 'Faça a inscrição',
    desc: 'Preencha os dados da empresa no painel e envie a solicitação do selo.',
  },
  {
    n: '03',
    Icon: ClipboardCheck,
    title: 'Análise',
    desc: 'A organização avalia a empresa com base nos cinco critérios do selo.',
  },
  {
    n: '04',
    Icon: BadgeCheck,
    title: 'Receba o selo',
    desc: 'Aprovada, a empresa recebe o selo por e-mail e entra na relação de empresas certificadas.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" aria-label="Como solicitar o selo" className="como-funciona-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">Como funciona</span>
          <ScrollFloat>Do cadastro ao selo em quatro passos</ScrollFloat>
        </Reveal>

        <ol className="passos-grid">
          {PASSOS.map(({ n, Icon, title, desc }, i) => (
            <li key={n}>
              <Reveal className="passo-card" delay={i * 0.1}>
                <div className="passo-card-top">
                  <span className="stat-icon-wrapper passo-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <span className="passo-index">{n}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.3} className="como-funciona-cta">
          <a
            href={SELO_CADASTRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Começar meu cadastro</span>
            <div className="btn-glow-effect"></div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
