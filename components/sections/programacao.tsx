'use client';

import { useEffect, useRef } from 'react';

const ITEMS = [
  {
    side: 'left',
    delay: undefined as string | undefined,
    tag: 'Exposição',
    tagAccent: false,
    title: 'Exposição de Produtos e Tendências',
    desc: 'Os últimos lançamentos em bonés, tecidos e bordados, todos os dias.',
    time: 'Atividade Diária',
  },
  {
    side: 'right',
    delay: '100',
    tag: 'Negócios',
    tagAccent: true,
    title: 'Rodadas de Negócios Diretas',
    desc: 'Fabricantes e compradores fechando negócio, cara a cara.',
    time: 'Sessões Exclusivas',
  },
  {
    side: 'left',
    delay: '200',
    tag: 'Capacitação',
    tagAccent: false,
    title: 'Palestras & Painéis Temáticos',
    desc: 'Especialistas em moda, exportação e vendas digitais, no mesmo palco.',
    time: 'Auditório Principal',
  },
  {
    side: 'right',
    delay: '300',
    tag: 'Técnico',
    tagAccent: true,
    title: 'Workshops Práticos',
    desc: 'Mão na massa: regulagem de máquinas, produtividade e modelagem.',
    time: 'Laboratório de Inovação',
  },
  {
    side: 'left',
    delay: '400',
    tag: 'Fomento',
    tagAccent: false,
    title: 'Balcão de Crédito & Financiamento',
    desc: 'Bancos e fomento prontos pra financiar sua próxima máquina.',
    time: 'Espaço Financeiro',
  },
];

export default function Programacao() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const progress = progressRef.current;
      if (!container || !progress) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = rect.top - viewportHeight / 2;
      const totalHeight = rect.height;

      let pct = 0;
      if (startPoint < 0) {
        pct = Math.min(Math.abs(startPoint) / totalHeight, 1);
      }
      progress.style.height = `${pct * 100}%`;
    };

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="programacao" className="programacao-section section-padding">
      <div className="section-glow-orb orb-a" aria-hidden="true"></div>
      <div className="section-glow-orb orb-b" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header align-center">
          <span className="section-tagline">Programação</span>
          <h2>Sua Agenda de Oportunidades</h2>
          <p className="section-subtitle">
            Networking, negócios e aprendizado prático — tudo na mesma agenda.
          </p>
        </div>

        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-line">
            <div className="timeline-progress" id="timelineProgress" ref={progressRef}></div>
          </div>

          {ITEMS.map((item, i) => (
            <div
              className="timeline-item"
              data-side={item.side}
              data-delay={item.delay}
              key={i}
            >
              <div className="timeline-marker">{i + 1}</div>
              <div className="timeline-content">
                <span className={`timeline-tag ${item.tagAccent ? 'tag-accent' : ''}`}>
                  {item.tag}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="timeline-time">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
