export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Abertura">
      <video
        className="hero-bg-video"
        src="/assets/video-bg-secao1.mp4"
        poster="/assets/bg-secao1.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="site-container hero-headline-row">
        <img src="/assets/logo-bone-br.svg" alt="Boné Brasil" className="hero-logo" />
        <h1 className="hero-title">
          Conectamos o polo produtivo <span className="text-brand-accent">ao mercado nacional</span>.
        </h1>
        <p className="hero-subtitle">
          Fabricantes, fornecedores, compradores e investidores, todos em um só lugar.
        </p>

        <a href="#contato" className="btn btn-primary hero-cta">
          <span>Entrar em Contato</span>
          <div className="btn-glow-effect"></div>
        </a>
      </div>
    </section>
  );
}
