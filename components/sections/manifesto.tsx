import PinnedRevealStack from '@/components/ui/pinned-reveal-stack';

export default function Manifesto() {
  return (
    <section aria-label="Por que o selo existe" className="manifesto-section">
      <PinnedRevealStack id="manifesto" className="manifesto-viewport">
        <div className="manifesto-stage">
          <span className="manifesto-eyebrow">Golpes, fraudes, perfis sem fábrica</span>
          <h2 className="manifesto-text">
            Quem é
            <br />
            de
            <br />
            <span className="text-glow-accent">verdade?</span>
          </h2>
        </div>

        <div className="manifesto-stage">
          <span className="manifesto-eyebrow">A resposta do polo</span>
          <h2 className="manifesto-text">
            <span className="text-glow-accent">Selo</span>
            <br />
            Boné
            <br />
            Brasil.
          </h2>
        </div>
      </PinnedRevealStack>
    </section>
  );
}
