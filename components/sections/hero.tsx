import Image from 'next/image';
import TextType from '@/components/ui/text-type';
import SplitText from '@/components/ui/split-text';
import HeroBgVideo from './hero-bg-video';
import { SELO_CADASTRO_URL } from '@/lib/selo';

const HERO_TITLE_START = 'Compre de quem ';
const HERO_TITLE_ACCENT = 'produz de verdade.';
const HERO_TYPING_SPEED = 45;
const HERO_SUBTITLE_DELAY = 350;

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Abertura">
      <HeroBgVideo />

      <div className="site-container hero-headline-row">
        <Image
          src="/assets/logo-bone-br.svg"
          alt="Boné Brasil"
          className="hero-logo"
          width={821}
          height={329}
          priority
        />
        <span className="section-tagline hero-tagline">Selo de Qualidade</span>
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
            text="O Selo Boné Brasil certifica as empresas do polo que comprovam regularidade, capacidade produtiva e reputação no mercado."
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

        <div className="hero-cta-group">
          <a
            href={SELO_CADASTRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Solicitar o selo</span>
            <div className="btn-glow-effect"></div>
          </a>
          <a href="#como-funciona" className="btn btn-secondary">
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
