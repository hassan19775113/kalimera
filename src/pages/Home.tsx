import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import AccentDivider from '../components/AccentDivider';
import { SITE_INFO, CONTACT_INFO } from '../utils/constants';

const Home = () => {
  // Marquee — manuelles Scroll-Container, swipe + click funktionieren nativ
  const marqueeRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollMarquee = (direction: 'prev' | 'next') => {
    const el = marqueeRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 400;
    el.scrollBy({
      left: direction === 'next' ? cardWidth + 24 : -(cardWidth + 24),
      behavior: 'smooth',
    });
  };

  const scrollTestimonials = (direction: 'prev' | 'next') => {
    const el = testimonialsRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 320;
    el.scrollBy({
      left: direction === 'next' ? cardWidth + 16 : -(cardWidth + 16),
      behavior: 'smooth',
    });
  };

  const testimonials = [
    {
      id: 1,
      name: 'Maria Schmidt',
      rating: 5,
      text: 'Absolut fantastisch! Das beste griechische Restaurant in der Region. Die Atmosphäre ist einzigartig und das Essen schmeckt wie bei Oma in Griechenland.',
      date: 'Vor 2 Wochen',
      avatar: 'MS'
    },
    {
      id: 2,
      name: 'Thomas Müller',
      rating: 5,
      text: 'Wir haben unsere Hochzeit hier gefeiert - es war perfekt! Das Team hat sich um alles gekümmert und unsere Gäste waren begeistert.',
      date: 'Vor 1 Monat',
      avatar: 'TM'
    },
    {
      id: 3,
      name: 'Sofia Papadopoulos',
      rating: 5,
      text: 'Als Griechin kann ich sagen: authentischer geht es nicht! Die Weine sind exzellent und die Gastfreundschaft ist herzlich.',
      date: 'Vor 3 Wochen',
      avatar: 'SP'
    },
    {
      id: 4,
      name: 'Andreas Weber',
      rating: 5,
      text: 'Die Brasserie ist mein Lieblingsort für das Frühstück. Toller Kaffee, frisches Gebäck und freundlicher Service!',
      date: 'Vor 1 Woche',
      avatar: 'AW'
    },
    {
      id: 5,
      name: 'Julia Koch',
      rating: 5,
      text: 'Der Oligo-Markt ist ein Traum für Feinschmecker. Ich kaufe hier regelmäßig Olivenöl und andere Delikatessen.',
      date: 'Vor 2 Wochen',
      avatar: 'JK'
    },
    {
      id: 6,
      name: 'Michael Schneider',
      rating: 5,
      text: 'Hervorragende Küche und exzellente Weinauswahl. Das Weinforum ist perfekt für Weinliebhaber. Sehr zu empfehlen!',
      date: 'Vor 4 Wochen',
      avatar: 'MS'
    }
  ];

  const sections = [
    {
      id: 'restaurant',
      title: 'Restaurant',
      subtitle: 'Griechische & mediterrane Spezialitäten',
      description: 'Authentische griechische Küche, ergänzt um Einflüsse aus Italien und Spanien. Frischer Fisch vom Fischerboot, ausgesuchte Hausweine vom Peloponnes.',
      image: '/kueche_1.jpg',
      link: '/restaurant',
      icon: '🍽️',
      features: ['Frischer Fisch · Holzkohle', 'Hausweine vom Peloponnes', 'Apostels-Hausmarke']
    },
    {
      id: 'brasserie',
      title: 'Brasserie',
      subtitle: 'Ausgewogen & vital in den Tag',
      description: 'Frühstücksbuffet "Metrio" und "Megalo" am Wochenende, frische Backwaren aus dem Steinofen, Kaffee & Kuchen täglich.',
      image: '/fruehstueck_2.jpg.webp',
      link: '/brasserie',
      icon: '☕',
      features: ['Steinofen-Backwaren', 'Apostels Joghurti', 'Kaffeezeit 14:30 – 17:00']
    },
    {
      id: 'oligo-markt',
      title: 'Oligo-Markt',
      subtitle: 'Mediterrane Delikatessen',
      description: 'Entdecken Sie unsere Auswahl an griechischen und mediterranen Spezialitäten zum Mitnehmen.',
      image: '/startseite_markt_1-1.jpg',
      link: '/oligo-markt',
      icon: '🛒',
      features: ['Olivenöl & Oliven', 'Wein & Spirituosen', 'Feinkost']
    },
    {
      id: 'raeumlichkeiten',
      title: 'Räumlichkeiten',
      subtitle: 'Für Ihre Feier',
      description: 'Perfekte Locations für Hochzeiten, Geburtstage und Business-Events. Bis zu 150 Personen.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
      link: '/raeumlichkeiten',
      icon: '🎉',
      features: ['Bis 150 Personen', 'Individuelle Planung', 'Komplettservice']
    },
    {
      id: 'weinforum',
      title: 'Weinforum',
      subtitle: 'Erlesene Weine',
      description: 'Über 200 ausgewählte Weine aus Griechenland und Europa. Weinverkostungen und Beratung.',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=80',
      link: '/weinforum',
      icon: '🍷',
      features: ['200+ Weine', 'Weinverkostungen', 'Fachberatung']
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: CONTACT_INFO.name,
    image: SITE_INFO.ogImage,
    '@id': SITE_INFO.url,
    url: SITE_INFO.url,
    telephone: CONTACT_INFO.phone,
    priceRange: '$$',
    servesCuisine: ['Greek', 'Mediterranean'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      postalCode: CONTACT_INFO.postalCode,
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT_INFO.coordinates.lat,
      longitude: CONTACT_INFO.coordinates.lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '15:00'
    }
  };

  return (
    <>
      <SEO
        description={SITE_INFO.description}
        path="/"
        structuredData={structuredData}
      />


      {/* Hero Section - Welcome */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Video Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video_kalimera_startseite_hd_komp.mp4" type="video/mp4" />
            {/* Fallback Image falls Video nicht lädt */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80)' }}
            />
          </video>
        </motion.div>
        {/* Sonne hinter Kalimera Text */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            className="absolute"
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              rotate: 360,
              scale: 1
            }}
            transition={{ 
              opacity: { duration: 2, delay: 0.4 },
              scale: { duration: 2, delay: 0.4 },
              rotate: { 
                duration: 120, 
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <svg 
              width="1200" 
              height="1200" 
              viewBox="0 0 900 900"
              className="w-full h-auto"
            >
              <defs>
                {/* Gradient für die Sonne */}
                <radialGradient id="heroSunGradient">
                  <stop offset="0%" stopColor="rgb(212, 175, 55)" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="rgb(212, 175, 55)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="rgb(212, 175, 55)" stopOpacity="0.1" />
                </radialGradient>
                
                {/* Blur Filter für weichen Glow */}
                <filter id="heroGlow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Äußere Sonnenstrahlen (lang) */}
              {[...Array(24)].map((_, i) => (
                <line
                  key={`hero-outer-${i}`}
                  x1="450"
                  y1="450"
                  x2="450"
                 // y2="50"
                  stroke="rgb(212, 175, 55)"
                  strokeWidth="2"
                 strokeLinecap="round"
                  transform={`rotate(${i * 15} 450 450)`}
                  opacity="0.08"
                />
              ))}
              
              {/* Mittlere Sonnenstrahlen */}
              {[...Array(24)].map((_, i) => (
                <line
                  key={`hero-mid-${i}`}
                  x1="450"
                  y1="450"
                  x2="450"
                  y2="150"
                  stroke="rgb(212, 175, 55)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${i * 15 + 7.5} 450 450)`}
                  opacity="0.05"
                />
              ))}
              
              {/* Große runde Sonne */}
              <circle
                cx="450"
                cy="450"
                r="380"
                fill="url(#heroSunGradient)"
                filter="url(#heroGlow)"
                opacity={0.09}
              />
              
            </svg>
          </motion.div>
        </div>

        <div className="relative z-[5] h-full flex items-center justify-center px-4 pointer-events-none">
          <div className="text-center max-w-5xl mx-auto">
       
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-script text-white text-[clamp(2.75rem,8vw,7.5rem)] leading-[1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
             <span>Eine einzigartige &amp;</span> 
            <br />
            <span className="text-gold "> Kulinarische Reise.</span>
          </motion.h1>
          </div>
        </div>

        {/* Simple Original Style Menu Buttons */}
        <>
          {/* Reservieren - Oben Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute z-30 pointer-events-auto top-[clamp(5rem,8vw,9rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <Link to="/kontakt#reservierung" className="group block" aria-label="Tisch reservieren">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
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

          {/* Aktuelles Info - Rechts Mitte (auf Mobile höher, auf Desktop mittig) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="hidden sm:block absolute z-30 pointer-events-auto top-[38%] md:top-1/2 md:-translate-y-1/2 right-[clamp(0.5rem,4vw,6rem)]"
          >
            <a href="/StartSeite/aktuelles-mia-kali-mera.pdf" target="_blank" rel="noopener noreferrer" className="group block relative">
              {/* Expanding Ring - Ping Effect */}
              <span className="absolute inset-0 rounded-full border-2 border-primary/70 animate-ping pointer-events-none" />
              <span className="absolute inset-0 rounded-full border border-primary/50 animate-ping pointer-events-none" style={{ animationDelay: '0.6s' }} />

              <motion.div
                whileHover={{ scale: 1.08 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="relative"
              >
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border-2 border-primary/40 pulse-glow flex flex-col items-center justify-center group-hover:border-primary transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/40 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />

                  {/* Info Icon (Sprechblase mit i) */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="24" cy="24" r="20" />
                      <line x1="24" y1="22" x2="24" y2="34" />
                      <circle cx="24" cy="15" r="1.8" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Aktuelles
                  </h3>

                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    Info & Events
                  </p>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Frühstücks Angebot - Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute z-30 pointer-events-auto bottom-[clamp(3.2rem,5.6vw,6.7rem)] left-[clamp(0.5rem,4vw,6rem)]"
          >
            <a href="/StartSeite/kalimera_fruehstueck.pdf" target="_blank" rel="noopener noreferrer" className="group block">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />
                  {/* Sonne */}
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
                    8 – 12 Uhr
                  </p>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Aktuelle Karte - Rechts Oben */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute z-30 pointer-events-auto top-[clamp(5rem,8vw,9rem)] right-[clamp(0.5rem,4vw,6rem)]"
          >
            <a href="/StartSeite/Januar-2026-speisekarte-aktuell-mit-getraenke-3.pdf" target="_blank" rel="noopener noreferrer" className="group block">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />
                  {/* Olivenzweig */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="currentColor">
                      <path
                        d="M24 4 C20 14, 14 20, 6 22 C14 24, 20 30, 24 42"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <ellipse cx="11" cy="14" rx="3" ry="4.5" transform="rotate(-35 11 14)" />
                      <ellipse cx="11" cy="30" rx="3" ry="4.5" transform="rotate(35 11 30)" />
                      <ellipse cx="22" cy="36" rx="3" ry="4.5" />
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

          {/* Mittags Karte - Rechts Unten */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute z-30 pointer-events-auto bottom-[clamp(3.2rem,5.6vw,6.7rem)] right-[clamp(0.5rem,4vw,6rem)]"
          >
            <a href="/StartSeite/mittagskarte-KW-20.pdf" target="_blank" rel="noopener noreferrer" className="group block">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative rounded-full bg-gradient-to-br from-gold via-yellow-500 to-gold border border-primary/30 shadow-[0_8px_32px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500 w-[clamp(5.5rem,11vw,10rem)] h-[clamp(5.5rem,11vw,10rem)] px-[clamp(0.4rem,1.2vw,0.875rem)] overflow-hidden">
                  <div className="absolute inset-[clamp(0.25rem,0.6vw,0.5rem)] rounded-full border border-primary/30 pointer-events-none" />
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] bg-white/40 blur-2xl rounded-full pointer-events-none group-hover:bg-white/60 transition-colors duration-500" />
                  {/* Teller mit Sonnenmotiv */}
                  <div className="relative mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <svg className="relative w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 48 48" fill="currentColor">
                      <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="24" cy="24" r="14" fill="currentColor" opacity="0.2" />
                      <circle cx="24" cy="24" r="4" />
                      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <line x1="24" y1="11" x2="24" y2="14" />
                        <line x1="24" y1="34" x2="24" y2="37" />
                        <line x1="11" y1="24" x2="14" y2="24" />
                        <line x1="34" y1="24" x2="37" y2="24" />
                        <line x1="14.85" y1="14.85" x2="16.97" y2="16.97" />
                        <line x1="31.03" y1="31.03" x2="33.15" y2="33.15" />
                        <line x1="14.85" y1="33.15" x2="16.97" y2="31.03" />
                        <line x1="31.03" y1="16.97" x2="33.15" y2="14.85" />
                      </g>
                    </svg>
                  </div>

                  <div className="flex items-center gap-[clamp(0.2rem,0.5vw,0.4rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-r from-transparent to-primary/70" />
                    <div className="w-[clamp(0.2rem,0.4vw,0.3rem)] h-[clamp(0.2rem,0.4vw,0.3rem)] rotate-45 bg-primary" />
                    <div className="h-px w-[clamp(0.5rem,1.2vw,1rem)] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  <h3 className="font-script text-[clamp(0.875rem,2.2vw,1.75rem)] text-primary leading-none mb-1 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    Mittagskarte
                  </h3>

                  <p className="font-bebas text-[clamp(0.5rem,1vw,0.875rem)] tracking-[clamp(0.15em,0.3vw,0.25em)] text-primary/90 mt-1">
                    12 – 15 Uhr
                  </p>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </>

        {/* Unterschrift Image - Unten Mitte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute inset-x-0 z-10 px-2 bottom-[clamp(1rem,2.5vw,4rem)] flex flex-col items-center gap-[clamp(0.125rem,0.4vw,0.5rem)]"
        >
          <img
            decoding="async"
            width="1920"
            height="267"
            src="https://kalimera-hannover.de/wp-content/uploads/unterschrift.png"
            className="h-[clamp(1.5rem,4vw,3.5rem)] w-auto opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            alt="Kalimera Unterschrift"
            srcSet="https://kalimera-hannover.de/wp-content/uploads/unterschrift.png 1920w, https://kalimera-hannover.de/wp-content/uploads/unterschrift-300x42.png 300w, https://kalimera-hannover.de/wp-content/uploads/unterschrift-1024x142.png 1024w, https://kalimera-hannover.de/wp-content/uploads/unterschrift-768x107.png 768w, https://kalimera-hannover.de/wp-content/uploads/unterschrift-1536x214.png 1536w"
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* WILLKOMMEN — Mia kali mera */}
      <section id="willkommen" className="relative bg-white py-24 md:py-32 overflow-hidden">
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
                ◆ ΚΑΛΗΜΕΡΑ — KALIMERA
              </span>
              <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-6">
                Mia kali mera —
                <br />
                <em className="not-italic text-gold">ein guter Tag.</em>
              </h2>
              <AccentDivider className="mb-8 lg:justify-start [&>img]:lg:mx-0" size="md" />
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Im Kalimera können Sie die Spezialitäten von
                  <strong className="text-primary"> Apostels </strong>
                  und vieles mehr in mediterraner Atmosphäre probieren —
                  Restaurant, Brasserie, Oligo-Markt und Weinforum unter
                  einem Dach.
                </p>
                <p>
                  Eine gelungene Mischung aus Gastronomie, Markt und Treffpunkt —
                  mit hauseigener Bäckerei, eigener Apostels-Manufaktur und
                  frischem Fisch vom Holzkohle-Grill.
                </p>
                <p className="font-display font-medium text-primary italic border-l-2 border-gold pl-4">
                  „Eine einzigartige, kulinarische Reise."
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Mehr entdecken
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/kontakt#reservierung"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary/30 text-primary font-display font-semibold rounded-full hover:bg-primary/5 hover:border-primary transition-all duration-300"
                >
                  Tisch reservieren
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5"
            >
              {[
                {
                  value: 'Apostels',
                  label: 'Hausmarke · seit 20+ Jahren',
                  image: '/OligoMarket/oligo_markt_essen_2.jpg.webp',
                },
                {
                  value: 'Mani',
                  label: 'Olivenöl · Peloponnes',
                  image: '/OligoMarket/olivka.jpg.webp',
                },
                {
                  value: 'Steinofen',
                  label: 'Eigene Bäckerei',
                  image: '/OligoMarket/bread.jpg.webp',
                },
                {
                  value: 'Finca',
                  label: 'Gemüse aus Spanien',
                  image: '/OligoMarket/vegetables.jpg.webp',
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/30 hover:border-gold bg-gradient-to-br from-white to-gold/5 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 min-h-[170px] md:min-h-[210px] cursor-default"
                >
                  {/* Hover-Bild (Hintergrund) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700"
                    style={{ backgroundImage: `url(${stat.image})` }}
                    aria-hidden="true"
                  />
                  {/* Dunkles Gradient-Overlay für Text-Kontrast beim Hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-primary-dark/95 via-primary/75 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    aria-hidden="true"
                  />

                  {/* Inhalt */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                    <div className="font-script text-gold text-3xl md:text-4xl leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.0)] group-hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] transition-all duration-500">
                      {stat.value}
                    </div>
                    <div className="font-display font-semibold tracking-wider uppercase text-primary group-hover:text-white text-[11px] md:text-xs mt-3 transition-colors duration-500">
                      {stat.label}
                    </div>

                    {/* Gold-Akzent-Linie, erscheint bei Hover */}
                    <div className="w-0 group-hover:w-10 h-px bg-gold mt-3 transition-all duration-700" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute -right-32 top-1/3 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* ÖFFNUNGSZEITEN */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-gold/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">◆ WANN WIR FÜR SIE DA SIND</span>
            <h2 className="font-bebas uppercase text-white text-[clamp(2rem,5vw,4rem)] mt-3 leading-tight">
              Öffnungszeiten
            </h2>
            <AccentDivider className="mt-6" size="md" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: 'Restaurant',
                line1: 'Mo – Sa',
                time1: '12:00 – 22:00',
                line2: 'So & Feiertage',
                time2: '12:00 – 21:00',
              },
              {
                title: 'Brasserie · Frühstück',
                line1: 'Samstag · Metrio',
                time1: '9:30 – 12:00',
                line2: 'Sonntag · Megalo',
                time2: '9:30 – 12:00',
              },
              {
                title: 'Kaffee & Kuchen',
                line1: 'Täglich',
                time1: '14:30 – 17:00',
                line2: '5,30 €',
                time2: 'Kaffee + Stück Kuchen',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-gold/40 transition-all duration-500"
              >
                <div className="font-bebas tracking-[0.25em] text-gold text-xs">
                  {card.title.toUpperCase()}
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="font-display text-sm text-white/70">{card.line1}</div>
                    <div className="font-bebas text-2xl text-white tracking-wider mt-0.5">
                      {card.time1}
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="font-display text-sm text-white/70">{card.line2}</div>
                    <div className="font-bebas text-2xl text-white tracking-wider mt-0.5">
                      {card.time2}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/60 text-sm mt-8 italic">
            Feiertage: 24.12. geschlossen · 25./26.12. + 31.12. ab 12:00 · 01.01. geschlossen
          </p>

          {/* Telefon-CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
              className="group inline-flex items-center gap-4 px-7 py-4 bg-white/5 hover:bg-gold/15 border border-gold/40 hover:border-gold rounded-full backdrop-blur-sm transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/20 border border-gold/50 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                <svg
                  className="w-5 h-5 text-gold group-hover:text-primary transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="font-bebas tracking-[0.25em] text-gold text-xs">
                  RUFEN SIE UNS AN
                </div>
                <div className="font-display font-bold text-white text-lg md:text-xl tracking-wide group-hover:text-gold transition-colors duration-300">
                  {CONTACT_INFO.phone}
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE — Endlose Bilder-Schleife */}
      <section className="relative bg-[rgb(214,145,66)] py-16 md:py-24 overflow-hidden">
        {/* Goldglow oben & unten */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gold/10 blur-3xl rounded-full pointer-events-none" />

        <div className="text-center mb-10 md:mb-14 px-4 relative z-10">
          <span className="font-bebas tracking-[0.3em] text-blue-700 text-sm md:text-base">
            ◆ EINBLICKE
          </span>
          <h2 className="font-script text-white text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] mt-3">
            Geschmack in <em className="not-italic text-blue-700">Bildern.</em>
          </h2>
        </div>

        {/* Manueller Scroll-Container — Swipe (nativ) + Click-Pfeile */}
        <div className="relative">
          {/* Prev Button */}
          <button
            type="button"
            onClick={() => scrollMarquee('prev')}
            aria-label="Vorherige Bilder"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-gold/95 hover:bg-gold text-primary flex items-center justify-center shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => scrollMarquee('next')}
            aria-label="Nächste Bilder"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-gold/95 hover:bg-gold text-primary flex items-center justify-center shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll-Container (native Touch-Swipe + JS-Scroll) */}
          <div
            ref={marqueeRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-12 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { src: '/resturant/fisch.jpg', label: 'Frischer Fisch' },
              { src: '/resturant/grill.jpg', label: 'Holzkohle-Grill' },
              { src: '/resturant/steak.jpg', label: 'Steak vom Grill' },
              { src: '/resturant/taverne_essen_1.jpg.webp', label: 'Mediterrane Küche' },
              { src: '/resturant/taverne_essen_2.jpg.webp', label: 'Griechische Mezze' },
              { src: '/resturant/startseite_essen_3.jpg.webp', label: 'Hausgemacht' },
              { src: '/resturant/taverne_1.jpg.webp', label: 'Taverna-Ambiente' },
              { src: '/resturant/resturant-kalimera.jpg', label: 'Restaurant Kalimera' },
            ]
              .concat([
                { src: '/resturant/fisch.jpg', label: 'Frischer Fisch' },
                { src: '/resturant/grill.jpg', label: 'Holzkohle-Grill' },
                { src: '/resturant/steak.jpg', label: 'Steak vom Grill' },
                { src: '/resturant/taverne_essen_1.jpg.webp', label: 'Mediterrane Küche' },
                { src: '/resturant/taverne_essen_2.jpg.webp', label: 'Griechische Mezze' },
                { src: '/resturant/startseite_essen_3.jpg.webp', label: 'Hausgemacht' },
                { src: '/resturant/taverne_1.jpg.webp', label: 'Taverna-Ambiente' },
                { src: '/resturant/resturant-kalimera.jpg', label: 'Restaurant Kalimera' },
              ])
              .map((item, i) => (
                <div
                  key={`${item.src}-${i}`}
                  className="group relative flex-shrink-0 w-[80vw] sm:w-[280px] md:w-[340px] lg:w-[400px] aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gold/20 hover:border-gold/60 transition-all duration-500 select-none snap-center"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    draggable={false}
                    loading="eager"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  {/* Label */}
                  <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                    <span className="font-bebas tracking-[0.25em] text-gold text-xs md:text-sm">
                      ◆ KALIMERA
                    </span>
                    <h3 className="font-script text-white text-2xl md:text-3xl leading-none mt-1 drop-shadow-lg">
                      {item.label}
                    </h3>
                  </div>
                </div>
              ))}
          </div>

          {/* Sanfte Fade-Ränder links/rechts */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-amber-700 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-amber-700 to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* UNSERE KARTEN — PDF-Downloads */}
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
            <p className="text-gray-600 max-w-xl mx-auto mt-6">
              Speise-, Mittags-, Frühstücks- und Getränkekarte als PDF —
              jederzeit zum Anschauen oder Mitnehmen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              {
                name: 'Speisekarte',
                desc: 'Aktuell mit Getränken',
                badge: 'Januar 2026',
                file: 'Januar-2026-speisekarte-aktuell-mit-getraenke-3.pdf',
              },
              {
                name: 'Mittagskarte',
                desc: 'Wechselt wöchentlich',
                badge: 'KW 20',
                file: 'mittagskarte-KW-20.pdf',
              },
              {
                name: 'Frühstück',
                desc: 'Buffet & Auswahl',
                badge: 'Sa & So',
                file: 'kalimera_fruehstueck.pdf',
              },
              {
                name: 'Getränke',
                desc: 'Wein, Cocktails, Klassiker',
                badge: 'Karte',
                file: 'kalimera_getraenkekarten_wickelfalz.pdf',
              },
            ].map((karte, i) => (
              <motion.a
                key={karte.name}
                href={`/StartSeite/${karte.file}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="block p-7 rounded-3xl border-2 border-gold/30 hover:border-gold bg-gradient-to-br from-white to-gold/5 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <svg className="w-11 h-11 text-gold" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4h20l8 8v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
                    <path d="M30 4v8a2 2 0 0 0 2 2h8" />
                    <line x1="18" y1="22" x2="32" y2="22" />
                    <line x1="18" y1="30" x2="28" y2="30" />
                  </svg>
                  <span className="font-bebas tracking-widest text-[10px] text-gold/70 group-hover:text-gold transition-colors bg-gold/10 px-2.5 py-1 rounded-full">
                    {karte.badge}
                  </span>
                </div>
                <h3 className="font-script text-primary text-3xl mb-1 group-hover:text-gold transition-colors">
                  {karte.name}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{karte.desc}</p>

                <div className="flex items-center gap-2 text-gold font-bebas tracking-widest text-xs group-hover:gap-3 transition-all">
                  PDF · ÖFFNEN
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 italic">
            Hinweis: Mittagskarte wechselt jede Woche — die Datei wird laufend aktualisiert.
          </p>
        </div>
      </section>

      {/* Sections Grid - Kacheln Layout */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sections.map((section, index) => {
              // Verschiedene Höhen für Kacheln - letzte 2 höher
              const cardHeights = [
                'min-h-[420px] md:min-h-[600px]',
                'min-h-[420px] md:min-h-[550px]',
                'min-h-[420px] md:min-h-[650px]',
                'min-h-[480px] md:min-h-[700px]',
                'min-h-[480px] md:min-h-[700px]',
              ];
              
              // Letzte 2 Kacheln volle Breite
              const spanClass = index >= 3 ? 'md:col-span-2 lg:col-span-3' : '';
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`${cardHeights[index]} ${spanClass} group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:scale-[1.02]`}
                >
                  {index >= 3 ? (
                    /* MODERN SPLIT-SCREEN LAYOUT für die letzten 2 Kacheln */
                    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                      {/* Bild-Seite (links für index 3, rechts für index 4) */}
                      <motion.div
                        className={`relative min-h-[300px] md:min-h-full md:col-span-7 overflow-hidden ${
                          index === 4 ? 'md:order-2' : ''
                        }`}
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                          backgroundImage: `url(${section.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        {/* Rotierende SVG-Sonne */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 1.2 }}
                          aria-hidden="true"
                        >
                          <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                            className="w-[140%] h-[140%] max-w-none"
                            viewBox="0 0 900 900"
                          >
                            <defs>
                              <radialGradient id={`sunGradient-${index}`}>
                                <stop offset="0%" stopColor="rgb(212, 175, 55)" stopOpacity="0.45" />
                                <stop offset="50%" stopColor="rgb(212, 175, 55)" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="rgb(212, 175, 55)" stopOpacity="0.1" />
                              </radialGradient>
                              <filter id={`sunGlow-${index}`}>
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feMerge>
                                  <feMergeNode in="coloredBlur" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                            </defs>

                            {/* Äußere Sonnenstrahlen (lang) */}
                            {[...Array(24)].map((_, i) => (
                              <line
                                key={`outer-${i}`}
                                x1="450"
                                y1="450"
                                x2="450"
                                y2="50"
                                stroke="rgb(212, 175, 55)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                transform={`rotate(${i * 15} 450 450)`}
                                opacity="0.4"
                              />
                            ))}

                            {/* Mittlere Sonnenstrahlen */}
                            {[...Array(24)].map((_, i) => (
                              <line
                                key={`mid-${i}`}
                                x1="450"
                                y1="450"
                                x2="450"
                                y2="150"
                                stroke="rgb(212, 175, 55)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                transform={`rotate(${i * 15 + 7.5} 450 450)`}
                                opacity="0.55"
                              />
                            ))}

                            {/* Sonnenscheibe mit Glow */}
                            <circle
                              cx="450"
                              cy="450"
                              r="380"
                              fill={`url(#sunGradient-${index})`}
                              filter={`url(#sunGlow-${index})`}
                              opacity="0.6"
                            />
                          </motion.svg>
                        </motion.div>

                        {/* Großer Nummern-Wasserzeichen */}
                        <span
                          className={`absolute font-script text-white/35 leading-none drop-shadow-2xl select-none pointer-events-none text-[clamp(5rem,12vw,11rem)] ${
                            index === 4 ? 'top-6 right-8' : 'top-6 left-8'
                          }`}
                          aria-hidden="true"
                        >
                          0{index + 1}
                        </span>
                        {/* Gold-Eck-Akzente — nur an der äußeren Kante des Bilds */}
                        <div className={`absolute top-6 w-14 h-14 border-t-2 border-gold/70 pointer-events-none ${
                          index === 4 ? 'right-6 border-r-2' : 'left-6 border-l-2'
                        }`} />
                        <div className={`absolute bottom-6 w-14 h-14 border-b-2 border-gold/70 pointer-events-none ${
                          index === 4 ? 'right-6 border-r-2' : 'left-6 border-l-2'
                        }`} />
                        {/* Mobile-Gradient für Lesbarkeit (nur auf Mobile beim stacked Layout) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
                      </motion.div>

                      {/* Content-Seite */}
                      <motion.div
                        className={`relative md:col-span-5 bg-gradient-to-br from-primary via-primary-dark to-primary text-white flex flex-col justify-center p-8 md:p-10 lg:p-14 overflow-hidden ${
                          index === 4 ? 'md:order-1' : ''
                        }`}
                        initial={{ opacity: 0, x: index === 4 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {/* Dekorativer Gold-Glow */}
                        <div className={`absolute w-72 h-72 bg-gold/15 blur-3xl rounded-full pointer-events-none ${
                          index === 4 ? '-top-24 -left-24' : '-top-24 -right-24'
                        }`} />

                        {/* Gold-Eck-Akzente — nur an der äußeren Seite */}
                        <div className={`absolute top-6 w-14 h-14 border-t-2 border-gold/70 pointer-events-none ${
                          index === 4 ? 'left-6 border-l-2' : 'right-6 border-r-2'
                        }`} />
                        <div className={`absolute bottom-6 w-14 h-14 border-b-2 border-gold/70 pointer-events-none ${
                          index === 4 ? 'left-6 border-l-2' : 'right-6 border-r-2'
                        }`} />

                        <div className="relative">
                          <span className="font-bebas tracking-[0.3em] text-gold text-xs md:text-sm">
                            ◆ {section.subtitle.toUpperCase()}
                          </span>
                          <h3 className="font-script text-white text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.95] mt-3 mb-3">
                            {section.title}
                          </h3>
                          <div className="w-16 h-px bg-gold mb-6" />
                          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-7 max-w-md">
                            {section.description}
                          </p>
                          <ul className="space-y-2.5 mb-8">
                            {section.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-white/90 text-sm md:text-base"
                              >
                                <div className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={section.link}
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 hover:gap-4 transition-all duration-300 shadow-xl"
                          >
                            <span>Mehr erfahren</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* ORIGINAL LAYOUT für die ersten 3 Kacheln */
                    <>
                      {/* Background Image mit Scale Animation */}
                      <motion.div
                        className="absolute inset-0 z-0"
                        initial={{ scale: 1.06 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{
                          backgroundImage: `url(${section.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />

                      {/* Content */}
                      <motion.div
                        className="relative z-10 h-full flex flex-col p-8 justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1 + 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="inline-flex items-center justify-center mb-4 bg-gradient-to-br from-gold/30 to-primary/30 rounded-2xl backdrop-blur-xl shadow-lg border border-white/20 w-16 h-16">
                          <span className="filter drop-shadow-lg text-4xl">{section.icon}</span>
                        </div>

                        <div className="mb-3">
                          <span className="inline-block px-4 py-1.5 rounded-full font-bold tracking-wider backdrop-blur-md shadow-lg bg-gold border border-gold text-primary text-xs">
                            {section.subtitle}
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] text-3xl md:text-4xl">
                          {section.title}
                        </h3>

                        <p className="text-white mb-6 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-2 group-hover:line-clamp-none">
                          {section.description}
                        </p>

                        <div className="mb-6 space-y-2">
                          {section.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1 w-fit"
                            >
                              <div className="rounded flex items-center justify-center flex-shrink-0 bg-gold/40 border border-gold/60 w-5 h-5">
                                <svg className="text-white w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <Link
                            to={section.link}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-600 text-primary font-bold rounded-xl hover:from-yellow-600 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:scale-105 px-6 py-3"
                          >
                            <span>Mehr erfahren</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FISCHERBOOT — Signature-Highlight */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-black">
        {/* Parallax-Hintergrund */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed opacity-50"
          style={{ backgroundImage: 'url(/resturant/grill.jpg)' }}
          aria-hidden="true"
        />
        {/* Dunkler Gradient für Lesbarkeit */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/50"
          aria-hidden="true"
        />
        {/* Goldglow Akzente */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Bild-Mosaik (links) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                {/* Hauptbild */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.4 }}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/30"
                >
                  <img
                    src="/resturant/fisch.jpg"
                    alt="Frisch gegrillter Fisch auf Bambus"
                    className="w-full h-full object-cover"
                  />
                  {/* Gold-Eck-Akzente */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-gold pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-gold pointer-events-none" />
                </motion.div>

                {/* "100%" Badge oben rechts */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex flex-col items-center justify-center shadow-2xl border-4 border-white/95"
                >
                  <span className="font-script text-primary text-3xl md:text-4xl leading-none">
                    100%
                  </span>
                  <span className="font-bebas text-primary text-[10px] md:text-xs tracking-widest mt-1">
                    FANGFRISCH
                  </span>
                </motion.div>

                {/* Polaroid-Bild unten links (überlappend) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden md:block absolute -bottom-8 -left-10 w-44 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img
                    src="/resturant/grill.jpg"
                    alt="Holzkohle-Grill"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content (rechts) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 text-white"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm md:text-base">
                ◆ UNSER SIGNATURE-HIGHLIGHT
              </span>
              <h2 className="font-script text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mt-4 mb-6">
                Fisch vom
                <br />
                <span className="text-gold">Fischerboot.</span>
              </h2>
              <div className="w-20 h-px bg-gold mb-6" />

              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Auf einem alten Fischerboot werden unsere Fische ganz frisch
                zubereitet — am Stück auf
                <strong className="text-gold"> Bambusstäben </strong>
                in der
                <strong className="text-gold"> Holzkohleglut </strong>
                gegrillt. Eine Methode, die auf griechischen Inseln seit
                Generationen für unverwechselbares Aroma sorgt.
              </p>

              <p className="text-white/60 italic text-sm md:text-base mb-8">
                „Schmecken — und verstehen, warum wir es nicht anders machen."
              </p>

              {/* 3 USP-Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: '🐟', label: 'Fangfrisch' },
                  { icon: '🔥', label: 'Holzkohle' },
                  { icon: '🌿', label: 'Bambusstäbe' },
                ].map((usp, idx) => (
                  <motion.div
                    key={usp.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-gold/40 rounded-full backdrop-blur-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl">{usp.icon}</span>
                    <span className="font-bebas tracking-widest text-gold text-sm md:text-base">
                      {usp.label.toUpperCase()}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 hover:gap-5 transition-all duration-300 shadow-2xl"
                >
                  Mehr erfahren
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/kontakt#reservierung"
                  className="inline-flex items-center gap-3 px-7 py-4 border-2 border-white/30 text-white font-display font-bold tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  Tisch reservieren
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Section Header */}
        <div className="container-custom relative z-10 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold font-bold tracking-wider text-sm mb-6 backdrop-blur-sm">
              KUNDENFEEDBACK
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-gray-900 mb-4">
              Das sagen unsere <span className="text-gold">Gäste</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Über 500+ begeisterte Bewertungen sprechen für sich
            </p>
          </motion.div>
        </div>

        {/* Manueller Scroll-Container mit Nav-Pfeilen + Touch-Swipe */}
        <div className="relative">
          {/* Prev Button */}
          <button
            type="button"
            onClick={() => scrollTestimonials('prev')}
            aria-label="Vorherige Bewertung"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-gold/95 hover:bg-gold text-primary flex items-center justify-center shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => scrollTestimonials('next')}
            aria-label="Nächste Bewertung"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-gold/95 hover:bg-gold text-primary flex items-center justify-center shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll-Container */}
          <div
            ref={testimonialsRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-12 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold/30 flex-shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] snap-center"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-primary font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    
                    {/* Name & Date */}
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
          </div>

          {/* Sanfte Fade-Ränder links/rechts */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* CTA */}
        <div className="container-custom relative z-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kalimera+K%26N+GmbH+Steinriede+2+30827+Garbsen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-primary font-bold rounded-xl hover:from-yellow-600 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
              <span>Alle Bewertungen auf Google ansehen</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
