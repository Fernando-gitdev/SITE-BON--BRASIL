import PinnedCardStack from '@/components/ui/pinned-card-stack';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

const CRITERIOS = [
  {
    n: '01',
    title: 'Regularidade Fiscal',
    desc: 'Empresa em dia com as obrigações fiscais, emitindo nota e operando dentro da lei.',
  },
  {
    n: '02',
    title: 'Regularidade Jurídica',
    desc: 'Empresa formalmente constituída, com CNPJ ativo e situação legal regular.',
  },
  {
    n: '03',
    title: 'Capacidade Produtiva',
    desc: 'Estrutura real de produção: fábrica, equipamentos e equipe para entregar o que vende.',
  },
  {
    n: '04',
    title: 'Reputação',
    desc: 'Histórico no mercado e no polo que comprova a seriedade do negócio.',
  },
  {
    n: '05',
    title: 'Confiabilidade Comercial',
    desc: 'Compromisso com prazo, qualidade e tudo o que foi combinado com o cliente.',
  },
];

export default function Pilares() {
  return (
    <section id="criterios" aria-label="Critérios do selo" className="pilares-section">
      <div className="pilares-intro">
        <Reveal className="section-header">
          <h2 className="pilares-heading">
            <ScrollFloat as="span" containerClassName="pilares-heading-line">
              Cinco critérios,
            </ScrollFloat>
            <ScrollFloat as="span" containerClassName="pilares-heading-line">
              um só selo de confiança
            </ScrollFloat>
          </h2>
        </Reveal>
      </div>

      <PinnedCardStack>
        {CRITERIOS.map((c) => (
          <div className="pilar-card" key={c.n}>
            <span className="pilar-index">{c.n}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </PinnedCardStack>
    </section>
  );
}
