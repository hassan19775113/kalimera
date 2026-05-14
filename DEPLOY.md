# Deployment — Kalimera Restaurant

Kostenloses Hosting auf **Cloudflare Pages** (empfohlen) oder Netlify / Vercel.
Alle drei sind kostenlos für statische Sites, automatischer Deploy bei jedem `git push`.

---

## ⭐ Empfehlung: Cloudflare Pages

Schnellster Setup, schnellstes globales CDN, kostenloses SSL.

### 1. Account anlegen
Gehe zu [dash.cloudflare.com](https://dash.cloudflare.com/sign-up) und registriere dich (kostenlos, kein Kreditkarte nötig).

### 2. Neues Pages-Projekt erstellen
- Im Dashboard links: **Workers & Pages** → **Create application** → Tab **Pages** → **Connect to Git**
- GitHub autorisieren → Repository **`hassan19775113/kalimera`** auswählen → **Begin setup**
 dash.cloudflare.com/?to=/:account/workers-and-pages/create/pages/new
### 3. Build-Einstellungen
| Feld | Wert |
|---|---|
| Project name | `kalimera` (oder beliebig) |
| Production branch | `main` |
| Framework preset | **Vite** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (leer lassen) |
| Node version | `20` (über Env-Variable, siehe unten) |

### 4. Environment Variables setzen
Unter **Environment variables** → **Add variable** (Production + Preview, beide setzen):

| Name | Value |
|---|---|
| `VITE_WEB3FORMS_KEY` | Dein Web3Forms Access Key |
| `NODE_VERSION` | `20` |

> Den Web3Forms-Key findest du auf [web3forms.com](https://web3forms.com) unter deinem Account — der **selbe Key, der in deiner lokalen `.env` steht**.

### 5. Deploy starten
**Save and Deploy** → ca. 2 Minuten warten → fertig.

Cloudflare zeigt dir die URL: `https://kalimera.pages.dev` (oder so ähnlich).

### 6. Custom Domain (optional)
Wenn du eine eigene Domain wie `kalimera-hannover.de` hast:
- Im Pages-Projekt → Tab **Custom domains** → **Set up a custom domain**
- Domain eingeben → Cloudflare zeigt dir den CNAME-Eintrag
- Bei deinem Domain-Anbieter (z.B. Strato, IONOS) den CNAME setzen → fertig
- SSL-Zertifikat wird automatisch eingerichtet

### Auto-Deploy
Ab jetzt: Jeder `git push` auf `main` triggert automatisch einen neuen Deploy. Pull Requests bekommen automatische Preview-URLs.

---

## Alternative: Netlify

1. Account auf [netlify.com](https://www.netlify.com) — Login mit GitHub
2. **Add new site** → **Import an existing project** → GitHub → Repo wählen
3. Settings werden auto-erkannt (Vite). Falls nicht:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Environment variables: `VITE_WEB3FORMS_KEY` setzen
5. **Deploy site**

Das `public/_redirects` ist schon Netlify-kompatibel — SPA-Routing funktioniert sofort.

---

## Alternative: Vercel

1. Account auf [vercel.com](https://vercel.com) — Login mit GitHub
2. **Add New** → **Project** → Repo importieren
3. Framework wird auto-erkannt als **Vite**
4. Environment variables: `VITE_WEB3FORMS_KEY`
5. **Deploy**

---

## Lokal testen vor dem Deploy

```bash
npm install
npm run build
npm run preview
```

`npm run preview` startet einen lokalen Server, der die `dist/` exakt so ausliefert wie der Hoster — gut um Routing und Assets vorher zu prüfen.

---

## Troubleshooting

**404 bei direktem Aufruf von Unterseiten** (z.B. `/restaurant`)
→ SPA-Fallback fehlt. `public/_redirects` muss `/* /index.html 200` enthalten (ist schon drin).

**Kontaktformular sendet nicht**
→ `VITE_WEB3FORMS_KEY` als Environment Variable im Hosting-Panel gesetzt? Build muss NACH dem Setzen neu laufen.

**Build schlägt fehl mit Node-Version-Fehler**
→ `NODE_VERSION=20` als Env-Variable im Hosting setzen (Vite 5 braucht Node ≥ 18).

**Schriftarten / Bilder laden nicht**
→ Pfade müssen mit `/` beginnen (absolute Pfade), nicht relativ. Bei custom Domains keinen `base`-Pfad in `vite.config.ts` setzen.
