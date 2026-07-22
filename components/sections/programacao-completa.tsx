'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flag, Music, Presentation, Handshake, Palette, UtensilsCrossed, FerrisWheel, Users, Globe2 } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

type CategoryKey = 'abertura' | 'cultural' | 'summit' | 'negocios';

const CATEGORIES: Record<CategoryKey, { label: string; icon: typeof Flag; className: string }> = {
  abertura: { label: 'Abertura', icon: Flag, className: 'cat-abertura' },
  cultural: { label: 'Programação Cultural', icon: Music, className: 'cat-cultural' },
  summit: { label: 'Boné Brasil Summit', icon: Presentation, className: 'cat-summit' },
  negocios: { label: 'Rodada de Negócios', icon: Handshake, className: 'cat-negocios' },
};

interface EventGroup {
  category: CategoryKey;
  title: string;
  venue?: string;
  events: { time: string; desc: string }[];
}

interface DaySchedule {
  id: string;
  label: string;
  date: string;
  heading: string;
  groups: EventGroup[];
}

const PERMANENT_SPACES = [
  {
    icon: Palette,
    name: 'Feira de Artesanato',
    schedule: [
      ['Dia 06', '18h às 00h'],
      ['Dia 07', '16h às 00h'],
      ['Dia 08', '08h às 00h'],
    ],
  },
  {
    icon: UtensilsCrossed,
    name: 'Espaço Gastronômico',
    schedule: [
      ['Dia 06', '18h às 01h'],
      ['Dia 07', '16h às 01h'],
      ['Dia 08', '08h às 01h'],
    ],
  },
  {
    icon: FerrisWheel,
    name: 'Parque de Diversões',
    schedule: [
      ['Dia 06', '18h às 00h'],
      ['Dia 07', '16h às 00h'],
      ['Dia 08', '16h às 00h'],
    ],
  },
];

const RODADAS_STEPS = [
  {
    icon: Users,
    title: 'Encontros Organizados',
    text: 'As Rodadas de Negócios da Boné Brasil 2026 serão realizadas por meio de encontros previamente organizados entre fabricantes, fornecedores, compradores, lojistas, distribuidores e representantes comerciais.',
  },
  {
    icon: Handshake,
    title: 'Reuniões Objetivas',
    text: 'Os participantes serão agrupados conforme seus segmentos e interesses comerciais. Em horários definidos, cada empresa terá reuniões rápidas e objetivas para apresentar produtos, conhecer demandas, negociar preços, prazos e condições de fornecimento, além de iniciar possíveis parcerias.',
  },
  {
    icon: Globe2,
    title: 'Alcance Nacional e Internacional',
    text: 'A programação contará com rodadas nacionais e internacionais, criando oportunidades para ampliar mercados, atrair novos clientes e conectar a cadeia produtiva do boné a compradores do Brasil e do exterior.',
  },
];

