import PinnedCardStack from '@/components/ui/pinned-card-stack';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

const PILARES = [
  {
    n: '01',
    title: 'Exposição de Produtos e Tendências',
    desc: 'Os últimos lançamentos em bonés, tecidos e bordados, apresentados pelas próprias fábricas do polo.',
  },
  {
    n: '02',
    title: 'Rodadas de Negócios',
    desc: 'Fabricantes e compradores fechando negócio diretamente, sem intermediação.',
  },
  {
    n: '03',
    title: 'Capacitação & Painéis Temáticos',
    desc: 'Especialistas em moda, exportação e vendas digitais, no mesmo palco de quem produz.',
  },
  {
    n: '04',
    title: 'Inovação & Tecnologia',
    desc: 'Máquinas, tecidos e processos que vão definir a próxima temporada do setor.',
  },
  {
    n: '05',
    title: 'Crédito & Fomento',
    desc: 'Instituições financeiras e entidades de apoio prontas pra financiar o próximo passo da sua fábrica.',
    accent: true,
  },
];

export default function Pilares() {
  return (
    <section id="pilares" aria-label="O que você vai encontrar" className="pilares-section">
      <div className="pilares-intro">
        <Reveal className="section-header">
          <span className="section-tagline">01 · O Que Você Vai Encontrar</span>
          <ScrollFloat>Cinco frentes, um só encontro de negócios</ScrollFloat>
        </Reveal>
      </div>

      <PinnedCardStack>
        {PILARES.map((p) => (
          <div className={`pilar-card${p.accent ? ' is-accent' : ''}`} key={p.n}>
            <span className="pilar-index">{p.n}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </PinnedCardStack>
    </section>
  );
}
