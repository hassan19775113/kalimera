import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';
import HeroVideo from '../components/HeroVideo';

const Raeumlichkeiten = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const venues = [
    {
      id: 'symposium',
      name: 'Symposium',
      tagline: 'Bankettsaal · 1. Etage',
      capacity: '10 – 100',
      area: 'großzügig',
      description:
        'Unser exklusiver Bankettsaal in der ersten Etage – ideal für geschlossene Gesellschaften, Betriebsfeiern, Tagungen und besondere Anlässe.',
      features: ['Komplette Tagungstechnik', 'Flexible Bestuhlung', 'Eigene Bar', 'Klimatisiert'],
      image: '/startseite_haus_interieur_2.jpg.webp',
    },
    {
      id: 'tagungsraum-1',
      name: 'Tagungsraum I',
      tagline: 'Klein & fokussiert',
      capacity: 'bis 16',
      area: '27 m²',
      description:
        'Kompakt und konzentriert — der ideale Raum für Workshops, Vorstandssitzungen und Beratungsgespräche im kleinen Kreis.',
      features: ['Beamer & Leinwand', 'Flipchart', 'WLAN', 'Moderationskoffer'],
      image: '/kamimera-raemlichkeiten-1.png',
    },
    {
      id: 'tagungsraum-2',
      name: 'Tagungsraum II',
      tagline: 'Klimatisiert · Flexibel',
      capacity: 'bis 26',
      area: '45 m²',
      description:
        'Großzügig dimensioniert für Konferenzen, Schulungen und Präsentationen. Vollklimatisiert für ungestörte Arbeitsatmosphäre.',
      features: ['Klimatisiert', 'Flexible Bestuhlung', 'Beamer & Sound', 'Pinwand'],
      image: '/wein/wein-2.png',
    },
    {
      id: 'tagungsraum-3',
      name: 'Tagungsraum III',
      tagline: 'Klimatisiert · Premium',
      capacity: 'bis 26',
      area: '45 m²',
      description:
        'Identisch in Ausstattung und Größe wie Raum II — perfekt kombinierbar für parallele Workshops oder Break-Out-Sessions.',
      features: ['Klimatisiert', 'Kombinierbar mit II', 'Komplette Technik', 'Tageslicht'],
      image: '/wein/weinforum_4.jpg',
    },
  ];

  const pauschalen = [
    {
      label: 'Pauschale I',
      title: 'Halbtags',
      tagline: 'Für kompakte Tagungen',
      includes: [
        'Tagungsraum nach Wahl',
        'Komplette Tagungstechnik',
        'Vormittagspause',
        'Kaffee · Tee · Wasser',
        '2 halbe belegte Brötchen p.P.',
      ],
    },
    {
      label: 'Pauschale II',
      title: 'Ganztags',
      tagline: 'Für ausgedehnte Seminare',
      includes: [
        'Tagungsraum nach Wahl',
        'Komplette Tagungstechnik',
        'Apostels Joghurt & Früchte',
        '2-Gang-Wahlmenü',
        'Nachmittagspause mit Kuchen',
      ],
      highlight: true,
    },
  ];

  const iconProps = {
    className: 'w-4 h-4 flex-shrink-0',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
  };

  const anlaesse = [
    {
      name: 'Tagungen',
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M8 3v3M16 3v3M3 10h18" />
        </svg>
      ),
    },
    {
      name: 'Seminare',
      icon: (
        <svg {...iconProps}>
          <path d="M3 20h18M5 20V8l7-4 7 4v12" />
          <path d="M9 14h6" />
        </svg>
      ),
    },
    {
      name: 'Konferenzen',
      icon: (
        <svg {...iconProps}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.5-4.5 3-4.5s3 2 3 4.5" />
        </svg>
      ),
    },
    {
      name: 'Betriebsfeiern',
      icon: (
        <svg {...iconProps}>
          <path d="M7 3v6c0 2 1.5 4 3 4h4c1.5 0 3-2 3-4V3M5 3h14M10 13v8M14 13v8M8 21h8" />
        </svg>
      ),
    },
    {
      name: 'Kindergeburtstage',
      icon: (
        <svg {...iconProps}>
          <path d="M4 20h16v-7H4zM6 13v-3a2 2 0 012-2h8a2 2 0 012 2v3M12 8V4M10 4h4" />
        </svg>
      ),
    },
    {
      name: 'Vernissagen',
      icon: (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M4 18l4-4 4 4 4-4 4 4" />
        </svg>
      ),
    },
    {
      name: 'Weinproben',
      icon: (
        <svg {...iconProps}>
          <path d="M7 3h10l-1.5 9a3.5 3.5 0 01-7 0L7 3z" />
          <path d="M12 15.5V21M9 21h6" />
        </svg>
      ),
    },
    {
      name: 'Geschäftsessen',
      icon: (
        <svg {...iconProps}>
          <path d="M7 2v8a2 2 0 01-2 2H4v10M7 6h.01M17 2c-1.5 0-3 1-3 3v5h2v12h2V2z" />
        </svg>
      ),
    },
    {
      name: 'Workshops',
      icon: (
        <svg {...iconProps}>
          <path d="M14.7 6.3l3 3-9 9-4 1 1-4 9-9zM13 8l3 3" />
        </svg>
      ),
    },
    {
      name: 'Schulungen',
      icon: (
        <svg {...iconProps}>
          <path d="M3 9l9-5 9 5-9 5-9-5z" />
          <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5M21 9v7" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: 'Tagungstechnik',
      description: 'Beamer, Leinwand, Flipchart, Pinwand, Moderationskoffer und kostenfreies WLAN — alles inklusive.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="10" width="36" height="24" rx="2" />
          <line x1="20" y1="38" x2="28" y2="38" />
          <line x1="14" y1="42" x2="34" y2="42" />
          <circle cx="24" cy="22" r="5" />
        </svg>
      ),
    },
    {
      title: 'Mediterrane Küche',
      description:
        'Auf Wunsch mit unserer authentischen griechischen Küche – vom Kaffeepause-Buffet bis zum festlichen Menü.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 8v32" />
          <path d="M22 8v18a4 4 0 0 1-8 0V8" />
          <path d="M34 8c-2 0-4 2-4 6v12h4v14" />
        </svg>
      ),
    },
    {
      title: 'Persönliche Beratung',
      description:
        'Wir planen Ihr Event individuell — von der ersten Anfrage über die Raumauswahl bis zur Durchführung.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 20c0 8.837-7.163 16-16 16-1.748 0-3.43-.28-5.005-.8L8 40l4.8-10.995C12.28 27.43 12 25.748 12 24c0-8.837 7.163-16 16-16" />
          <circle cx="24" cy="24" r="2" />
          <circle cx="32" cy="24" r="2" />
          <circle cx="16" cy="24" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Räumlichkeiten – Tagungen, Seminare & Events"
        description="Tagungs- und Eventräume im Kalimera Garbsen: Symposium-Saal bis 100 Personen, 3 klimatisierte Tagungsräume, komplette Technik und mediterrane Küche."
        path="/raeumlichkeiten"
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] overflow-hidden bg-black"
      >
        <HeroVideo src="/video_kalimera_raeumlichkeiten_hd_komp.mp4" />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-[5] h-full flex flex-col items-center justify-center px-4 text-center pointer-events-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-bebas tracking-[0.4em] text-gold text-[clamp(0.7rem,1.2vw,1rem)] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            KALIMERA — RÄUMLICHKEITEN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-script text-white text-[clamp(3rem,9vw,8rem)] leading-[0.9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Für jeden
            <br />
            <span className="text-gold">Anlass.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="font-bebas tracking-[0.25em] text-white/90 text-[clamp(0.875rem,1.5vw,1.25rem)] uppercase mt-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Vier Räume · 100 Gäste · Mediterrane Gastfreundschaft
          </motion.p>
        </motion.div>

        {/* Quick-Action Kreise */}
        <>
          {/* Tagungs-Anfrage - Unten Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-30 pointer-events-auto bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a
              href="mailto:tagung@kalimera-hannover.de?subject=Tagungs-Anfrage"
              className="group block"
              aria-label="Tagungs-Anfrage per E-Mail"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Tagungs-Icon */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="10" width="36" height="24" rx="2" />
                      <line x1="20" y1="38" x2="28" y2="38" />
                      <line x1="14" y1="42" x2="34" y2="42" />
                      <circle cx="24" cy="22" r="5" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Tagung
                  </h3>
                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    Anfrage E-Mail
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

      {/* INTRO + STATS */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ EINE EINZIGARTIGE GASTRONOMISCHE REISE
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] mt-4 mb-8">
                Raum für Ihre <br />
                <em className="not-italic text-gold">Geschichte.</em>
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Vom intimen Geschäftsessen bis zur großen Betriebsfeier – unsere
                  Räumlichkeiten in Garbsen passen sich Ihrem Anlass an, nicht
                  umgekehrt. Wählen Sie aus vier individuellen Räumen, kombinieren
                  Sie sie nach Bedarf.
                </p>
                <p className="font-display font-medium text-primary">
                  Den besten Service allerdings, bekommen Sie bei uns.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {[
                { value: '4', label: 'Räume' },
                { value: '100', label: 'Gäste · max.' },
                { value: '27–45', label: 'Quadratmeter' },
                { value: '2', label: 'Pauschalen' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-gold/30 rounded-2xl p-6 bg-gradient-to-br from-white to-gold/5 hover:border-gold/60 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="font-bebas text-gold text-[clamp(2rem,4vw,3.5rem)] leading-none group-hover:scale-110 origin-left transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="font-display font-semibold tracking-wider uppercase text-primary text-xs mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dezenter Akzent */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* RÄUME — alternierendes Layout */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ UNSERE RÄUMLICHKEITEN</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Vier Räume,
              <br className="md:hidden" /> ein Versprechen
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="space-y-20 md:space-y-32">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? 'lg:[direction:ltr]' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
                  >
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2 font-bebas text-primary tracking-wider text-sm shadow-lg">
                      0{index + 1}
                    </div>
                  </motion.div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? 'lg:[direction:ltr]' : ''
                  }`}
                >
                  <span className="font-bebas tracking-[0.25em] text-gold text-sm">
                    {venue.tagline}
                  </span>
                  <h3 className="font-script text-primary text-[clamp(2.25rem,4vw,3.5rem)] leading-none mt-2 mb-6">
                    {venue.name}
                  </h3>

                  <div className="flex gap-6 mb-6 pb-6 border-b border-gold/20">
                    <div>
                      <div className="font-bebas text-gold text-3xl leading-none">
                        {venue.capacity}
                      </div>
                      <div className="font-display text-xs uppercase tracking-wider text-gray-500 mt-1">
                        Personen
                      </div>
                    </div>
                    <div className="w-px bg-gold/20" />
                    <div>
                      <div className="font-bebas text-gold text-3xl leading-none">
                        {venue.area}
                      </div>
                      <div className="font-display text-xs uppercase tracking-wider text-gray-500 mt-1">
                        Größe
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3">
                    {venue.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAGUNGSPAUSCHALEN */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        {/* Hintergrund-Akzente */}
        <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-gold/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ TAGUNGSPAUSCHALEN</span>
            <h2 className="font-bebas uppercase text-white text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Alles inklusive
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              Wählen Sie das Paket, das zu Ihrem Tag passt — wir kümmern uns um den Rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pauschalen.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 md:p-12 transition-all duration-500 ${
                  p.highlight
                    ? 'bg-gradient-to-br from-gold via-yellow-500 to-gold text-primary shadow-[0_20px_60px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 border border-white/15 backdrop-blur-sm hover:bg-white/10'
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-8 bg-primary text-gold font-bebas tracking-widest text-xs px-4 py-1.5 rounded-full">
                    EMPFEHLUNG
                  </div>
                )}
                <div
                  className={`font-bebas tracking-[0.25em] text-sm ${
                    p.highlight ? 'text-primary/80' : 'text-gold'
                  }`}
                >
                  {p.label}
                </div>
                <h3
                  className={`font-script text-[clamp(2.5rem,5vw,4rem)] leading-none mt-2 mb-2 ${
                    p.highlight ? 'text-primary' : 'text-white'
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mb-8 ${
                    p.highlight ? 'text-primary/70' : 'text-white/70'
                  }`}
                >
                  {p.tagline}
                </p>

                <ul className="space-y-3">
                  {p.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 ${
                        p.highlight ? 'text-primary' : 'text-white/90'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          p.highlight ? 'text-primary' : 'text-gold'
                        }`}
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

          <p className="text-center text-white/60 text-sm mt-10 italic">
            Räume können auch ohne Verzehr gebucht werden. Sprechen Sie uns an.
          </p>
        </div>
      </section>

      {/* ANLÄSSE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ FÜR JEDEN ANLASS</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Was möchten Sie feiern?
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {anlaesse.map((anlass, i) => (
              <motion.div
                key={anlass.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-gold/40 bg-gradient-to-br from-white to-gold/5 font-display font-semibold text-primary tracking-wide cursor-default hover:border-gold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                <span className="text-gold">{anlass.icon}</span>
                <span>{anlass.name}</span>
              </motion.div>
            ))}
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
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ INKLUSIVE</span>
            <h2 className="font-bebas uppercase text-primary text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Was wir mitbringen
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
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/startseite_haus_interieur_2.jpg.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ JETZT ANFRAGEN
            </span>
            <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
              Lassen Sie uns über
              <br />
              <span className="text-gold">Ihren Anlass</span> reden.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-10">
              Unverbindliche Beratung, Besichtigung der Räume und individuelle
              Angebote — wir sind für Sie da.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt#reservierung"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Anfrage senden
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="mailto:tagung@kalimera-hannover.de"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-display font-bold tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                tagung@kalimera-hannover.de
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Raeumlichkeiten;