const DAYS: DaySchedule[] = [
  {
    id: 'dia06',
    label: 'Dia 06',
    date: '06 de Agosto',
    heading: 'Abertura da Feira',
    groups: [
      {
        category: 'abertura',
        title: 'Abertura Oficial',
        venue: 'Palco Principal da Praça Senador Dinarte Mariz',
        events: [
          { time: '18h', desc: 'Cerimônia de abertura oficial da Boné Brasil 2026 e lançamento do Selo Boné Brasil' },
          { time: '19h', desc: 'Abertura dos estandes no pavilhão' },
        ],
      },
      {
        category: 'cultural',
        title: 'Programação Cultural',
        venue: 'Praça Senador Dinarte Mariz',
        events: [
          { time: '19h', desc: 'Apresentação da Banda de Música da cidade' },
          { time: '21h', desc: 'Show de Cleiton Pinheiro' },
        ],
      },
      {
        category: 'summit',
        title: 'Boné Brasil Summit',
        venue: 'Auditório entre a Casa de Cultura e o Centro Pastoral',
        events: [
          { time: '19h', desc: 'Palestra dos Correios' },
          { time: '20h', desc: 'Palestra do Sindicato dos Bonés' },
        ],
      },
      {
        category: 'negocios',
        title: 'Rodada de Negócios Nacional',
        venue: 'Casa de Cultura',
        events: [
          {
            time: '20h',
            desc: 'Rodada de negócios nacional: segmento a definir, como tecidos, aviamentos e insumos da cadeia produtiva',
          },
        ],
      },
    ],
  },
  {
    id: 'dia07',
    label: 'Dia 07',
    date: '07 de Agosto',
    heading: 'Negócios, Capacitação e Cultura',
    groups: [
      {
        category: 'abertura',
        title: 'Pavilhão de Expositores',
        venue: 'Praça Senador Dinarte Mariz',
        events: [{ time: '16h', desc: 'Abertura dos portões e visitação aos estandes' }],
      },
      {
        category: 'summit',
        title: 'Boné Brasil Summit',
        venue: 'Auditório entre a Casa de Cultura e o Centro Pastoral',
        events: [
          { time: '17h', desc: 'Palestra sobre Inteligência Artificial: Sebrae' },
          { time: '19h', desc: 'Palestra: Reforma Tributária' },
          { time: '20h', desc: 'Palestra Magna' },
        ],
      },
      {
        category: 'negocios',
        title: 'Rodada de Negócios Internacional',
        venue: 'Casa de Cultura',
        events: [
          {
            time: '20h',
            desc: 'Rodada de negócios internacional: segmento a definir, como tecidos, aviamentos e insumos da cadeia produtiva',
          },
        ],
      },
      {
        category: 'cultural',
        title: 'Programação Cultural',
        venue: 'Praça Senador Dinarte Mariz',
        events: [
          { time: '18h', desc: 'Apresentação de grupo de capoeira' },
          { time: '18h30', desc: 'Apresentação do grupo de flauta doce' },
          { time: '20h', desc: 'Boné Brasil Fashion: Concurso do Boné' },
          { time: '21h', desc: 'Show de Arnaldinho Neto' },
          { time: '23h', desc: 'Show de Áureo Deni' },
        ],
      },
    ],
  },
  {
    id: 'dia08',
    label: 'Dia 08',
    date: '08 de Agosto',
    heading: 'Encerramento e Grandes Atrações',
    groups: [
      {
        category: 'abertura',
        title: 'Pavilhão de Expositores',
        venue: 'Praça Senador Dinarte Mariz',
        events: [{ time: '16h', desc: 'Abertura dos portões e visitação aos estandes' }],
      },
      {
        category: 'summit',
        title: 'Boné Brasil Summit',
        venue: 'Auditório entre a Casa de Cultura e o Centro Pastoral',
        events: [
          { time: '16h', desc: 'Oficina de confecção com materiais reaproveitados' },
          { time: '16h', desc: 'Palestra do Instituto IMOA: Sustentabilidade' },
          { time: '17h', desc: 'Palestra: Tráfego Pago' },
          { time: '18h', desc: 'Palestra: Acesso ao Crédito' },
          { time: '19h', desc: 'Palestra: Exportação e Importação' },
          { time: '20h', desc: 'Palestra Magna' },
        ],
      },
      {
        category: 'negocios',
        title: 'Rodada de Negócios',
        venue: 'Casa de Cultura',
        events: [{ time: '19h', desc: 'Rodada de negócios: Máquinas' }],
      },
      {
        category: 'cultural',
        title: 'Programação Cultural',
        events: [
          { time: '08h', desc: 'Vem pra Feira: café da manhã no Mercado Público' },
          { time: '12h', desc: 'Encontro de Carros Antigos' },
          { time: '17h', desc: 'Inauguração do painel em grafite "Serra Negra do Norte: a terra do Boné"' },
          { time: '18h', desc: 'DJ TMF' },
          { time: '20h', desc: 'Desfile Boné Brasil Fashion: Desfile do Boné' },
          { time: '22h30', desc: 'Cerimônia de encerramento' },
          { time: '23h', desc: 'Show de Elayne Tyne' },
          { time: '01h', desc: 'Show de Deixe de Brincadeira' },
        ],
      },
    ],
  },
];

