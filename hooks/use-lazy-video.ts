'use client';

import { useEffect, useRef } from 'react';

/**
 * Defers a video's download until it is actually near the viewport.
 *
 * `autoPlay` makes the browser fetch the whole file during page load no
 * matter what `preload` says, so below-the-fold videos were pulling tens of
 * MB before the visitor ever scrolled to them. Instead the element ships
 * with no `src`/`autoPlay`; this hook attaches the source and starts
 * playback once it is close to being seen, and pauses it again when it
 * scrolls away so it isn't decoding off-screen.
 */
export function useLazyVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute('src')) {
            video.setAttribute('src', src);
            video.load();
          }
          video.play().catch(() => {
            /* autoplay can still be refused (e.g. power saving); the poster
               stays visible and the user can tap to play. */
          });
        } else if (!video.paused) {
          video.pause();
        }
      },
      // Start fetching slightly before it scrolls in, so it is ready on arrival.
      { rootMargin: '300px 0px', threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return videoRef;
}
