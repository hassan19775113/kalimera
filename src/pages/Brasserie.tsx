import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';
import { CONTACT_INFO } from '../utils/constants';

const Brasserie = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const buffets = [
    {
      label: 'Samstag',
      name: 'Metrio',
      tagline: 'Mittleres Frühstücksbuffet',
      price: '14,90',
      time: '9:30 – 12:00 Uhr',
      includes: [
        'Käse · Wurst · Schinken aus dem Oligo-Markt',
        'Frische Backwaren aus dem Steinofen',
        'Hausgemachte Marmeladen',
        'Ei-Spezialitäten',
        'Apostels Joghurt',
      ],
    },
    {
      label: 'Sonntag',
      name: 'Megalo',
      tagline: 'Großes Frühstücksbuffet',
      price: '17,90',
      time: '9:30 – 12:00 Uhr',
      includes: [
        'Erweiterte Käse- & Wurstauswahl',
        'Frische Backwaren aus dem Steinofen',
        'Hausgemachte Marmeladen',
        'Vielfältige Ei-Spezialitäten',
        'Apostels Joghurt mit Honig',
        'Saisonales Obst & Müsli',
      ],
      highlight: true,
    },
  ];

  const kuchen = [
    { name: 'Tageskuchen', desc: 'Täglich wechselnd' },
    { name: 'Apfelkuchen', desc: 'Klassisch und herzhaft' },
    { name: 'Tiramisu', desc: 'Italienische Versuchung' },
    { name: 'Torta della Nonna', desc: 'Hausgemacht nach Großmutters Art' },
  ];

  const galleryImages = [
    '/brasserie-3.png',
    '/brasserie-4.png',
    '/brasserie-5.png',
    '/brasserie-6.png',
    '/brasserie-7.png',
    '/brasserie-8.png',
  ];

  const usps = [
    {
      title: 'Aus dem Steinofen',
      desc: 'Brot, Brötchen, Croissants und Gebäck — täglich frisch im hauseigenen Steinofen gebacken.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 38h36" />
          <path d="M10 38V20a14 14 0 0 1 28 0v18" />
          <path d="M16 38V26a8 8 0 0 1 16 0v12" />
          <path d="M22 14c0-3 4-3 4-6" />
          <path d="M28 12c0-2 3-2 3-5" />
        </svg>
      ),
    },
    {
      title: 'Hausgemachte Marmeladen',
      desc: 'Selbst eingekocht aus saisonalem Obst — ohne Konservierungsstoffe, mit voller Aromatik.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8h16v6H16z" />
          <path d="M14 14h20v28a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" />
          <path d="M18 22h12" />
          <path d="M18 30h12" />
        </svg>
      ),
    },
    {
      title: 'Apostels Joghurt',
      desc: 'Authentisch griechischer Joghurt — cremig, vollmundig, in der traditionellen Manufaktur hergestellt.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 16h20l-2 26a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" />
          <path d="M14 16c0-4 4-8 10-8s10 4 10 8" />
          <path d="M22 24v10" />
          <path d="M28 24v10" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Brasserie – Frühstück, Kaffee & Steinofen-Backwaren"
        description="Brasserie Kalimera in Garbsen: Frühstücksbuffet Sa & So, Kaffeezeit täglich, hauseigener Steinofen, Apostels Joghurt und hausgemachte Marmeladen."
        path="/brasserie"
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] overflow-hidden bg-black"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/brasserie_1-1.jpg.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video_kalimera_startseite_hd_komp.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pointer-events-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-bebas tracking-[0.4em] text-gold text-[clamp(0.7rem,1.2vw,1rem)] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            EINE EINZIGARTIGE GASTRONOMISCHE REISE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-script text-white text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Brasserie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-bebas tracking-[0.25em] text-white text-[clamp(0.875rem,1.6vw,1.4rem)] uppercase mt-6 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Ausgewogen & vital in den Tag
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-24 h-px bg-gold mt-8 origin-center"
          />
        </motion.div>

        {/* Quick-Action Kreise */}
        <>
          {/* Frühstückskarte - Unten Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-20 bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a
              href="/StartSeite/kalimera_fruehstueck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Frühstückskarte als PDF öffnen"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Sonnen-Icon (Frühstück) */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="currentColor">
                      <circle cx="24" cy="24" r="8" />
                      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="24" y1="4" x2="24" y2="9" />
                        <line x1="24" y1="39" x2="24" y2="44" />
                        <line x1="4" y1="24" x2="9" y2="24" />
                        <line x1="39" y1="24" x2="44" y2="24" />
                        <line x1="9.86" y1="9.86" x2="13.4" y2="13.4" />
                        <line x1="34.6" y1="34.6" x2="38.14" y2="38.14" />
                        <line x1="9.86" y1="38.14" x2="13.4" y2="34.6" />
                        <line x1="34.6" y1="13.4" x2="38.14" y2="9.86" />
                      </g>
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Frühstück
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    Sa &amp; So · 9:30
                  </p>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Reservierung - Unten Rechts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute z-20 bottom-[clamp(3.2rem,5.6vw,6.7rem)] right-[clamp(0.5rem,4vw,6rem)]"
          >
            <Link
              to="/kontakt#reservierung"
              className="group block"
              aria-label="Tisch reservieren"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Kalender mit Häkchen */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="10" width="34" height="32" rx="3" />
                      <line x1="7" y1="20" x2="41" y2="20" />
                      <line x1="16" y1="6" x2="16" y2="14" />
                      <line x1="32" y1="6" x2="32" y2="14" />
                      <path d="M16 30 L22 36 L34 24" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Reservieren
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    Jetzt Buchen
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </>

        {/* Scroll-Indikator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-bebas text-gold/80 tracking-[0.3em] text-xs">SCROLL</span>
            <svg className="w-5 h-5 text-gold/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO + STEINOFEN STORY */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ DAS HERZSTÜCK
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-8">
                Aus dem hauseigenen
                <br />
                <em className="not-italic text-gold">Steinofen.</em>
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Bei uns startet der Tag mit dem unverkennbaren Duft von frisch
                  gebackenem Brot. In unserem hauseigenen Steinofen entstehen
                  täglich Brötchen, Croissants und süßes Gebäck — handgemacht,
                  knusprig, ehrlich.
                </p>
                <p className="font-display font-medium text-primary italic">
                  „Ein gutes Frühstück ist ein guter Start in den Tag. Kalimera!"
                </p>
                <p>
                  Dazu hausgemachte Marmeladen aus saisonalem Obst, authentischer
                  Apostels Joghurt und feinste Wurst- und Käsespezialitäten aus
                  unserem eigenen <Link to="/oligo-markt" className="text-gold hover:underline font-medium">Oligo-Markt</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/brasserie_essen_2.jpg.webp"
                  alt="Frische Backwaren"
                  className="w-full h-full object-cover"
                />
                {/* Decorative number badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                  <div className="font-bebas text-gold text-3xl leading-none">1924</div>
                  <div className="font-display text-xs uppercase tracking-wider text-primary mt-1">
                    Steinofen-Tradition
                  </div>
                </div>
                {/* Decorative tag bottom right */}
                <div className="absolute bottom-6 right-6 bg-primary/95 backdrop-blur-sm rounded-full px-5 py-2.5 text-white">
                  <span className="font-bebas tracking-widest text-sm">FRISCH GEBACKEN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -left-32 top-1/3 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* FRÜHSTÜCKSBUFFET */}
      <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ FRÜHSTÜCKSBUFFET · SAMSTAG & SONNTAG
            </span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Metrio &amp; Megalo
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-gray-600 max-w-xl mx-auto mt-6">
              Wählen Sie zwischen unserem mittleren und großen Buffet —
              jeweils 9:30 bis 12:00 Uhr.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {buffets.map((buffet, i) => (
              <motion.div
                key={buffet.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                  buffet.highlight
                    ? 'bg-gradient-to-br from-gold via-yellow-500 to-gold text-primary shadow-[0_20px_60px_rgba(212,175,55,0.4)]'
                    : 'bg-white border border-gold/20 shadow-xl hover:shadow-2xl'
                }`}
              >
                {buffet.highlight && (
                  <div className="absolute -top-3 right-8 bg-primary text-gold font-bebas tracking-widest text-xs px-4 py-1.5 rounded-full">
                    BELIEBT
                  </div>
                )}
                <div
                  className={`font-bebas tracking-[0.25em] text-sm ${
                    buffet.highlight ? 'text-primary/80' : 'text-gold'
                  }`}
                >
                  {buffet.label.toUpperCase()}
                </div>
                <h3
                  className={`font-script text-[clamp(2.5rem,5vw,4rem)] leading-none mt-2 mb-2 ${
                    buffet.highlight ? 'text-primary' : 'text-primary'
                  }`}
                >
                  {buffet.name}
                </h3>
                <p className={`mb-6 ${buffet.highlight ? 'text-primary/70' : 'text-gray-500'}`}>
                  {buffet.tagline}
                </p>

                <div className={`flex items-baseline gap-2 mb-2 ${buffet.highlight ? 'text-primary' : 'text-primary'}`}>
                  <span className="font-bebas text-[clamp(3rem,6vw,5rem)] leading-none">
                    {buffet.price}
                  </span>
                  <span className="font-bebas text-2xl">€</span>
                  <span className={`text-sm ml-2 ${buffet.highlight ? 'text-primary/60' : 'text-gray-400'}`}>
                    pro Person
                  </span>
                </div>
                <div className={`font-bebas tracking-[0.2em] text-sm mb-8 ${buffet.highlight ? 'text-primary/80' : 'text-gold'}`}>
                  {buffet.time}
                </div>

                <ul className="space-y-3">
                  {buffet.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 ${buffet.highlight ? 'text-primary' : 'text-gray-700'}`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${buffet.highlight ? 'text-primary' : 'text-gold'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 italic">
            Getränke sind nicht im Buffetpreis enthalten.
          </p>
        </div>
      </section>

      {/* KAFFEEZEIT — Promo-Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gold/80">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{ backgroundImage: 'url(/brasserie_9.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.70] via-primary/30 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-white"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ TÄGLICH 14:30 – 17:00 UHR
              </span>
              <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-3 mb-6">
                Kaffee &amp; <span className="text-gold">Kuchen</span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-8">
                Eine kurze Pause vom Alltag, ein großer Genuss: Eine große Tasse
                Kaffee mit einem Stück hausgemachtem Kuchen — der perfekte
                Nachmittagsmoment.
              </p>

              <div className="flex items-baseline gap-3">
                <span className="font-bebas text-gold text-[clamp(4rem,9vw,8rem)] leading-none">
                  5,30
                </span>
                <span className="font-bebas text-gold text-3xl">€</span>
              </div>
              <p className="font-display font-semibold tracking-wider uppercase text-white/70 text-sm mt-2">
                Kaffee · großes Stück Kuchen
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-3"
            >
              {kuchen.map((k, i) => (
                <motion.div
                  key={k.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 border border-gold/30 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/15 hover:border-gold/60 transition-all duration-300"
                >
                  <div className="font-script text-gold text-2xl leading-tight mb-1">
                    {k.name}
                  </div>
                  <div className="font-display text-xs uppercase tracking-wider text-white/70">
                    {k.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALERIE — Mosaik */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ EINBLICKE</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Atmosphäre &amp; Genuss
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  i === 0 || i === 5 ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={src}
                  alt={`Brasserie ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ UNSER VERSPRECHEN</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Echte Qualität,
              <br className="md:hidden" /> ehrlich gemacht
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 text-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="w-10 h-10 block">{usp.icon}</span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-3">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VERBUNDENE BEREICHE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ MEHR ENTDECKEN</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,3rem)] mt-3 leading-tight">
              Direkt nebenan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Oligo-Markt', desc: 'Feinkost, Käse, Wein', link: '/oligo-markt' },
              { title: 'Restaurant', desc: 'Authentisch griechisch', link: '/restaurant' },
              { title: 'Weinforum', desc: 'Über 200 Weine', link: '/weinforum' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-6 border border-gold/30 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 group"
                >
                  <div className="font-script text-primary text-3xl mb-1 group-hover:text-gold transition-colors">
                    {item.title}
                  </div>
                  <div className="font-display text-xs uppercase tracking-wider text-gray-500 mb-3">
                    {item.desc}
                  </div>
                  <div className="flex items-center gap-2 text-gold font-bebas tracking-widest text-sm group-hover:gap-4 transition-all">
                    ENTDECKEN
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/brasserie_1-1.jpg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/45 to-primary/0" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ TISCH RESERVIEREN</span>
            <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
              Starten Sie vital
              <br />
              in <span className="text-gold">Ihren Tag.</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-10">
              Sichern Sie sich Ihren Platz fürs Frühstücksbuffet oder kommen Sie
              spontan auf einen Kaffee vorbei — wir freuen uns auf Sie.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Tisch reservieren
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-display font-bold tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brasserie;
