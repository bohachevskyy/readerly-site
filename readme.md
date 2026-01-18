# Readerly WWW

This is the marketing one‑pager for Readerly.

## Tech Stack
- Astro
- Tailwind CSS
- Static build (no server runtime)

## Local Development
```bash
cd www
npm install
npm run dev
```

Astro will print a local URL (usually http://localhost:4321).

## Build
```bash
cd www
npm run build
```

Output goes to `dist/`.

## Where to Edit Content
- Main page content: `src/pages/index.astro`
- Layout + SEO meta: `src/layouts/BaseLayout.astro`
- Global styles: `src/styles/global.css`
- Tailwind theme: `tailwind.config.mjs`
- Public assets (icons, OG image): `public/`

## Notes
- Use `public/` for static assets.
- Update SEO metadata in `BaseLayout.astro`.
