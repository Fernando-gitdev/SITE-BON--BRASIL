import Image from 'next/image';

const LOGO_COUNT = 8;
const LOGOS = Array.from({ length: LOGO_COUNT });

// Each group carries its own trailing gap (pr-24) instead of relying on a
// `gap` on the shared outer track. That way a group's rendered width
// (logos + internal gaps + trailing gap) is exactly half the doubled
// track's total width, so translateX(-50%) lands pixel-perfect on the
// start of the second group — no seam, no visible jump on loop.
function LogoGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-24 pr-24" aria-hidden={ariaHidden}>
      {LOGOS.map((_, i) => (
        <Image
          key={i}
          src="/assets/logo-bone-br.svg"
          alt="Boné Brasil"
          width={150}
          height={60}
          className="h-10 w-auto shrink-0 opacity-90 md:h-14"
        />
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--bg-surface)] py-8">
      <div className="flex w-max animate-[marquee_18s_linear_infinite] items-center">
        <LogoGroup />
        <LogoGroup ariaHidden />
      </div>
    </div>
  );
}
