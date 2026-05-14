import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import AccentDivider from '../components/AccentDivider';

interface BewertungData {
  ort: string;
  besuchsdatum?: string;
  qualitaet?: boolean;
  frische?: boolean;
  sortiment?: boolean;
  sauberkeit?: boolean;
  freundlichkeit?: boolean;
  flexibilitaet?: boolean;
  schnelligkeit?: boolean;
  angebot?: boolean;
  sterne: string;
  name: string;
  email: string;
  rezension: string;
  datenschutz: boolean;
  veroeffentlichung?: boolean;
}

const STERNE_LABELS = ['Schlecht', 'Naja', 'Gut', 'Sehr gut', 'Ausgezeichnet'];
const MAX_REZENSION = 500;

const ORTE = [
  'Restaurant',
  'Brasserie',
  'Terrasse',
  'Taverne',
  'Weingarten',
  'Griechisches Haus',
];

const KRITERIEN = [
  { key: 'qualitaet', label: 'Qualität' },
  { key: 'frische', label: 'Frische' },
  { key: 'sortiment', label: 'Sortiment' },
  { key: 'sauberkeit', label: 'Sauberkeit' },
  { key: 'freundlichkeit', label: 'Freundlichkeit' },
  { key: 'flexibilitaet', label: 'Flexibilität' },
  { key: 'schnelligkeit', label: 'Schnelligkeit' },
  { key: 'angebot', label: 'Angebot' },
] as const;

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

