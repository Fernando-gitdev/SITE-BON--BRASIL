const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
    title: 'Polo Especializado',
    desc: 'O único evento do Brasil 100% dedicado à cadeia do boné.',
    link: 'Identidade Local',
    delay: undefined as string | undefined,
    accent: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M22 8H16" />
        <path d="M19 5V11" />
      </svg>
    ),
    title: 'Rodadas de Negócios',
    desc: 'Fature mais conectando sua fábrica direto a lojistas e distribuidores.',
    link: 'Geração de Contatos',
    delay: '100',
    accent: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
    title: 'Tendências e Inovação',
    desc: 'Veja de perto as máquinas e tecidos que vão definir a próxima temporada.',
    link: 'Evolução do Setor',
    delay: '200',
    accent: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="10" x2="12" y2="10" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: 'Capacitação & Crédito',
    desc: 'Saia com crédito facilitado e conhecimento pra fazer sua fábrica crescer.',
    link: 'Crédito & Apoio',
    delay: '300',
    accent: false,
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="diferenciais-section section-padding">
      <div className="section-glow-orb orb-a" aria-hidden="true"></div>
      <div className="section-glow-orb orb-b" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header align-center">
          <span className="section-tagline">Diferenciais</span>
          <h2>O Que Você Ganha Aqui</h2>
          <p className="section-subtitle">
            Tudo que sua empresa precisa pra vender mais, em um só lugar.
          </p>
        </div>

        <div className="diferenciais-grid">
          {CARDS.map((card) => (
            <div
              className={`spotlight-card reveal-item ${card.accent ? 'accent-flip' : ''}`}
              data-delay={card.delay}
              key={card.title}
            >
              <div className="card-content">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="card-link">{card.link}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
