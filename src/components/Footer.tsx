import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_ITEMS } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-gray-300 overflow-hidden bg-primary-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/Copilot_20260510_165819.png)' }}
        aria-hidden="true"
      />
      {/* Gradient Overlay für Lesbarkeit (nur obere Kontaktzeilen abdunkeln) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/95 to-primary-dark/44"
        aria-hidden="true"
      />

      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Beschreibung */}
          <div className="space-y-4">
             
            <h3 className="flex items-center gap-2 text-2xl font-serif font-bold text-white">
              <img src="/favicon-2.svg" alt="" aria-hidden="true" className="w-8 h-8" />
              Kalimera
            </h3>
            <p className="text-sm leading-relaxed">
              Erleben Sie authentische griechische Küche und mediterrane
              Gastfreundschaft im Herzen von Garbsen.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
                  className="hover:text-gold transition-colors"
                >
                  Tel: {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <p>{CONTACT_INFO.address}</p>
                <p>
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </p>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Bürozeiten
            </h4>
            <p className="text-sm">{CONTACT_INFO.officeHours}</p>
            <div className="mt-6">
              <Link to="/kontakt#reservierung" className="btn-gold">
                Reservierung
              </Link>
            </div>
          </div>
        </div>

        {/* Service / Bewertungs-Block */}
        <div className="mt-12 pt-10 border-t border-gold/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Service
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Unsere Qualität und der Service sind uns wichtig.
                <br />
                <span className="text-gold">Wir freuen uns über Ihre Rückmeldung!</span>
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Hier können Sie uns Ihre Rezension schreiben.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                to="/bewertung"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary font-display font-bold tracking-wide rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Rezension schreiben
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-800">
              © {currentYear} {CONTACT_INFO.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link
                to="/bewertung"
                className="text-gray-800 hover:text-gold transition-colors"
              >
                Bewertung
              </Link>
              <Link
                to="/impressum"
                className="text-gray-800 hover:text-gold transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-gray-800 hover:text-gold transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
