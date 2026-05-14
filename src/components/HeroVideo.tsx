import { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const HeroVideo = ({ src, poster, className }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Manche mobilen Browser (iOS Safari) ignorieren das HTML-muted-Attribut.
    // Setzen über JS macht Autoplay erst zuverlässig.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Bei Block (Energiesparmodus o.ä.): nächstes loadedmetadata-Event versucht's erneut
      });
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={className ?? 'absolute inset-0 w-full h-full object-cover'}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
