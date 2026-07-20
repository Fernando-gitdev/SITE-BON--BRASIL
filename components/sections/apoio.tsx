import Reveal from '@/components/ui/reveal';

const MESSAGES = [
  {
    text: 'A BONÉ BRASIL 2026 nasce pra transformar um polo produtivo local numa vitrine nacional de negócios.',
    cite: 'Organização BONÉ BRASIL 2026',
    accent: false,
  },
  {
    text: 'Conectar quem produz a quem compra é o caminho mais direto pro crescimento do setor.',
    cite: 'Coordenação da Feira',
    accent: true,
  },
  {
    text: 'Capacitação, crédito e tecnologia num só lugar: assim se profissionaliza uma cadeia produtiva inteira.',
    cite: 'Apoio Institucional',
    accent: false,
  },
];

const FACTS = [
  { value: '1ª', label: 'edição nacional' },
  { value: '5', label: 'eixos de programação' },
  { value: 'RN', label: 'Serra Negra do Norte, sede' },
  { value: 'BR', label: 'alcance nacional' },
];

export default function Apoio() {
  return (
    <section id="apoio" aria-label="Apoio institucional" className="apoio-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">04 · Apoio Institucional</span>
          <h2>Um movimento com propósito claro.</h2>
        </Reveal>

        <div className="apoio-grid">
          {MESSAGES.map((m, i) => (
            <Reveal key={m.cite} delay={i * 0.1}>
              <div className={`glow-border-box${m.accent ? ' accent-box' : ''}`}>
                <span className="apoio-mark">&ldquo;</span>
                <p>{m.text}</p>
                <span className="apoio-cite">{m.cite}</span>
                <div className="pulse-line"></div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="apoio-facts-row">
          {FACTS.map((f) => (
            <div key={f.label}>
              <div className="apoio-fact-value">{f.value}</div>
              <div className="apoio-fact-label">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
