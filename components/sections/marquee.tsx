const TAGS = [
  'Regularidade Fiscal',
  'Regularidade Jurídica',
  'Capacidade Produtiva',
  'Reputação',
  'Confiabilidade Comercial',
  'Empresas Certificadas',
  'Compra Segura',
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="tags-marquee-track" aria-hidden={hidden || undefined}>
      {TAGS.map((tag) => (
        <span className="tags-marquee-item" key={tag}>
          {tag}
          <span className="dot">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="O que o selo atesta" className="tags-marquee-section">
      <div className="tags-marquee-row">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
