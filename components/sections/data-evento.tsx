import PinnedRevealStack from '@/components/ui/pinned-reveal-stack';

export default function DataEvento() {
  return (
    <section aria-label="Data do evento" className="data-evento-section">
      <PinnedRevealStack id="data-evento" className="data-evento-viewport">
        <div className="data-evento-stage">
          <h2 className="data-evento-text">
            <span className="text-glow-accent">06</span> a{' '}
            <span className="text-glow-accent">08</span>
            <br />
            de
            <br />
            agosto.
          </h2>
        </div>

        <div className="data-evento-stage">
          <span className="data-evento-eyebrow">Rio Grande do Norte</span>
          <h2 className="data-evento-text">
            Serra Negra
            <br />
            do Norte.
          </h2>
        </div>
      </PinnedRevealStack>
    </section>
  );
}
