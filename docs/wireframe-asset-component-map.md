# Wireframe Asset and Component Map

Date: 2026-06-09

## Scope

This document only tracks:

- shadcn components imported or selected that are represented in the planned wireframe.
- image/visual assets needed for the later LP/presentation page.

It does not map page sections, custom components, content files, routes, or catalog-page work.

## References

- Paper file: https://app.paper.design/file/01KT042FAGVHVMWJ4Q9RF0RKK7/1-0
- Artboard: `personal-sales-page - Portfolio Sales Wireframe`
- Project path: `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page`
- Theme source: `styles/global.css`

## shadcn Components

| Component | File Location | Status | Later usage |
| --- | --- | --- | --- |
| Accordion | `components/ui/accordion.tsx` | Imported | Mobile issue index/disclosure pattern if the wireframe note is implemented |
| Aspect Ratio | `components/ui/aspect-ratio.tsx` | Imported | Image frames, portrait/collage slots, project previews |
| Badge | `components/ui/badge.tsx` | Imported | Technology pills, strategy tags, metadata labels |
| Button | `components/ui/button.tsx` | Imported | Hero CTA, portfolio links, closing CTA |
| Card | `components/ui/card.tsx` | Imported | Authority, proof, newsletter, portfolio cards |
| Carousel | `components/ui/carousel.tsx` | Imported | Technology/logo rail |
| Separator | `components/ui/separator.tsx` | Imported | Section rules, masthead dividers, card separators |

## Existing Image Assets

| Asset | File Location | Status | Possible usage |
| --- | --- | --- | --- |
| Initial frame image | `src/assets/Frame Inicial.png` | Existing candidate, untracked | Hero or portfolio preview |
| Final background frame | `src/assets/Frame Final BG.png` | Existing candidate, untracked | Hero background/texture |
| WhatsApp image | `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` | Existing candidate, untracked | Bruno portrait/editorial image |
| Hero image | `src/assets/hero.png` | Existing | Current starter asset; replace or reuse only if approved |
| React logo | `src/assets/react.svg` | Existing | Technology/logo rail |
| Vite logo | `src/assets/vite.svg` | Existing | Technology/logo rail |
| Global icon sprite | `public/icons.svg` | Existing | Shared UI icons if reused |
| Favicon | `public/favicon.svg` | Existing | Browser/tab brand asset |

## Image Assets To Collect Or Confirm

| Asset group | Target location | Status / notes |
| --- | --- | --- |
| Wordmark/name treatment | `src/assets/brand/wordmark.svg` | Needed; text fallback is acceptable first |
| Hero background texture | `src/assets/hero/lunar-texture.webp` | Needed; `src/assets/Frame Final BG.png` may be a candidate |
| Hero mobile background crop | `src/assets/hero/lunar-texture-mobile.webp` | Needed only if desktop crop fails on mobile |
| Tech logos | `src/assets/logos/tech/` | Needed/confirm: React, React DOM, TypeScript, Vite, ESLint, npm, JavaScript, HTML, n8n, Supabase, Cloudflare, Framer Motion, shadcn/ui, Radix UI, VTurb, Stripe, Hotmart, Meta API, Next.js, Vercel |
| Education logos | `src/assets/logos/education/` | Needed/confirm permission: Super-Geeks, Univap, Unifesp |
| Company logos | `src/assets/logos/companies/` | Needed/confirm spelling and permission: Grupo Experiencie, Inove Corp., Grupo Mega |
| Bruno portrait | `src/assets/profile/bruno-castelani-portrait.webp` | Needed; `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` may be a candidate |
| Bruno portrait mobile crop | `src/assets/profile/bruno-castelani-portrait-mobile.webp` | Needed only if desktop crop fails on mobile |
| Education collage | `src/assets/profile/education-collage.webp` | Needed only if the final design uses a collage |
| Partner collage | `src/assets/profile/partner-collage.webp` | Needed only if the final design uses a collage |
| Promise/proof diagram | `src/assets/profile/promise-proof-retention-diagram.svg` | Needed only if the final design keeps this visual |
| Project previews | `src/assets/projects/` | Needed/confirm: `design-systems-preview.webp`, `funnels-preview.webp`, `apps-preview.webp` |
