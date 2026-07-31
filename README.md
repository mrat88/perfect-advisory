# Perfect Advisory Resources

Bilingual (English / 中文) one-page website for Perfect Advisory Resources, a
Malaysian SME accounting firm. Static site, deployed to Hostinger at
[perfectadvisory.com.my](https://perfectadvisory.com.my).

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4 (design tokens via `@theme`)
- TypeScript, React 19
- Fonts: Newsreader (display), Outfit (body), IBM Plex Mono (figures)
- Contact form via [Web3Forms](https://web3forms.com) (no backend)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

## Structure

- `app/(en)` → `/` English, `app/(zh)/zh` → `/zh` Chinese (each route group sets
  its own `<html lang>`)
- `content/en.ts`, `content/zh.ts` → all copy, one typed dictionary per language
- `components/` → language-agnostic section components rendered from a dictionary

## Deploy

`npm run build` produces a fully static `out/`. Upload its contents to the
Hostinger public root. Set `NEXT_PUBLIC_WEB3FORMS_KEY` at build time to enable
the contact form (key is tied to info@perfectadvisory.com.my).

Design and planning docs live in `docs/` (kept local, not committed).
