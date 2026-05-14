import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';
import { CONTACT_INFO } from '../utils/constants';

const Weinforum = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const wines = [
    {
      type: 'Rotwein',
      tagline: 'Kräftig · Harmonisch · Weich',
      desc: 'Tiefgründige Aromen, samtige Struktur — von kräftig-tanninreich bis angenehm weich.',
      volume: '0,75 l',
      color: 'from-red-900 to-red-950',
      accent: 'text-red-200',
    },
    {
      type: 'Weißwein',
      tagline: 'Leicht · Fruchtig · Trocken',
      desc: 'Frische Säure, lebendige Frucht, mineralisch trocken — perfekt zu Fisch und Mezze.',
      volume: '0,75 l',
      color: 'from-yellow-100 to-yellow-50',
      accent: 'text-yellow-700',
      light: true,
    },
    {
      type: 'Rosé',
      tagline: 'Feine Fruchtigkeit',
      desc: 'Ausgewogen zwischen frischer Frucht und eleganter Struktur — der Sommer im Glas.',
      volume: '0,75 l',
      color: 'from-pink-200 to-pink-100',
      accent: 'text-pink-700',
      light: true,
    },
    {
      type: 'Dessertwein',
      tagline: 'Süß · Aromatisch · Vollmundig',
      desc: 'Konzentrierte Süße, vielschichtige Aromen — der edle Abschluss eines guten Essens.',
      volume: '0,75 l',
      color: 'from-amber-700 to-amber-900',
      accent: 'text-amber-200',
    },
  ];

  const interieurGallery = [
    '/wein/weinforum_4.jpg',
    '/wein/weinforum_interieur_5.jpg',
    '/wein/weinforum_interieur_6.jpg',
    '/wein/weinforum_interieur_7.jpg',
  ];

  const erlebnisse = [
    {
      title: 'Verkosten',
      desc: 'Probieren Sie aus unserer kuratierten Auswahl italienischer Weine — direkt vor Ort, in Ruhe.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 6h20l-3 18a7 7 0 0 1-14 0z" />
          <path d="M24 24v14" />
          <path d="M16 42h16" />
        </svg>
      ),
    },
    {
      title: 'Mitnehmen',
      desc: 'Was Ihnen schmeckt, nehmen Sie mit nach Hause. Einfach, ehrlich, ohne Zwischenhandel.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 18h28v22a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" />
          <path d="M16 18v-6a8 8 0 0 1 16 0v6" />
          <circle cx="24" cy="28" r="3" />
        </svg>
      ),
    },
    {
      title: 'Feiern',
      desc: 'Buchen Sie das Griechische Haus für Ihre privaten Anlässe — zu zweit, mit Familie oder dem Team.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 24l16-16 16 16v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" />
          <path d="M18 44V28h12v16" />
        </svg>
      ),
    },
  ];

  const anlaesse = [
    'Familienfeiern',
    'Freundeskreis',
    'Firmenveranstaltungen',
    'Geburtstage',
    'Jubiläen',
    'Private Tastings',
  ];

  return (
    <>
      <SEO
        title="Weinforum & Griechisches Haus – Verkostung, Verkauf & Events"
        description="Weinforum Kalimera in Garbsen: Italienische Weine zum Probieren, Genießen und Mitnehmen. Griechische Olivenöle. Griechisches Haus für private Feiern."
        path="/weinforum"
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
            poster="/wein/weinforum_4.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/wein/video_kalimera_weinforum_griechisches_haus_hd_komp.mp4" type="video/mp4" />
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
            className="font-script text-white text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Weinforum &amp;
            <br />
            <span className="text-gold">Griechisches Haus.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="font-bebas tracking-[0.25em] text-white text-[clamp(0.875rem,1.6vw,1.4rem)] uppercase mt-8 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Zu einem guten Tag gehört ein guter Wein
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-24 h-px bg-gold mt-8 origin-center"
          />
        </motion.div>

        {/* Quick-Action Kreise */}
        <>
          {/* Weinkarte - Unten Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-20 bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a
              href="/resturant/weinkarte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Weinkarte als PDF öffnen"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Weinglas-Icon */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 6h20l-3 18a7 7 0 0 1-14 0z" />
                      <path d="M24 24v14" />
                      <path d="M16 42h16" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Weinkarte
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    PDF · Ansehen
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
            <Link to="/kontakt#reservierung" className="group block" aria-label="Tisch reservieren">
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

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

      {/* INTRO — Zwei Welten */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ ZWEI WELTEN, EIN ORT
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-8">
                Probieren,
                <br />
                <em className="not-italic text-gold">genießen,</em>
                <br />
                mitnehmen.
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Im <strong className="text-primary">Weinforum</strong> verkosten Sie unsere
                  Auswahl italienischer Weine — Rot, Weiß, Rosé, Dessert — und
                  nehmen mit, was Ihnen schmeckt. Dazu griechische Olivenöle
                  zur kostenfreien Verkostung.
                </p>
                <p>
                  Das angeschlossene <strong className="text-primary">Griechische Haus</strong> ist
                  unsere Bühne für besondere Anlässe: stilvolles Ambiente,
                  griechische Gastfreundschaft, frische Zutaten — perfekt für
                  Ihre Feier.
                </p>
                <p className="font-display font-medium text-primary italic border-l-2 border-gold pl-4">
                  „Griechische Gastfreundschaft in einem ansprechenden und
                  edlen Ambiente."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/wein/startseite_personen_1.jpg"
                    alt="Weinforum"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mt-12">
                  <img
                    src="/wein/wein-3.png"
                    alt="Griechisches Haus"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative wine glass icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center shadow-xl"
                >
                  <svg className="w-10 h-10 text-gold" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 6h20l-3 18a7 7 0 0 1-14 0z" />
                    <path d="M24 24v14" />
                    <path d="M16 42h16" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -left-32 top-1/2 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* WEIN-KATEGORIEN */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ ITALIENISCHE WEINE
            </span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Vier Charaktere,
              <br className="md:hidden" /> ein Versprechen
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-gray-600 max-w-xl mx-auto mt-6">
              Sorgfältig kuratiert — verkosten Sie vor Ort und nehmen Sie Ihren
              Lieblingstropfen mit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {wines.map((wine, i) => (
              <motion.div
                key={wine.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${wine.color} aspect-[3/4]`}
              >
                {/* Bottle silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 200" className="w-1/3 h-auto" fill="currentColor">
                    <path d="M40 10h20v40c0 5 5 10 5 25v110c0 5-5 10-10 10H45c-5 0-10-5-10-10V75c0-15 5-20 5-25z" />
                  </svg>
                </div>

                <div className={`relative z-10 h-full p-7 flex flex-col ${wine.light ? 'text-gray-900' : 'text-white'}`}>
                  <div>
                    <span className={`font-bebas tracking-[0.25em] text-xs ${wine.accent}`}>
                      {wine.volume}
                    </span>
                    <h3 className="font-script text-[clamp(2.25rem,3.5vw,3rem)] leading-none mt-1">
                      {wine.type}
                    </h3>
                    <p className={`font-bebas tracking-[0.15em] text-sm mt-2 ${wine.accent}`}>
                      {wine.tagline.toUpperCase()}
                    </p>
                  </div>

                  <p className={`mt-auto text-sm leading-relaxed ${wine.light ? 'text-gray-700' : 'text-white/85'}`}>
                    {wine.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 italic">
            Auf Wunsch beraten wir Sie persönlich zu jedem Tropfen.
          </p>
        </div>
      </section>

      {/* OLIVENÖL — Highlight */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <img
            src="/wein/wein-1.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ KOSTENFREIE VERKOSTUNG
              </span>
              <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
                Griechische
                <br />
                <span className="text-gold">Olivenöle.</span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl mb-8">
                Bevor Sie sich entscheiden — schmecken Sie. Wir öffnen die
                Flaschen, Sie probieren in Ruhe. Erst wenn Sie überzeugt sind,
                nehmen Sie Ihr Öl mit nach Hause.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gold/30 border-2 border-gold flex items-center justify-center font-bebas text-gold text-xl">1</div>
                  <div className="w-12 h-12 rounded-full bg-gold/30 border-2 border-gold flex items-center justify-center font-bebas text-gold text-xl">2</div>
                  <div className="w-12 h-12 rounded-full bg-gold/30 border-2 border-gold flex items-center justify-center font-bebas text-gold text-xl">3</div>
                </div>
                <div className="font-bebas tracking-[0.2em] text-gold text-sm">
                  PROBIEREN · VERGLEICHEN · WÄHLEN
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img
                  src="/startseite_markt_1-1.jpg"
                  alt="Griechisches Olivenöl"
                  className="w-full h-full object-fill"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-primary">
                  <div className="font-bebas text-gold tracking-widest text-xs">DAS GOLD DER GRIECHEN</div>
                  <div className="font-script text-2xl mt-1">Direkt vom Erzeuger</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ERLEBNIS — 3 Spalten */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ DREI WEGE ZUM GENUSS</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              So funktioniert's
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {erlebnisse.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 text-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="w-10 h-10 block">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white font-bebas text-sm flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIEUR-GALERIE */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ EINBLICKE</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Atmosphäre
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {interieurGallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={src}
                  alt={`Weinforum ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GRIECHISCHES HAUS — Event-Sektion */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/wein/weinforum_interieur_7.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ DAS GRIECHISCHES HAUS
            </span>
            <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
              Feiern Sie
              <br />
              <span className="text-gold">bei uns.</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-10 max-w-2xl">
              Ob zu zweit, mit Freunden, der Familie oder dem Team — unser
              Griechisches Haus bietet den passenden Rahmen für Ihren Anlass.
              Stilvolles Ambiente, frische Zutaten, viel frischer Fisch zu
              fairen Preisen.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {anlaesse.map((a) => (
                <motion.span
                  key={a}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2.5 rounded-full border-2 border-gold/50 bg-white/10 backdrop-blur-sm font-display font-semibold text-white text-sm cursor-default hover:border-gold hover:bg-white/15 transition-all duration-300"
                >
                  {a}
                </motion.span>
              ))}
            </div>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Tisch oder Raum anfragen
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ ANFRAGEN</span>
            <h2 className="font-script text-primary text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mt-4 mb-6">
              Auf Ihren <em className="not-italic text-gold">guten Tag.</em>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Reservieren Sie einen Tisch fürs Tasting, buchen Sie das
              Griechische Haus oder kommen Sie spontan vorbei — wir freuen
              uns auf Sie.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/kontakt#reservierung"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-display font-bold tracking-wide rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Anfrage senden
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-primary font-display font-bold tracking-wide rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
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

export default Weinforum;
