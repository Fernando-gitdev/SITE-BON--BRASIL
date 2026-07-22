'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedRevealStackProps {
  /** Each child is one stage; they reveal in sequence, cinematic-style
   *  (opacity + translateY + scale + blur + letter-spacing), while the
   *  section stays pinned. */
  children: ReactNode[];
  className?: string;
  id?: string;
  /** Scroll runway per stage, in viewport-heights. */
  vhPerStage?: number;
}

/**
 * Pins the viewport and reveals each direct child in sequence as the user
 * scrolls — a cinematic "one big statement at a time" effect, distinct from
 * PinnedCardStack's horizontal cross-fade. Runs on both desktop and mobile:
 * unlike the card-stack/benefits-list use cases elsewhere on this site, the
 * content here is just a couple of short lines, so it comfortably fits
 * within 100dvh on a phone and doesn't carry the same clipping risk that
 * makes pinning unsafe for taller stacks.
 */
export default function PinnedRevealStack({
  children,
  className = '',
  id,
  vhPerStage = 110,
}: PinnedRevealStackProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const count = children.length;

  useEffect(() => {
    const stageEl = stageRef.current;
    const viewport = viewportRef.current;
    if (!stageEl || !viewport) return;

    const items = Array.from(viewport.children) as HTMLElement[];
    if (!items.length) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Animating letter-spacing forces the browser to reflow the text on
      // every scrub tick — on mobile that reads as the heading jittering
      // sideways (users read it as "wanting to scroll horizontally")
      // instead of a cinematic reveal. Desktop keeps the wide letter-spacing
      // sweep; mobile only animates transform/opacity/blur, which are cheap
      // and never change layout width.
      mm.add(
        {
          desktop: '(min-width: 641px)',
          mobile: '(max-width: 640px)',
        },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };

          gsap.set(stageEl, { height: `${items.length * vhPerStage}vh` });
          gsap.set(items, {
            position: 'absolute',
            opacity: 0,
            y: 46,
            scale: 0.9,
            filter: 'blur(16px)',
            letterSpacing: desktop ? '0.35em' : 'normal',
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: stageEl,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.8,
              pin: viewport,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          const perStage = 1 / items.length;
          items.forEach((item, i) => {
            const base = i * perStage;
            tl.to(
              item,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                letterSpacing: desktop ? '-0.01em' : 'normal',
                duration: perStage * 0.4,
                ease: 'power2.out',
              },
              base
            );
            // The stage then simply holds (nothing animates) until this point,
            // reinforcing it before the next one takes over.
            if (i < items.length - 1) {
              tl.to(
                item,
                {
                  opacity: 0,
                  y: -36,
                  scale: 0.95,
                  filter: 'blur(10px)',
                  duration: perStage * 0.25,
                  ease: 'power1.in',
                },
                base + perStage * 0.7
              );
            }
          });

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      );

      return () => mm.revert();
    }, stageEl);

    return () => ctx.revert();
  }, [count, vhPerStage]);

  return (
    <div ref={stageRef} id={id} className="pinned-reveal-stage">
      <div ref={viewportRef} className={`pinned-reveal-viewport ${className}`}>
        {children}
      </div>
    </div>
  );
}
