import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';

const OligoMarkt = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  // Bento-Layout für die Produktkategorien
  const categories = [
    {
      name: 'Wein',
      tagline: 'Aus Griechenland & Italien',
      desc: 'Sorgfältig ausgewählte Weine — auch frisch aus unserer Zapfanlage abgefüllt.',
      image: '/OligoMarket/wine.jpg.webp',
      span: 'md:col-span-7',
    },
    {
      name: 'Olivenöl',
      tagline: 'Das Gold der Griechen',
      desc: 'Natives Partheno-Olivenöl, exklusiv aus der Mani auf der Peloponnes — handgeerntet.',
      image: '/OligoMarket/olivka.jpg.webp',
      span: 'md:col-span-5',
    },
    {
      name: 'Käse',
      tagline: 'Mediterrane Auswahl',
      desc: 'Feta, Manouri, Halloumi & mehr aus traditioneller Herstellung.',
      image: '/OligoMarket/cheese.jpg.webp',
      span: 'md:col-span-4',
    },
    {
      name: 'Brot',
      tagline: 'Aus eigener Bäckerei',
      desc: 'Frisch gebacken im hauseigenen Steinofen, jeden Tag.',
      image: '/OligoMarket/bread.jpg.webp',
      span: 'md:col-span-4',
    },
    {
      name: 'Gemüse',
      tagline: 'Aus eigener Finca',
      desc: 'Sonnengereiftes Gemüse direkt aus unserer Finca in Spanien.',
      image: '/OligoMarket/vegetables.jpg.webp',
      span: 'md:col-span-4',
    },
    {
      name: 'Fleisch',
      tagline: 'Spezial-Wurst',
      desc: 'Charakterstarke Wurstspezialitäten — ein Geheimtipp aus Katalonien.',
      image: '/OligoMarket/meat.jpg.webp',
      span: 'md:col-span-6',
    },
    {
      name: 'Fisch',
      tagline: 'Mediterrane Vielfalt',
      desc: 'Fangfrische Spezialitäten und Konserven aus dem Mittelmeer.',
      image: '/OligoMarket/fish.jpg.webp',
      span: 'md:col-span-6',
    },
  ];

  const apostelsItems = [
    'Joghurt mit probiotischen Kulturen',
    'Zaziki nach Familienrezept',
    'Sour Cream & Crème Fraîche',
    'Tarama (Fischrogen-Creme)',
    'Hausgemachte Marmeladen',
    'Pasta-Spezialitäten',
  ];

  const services = [
    {
      title: 'Zapfanlage',
      desc: 'Wein und Olivenöl frisch vor Ort abgefüllt — bringen Sie Ihre Flasche mit.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6h12v8H18z" />
          <path d="M16 14h16v28a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" />
          <path d="M22 22v12" />
          <path d="M26 22v12" />
        </svg>
      ),
    },
    {
      title: 'Geschenkkörbe',
      desc: 'Auf Anfrage stellen wir individuelle Geschenkkörbe für jeden Anlass zusammen.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h36l-4 22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z" />
          <path d="M14 18l8-12 8 12" />
          <path d="M30 18l8-12" />
        </svg>
      ),
    },
    {
      title: 'Persönliche Beratung',
      desc: 'Wir kennen jedes Produkt persönlich und finden das passende Stück Griechenland für Sie.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
          <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Oligo-Markt – Griechische Delikatessen & Feinkost"
        description="Oligo-Markt im Kalimera Garbsen: Olivenöl aus der Mani, Apostels-Sortiment, Wein aus der Zapfanlage, Käse, Wurst, Brot aus eigener Bäckerei und Gemüse aus eigener Finca."
        path="/oligo-markt"
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
            poster="/OligoMarket/oligo_1-1.jpg.webp"
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
            EIN STÜCK GRIECHENLAND ZUM MITNEHMEN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-script text-white text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Oligo-<span className="text-gold">Markt</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-bebas tracking-[0.25em] text-white text-[clamp(0.875rem,1.6vw,1.4rem)] uppercase mt-6 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Mediterrane Feinkost · Eigene Marke · Kuratiert
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
          {/* Anfrage / Geschenkkörbe - Unten Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-20 bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a
              href="mailto:service@kalimera-hannover.de?subject=Anfrage%20Oligo-Markt"
              className="group block"
              aria-label="Anfrage per E-Mail"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Geschenkkorb-Icon */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18h36l-4 22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z" />
                      <path d="M14 18l8-12 8 12" />
                      <path d="M30 18l8-12" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Anfrage
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    Geschenkkörbe
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

      {/* KONZEPT — "Oligo heißt..." */}
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
                Oligo heißt
                <br />
                <em className="not-italic text-gold">nicht mehr als wir brauchen.</em>
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Unser kleiner Tresen direkt neben der Brasserie ist kein
                  klassischer Supermarkt. Wir kuratieren — wir wählen aus, was
                  uns selbst überzeugt: ehrlich, unverfälscht, mit Charakter.
                </p>
                <p>
                  Manches stammt aus unserer eigenen Produktion, anderes aus
                  langjährigen Partnerschaften mit kleinen Manufakturen rund
                  ums Mittelmeer. Was bei uns im Regal steht, hat seinen Platz
                  verdient.
                </p>
                <p className="font-display font-medium text-primary italic">
                  „Nehmen Sie sich ein Stück Griechenland mit nach Hause."
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
                  src="/OligoMarket/oligo_markt_essen_2.jpg.webp"
                  alt="Oligo-Markt"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                  <div className="font-script text-gold text-3xl leading-none">Oligo</div>
                  <div className="font-display text-xs uppercase tracking-wider text-primary mt-1">
                    griech. — wenig
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-primary/95 backdrop-blur-sm rounded-full px-5 py-2.5 text-white">
                  <span className="font-bebas tracking-widest text-sm">KURATIERT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -left-32 top-1/3 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* PRODUKTKATEGORIEN — Bento Grid */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ UNSER SORTIMENT</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Sieben Welten,
              <br className="md:hidden" /> ein Markt
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 max-w-7xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] md:aspect-auto md:h-[320px] ${cat.span}`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                  <span className="font-bebas tracking-[0.25em] text-gold text-xs md:text-sm">
                    {cat.tagline.toUpperCase()}
                  </span>
                  <h3 className="font-script text-[clamp(2rem,3.5vw,3.5rem)] leading-none mt-1 mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-white/85 text-sm md:text-base max-w-lg leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OLIVENÖL HIGHLIGHT */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 bg-origin-border bg-right bg-contain opacity-100 bg-no-repeat"
          style={{ backgroundImage: 'url(/kalimera-olivenöl.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/35 to-primary/0" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ HANDGEERNTET · MANI · PELOPONNES
              </span>
              <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
                Olivenöl —
                <br />
                <span className="text-gold">das Gold der Griechen.</span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-2xl">
                Unser <strong className="text-gold font-semibold">Partheno</strong> stammt
                exklusiv aus der Mani auf der Peloponnes — einer Region, deren
                karger Boden und mediterrane Sonne Oliven von außergewöhnlicher
                Tiefe hervorbringen. Jede Frucht wird von Hand geerntet, jede
                Flasche trägt diese Sorgfalt in sich.
              </p>
              <p className="text-white/70 italic">
                Probieren — und schmecken, was 3.000 Jahre Olivenkultur bedeuten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APOSTELS — Hausmarke */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ UNSERE MARKE</span>
            <h2 className="font-script text-primary text-[clamp(3rem,7vw,6rem)] leading-[0.95] mt-3">
              Apostels
            </h2>
            <p className="font-bebas tracking-[0.25em] text-gold text-lg mt-4">
              EIN GENUSS MIT TRADITION
            </p>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Seit über zwei Jahrzehnten steht <strong className="text-primary">Apostels</strong> für
                authentische griechische Manufaktur-Qualität. Was als
                Familientradition begann, ist heute unser Versprechen an Sie:
                ehrliche Zutaten, langsam verarbeitet, ohne unnötige Zusätze.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {apostelsItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img
                  src="/OligoMarket/cheese.jpg.webp"
                  alt="Apostels"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-script text-4xl leading-none drop-shadow-lg">
                    20+
                  </div>
                  <div className="font-bebas tracking-widest text-sm mt-1 drop-shadow-lg">
                    JAHRE TRADITION
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ MEHR ALS NUR EIN MARKT</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Was uns besonders macht
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 text-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="w-10 h-10 block">{service.icon}</span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/OligoMarket/oligo_1-1.jpg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/0 to-primary/0" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ BESUCHEN SIE UNS</span>
            <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
              Stöbern, schmecken,
              <br />
              <span className="text-gold">mitnehmen.</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-10">
              Direkt neben der Brasserie — kommen Sie vorbei, lassen Sie sich
              beraten und entdecken Sie unsere Spezialitäten persönlich.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Anfahrt &amp; Kontakt
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to="/brasserie"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-display font-bold tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Zur Brasserie
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OligoMarkt;
