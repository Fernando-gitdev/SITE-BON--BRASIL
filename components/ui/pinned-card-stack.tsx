'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedCardStackProps {
  /** Each child is one card in the sequence; they cross-fade in order. */
  children: ReactNode[];
  className?: string;
}

/**
 * Desktop: pins the viewport and cross-fades each direct child in sequence
 * as the user scrolls, one card visible at a time. Mobile: cards flow
 * normally and stack (see .pilares-viewport's max-width:899px rule in
 * legacy.css) — pinning a variable-height stack on a small viewport clips
 * content past the first card with no way to scroll to it.
 */
export default function PinnedCardStack({ children, className = '' }: PinnedCardStackProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const count = children.length;

  useEffect(() => {
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    if (!stage || !viewport) return;

    const cards = Array.from(viewport.children) as HTMLElement[];
    if (!cards.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(cards, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' });
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 900px)', () => {
        gsap.set(stage, { height: `${cards.length * 90}vh` });
        gsap.set(cards, { position: 'absolute' });
        cards.forEach((c, i) => gsap.set(c, { zIndex: i + 1 }));
        gsap.set(cards[0], { opacity: 1, x: 0, scale: 1 });
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], { opacity: 0, x: 120, scale: 0.92 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: viewport,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        for (let j = 1; j < cards.length; j++) {
          tl.to(cards[j - 1], { scale: 0.82, opacity: 0, y: -60, duration: 0.4, ease: 'power1.in' }, j - 1);
          tl.to(cards[j], { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power2.out' }, j - 1 + 0.4);
        }

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      // Mobile: no pin, cards flow normally — instead, whichever card is
      // passing through the center band of the viewport gets a "focused"
      // highlight class. Driven purely by scroll position, not :hover
      // (there's no hover on touch anyway).
      mm.add('(max-width: 899px)', () => {
        const triggers = cards.map((card) =>
          ScrollTrigger.create({
            trigger: card,
            start: 'top 72%',
            end: 'bottom 32%',
            toggleClass: { targets: card, className: 'pilar-card-focused' },
          })
        );

        return () => triggers.forEach((t) => t.kill());
      });

      return () => mm.revert();
    }, stage);

    return () => ctx.revert();
  }, [count]);

  return (
    <div ref={stageRef} className="pilares-stage">
      <div ref={viewportRef} className={`pilares-viewport ${className}`}>
        {children}
      </div>
    </div>
  );
}
