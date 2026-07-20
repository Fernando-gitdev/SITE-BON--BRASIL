import TextType from '@/components/ui/text-type';
import SplitText from '@/components/ui/split-text';

const HERO_TITLE_START = 'Conectamos o polo produtivo ';
const HERO_TITLE_ACCENT = 'ao mercado nacional.';
const HERO_TYPING_SPEED = 45;
const HERO_SUBTITLE_DELAY = 350;

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Abertura">
      <video
        className="hero-bg-video"
        src="/assets/video-bg-secao1.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="site-container hero-headline-row">
        <img src="/assets/logo-bone-br.svg" alt="Boné Brasil" className="hero-logo" />
        <h1 className="hero-title">
          <TextType
            text={[HERO_TITLE_START]}
            as="span"
            typingSpeed={HERO_TYPING_SPEED}
            loop={false}
            showCursor={false}
          />
          <TextType
            text={[HERO_TITLE_ACCENT]}
            as="span"
            className="text-brand-accent"
            typingSpeed={HERO_TYPING_SPEED}
            initialDelay={HERO_TITLE_START.length * HERO_TYPING_SPEED}
            loop={false}
            showCursor={true}
            cursorClassName="text-brand-accent"
          />
        </h1>
        <div className="hero-subtitle-wrap">
          <SplitText
            text="Fabricantes, fornecedores, compradores e investidores, todos em um só lugar."
            tag="p"
            className="hero-subtitle"
            startDelay={HERO_SUBTITLE_DELAY}
            splitType="words"
            from={{ opacity: 0, y: 16 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.8}
            delay={30}
          />
        </div>

        <a href="#contato" className="btn btn-primary hero-cta">
          <span>Entrar em Contato</span>
          <div className="btn-glow-effect"></div>
        </a>
      </div>
    </section>
  );
}
