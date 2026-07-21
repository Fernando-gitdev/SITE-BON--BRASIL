'use client';

import { useEffect, useRef } from 'react';

/**
 * Some mobile browsers (data saver, low-power mode, certain Android/iOS
 * versions) silently reject the native `autoPlay` attribute even with
 * `muted`+`playsInline` set — the video just never starts. Explicitly
 * calling `.play()` once data is ready, and retrying on the user's first
 * touch/click if that call is rejected, recovers from those cases instead
 * of leaving the hero blank.
 */
export default function HeroBgVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const retryOnGesture = () => {
      video.play().catch(() => {});
    };

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          document.addEventListener('touchstart', retryOnGesture, { once: true });
          document.addEventListener('click', retryOnGesture, { once: true });
        });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      document.removeEventListener('touchstart', retryOnGesture);
      document.removeEventListener('click', retryOnGesture);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-bg-video"
      src="/assets/video-bg-secao1.mp4"
      poster="/assets/hero-poster.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
