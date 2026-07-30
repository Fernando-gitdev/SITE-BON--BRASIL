'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';
import { useLazyVideo } from '@/hooks/use-lazy-video';

export default function MapaEvento() {
  const videoRef = useLazyVideo('/assets/video-mapa-evento.mp4');
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted, videoRef]);

  return (
    <section id="mapa-evento" aria-label="Mapa do evento" className="mapa-evento-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">Conheça o Local</span>
          <ScrollFloat>Um passeio pelo espaço da feira</ScrollFloat>
        </Reveal>

        <Reveal delay={0.15} className="mapa-evento-video-box">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
          />
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
            aria-pressed={!muted}
            className="mapa-evento-mute-btn"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </Reveal>
        <p className="mapa-evento-caption">Simulação 3D · espaço da feira</p>
      </div>
    </section>
  );
}
