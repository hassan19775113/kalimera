import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';
import { CONTACT_INFO } from '../utils/constants';

const Restaurant = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const apostelsKlassiker = [
    {
      name: 'Apostels Zaziki',
      desc: 'Frische Gurken, Knoblauch, Olivenöl aus Mani und der hauseigene Joghurti — der Klassiker schlechthin.',
    },
    {
      name: 'Apostels Joghurti',
      desc: 'Gerührter und konzentrierter Joghurt, nach griechischer Tradition verarbeitet, mit probiotischen Kulturen.',
    },
    {
      name: 'Apostels Sour Cream',
      desc: 'Cremig, mild und mit extra nativem Olivenöl angereichert — vielseitig zu Mezze und Brot.',
    },
    {
      name: 'Apostels Tarama',
      desc: 'Eine griechische Fischcreme mit besonders edlem Genuss — Tradition in jeder Komposition.',
    },
  ];

  const hausweine = [
    {
      name: 'Moschofilero',
      type: 'Weißwein',
      origin: 'Peloponnes',
      desc: 'Aromatisch frisch mit floralen Noten — perfekter Begleiter zu Mezze und Fisch.',
      color: 'from-yellow-50 to-amber-100',
      accent: 'text-amber-700',
      light: true,
    },
    {
      name: 'Agiorgitiko',
      type: 'Rotwein',
      origin: 'Peloponnes',
      desc: 'Charakterstark, samtig, mit reifer Frucht — der griechische Klassiker zu Fleisch und Käse.',
      color: 'from-red-900 to-red-950',
      accent: 'text-red-200',
    },
  ];

  const angebote = [
    {
      title: 'Familienmenü',
      desc: 'Bis 20:30 Uhr — bei Kaffeemenüs gibt es für Kinder eine Kugel Kalimera-Joghurteis gratis.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="6" />
          <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" />
          <circle cx="14" cy="20" r="3" />
          <circle cx="34" cy="20" r="3" />
        </svg>
      ),
    },
    {
      title: 'Mittagstisch',
      desc: 'Wechselnde Tagesgerichte — schnell, frisch und perfekt für die Mittagspause.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l6 4" />
        </svg>
      ),
    },
    {
      title: 'Junge Genießer',
      desc: 'Spezielle Angebote für junge Leute — entspannt, authentisch und budgetfreundlich.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8h16l4 8H12z" />
          <path d="M12 16h24v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z" />
          <path d="M20 24v8" />
          <path d="M28 24v8" />
        </svg>
      ),
    },
  ];

  const galleryImages = [
    '/resturant/taverne_essen_1.jpg.webp',
    '/resturant/taverne_essen_2.jpg.webp',
    '/resturant/startseite_essen_3.jpg.webp',
    '/resturant/taverne_1.jpg.webp',
  ];

  return (
    <>
      <SEO
        title="Restaurant – Griechische & mediterrane Spezialitäten"
        description="Restaurant Kalimera in Garbsen: Frischer Fisch vom Fischerboot, Apostels-Hausmarke, griechische Hausweine vom Peloponnes, Olivenöl aus Mani."
        path="/restaurant"
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
            poster="/resturant/taverne_1.jpg.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video_kalimera_startseite_hd_komp.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-[5] h-full flex flex-col items-center justify-center px-4 text-center pointer-events-none"
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
            Restaurant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-bebas tracking-[0.25em] text-white text-[clamp(0.875rem,1.6vw,1.4rem)] uppercase mt-6 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Griechische &amp; mediterrane Spezialitäten
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
          {/* Speisekarte - Unten Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-30 pointer-events-auto bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a
              href="/resturant/speisekarte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Speisekarte als PDF öffnen"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Dokument-Icon */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 4h20l8 8v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
                      <path d="M30 4v8a2 2 0 0 0 2 2h8" />
                      <line x1="18" y1="22" x2="32" y2="22" />
                      <line x1="18" y1="30" x2="28" y2="30" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Speisekarte
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    À la Carte
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
            className="absolute z-30 pointer-events-auto bottom-[clamp(3.2rem,5.6vw,6.7rem)] right-[clamp(0.5rem,4vw,6rem)]"
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

      {/* INTRO + KONZEPT */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ DAS KONZEPT
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-8">
                Wo Griechenland
                <br />
                <em className="not-italic text-gold">auf das Mittelmeer trifft.</em>
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Neben traditioneller griechischer Küche überrascht unsere
                  Speisekarte auch mit leckeren Gerichten aus dem Süden Europas.
                  Mediterrane Einflüsse aus <strong className="text-primary">Italien</strong>
                  &nbsp;und <strong className="text-primary">Spanien</strong> sowie
                  ausgesuchte griechische Weine sorgen für Gaumenfreuden, die
                  begeistern.
                </p>
                <p className="font-display font-medium text-primary italic border-l-2 border-gold pl-4">
                  „Die mediterrane Küche ist die Basis — oft für neue Kreationen,
                  ab und zu mit Einflüssen aus anderen Ländern."
                </p>
                <p>
                  Frische Zutaten aus eigener Finca in Spanien, Olivenöl direkt
                  aus der Mani, hauseigene Apostels-Manufaktur und Brot aus der
                  eigenen Bäckerei — bei uns kommt nur auf den Tisch, was wir
                  mit gutem Gewissen empfehlen können.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/resturant/taverne_1.jpg.webp"
                  alt="Restaurant Kalimera"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                  <div className="font-script text-gold text-3xl leading-none">Taverna</div>
                  <div className="font-display text-xs uppercase tracking-wider text-primary mt-1">
                    Griechische Tradition
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-primary/95 backdrop-blur-sm rounded-full px-5 py-2.5 text-white">
                  <span className="font-bebas tracking-widest text-sm">FRISCH · ECHT · MEDITERRAN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -left-32 top-1/2 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* FISCH VOM FISCHERBOOT — Story-Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/resturant/taverne_essen_1.jpg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ DAS HIGHLIGHT
              </span>
              <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
                Fisch vom
                <br />
                <span className="text-gold">Fischerboot.</span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">
                Auf einem alten Fischerboot werden unsere Fische ganz frisch
                zubereitet — am Stück auf Bambusstäben in der
                <strong className="text-gold"> Holzkohleglut </strong>
                gegrillt. Eine Methode, die auf griechischen Inseln seit
                Generationen für unverwechselbares Aroma sorgt.
              </p>
              <p className="text-white/70 italic">
                Schmecken — und verstehen, warum wir es nicht anders machen.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  {['🐟', '🔥', '🌿'].map((emoji, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-full bg-gold/30 border-2 border-gold flex items-center justify-center text-2xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="font-bebas tracking-[0.2em] text-gold text-sm">
                  FANGFRISCH · BAMBUS · HOLZKOHLE
                </div>
              </div>
            </motion.div>

            {/* Kleines Bild rechts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 flex lg:justify-end"
            >
              <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/40">
                <img
                  src="/resturant/fisch.jpg"
                  alt="Frisch gegrillter Fisch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
                  <div className="font-bebas text-gold tracking-widest text-xs">FANGFRISCH</div>
                  <div className="font-script text-primary text-2xl leading-none mt-1">vom Boot</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APOSTELS KLASSIKER */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ HAUSMARKE · APOSTELS
            </span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Vier Klassiker,
              <br className="md:hidden" /> ein Versprechen
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-gray-600 max-w-xl mx-auto mt-6">
              Authentisch griechisch, in unserer eigenen Manufaktur hergestellt
              — auf Ihrem Teller im Restaurant und im Oligo-Markt zum Mitnehmen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {apostelsKlassiker.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative p-7 rounded-3xl bg-gradient-to-br from-white to-gold/5 border border-gold/30 shadow-lg hover:shadow-2xl hover:border-gold/60 transition-all duration-500 group"
              >
                <div className="absolute top-4 right-4 font-bebas text-gold/40 group-hover:text-gold/80 text-4xl transition-colors">
                  0{i + 1}
                </div>
                <div className="font-bebas tracking-[0.2em] text-gold text-xs">
                  HAUSMARKE
                </div>
                <h3 className="font-script text-primary text-3xl leading-none mt-2 mb-4">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAUSWEINE */}
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
              ◆ HAUSWEINE · PELOPONNES
            </span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Direkt aus Griechenland
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-gray-600 max-w-xl mx-auto mt-6 italic">
              „Der Wein erwärmt die Herzen der Menschen — heute sagt man in
              Griechenland: er macht den Alten zum Helden."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hausweine.map((wein, i) => (
              <motion.div
                key={wein.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${wein.color} aspect-[5/4]`}
              >
                <div className="absolute inset-0 flex items-center justify-end opacity-15 pointer-events-none pr-6">
                  <svg viewBox="0 0 100 200" className="h-full" fill="currentColor">
                    <path d="M40 10h20v40c0 5 5 10 5 25v110c0 5-5 10-10 10H45c-5 0-10-5-10-10V75c0-15 5-20 5-25z" />
                  </svg>
                </div>

                <div className={`relative z-10 h-full p-8 flex flex-col justify-between ${wein.light ? 'text-gray-900' : 'text-white'}`}>
                  <div>
                    <span className={`font-bebas tracking-[0.25em] text-xs ${wein.accent}`}>
                      {wein.type.toUpperCase()} · {wein.origin.toUpperCase()}
                    </span>
                    <h3 className="font-script text-[clamp(2.5rem,4.5vw,4rem)] leading-none mt-2">
                      {wein.name}
                    </h3>
                  </div>
                  <p className={`text-base leading-relaxed max-w-md ${wein.light ? 'text-gray-700' : 'text-white/85'}`}>
                    {wein.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KARTEN — Speisekarte / Weinkarte / Eiskarte */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ UNSERE KARTEN</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Stöbern Sie in Ruhe
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Speisekarte', desc: 'Mezze, Hauptgänge, Mediterran', file: 'speisekarte.pdf' },
              { name: 'Weinkarte', desc: 'Griechisch, Italienisch, Hausweine', file: 'weinkarte.pdf' },
              { name: 'Eiskarte', desc: 'Joghurti-Eis & hausgemachte Sorten', file: 'eiskarte.pdf' },
            ].map((karte, i) => (
              <motion.a
                key={karte.name}
                href={`/resturant/${karte.file}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="block p-8 rounded-3xl border-2 border-gold/30 hover:border-gold bg-gradient-to-br from-white to-gold/5 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4h20l8 8v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
                    <path d="M30 4v8a2 2 0 0 0 2 2h8" />
                    <line x1="18" y1="22" x2="32" y2="22" />
                    <line x1="18" y1="30" x2="28" y2="30" />
                  </svg>
                  <span className="font-bebas tracking-widest text-xs text-gold/60 group-hover:text-gold transition-colors">
                    PDF · ÖFFNEN
                  </span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-2 group-hover:text-gold transition-colors">
                  {karte.name}
                </h3>
                <p className="text-gray-600 text-sm">{karte.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-gold font-bebas tracking-widest text-sm group-hover:gap-4 transition-all">
                  ANSCHAUEN
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ANGEBOTE */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ FÜR JEDEN</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Unsere Angebote
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {angebote.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 text-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="w-10 h-10 block">{item.icon}</span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OLIVENÖL — Storytelling */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ DAS GOLD DER GRIECHEN
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-6">
                Olivenöl —
                <br />
                <em className="not-italic text-gold">Basis von allem.</em>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Olivenöl ist der Grundstein für eine gesunde Ernährung, die
                auch schmeckt. Ein gutes natives Olivenöl ist Basis in der
                mediterranen Küche.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Unser <strong className="text-primary">Partheno</strong> kommt
                exklusiv aus der <strong className="text-primary">Mani auf der Peloponnes</strong>:
                Kalamata-Oliven, manuelle Ernte, kalt gepresst.
              </p>
              <p className="text-gray-500 italic border-l-2 border-gold pl-4">
                „Im Streit zwischen Poseidon und Athene gewann der Olivenbaum
                die Stadt." — Griechische Mythologie als gelebte Tradition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20">
                <img
                  src="/resturant/taverne_essen_2.jpg.webp"
                  alt="Mediterrane Küche"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-script text-4xl leading-none drop-shadow-lg">
                    Mani
                  </div>
                  <div className="font-bebas tracking-widest text-sm mt-1 drop-shadow-lg">
                    PELOPONNES · HANDGEERNTET
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
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
              Atmosphäre &amp; Genuss
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {galleryImages.map((src, i) => (
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
                  alt={`Restaurant ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/resturant/taverne_1.jpg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ TISCH RESERVIEREN
            </span>
            <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
              Wir freuen uns
              <br />
              auf <span className="text-gold">Ihren Besuch.</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-10">
              Reservieren Sie Ihren Tisch — oder schauen Sie spontan vorbei.
              Unsere Qualität und der Service sind uns wichtig.
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

export default Restaurant;
