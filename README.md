# Dixie & Co. — sito ufficiale

Sito della band **Dixie & Co.** (jazz · swing · dixieland, Salerno).
Astro (static output), UI vintage anni '50 / soda-fountain, hero con giradischi animato.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statico in dist/
npm run preview  # anteprima della build
```

## Struttura

- `src/components/` — Turntable (intro giradischi), Nav, Hero, About, Marquee, Videos, Photos (muro scorrevole), Cerimonia, Contatti, Footer
- `src/styles/` — `tokens.css` (design system) + `global.css`
- `src/data/site.js` — contenuti (video YouTube, foto, contatti)
- `public/` — immagini ottimizzate, audio, logo

## Deploy (Coolify)

- **Build pack:** Dockerfile (non Nixpacks)
- **Porta:** 4321 (Nginx)
- **Env:** nessuna variabile necessaria
- Il `Dockerfile` multi-stage builda con Node 22 Alpine e serve i file statici con Nginx.
- `package-lock.json` **non** è versionato: il Dockerfile fa `npm install` fresco per i binari nativi Linux corretti.