const Bewertung = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Animated Dropdown states
  const [ortOpen, setOrtOpen] = useState(false);
  const [selectedOrt, setSelectedOrt] = useState('');
  const ortRef = useRef<HTMLDivElement>(null);

  // Animated Date Picker states
  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dateRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BewertungData>();

  const rezensionLength = watch('rezension')?.length ?? 0;

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ortRef.current && !ortRef.current.contains(e.target as Node)) {
        setOrtOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setDateOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Date helpers
  const monthName = currentMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const leadingBlanks = (firstDay + 6) % 7; // shift so Monday is first

  const handleOrtSelect = (ort: string) => {
    setSelectedOrt(ort);
    setValue('ort', ort, { shouldValidate: true });
    setOrtOpen(false);
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    setValue('besuchsdatum', date.toISOString().split('T')[0]);
    setDateOpen(false);
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const keyMissing = !accessKey || accessKey.trim().length === 0;

  const onSubmit = async (data: BewertungData) => {
    setError(false);
    setErrorMessage('');

    // Pre-flight: Key fehlt → kein Request, sofort User-freundliche Meldung
    if (keyMissing) {
      console.error(
        '[Bewertung] VITE_WEB3FORMS_KEY ist nicht gesetzt. Hole dir einen Key auf https://web3forms.com/ und trage ihn in .env ein.'
      );
      setErrorMessage('Konfiguration unvollständig — bitte später erneut versuchen.');
      setError(true);
      return;
    }

    // Kriterien als true/false (statt undefined) — für lesbare Mails
    const kriterienNormalized = KRITERIEN.reduce((acc, k) => {
      acc[k.label] = data[k.key] ? 'ja' : 'nein';
      return acc;
    }, {} as Record<string, string>);

    const payload = {
      access_key: accessKey,
      subject: `Neue Bewertung von ${data.name || 'Anonym'} (${rating}★)`,
      from_name: 'Kalimera Bewertungs-Formular',
      // Reihenfolge so, dass die wichtigen Felder oben in der Mail erscheinen
      Sterne: `${rating} / 5`,
      Bereich: data.ort,
      Besuchsdatum: data.besuchsdatum || 'nicht angegeben',
      Name: data.name,
      'E-Mail': data.email || 'nicht angegeben',
      Rezension: data.rezension,
      'Veröffentlichung erlaubt': data.veroeffentlichung ? 'ja' : 'nein',
      ...kriterienNormalized,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
        reset();
        setRating(0);
        setSelectedOrt('');
        setSelectedDate(null);
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        console.error('[Bewertung] Submit fehlgeschlagen:', {
          status: response.status,
          result,
        });
        setErrorMessage(result?.message || 'Bitte versuchen Sie es später erneut.');
        setError(true);
      }
    } catch (err) {
      console.error('[Bewertung] Netzwerk-Fehler beim Submit:', err);
      setErrorMessage('Netzwerkfehler — bitte prüfen Sie Ihre Verbindung.');
      setError(true);
    }
  };

  return (
    <>
      <SEO
        title="Bewertung – Schreiben Sie uns Ihre Rezension"
        description="Teilen Sie Ihre Erfahrung im Kalimera Restaurant in Garbsen. Wir freuen uns auf Ihre Resonanz!"
        path="/bewertung"
      />

      <HeroSection
        title="Bewertung"
        subtitle="EINE EINZIGARTIGE GASTRONOMISCHE REISE"
        description="Wir freuen uns auf Ihre Resonanz"
        backgroundImage="/bewertungen_essen_1.jpg"
        height="medium"
      />

      {/* Welcome */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ LIEBE GÄSTE
            </span>
            <h2 className="font-script text-primary text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] mt-4 mb-6">
              Wir möchten, dass Sie sich
              <br />
              <em className="not-italic text-gold">bei uns wohlfühlen.</em>
            </h2>
            <AccentDivider className="mt-6" size="md" />
            <p className="text-gray-700 text-lg leading-relaxed mt-8">
              Ihre Meinung ist uns wichtig. Hier können Sie uns Ihre Rezension
              schreiben — sie hilft uns, noch besser zu werden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50 py-20 md:py-28" style={{backgroundImage: `url(/kalimera-3.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Dev-Hinweis: nur sichtbar wenn Web3Forms-Key fehlt */}
            {keyMissing && import.meta.env.DEV && (
              <div className="mb-6 bg-amber-50 border-2 border-amber-300 text-amber-900 rounded-2xl p-5 flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div className="text-sm">
                  <strong className="block mb-1">Entwickler-Hinweis</strong>
                  <code className="bg-amber-100 px-1.5 py-0.5 rounded text-amber-900">VITE_WEB3FORMS_KEY</code>{' '}
                  fehlt in <code className="bg-amber-100 px-1.5 py-0.5 rounded text-amber-900">.env</code>.
                  Hole dir einen kostenlosen Key auf{' '}
                  <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">web3forms.com</a>{' '}
                  und starte den Dev-Server neu. (Dieser Hinweis ist nur in der Entwicklung sichtbar.)
                </div>
              </div>
            )}

            {submitted ? (
              <div className="bg-white border-2 border-gold/40 rounded-3xl p-10 md:p-14 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold mb-6">
                  <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-script text-primary text-4xl mb-3">Vielen Dank!</h3>
                <p className="text-gray-700 text-lg">
                  Ihre Bewertung wurde erfolgreich übermittelt — wir freuen
                  uns sehr über Ihre Rückmeldung.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white/90 rounded-3xl shadow-xl border border-gold/20 p-6 md:p-10 lg:p-12 space-y-10"
              >
                <div className="text-center">
                  <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                    ◆ IHRE REZENSION
                  </span>
                  <h3 className="font-script text-primary text-3xl md:text-4xl mt-2">
                    Schreiben Sie bei uns!
                  </h3>
                  <p className="text-gray-500 text-sm mt-3">
                    Alle mit * markierten Felder sind erforderlich
                  </p>
                </div>

                {/* Sektion 1: Bereich + Datum */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 font-bebas text-gold tracking-wider text-sm">
                      01
                    </span>
                    <h4 className="font-display font-bold text-primary tracking-wide">
                      Ihr Besuch bei uns
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Custom Animated Dropdown — Ort */}
                    <div ref={ortRef} className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Wo waren Sie zu Gast? *
                      </label>
                      <button
                        type="button"
                        onClick={() => setOrtOpen(!ortOpen)}
                        className={`w-full px-4 py-3 border-2 rounded-xl text-left flex items-center justify-between bg-white transition-colors ${
                          ortOpen ? 'border-gold' : 'border-gold/40 hover:border-gold/60'
                        }`}
                      >
                        <span className={selectedOrt ? 'text-gray-900' : 'text-gray-400'}>
                          {selectedOrt || '— Bitte wählen —'}
                        </span>
                        <motion.svg
                          animate={{ rotate: ortOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="w-5 h-5 text-gold flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <input
                        type="hidden"
                        {...register('ort', { required: 'Bitte wählen Sie einen Bereich' })}
                      />
                      <AnimatePresence>
                        {ortOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gold/40 rounded-xl shadow-2xl z-50 overflow-hidden"
                          >
                            {ORTE.map((ort, i) => (
                              <motion.button
                                key={ort}
                                type="button"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                onClick={() => handleOrtSelect(ort)}
                                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gold/10 transition-colors flex items-center justify-between ${
                                  selectedOrt === ort ? 'bg-gold/15 font-semibold text-primary' : 'text-gray-700'
                                }`}
                              >
                                {ort}
                                {selectedOrt === ort && (
                                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {errors.ort && (
                        <p className="text-red-500 text-xs mt-1">{errors.ort.message}</p>
                      )}
                    </div>

                    {/* Custom Animated Date Picker */}
                    <div ref={dateRef} className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Datum (optional)
                      </label>
                      <button
                        type="button"
                        onClick={() => setDateOpen(!dateOpen)}
                        className={`w-full px-4 py-3 border-2 rounded-xl text-left flex items-center justify-between bg-white transition-colors ${
                          dateOpen ? 'border-gold' : 'border-gold/40 hover:border-gold/60'
                        }`}
                      >
                        <span className={selectedDate ? 'text-gray-900' : 'text-gray-400'}>
                          {selectedDate ? formatDate(selectedDate) : '— Datum wählen —'}
                        </span>
                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                          <line x1="8" y1="3" x2="8" y2="7" />
                          <line x1="16" y1="3" x2="16" y2="7" />
                        </svg>
                      </button>
                      <input type="hidden" {...register('besuchsdatum')} />
                      <AnimatePresence>
                        {dateOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 bg-white border-2 border-gold/40 rounded-2xl shadow-2xl z-50 p-3 w-[min(300px,calc(100vw-2rem))]"
                          >
                            {/* Monatsnavigation */}
                            <div className="flex items-center justify-between mb-2">
                              <button
                                type="button"
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/10 text-gold"
                                aria-label="Vorheriger Monat"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <span className="font-display font-semibold text-primary text-sm capitalize">
                                {monthName}
                              </span>
                              <button
                                type="button"
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/10 text-gold"
                                aria-label="Nächster Monat"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>

                            {/* Wochentage */}
                            <div className="grid grid-cols-7 gap-1 mb-1">
                              {WEEKDAYS.map((d) => (
                                <span key={d} className="text-[10px] font-bebas tracking-widest text-gray-400 text-center py-1">
                                  {d}
                                </span>
                              ))}
                            </div>

                            {/* Tage-Grid */}
                            <div className="grid grid-cols-7 gap-1">
                              {Array.from({ length: leadingBlanks }).map((_, i) => (
                                <span key={`blank-${i}`} />
                              ))}
                              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                                const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                const isSelected = selectedDate?.toDateString() === dayDate.toDateString();
                                const isToday = new Date().toDateString() === dayDate.toDateString();
                                return (
                                  <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleDateSelect(day)}
                                    className={`w-9 h-9 rounded-full text-sm transition-all ${
                                      isSelected
                                        ? 'bg-gold text-primary font-bold shadow-md'
                                        : isToday
                                        ? 'border border-gold/40 text-primary font-medium hover:bg-gold/10'
                                        : 'text-gray-700 hover:bg-gold/15'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                {/* Sektion 2: Sterne */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 font-bebas text-gold tracking-wider text-sm">
                      02
                    </span>
                    <h4 className="font-display font-bold text-primary tracking-wide">
                      Wie zufrieden waren Sie? *
                    </h4>
                  </div>
                  <div className="bg-gold/15 border border-gold/40 rounded-2xl p-5 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`${star} Stern${star > 1 ? 'e' : ''}`}
                          className="transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg p-1"
                        >
                          <svg
                            className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 ${
                              star <= (hoverRating || rating)
                                ? 'text-gold drop-shadow-[0_2px_6px_rgba(212,175,55,0.6)]'
                                : 'text-gray-500'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 h-6">
                      {(hoverRating || rating) > 0 ? (
                        <span className="font-bebas text-gold tracking-[0.25em] text-base md:text-lg">
                          {STERNE_LABELS[(hoverRating || rating) - 1].toUpperCase()}
                        </span>
                      ) : (
                        <span className="font-bebas text-gray-500 tracking-[0.25em] text-sm">
                          BITTE WÄHLEN SIE EINE BEWERTUNG
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Sektion 3: Kriterien */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 font-bebas text-gold tracking-wider text-sm">
                      03
                    </span>
                    <h4 className="font-display font-bold text-primary tracking-wide">
                      Was hat Ihnen gefallen?
                    </h4>
                    <span className="text-xs text-gray-400 ml-auto hidden sm:inline">Mehrfachauswahl</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {KRITERIEN.map((k) => (
                      <label
                        key={k.key}
                        className="cursor-pointer select-none px-4 py-2 border-2 border-gold/40 rounded-full text-sm font-medium text-gray-700 hover:border-gold/60 hover:bg-gold/5 transition-all has-[:checked]:bg-gold has-[:checked]:border-gold has-[:checked]:text-primary has-[:checked]:shadow-md has-[:checked]:shadow-gold/30"
                      >
                        <input
                          type="checkbox"
                          {...register(k.key)}
                          className="sr-only"
                        />
                        {k.label}
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Sektion 4: Rezension */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 font-bebas text-gold tracking-wider text-sm">
                      04
                    </span>
                    <h4 className="font-display font-bold text-primary tracking-wide">
                      Erzählen Sie uns mehr *
                    </h4>
                  </div>
                  <div className="relative">
                    <textarea
                      id="rezension"
                      rows={6}
                      maxLength={MAX_REZENSION}
                      {...register('rezension', {
                        required: 'Bitte schreiben Sie ein paar Worte',
                        minLength: { value: 10, message: 'Bitte mindestens 10 Zeichen' },
                      })}
                      className="w-full px-4 py-3 border-2 border-gold/40 rounded-xl focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Was hat Ihnen besonders gefallen? Was können wir verbessern?"
                    />
                    <div className="absolute bottom-3 right-4 text-xs font-bebas tracking-wider">
                      <span className={rezensionLength > MAX_REZENSION * 0.9 ? 'text-gold' : 'text-gray-400'}>
                        {rezensionLength} / {MAX_REZENSION}
                      </span>
                    </div>
                  </div>
                  {errors.rezension && (
                    <p className="text-red-500 text-xs mt-1">{errors.rezension.message}</p>
                  )}
                </motion.div>

                {/* Sektion 5: Persönliches */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 font-bebas text-gold tracking-wider text-sm">
                      05
                    </span>
                    <h4 className="font-display font-bold text-primary tracking-wide">
                      Wer sind Sie?
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ihr Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name ist erforderlich' })}
                        className="w-full px-4 py-3 border-2 border-gold/40 rounded-xl focus:border-gold focus:outline-none transition-colors"
                        placeholder="Ihr Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        E-Mail (optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', {
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Ungültige E-Mail-Adresse',
                          },
                        })}
                        className="w-full px-4 py-3 border-2 border-gold/40 rounded-xl focus:border-gold focus:outline-none transition-colors"
                        placeholder="ihre.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Einwilligungen */}
                <div className="pt-6 border-t border-gray-100 space-y-3">
                  <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('datenschutz', { required: 'Bitte stimmen Sie der Datenschutzerklärung zu' })}
                      className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
                    />
                    <span>
                      Ich habe die{' '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </span>
                  </label>
                  {errors.datenschutz && (
                    <p className="text-red-500 text-xs ml-7">{errors.datenschutz.message}</p>
                  )}

                  <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('veroeffentlichung')}
                      className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
                    />
                    <span>
                      Ich erlaube, dass meine Bewertung anonymisiert auf der Website veröffentlicht werden darf.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>
                      {errorMessage || 'Beim Senden ist leider ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'}
                    </span>
                  </div>
                )}

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => { reset(); setRating(0); }}
                    className="text-sm text-gray-600 hover:text-gray-700 transition-colors px-4 py-2"
                  >
                    Formular zurücksetzen
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || rating === 0}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100"
                    title={rating === 0 ? 'Bitte vergeben Sie zuerst eine Sterne-Bewertung' : ''}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Wird gesendet …
                      </>
                    ) : (
                      <>
                        Bewertung absenden
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Bewertung;
