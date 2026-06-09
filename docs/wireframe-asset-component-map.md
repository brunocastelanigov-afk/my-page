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
- Tech icon source: `docs/docs.md`

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
| Header logo | `src/assets/logo.webp` | Ready, converted from `src/assets/Component 1.png` | Website logo in the top-left of the future header |
| Hero background | `src/assets/hero-background.webp` | Ready, converted from `src/assets/Frame Inicial.png` | Hero section background |
| Footer background | `src/assets/footer-background.webp` | Ready, converted from `src/assets/Frame Final BG.png` | Footer background |
| Bruno portrait | `src/assets/bruno-portrait.webp` | Ready, converted from `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` | Bruno portrait/editorial image |
| Education collage | `src/assets/super-geeks-unifesp-univap.webp` | Ready, converted from `src/assets/super-geeks-unifesp-univap.png` | Super-Geeks, Unifesp, Univap visual |
| Proof diagram | `src/assets/proof-diagram.webp` | Ready, converted from `src/assets/proff-diagram.png` | Promise/proof/retention visual |
| App preview | `src/assets/app-preview.webp` | Ready, converted from `src/assets/App-preview.png` | Portfolio project preview |
| Funnels preview | `src/assets/funnels-preview.webp` | Ready, converted from `src/assets/Funnel-preview.png` | Portfolio project preview |
| Design systems preview | `src/assets/design-systems-preview.webp` | Ready, converted from `src/assets/design-systems-preview.png` | Portfolio project preview |
| Hero image | `src/assets/hero.png` | Existing | Current starter asset; replace or reuse only if approved |
| React logo | `src/assets/react.svg` | Existing | Technology/logo rail |
| Vite logo | `src/assets/vite.svg` | Existing | Technology/logo rail |
| Global icon sprite | `public/icons.svg` | Existing | Shared UI icons if reused |
| Favicon | `public/favicon.svg` | Existing | Browser/tab brand asset |

## Image Assets To Collect Or Confirm

| Asset group | Target location | Status / notes |
| --- | --- | --- |
| Tech logos | Iconify icons documented in `docs/docs.md` | Ready via installed `@iconify-icon/react`; use the documented `logos:*` IDs when implementing the logo rail |
| Company logos | `src/assets/logos/companies/` | Needed/confirm spelling and permission: Grupo Experiencie, Inove Corp., Grupo Mega |
| Bruno portrait mobile crop | `src/assets/profile/bruno-castelani-portrait-mobile.webp` | Needed only if desktop crop fails on mobile |
| Partner collage | `src/assets/profile/partner-collage.webp` | Needed only if the final design uses a collage |

## Readiness Check

| Area | Status | Notes |
| --- | --- | --- |
| shadcn components | Ready | Planned wireframe components are listed above. |
| Image assets | Mostly ready | Hero, footer, logo, portrait, education collage, proof diagram, and project previews are available as `.webp`. |
| Tech logos | Ready by documented approach | `@iconify-icon/react` is installed; use Iconify as described in `docs/docs.md`. |
| Header | Not built yet | The header is not a shadcn component and no `Header`/`SiteHeader` file exists yet. The logo asset for it is ready at `src/assets/logo.webp`. |
