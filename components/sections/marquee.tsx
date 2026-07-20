const TAGS = [
  'Fabricantes',
  'Fornecedores',
  'Compradores e Lojistas',
  'Instituições Financeiras',
  'Entidades de Apoio',
  'Prestadores de Serviço',
  'Investidores',
  'Distribuidores',
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
    <section aria-label="Quem participa" className="tags-marquee-section">
      <div className="tags-marquee-row">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
