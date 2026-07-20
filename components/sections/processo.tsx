'use client';

import { useEffect, useRef } from 'react';
import Reveal from '@/components/ui/reveal';

const ITEMS = [
  {
    side: 'left',
    tag: 'Chegada',
    tagAccent: false,
    title: 'Credenciamento e Recepção',
    desc: 'Acesso rápido à exposição, sem fila, direto pro chão de fábrica.',
    time: 'Abertura Diária',
  },
  {
    side: 'right',
    tag: 'Negócios',
    tagAccent: true,
    title: 'Exposição e Rodadas de Negócios',
    desc: 'Visite os estandes das fábricas e feche negócio direto com quem produz.',
    time: 'Sessões Exclusivas',
  },
  {
    side: 'left',
    tag: 'Capacitação',
    tagAccent: false,
    title: 'Palestras e Painéis Temáticos',
    desc: 'Especialistas em moda, exportação e vendas digitais, no mesmo palco de quem produz.',
    time: 'Auditório Principal',
  },
  {
    side: 'right',
    tag: 'Fomento',
    tagAccent: true,
    title: 'Balcão de Crédito e Encerramento',
    desc: 'Instituições financeiras prontas pra financiar o próximo passo da sua fábrica.',
    time: 'Espaço Financeiro',
  },
];

export default function Processo() {
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
    <section id="processo" aria-label="Processo" className="processo-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">03 · Processo</span>
          <h2>Sua Jornada na Feira</h2>
          <p className="section-subtitle">
            Da chegada ao negócio fechado, um fluxo pensado pra gerar resultado no mesmo dia.
          </p>
        </Reveal>

        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-line">
            <div className="timeline-progress" ref={progressRef}></div>
          </div>

          {ITEMS.map((item, i) => (
            <Reveal className="timeline-item" data-side={item.side} delay={(i % 2) * 0.1} key={item.title}>
              <div className="timeline-marker">{i + 1}</div>
              <div className="timeline-content">
                <span className={`timeline-tag ${item.tagAccent ? 'tag-accent' : ''}`}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="timeline-time">{item.time}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
