import { defineConfig } from 'astro/config';

// Static build (SSG) — Coolify serves the dist/ folder as a static site.
export default defineConfig({
  site: 'https://dixieco.it',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
