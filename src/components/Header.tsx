import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT_INFO } from '../utils/constants';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('DE');
  const location = useLocation();

  const languages = [
    { code: 'DE', name: 'Deutsch' },
    { code: 'GR', name: 'Ελληνικά' },
    { code: 'EN', name: 'English' }
  ];

  const FlagIcon = ({ code }: { code: string }) => {
    if (code === 'DE') {
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" className="inline-block">
          <rect width="24" height="6" fill="#000000"/>
          <rect y="6" width="24" height="6" fill="#DD0000"/>
          <rect y="12" width="24" height="6" fill="#FFCE00"/>
        </svg>
      );
    }
    if (code === 'GR') {
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" className="inline-block">
          <rect width="24" height="18" fill="#0D5EAF"/>
          <rect width="24" height="2" y="2" fill="#FFFFFF"/>
          <rect width="24" height="2" y="6" fill="#FFFFFF"/>
          <rect width="24" height="2" y="10" fill="#FFFFFF"/>
          <rect width="24" height="2" y="14" fill="#FFFFFF"/>
          <rect width="10" height="10" fill="#0D5EAF"/>
          <rect width="10" height="2" y="4" fill="#FFFFFF"/>
          <rect width="2" height="10" x="4" fill="#FFFFFF"/>
        </svg>
      );
    }
    if (code === 'EN') {
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" className="inline-block">
          <rect width="24" height="18" fill="#012169"/>
          <path d="M0,0 L24,18 M24,0 L0,18" stroke="#FFFFFF" strokeWidth="3.6"/>
          <path d="M0,0 L24,18 M24,0 L0,18" stroke="#C8102E" strokeWidth="2.4"/>
          <path d="M12,0 L12,18 M0,9 L24,9" stroke="#FFFFFF" strokeWidth="6"/>
          <path d="M12,0 L12,18 M0,9 L24,9" stroke="#C8102E" strokeWidth="3.6"/>
        </svg>
      );
    }
    return null;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'

        }`}
        
      >
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-3 items-center w-full">
            {/* Left: Burger Menu + Language Button */}
            <div className="flex justify-start items-center gap-2 md:gap-3">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`z-50 p-3 md:p-4 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? 'bg-gold text-white border-2 border-gold'
                    : isScrolled
                    ? 'bg-gold/20 border border-gold/40 text-gold hover:bg-gold/30 backdrop-blur-sm'
                    : 'text-white hover:bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Menu"
              >
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.path
                    d="M3 6h18"
                    initial={false}
                    variants={{
                      closed: { d: "M3 6h18" },
                      open: { d: "M6 6l12 12" }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 12h18"
                    initial={false}
                    variants={{
                      closed: { d: "M3 12h18", opacity: 1 },
                      open: { d: "M12 12h0", opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 18h18"
                    initial={false}
                    variants={{
                      closed: { d: "M3 18h18" },
                      open: { d: "M6 18l12-12" }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.button>

              {/* Language Switcher — nur auf Desktop sichtbar */}
             {!isMenuOpen && (
              <div className="relative hidden md:block">
                <motion.button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`z-50 flex items-center gap-1.5 px-3 md:px-4 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
                    isLangOpen
                      ? 'bg-gold text-primary border-2 border-gold'
                      : isScrolled
                      ? 'bg-gold/20 border border-gold/40 text-gold hover:bg-gold/30 backdrop-blur-sm'
                      : 'text-white hover:bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Sprache wählen"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a14 14 0 0 1 0 18" />
                    <path d="M12 3a14 14 0 0 0 0 18" />
                  </svg>
                
                  <motion.svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    animate={{ rotate: isLangOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                <AnimatePresence>
                  {isLangOpen && (
                    <>
                      {/* Backdrop zum Schließen bei Außenklick */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsLangOpen(false)}
                        aria-hidden="true"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-44 bg-white/95 border-2 border-gold/40 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden z-50"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setCurrentLanguage(lang.code);
                              setIsLangOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                              currentLanguage === lang.code
                                ? 'bg-gold/20 text-primary font-semibold'
                                : 'text-gray-700 hover:bg-gold/10'
                            }`}
                          >
                            <span className="font-bebas tracking-widest text-gold text-xs w-7">
                              {lang.code}
                            </span>
                            <span className="font-display text-sm">{lang.name}</span>
                            {currentLanguage === lang.code && (
                              <svg className="w-4 h-4 text-gold ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>)}
            </div>
                
            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link to="/" className="flex items-center group">
                <motion.img
                  src="/header-logo.svg"
                  alt="Kalimera Restaurant"
                  className={`h-14 md:h-20 w-auto transition-all duration-300 ${
                    isScrolled
                      ? 'drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)]'
                      : 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            {/* Right: Instagram */}
            <div className="flex justify-end">
              <motion.a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`z-50 p-3 md:p-4 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gold/20 border border-gold/40 text-gold hover:bg-gold/30 backdrop-blur-sm'
                    : 'text-white hover:bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 overflow-hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Background Image */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/kalimera-3.png)' }}
              aria-hidden="true"
            />

            {/* Dark Gradient Overlay für Lesbarkeit */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary-dark/75 to-black/85 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Fullscreen Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-start justify-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Content */}
              <div className="w-full max-w-3xl px-6 pt-40 pb-12 md:px-12 md:pt-30 md:pb-16">
                {/* Title */}
           

                {/* Navigation Links */}
                <nav className="mb-10 md:mb-14">
                  <div className="space-y-2 md:space-y-3">
                     <p className="font-bebas tracking-[0.25em] text-white/80 text-center uppercase text-xs md:text-sm mt-3">
                    Entdecken Sie unsere Welt
                  </p>
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index + 0.3 }}
                        >
                          <Link
                            to={item.path}
                            className={`group relative flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 rounded-2xl border transition-all duration-300 ${
                              isActive
                                ? 'bg-gold/20 border-gold/60 text-white shadow-lg'
                                : 'bg-white/[0.04] border-white/10 text-white hover:bg-gold/10 hover:border-gold/40'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <span
                                className={`font-bebas tracking-[0.25em] text-xs ${
                                  isActive ? 'text-gold' : 'text-gold/60 group-hover:text-gold'
                                } transition-colors`}
                              >
                                0{index + 1}
                              </span>
                              <span className="font-script text-2xl md:text-4xl leading-none">
                                {item.label}
                              </span>
                            </div>
                            <svg
                              className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                                isActive
                                  ? 'text-gold'
                                  : 'text-white/40 group-hover:text-gold group-hover:translate-x-1'
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            {isActive && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gold rounded-full"
                                transition={{ type: 'spring', duration: 0.6 }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Language Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="border-t border-gold/20 pt-6 md:pt-8"
                >
                  <p className="font-bebas tracking-[0.3em] text-gold/80 uppercase text-xs mb-4 text-center">
                    ◆ Sprache wählen ◆
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLanguage(lang.code)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                          currentLanguage === lang.code
                            ? 'bg-gold text-primary scale-105 shadow-lg shadow-gold/30'
                            : 'bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-gold/40'
                        }`}
                      >
                        <FlagIcon code={lang.code} />
                        <span className="font-bebas tracking-widest text-sm">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gold/20 text-center"
                >
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
                    className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="font-bebas tracking-[0.2em] text-base md:text-lg">
                      {CONTACT_INFO.phone}
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
