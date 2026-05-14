# Kalimera Restaurant Website

Moderne, professionelle Website für das Kalimera Restaurant in Garbsen/Hannover.

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** - Build-Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animationen
- **React Router DOM** - Routing
- **React Hook Form** - Formulare
- **React Helmet Async** - SEO
- **Web3Forms** - Kontaktformular

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build
npm run build

# Preview des Production Builds
npm run preview
```

## 🔧 Umgebungsvariablen

Erstellen Sie eine `.env` Datei im Root-Verzeichnis:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
```

Holen Sie sich einen kostenlosen API Key von [Web3Forms](https://web3forms.com/).

## 📁 Projektstruktur

```
src/
├── components/       # Wiederverwendbare Komponenten
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ContactForm.tsx
│   ├── GoogleMap.tsx
│   └── ...
├── pages/           # Seiten-Komponenten
│   ├── Home.tsx
│   ├── Restaurant.tsx
│   ├── Brasserie.tsx
│   ├── Contact.tsx
│   └── ...
├── utils/           # Hilfsfunktionen & Konstanten
│   └── constants.ts
├── App.tsx          # Haupt-App-Komponente
├── main.tsx         # Einstiegspunkt
└── index.css        # Globale Styles
```

## 🎨 Features

- ✅ Vollständig responsiv (Mobile, Tablet, Desktop)
- ✅ SEO-optimiert (Meta-Tags, Schema.org, Sitemap)
- ✅ Moderne Animationen mit Framer Motion
- ✅ Kontaktformular mit Validierung
- ✅ Google Maps Integration
- ✅ Instagram-Integration
- ✅ Barrierefreies Design
- ✅ Performance-optimiert

## 🌐 Deployment

### Cloudflare Pages

1. Repository zu GitHub pushen
2. Cloudflare Dashboard → Pages → "Create a project"
3. GitHub Repository verbinden
4. Build-Einstellungen:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Environment Variables hinzufügen (`VITE_WEB3FORMS_KEY`)
6. Deploy!

Die `_redirects` Datei ist bereits konfiguriert für SPA-Routing.

## 📞 Kontakt

**Kalimera K&N GmbH**
- Adresse: Steinriede 2, 30827 Garbsen
- Telefon: 05131 4621-0
- E-Mail: service@kalimera-hannover.de
- Website: www.kalimera-hannover.de

## 📝 Lizenz

© 2026 Kalimera K&N GmbH. Alle Rechte vorbehalten.
