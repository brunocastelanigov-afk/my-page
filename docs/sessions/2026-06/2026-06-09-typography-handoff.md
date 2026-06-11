# Typography Update Handoff

**Date:** 2026-06-09
**Project:** personal-sales-page

## Adjustments Completed
1. **Typography Update (Risk: 🟢 LOW)**
   - Replaced hardcoded system UI fonts with `@font-face` imports for **Satoshi** (normal text) and **Piers Sans** (headlines).
   - Variables `--sans` and `--heading` updated in `index.css`.
   - Variables `--font-sans` and `--font-heading` mapped in `global.css` (Tailwind v4 theme inline).
   - Removed rigid `font-family` from `.sales-page` and `.catalog-page` in `App.css` and `catalog.css`.
   - Ensured all header elements (`h1` through `h6`) automatically resolve to `var(--heading)`.

## Quality Gates Passed
- ✅ **Visual Verification**: Font-families are correctly pointing to local asset paths `./assets/Satoshi-Variable.ttf` and `./assets/PierSans-FreeForPersonalUse/PierSans-*`.
- ✅ **Cross-Page Regression**: `App.tsx` and `CatalogPage.tsx` rely on the updated CSS variables without breaking their structure.
- ✅ **Build Validation**: Tailwind v4 compatibility maintained via `@theme inline`.

## Modified Files
- `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page/src/index.css`
- `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page/styles/global.css`
- `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page/src/App.css`
- `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page/src/catalog.css`
