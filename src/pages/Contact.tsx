import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import AccentDivider from '../components/AccentDivider';
import { CONTACT_INFO } from '../utils/constants';

const Contact = () => {
  const contactItems = [
    {
      label: 'Adresse',
      value: (
        <>
          {CONTACT_INFO.address}
          <br />
          {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT_INFO.address + ', ' + CONTACT_INFO.postalCode + ' ' + CONTACT_INFO.city,
      )}`,
      target: '_blank',
    },
    {
      label: 'Telefon',
      value: CONTACT_INFO.phone,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: `tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`,
    },
    {
      label: 'Fax',
      value: CONTACT_INFO.fax,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="3" width="12" height="6" />
          <path d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M8 14h8" />
          <path d="M8 17h5" />
        </svg>
      ),
    },
    {
      label: 'E-Mail',
      value: CONTACT_INFO.email,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
          <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      label: 'Bürozeiten',
      value: CONTACT_INFO.officeHours,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: CONTACT_INFO.instagram,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: CONTACT_INFO.instagramUrl,
      target: '_blank',
    },
  ];

  return (
    <>
      <SEO
        title="Kontakt & Reservierung"
        description="Kontaktieren Sie das Kalimera Restaurant in Garbsen. Reservieren Sie Ihren Tisch oder stellen Sie eine Anfrage für Veranstaltungen."
        path="/kontakt"
      />

      <HeroSection
        title="Kontakt & Reservierung"
        subtitle="EINE EINZIGARTIGE GASTRONOMISCHE REISE"
        description="Wir freuen uns auf Sie — reservieren Sie Ihren Tisch oder stellen Sie eine Anfrage"
        backgroundImage="/kontakt_personen_1.jpg"
        height="medium"
      />

      {/* Welcome */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
           
            <h2 className="font-script text-primary text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] mt-3 mb-4">
             ◆ Kontaktieren <em className="not-italic text-gold">Sie uns</em>
            </h2>
            <AccentDivider className="mt-4" size="md" />
         
          </motion.div>
        </div>
      
      </section>
{/* Kontakt-Info + Formular */}
      <section className="bg-slate-300 py-16 md:py-24 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Kontakt-Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ KONTAKT
              </span>
              <h2 className="font-script text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] mt-3 mb-8">
                Erreichen Sie uns
              </h2>

              <div className="space-y-3">
                {contactItems.map((item, i) => {
                  const content = (
                    <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gold/15 hover:border-gold/50 bg-white hover:bg-gold/[0.03] transition-all duration-300">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-gold/15 to-primary/5 border border-gold/30 text-gold flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="w-5 h-5 block">{item.icon}</span>
                      </span>
                      <div className="min-w-0">
                        <div className="font-bebas tracking-[0.25em] text-gold text-xs">
                          {item.label.toUpperCase()}
                        </div>
                        <div className="font-display text-primary mt-0.5 break-words">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.target}
                          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Kontaktformular */}
            <motion.div
              id="reservierung"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 scroll-mt-24"
            >
              <span className="font-bebas tracking-[0.3em] text-gold text-sm">
                ◆ TISCH RESERVIEREN
              </span>
              <h2 className="font-script text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] mt-3 mb-3">
                Reservierung <em className="not-italic text-gold">anfragen.</em>
              </h2>
              <p className="text-gray-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen zurück.
              </p>
              <ContactForm isReservation={true} />
            </motion.div>
          </div>
        </div>
      </section>

       <section className="bg-white py-16 md:py-20 ">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-bebas tracking-[0.3em] text-gold text-sm">
              ◆ HIER FINDEN SIE UNS
            </span>
            <h2 className="font-script text-primary text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] mt-3 mb-4">
              Mitten in <em className="not-italic text-gold">Garbsen.</em>
            </h2>
            <AccentDivider className="mt-4" size="md" />
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Direkt an der <strong className="text-primary">Steinriede 2</strong> —
              gut erreichbar mit Auto, Bus und Bahn. Wir freuen uns auf Ihren Besuch.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Google Map — direkt oben */}
      <section className="bg-gray-50 pb-16 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default Contact;
