'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLazyVideo } from '@/hooks/use-lazy-video';

export default function SobreVideo() {
  const videoRef = useLazyVideo('/assets/video-secao-2.mp4');
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted, videoRef]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className="mx-auto h-full w-full rounded-2xl object-cover"
      />
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
        aria-pressed={!muted}
        className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