export default function ProgramacaoCompleta() {
  const [activeDay, setActiveDay] = useState(DAYS[0].id);
  const day = DAYS.find((d) => d.id === activeDay) ?? DAYS[0];

  return (
    <>
      <section className="prog-hero section-padding">
        <div className="site-container">
          <Reveal className="section-header align-center">
            <span className="section-tagline">06 a 08 de Agosto</span>
            <h1>Programação Oficial</h1>
            <p className="section-subtitle">
              Três dias de negócios, cultura e grandes atrações em Serra Negra do Norte/RN.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="prog-spaces-section">
        <div className="site-container">
          <Reveal className="prog-spaces-header">
            <h2>Espaços Permanentes da Feira</h2>
            <p>
              Durante todos os dias do evento funcionarão a Feira de Artesanato, o Espaço
              Gastronômico e o Parque de Diversões, ampliando a experiência dos visitantes e
              fortalecendo a economia local.
            </p>
          </Reveal>

          <div className="prog-spaces-grid">
            {PERMANENT_SPACES.map((space, i) => {
              const Icon = space.icon;
              return (
                <Reveal className="prog-space-card" delay={i * 0.1} key={space.name}>
                  <div className="prog-space-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{space.name}</h3>
                  <ul>
                    {space.schedule.map(([d, hours]) => (
                      <li key={d}>
                        <span>{d}</span>
                        <span>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="prog-schedule-section section-padding">
        <div className="site-container">
          <div className="prog-day-tabs">
            {DAYS.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`prog-day-tab ${d.id === activeDay ? 'active' : ''}`}
                onClick={() => setActiveDay(d.id)}
              >
                {d.id === activeDay && (
                  <motion.span
                    layoutId="prog-day-tab-bg"
                    className="prog-day-tab-bg"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="prog-day-tab-label">{d.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="prog-day-header">
                <span className="prog-day-date">{day.date}</span>
                <h3>{day.heading}</h3>
              </div>

              <div className="prog-groups-grid">
                {day.groups.map((group, i) => {
                  const cat = CATEGORIES[group.category];
                  const CatIcon = cat.icon;
                  return (
                    <div className={`prog-group-card ${cat.className}`} key={`${day.id}-${i}`}>
                      <div className="prog-group-header">
                        <div className="prog-group-icon">
                          <CatIcon size={18} />
                        </div>
                        <div>
                          <span className="prog-group-category">{cat.label}</span>
                          <h4>{group.title}</h4>
                          {group.venue && <p className="prog-group-venue">{group.venue}</p>}
                        </div>
                      </div>

                      <ul className="prog-event-list">
                        {group.events.map((ev, j) => (
                          <li key={j}>
                            <span className="prog-event-time">{ev.time}</span>
                            <span className="prog-event-desc">{ev.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="prog-rodadas-intro section-padding">
        <div className="site-container">
          <Reveal className="section-header align-center">
            <span className="section-tagline">Como Funciona</span>
            <ScrollFloat>Rodadas de Negócios</ScrollFloat>
            <p className="section-subtitle">
              Conversas certas, com as pessoas certas, no momento certo.
            </p>
          </Reveal>
        </div>
      </section>

      {RODADAS_STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
        <section
          key={step.title}
          className={`prog-rodada-section${i % 2 === 1 ? ' alt-bg' : ''}`}
        >
          <div className={`site-container prog-rodada-block${i % 2 === 1 ? ' reverse' : ''}`}>
            <Reveal className="prog-rodada-visual">
              <Icon className="prog-rodada-icon" strokeWidth={1} />
            </Reveal>
            <Reveal className="prog-rodada-content" delay={0.15}>
              <ScrollFloat containerClassName="prog-rodada-title">{step.title}</ScrollFloat>
              <p>{step.text}</p>
            </Reveal>
          </div>
        </section>
        );
      })}
    </>
  );
}
