import { CONTACT_INFO } from '../utils/constants';

const GoogleMap = () => {
  // Volle Adresse für Google-Geocoding (genauer als feste Koordinaten)
  const fullAddress = `Kalimera Restaurant, ${CONTACT_INFO.address}, ${CONTACT_INFO.postalCode} ${CONTACT_INFO.city}, Deutschland`;
  const encodedAddress = encodeURIComponent(fullAddress);

  // Embed-URL mit Adress-Query (z=16 = Straßen-Detail, t = Karten-Typ)
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=17&ie=UTF8&iwloc=B&output=embed`;

  // Route-Planen-Link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  // Direkt in Google Maps öffnen
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="relative w-full">
      {/* Karten-Container mit Gold-Akzenten */}
      <div className="relative w-full h-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/30">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Standort ${CONTACT_INFO.name} — ${CONTACT_INFO.address}, ${CONTACT_INFO.postalCode} ${CONTACT_INFO.city}`}
        />

        {/* Gold-Eck-Akzente */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-gold/70 pointer-events-none" />
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-gold/70 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-gold/70 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-gold/70 pointer-events-none" />
      </div>

      {/* Adress-Card unten links überlappend */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Adress-Info */}
        <div className="md:col-span-1 bg-white border border-gold/30 rounded-2xl p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex-shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <div className="font-bebas tracking-widest text-gold text-xs">SO FINDEN SIE UNS</div>
              <div className="font-display font-bold text-primary mt-1">
                {CONTACT_INFO.name}
              </div>
              <div className="text-gray-600 text-sm">
                {CONTACT_INFO.address}
                <br />
                {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
              </div>
            </div>
          </div>
        </div>

        {/* Route planen */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 group inline-flex items-center justify-center gap-3 px-6 py-4 bg-gold text-primary font-display font-bold tracking-wide rounded-2xl hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Route planen
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* In Google Maps öffnen */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 group inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-primary/20 text-primary font-display font-bold tracking-wide rounded-2xl hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3h7v7" />
            <path d="M10 14L21 3" />
            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
          </svg>
          In Google Maps öffnen
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
