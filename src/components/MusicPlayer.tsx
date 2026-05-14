import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const HINT_KEY = 'kalimera-music-hint';
const AUDIO_SRC = '/audio/kalimera-ambient.mp3';
const VOLUME = 0.25;

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [inHero, setInHero] = useState(true);
  // Pause gilt nur in der aktuellen Session — nicht persistiert, damit Auto-Play beim nächsten Besuch wieder greift
  const userPausedRef = useRef<boolean>(false);
  const location = useLocation();

  // Button NUR auf Home im Hero-Bereich sichtbar — Musik läuft im Hintergrund weiter, auch wenn Button weg ist
  const isHomePage = location.pathname === '/';
  const showButton = isHomePage && inHero;

  // Scroll-Position überwachen — nur im Hero zeigen
  useEffect(() => {
    if (!isHomePage) {
      setInHero(false);
      return;
    }
    const handleScroll = () => {
      setInHero(window.scrollY < window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Auto-Play-Strategie:
  // 1. Stumm-Hintergrund-Play sofort versuchen (Browser erlauben das meistens)
  // 2. Listener bleiben aktiv bis play() WIRKLICH erfolgreich — Cleanup nur bei Erfolg
  // 3. Bei Fehlschlag wird muted zurückgerollt, damit nächstes Event sauber retrien kann
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (userPausedRef.current) return;

    audio.muted = true;
    audio.volume = VOLUME;

    // pointerdown / click / keydown / touchend zählen sicher als User-Activation in Chrome.
    // wheel / scroll / pointermove zählen NICHT — aber wir hören trotzdem mit, falls Browser anders entscheidet
    const events: (keyof DocumentEventMap)[] = [
      'pointerdown',
      'click',
      'keydown',
      'touchstart',
      'touchend',
      'pointermove',
      'scroll',
      'wheel',
    ];

    let active = true;
    let mutedPlaying = false;

    const cleanup = () => {
      active = false;
      events.forEach((evt) => document.removeEventListener(evt, tryUnmute));
      audio.removeEventListener('canplay', tryMutedPlay);
    };

    const tryMutedPlay = async () => {
      if (!active || mutedPlaying || userPausedRef.current) return;
      try {
        await audio.play();
        mutedPlaying = true;
        console.log('[MusicPlayer] ▶ Stumm-Hintergrund-Wiedergabe läuft');
      } catch {
        // egal — wird durch tryUnmute später erneut versucht
      }
    };

    const tryUnmute = async (e?: Event) => {
      if (!active) return;
      if (userPausedRef.current) {
        cleanup();
        return;
      }
      audio.muted = false;
      audio.volume = VOLUME;
      if (audio.paused) {
        try {
          await audio.play();
        } catch {
          // play blockiert → muted zurücksetzen, Listener BLEIBEN aktiv für nächsten Versuch
          audio.muted = true;
          return;
        }
      }
      setIsPlaying(true);
      console.log('[MusicPlayer] 🔊 Aktiv (Trigger:', e?.type, ')');
      cleanup(); // erst nach echtem Erfolg
    };

    tryMutedPlay();
    audio.addEventListener('canplay', tryMutedPlay);

    events.forEach((evt) =>
      document.addEventListener(evt, tryUnmute, { passive: true }),
    );

    return cleanup;
  }, []);

  // Hinweis-Bubble einmalig zeigen
  useEffect(() => {
    const seenHint = localStorage.getItem(HINT_KEY);
    if (seenHint) return;
    const t1 = setTimeout(() => setShowHint(true), 2500);
    const t2 = setTimeout(() => {
      setShowHint(false);
      localStorage.setItem(HINT_KEY, '1');
    }, 8000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const toggleMusic = async () => {
    setShowHint(false);
    localStorage.setItem(HINT_KEY, '1');

    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        userPausedRef.current = true;
      } else {
        audio.muted = false;
        audio.volume = VOLUME;
        if (audio.paused) await audio.play();
        setIsPlaying(true);
        userPausedRef.current = false;
      }
    } catch (err) {
      console.error('[MusicPlayer] Wiedergabe fehlgeschlagen:', err);
    }
  };

  return (
    <>
      {/* Verstecktes Audio-Element — App-weit, persistiert über Seitenwechsel */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onPlay={(e) => {
          // Nur als "playing" markieren, wenn hörbar — stumme Hintergrund-Wiedergabe ignorieren
          if (!e.currentTarget.muted) setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error('[MusicPlayer] Audio-Datei konnte nicht geladen werden:', AUDIO_SRC, e);
        }}
      />

      {/* Hinweis-Bubble (einmalig, nur wenn noch nicht spielt + Button sichtbar) */}
      <AnimatePresence>
        {showHint && !isPlaying && showButton && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-5 md:bottom-28 md:right-7 z-[60] max-w-[240px] bg-white border-2 border-gold/40 rounded-2xl px-4 py-3 shadow-2xl"
          >
            <div className="font-bebas tracking-[0.2em] text-gold text-xs mb-1">◆ MUSIK</div>
            <p className="text-primary text-sm font-medium">
              Tippen Sie für unser Ambiente
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-gold/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music-Button — nur auf Home im Hero sichtbar */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            key="music-btn"
            onClick={toggleMusic}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            aria-label={isPlaying ? 'Musik pausieren' : 'Musik starten'}
            title={isPlaying ? 'Musik pausieren' : 'Musik starten'}
            className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-colors duration-300 ${
              isPlaying
                ? 'bg-gradient-to-br from-gold to-yellow-500 text-primary border-2 border-white/60'
                : 'bg-primary text-gold border-2 border-gold/60 hover:bg-primary-dark'
            }`}
          >
        {/* Pulsierende Ringe beim Abspielen */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-60 pointer-events-none" />
            <span
              className="absolute inset-0 rounded-full border border-gold/60 animate-ping pointer-events-none"
              style={{ animationDelay: '0.6s' }}
            />
          </>
        )}

        {isPlaying ? (
          <div className="relative flex items-end gap-0.5 h-5 md:h-6">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 md:w-1.5 bg-primary rounded-full"
                animate={{ height: ['35%', '100%', '35%'] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        ) : (
          <svg
            className="w-6 h-6 md:w-7 md:h-7 relative"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 17V5l12-2v12" />
            <circle cx="6" cy="18" r="3" fill="currentColor" />
            <circle cx="18" cy="16" r="3" fill="currentColor" />
          </svg>
        )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
