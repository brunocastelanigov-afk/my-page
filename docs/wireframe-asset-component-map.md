# Wireframe Asset and Component Map

Date: 2026-06-09

## Source of Truth

- Paper file: https://app.paper.design/file/01KT042FAGVHVMWJ4Q9RF0RKK7/1-0
- Artboard: `personal-sales-page - Portfolio Sales Wireframe`
- Project path: `/Users/brunogovas/Projects/Projetos Solo/personal-sales-page`

This document maps every component and asset currently required by the Paper wireframe. File locations are implementation targets, not confirmation that the file already exists unless marked as `Existing candidate`.

## Existing Asset Candidates

| Asset | Wireframe usage candidate | File Location | Status |
| --- | --- | --- | --- |
| Initial frame image | Hero or portfolio preview candidate | `src/assets/Frame Inicial.png` | Existing candidate, untracked |
| Final background frame | Hero background/texture candidate | `src/assets/Frame Final BG.png` | Existing candidate, untracked |
| WhatsApp image | Bruno portrait/editorial image candidate | `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` | Existing candidate, untracked |
| React logo | Technology carousel logo | `src/assets/react.svg` | Existing |
| Vite logo | Technology carousel logo | `src/assets/vite.svg` | Existing |
| Global icon sprite | Icons if reused by UI | `public/icons.svg` | Existing |
| Favicon | Browser/tab brand asset | `public/favicon.svg` | Existing |

## Component Inventory

### Global

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| App shell / page composition | Full artboard | `src/App.tsx` | Compose all sections in final order. |
| Site header | `Global Header / Nav` | `src/components/layout/SiteHeader.tsx` | Contains wordmark and anchor nav. |
| Wordmark block | `Wordmark Placeholder` | `src/components/brand/Wordmark.tsx` | Text now, can later consume logo asset. |
| Anchor navigation | `Navigation Links` | `src/components/layout/AnchorNav.tsx` | Links: Inicio, Resultados, Perfil, Projetos, Contato. |
| Primary button | Hero CTA, newsletter CTA | `src/components/ui/Button.tsx` | Reusable CTA style. Use existing design-system component if added. |
| Secondary button | Hero CTA | `src/components/ui/Button.tsx` | Variant of the same button component. |
| Section shell | Every page section | `src/components/layout/SectionShell.tsx` | Shared padding, white background, separators. |
| Section eyebrow | All section labels | `src/components/ui/SectionEyebrow.tsx` | Small uppercase label. |
| Section heading group | All section headers | `src/components/ui/SectionHeader.tsx` | Headline plus optional side description. |
| Card shell | Most wireframe cards | `src/components/ui/Card.tsx` | Reusable bordered/dashed card surface. |
| Pill / tag | Tech and strategy chips | `src/components/ui/Pill.tsx` | Used by technology lists and strategy tags. |

### Section 01 - Centered Hero

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Centered hero section | `Section 01 / Centered Hero` | `src/components/sections/HeroSection.tsx` | Main first-fold layout. |
| Hero centered copy | `Hero Centered Copy` | `src/components/sections/hero/HeroCopy.tsx` | Eyebrow, headline, support copy. |
| Hero CTA stack | `Hero CTA Stack` | `src/components/sections/hero/HeroCtaStack.tsx` | Buttons plus helper text. |
| Hero CTA buttons | `Hero CTA Buttons` | `src/components/sections/hero/HeroCtaButtons.tsx` | `Iniciar conversa` and `Ver projetos`. |
| WhatsApp helper text | `Sem forms, direto no whatsapp` | `src/components/sections/hero/HeroCtaStack.tsx` | Microcopy below buttons. |
| Hero asset notes | `Hero Asset Notes` | `src/components/internal/WireframeNote.tsx` | Internal only. Do not ship on public page unless converted. |

### Section 01B - Infinite Tech Logo Carousel

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Tech carousel section | `Section 01B / Infinite Tech Logo Carousel` | `src/components/sections/TechCarouselSection.tsx` | Headline plus moving logo rail. |
| Carousel header | `Carousel Header` | `src/components/sections/tech-carousel/CarouselHeader.tsx` | Section title and implementation note. |
| Infinite logo rail | `Logo Rail Placeholder` | `src/components/sections/tech-carousel/LogoRail.tsx` | Needs animation, duplicated list, hover pause. |
| Technology logo item | Logo rail child cards | `src/components/sections/tech-carousel/TechnologyLogoItem.tsx` | Handles SVG logo or text fallback. |
| Technology asset inventory note | `Technology Asset Inventory` | `src/components/internal/WireframeNote.tsx` | Internal only. |

### Section 02 - Results Inside and Outside Code

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Authority/results section | `Section 02 / Results Inside Outside Code` | `src/components/sections/AuthoritySection.tsx` | Main section wrapper. |
| Authority headline | `Section 02 Headline` | `src/components/sections/authority/AuthorityHeader.tsx` | Headline plus short side copy. |
| Authority card grid | `Authority Cards` | `src/components/sections/authority/AuthorityCards.tsx` | Two-column desktop grid. |
| Study branch card | `Card / Ramos de Estudo` | `src/components/sections/authority/StudyCard.tsx` | Super-Geeks, Univap, Unifesp. |
| Experience branch card | `Card / Ramos de Experiencia` | `src/components/sections/authority/ExperienceCard.tsx` | Super-Geeks, Univap, Grupo Experiencie, Inove Corp., Grupo Mega. |
| Proof cards row | `Proof Cards Needed` | `src/components/sections/authority/ProofCards.tsx` | Contains two proof cards. |
| Projects delivered proof card | `Projetos entregues` | `src/components/sections/authority/ProofCard.tsx` | Needs real number or curated list. |
| Automations created proof card | `Automacoes criadas` | `src/components/sections/authority/ProofCard.tsx` | Needs prints, flows, or stack list. |

### Section 03 - Mini Newsletter Profile

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Mini-newsletter section | `Section 03 / Mini Newsletter Profile` | `src/components/sections/ProfileNewsletterSection.tsx` | Main profile/newsletter layout. |
| Newsletter masthead | `Newsletter Masthead` | `src/components/sections/profile-newsletter/NewsletterMasthead.tsx` | Section title and issue card. |
| Newsletter issue card | `Newsletter Issue Card` | `src/components/sections/profile-newsletter/IssueCard.tsx` | Portrait placeholder, edition meta, Bruno age. |
| Opening letter card | `Opening Letter` | `src/components/sections/profile-newsletter/OpeningLetter.tsx` | First three original copy paragraphs. |
| Issue index | `In This Issue` | `src/components/sections/profile-newsletter/IssueIndex.tsx` | Five-item table of contents. |
| Education feature | `Education Feature` | `src/components/sections/profile-newsletter/EducationFeature.tsx` | Institution image card plus education copy. |
| Image placeholder card | Education and partner placeholders | `src/components/ui/ImagePlaceholder.tsx` | Reusable until real images are provided. |
| Chapter card | Chapter blocks | `src/components/sections/profile-newsletter/ChapterCard.tsx` | Reusable for formation, partnerships, strategy. |
| Editorial note | Ranking revision note | `src/components/sections/profile-newsletter/EditorialNote.tsx` | Can be removed from public page after fact check. |
| Experience and strategy grid | `Experience And Strategy Grid` | `src/components/sections/profile-newsletter/ExperienceStrategyGrid.tsx` | Two-card desktop grid. |
| Strategy tag list | Strategy chips | `src/components/sections/profile-newsletter/StrategyTags.tsx` | Pesquisa, ofertas, gatilhos, argumentacao, jornada. |
| Promise/proof feature | `Promise Proof Feature` | `src/components/sections/profile-newsletter/PromiseProofFeature.tsx` | Main highlighted concept block. |
| Highlight card | `Highlight card` | `src/components/sections/profile-newsletter/HighlightCard.tsx` | Offer plus delivery insight. |
| Closing CTA block | `Newsletter Closing CTA` | `src/components/sections/profile-newsletter/ClosingCta.tsx` | Final letter plus WhatsApp CTA. |

### Section 04 - Portfolio Project Links

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Portfolio section | `Section 04 / Portfolio Project Links` | `src/components/sections/PortfolioSection.tsx` | Main project/case section. |
| Portfolio header | `Section 04 Header` | `src/components/sections/portfolio/PortfolioHeader.tsx` | Headline plus side explanation. |
| Portfolio card grid | `Portfolio Cards` | `src/components/sections/portfolio/PortfolioCards.tsx` | Three-card desktop grid. |
| Project card | `Project Card / Design Systems`, `Funnels`, `Apps` | `src/components/sections/portfolio/ProjectCard.tsx` | Reusable card with preview, copy, CTA. |
| Project card CTA | `Abrir link` buttons | `src/components/sections/portfolio/ProjectCard.tsx` | Link to each project page. |
| Portfolio technology list | `Portfolio Technology List` | `src/components/sections/portfolio/PortfolioTechnologyList.tsx` | Stack list below cards. |
| Technology pill list | Tech list chips | `src/components/ui/Pill.tsx` | Reuse shared pill. |

### Final Build Inventory

| Component | Wireframe Location | File Location | Notes |
| --- | --- | --- | --- |
| Build inventory section | `Final Build Inventory / Assets + Components` | `docs/wireframe-asset-component-map.md` | Documentation only. Do not build into public page by default. |
| Inventory card | `Inventory Cards` | `docs/wireframe-asset-component-map.md` | Documentation only. |

## Visual Asset Inventory

### Brand and Global Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| Wordmark or name treatment | `Wordmark Placeholder` | `src/assets/brand/wordmark.svg` | Needed. Text fallback can ship first. |
| Favicon | Browser/tab brand | `public/favicon.svg` | Existing. Replace only if final brand changes. |
| Navigation anchor labels | `Navigation Links` | `src/content/navigation.ts` | Needed content/config file. |

### Hero Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| Lunar-inspired background or texture | `Hero Asset Notes` | `src/assets/hero/lunar-texture.webp` | Needed. `src/assets/Frame Final BG.png` may be a candidate. |
| Hero mobile background crop | `Hero Asset Notes` | `src/assets/hero/lunar-texture-mobile.webp` | Needed if desktop asset does not crop well. |
| WhatsApp CTA URL | `Hero CTA Buttons`, `Newsletter Closing CTA` | `src/content/contact.ts` | Needed. Format as a single exported constant. |
| WhatsApp CTA copy | `Iniciar conversa` and helper text | `src/content/copy.ts` | Needed content/config file. |

### Technology Carousel Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| React logo | `Logo Rail Placeholder` | `src/assets/logos/tech/react.svg` | Needed or move/copy from `src/assets/react.svg` after approval. |
| React DOM logo/text fallback | `Logo Rail Placeholder` | `src/assets/logos/tech/react-dom.svg` | Needed only if separate logo is desired; text fallback is acceptable. |
| TypeScript logo | `Logo Rail Placeholder` | `src/assets/logos/tech/typescript.svg` | Needed. |
| Vite logo | `Logo Rail Placeholder` | `src/assets/logos/tech/vite.svg` | Needed or move/copy from `src/assets/vite.svg` after approval. |
| ESLint logo | `Logo Rail Placeholder` | `src/assets/logos/tech/eslint.svg` | Needed. |
| npm logo | `Logo Rail Placeholder` | `src/assets/logos/tech/npm.svg` | Needed. |
| JavaScript logo | `Logo Rail Placeholder` | `src/assets/logos/tech/javascript.svg` | Needed. |
| HTML logo | `Logo Rail Placeholder` | `src/assets/logos/tech/html.svg` | Needed. |
| n8n logo | `Logo Rail Placeholder` | `src/assets/logos/tech/n8n.svg` | Needed. |
| Supabase logo | `Logo Rail Placeholder` | `src/assets/logos/tech/supabase.svg` | Needed. |
| Cloudflare logo | `Logo Rail Placeholder` | `src/assets/logos/tech/cloudflare.svg` | Needed. |
| Framer Motion logo | `Technology Asset Inventory` | `src/assets/logos/tech/framer-motion.svg` | Needed for expanded carousel/list. |
| shadcn/ui logo/text fallback | `Technology Asset Inventory` | `src/assets/logos/tech/shadcn-ui.svg` | Needed or text fallback. |
| Radix UI logo | `Technology Asset Inventory` | `src/assets/logos/tech/radix-ui.svg` | Needed. |
| VTurb logo | `Technology Asset Inventory` | `src/assets/logos/tech/vturb.svg` | Needed. |
| Stripe logo | `Technology Asset Inventory` | `src/assets/logos/tech/stripe.svg` | Needed. |
| Hotmart logo | `Technology Asset Inventory` | `src/assets/logos/tech/hotmart.svg` | Needed. |
| Meta API / Coexistencia logo/text fallback | `Portfolio Technology List` | `src/assets/logos/tech/meta-api.svg` | Needed or text fallback. |
| Next.js logo | `Portfolio Technology List` | `src/assets/logos/tech/nextjs.svg` | Needed. |
| Vercel logo | `Portfolio Technology List` | `src/assets/logos/tech/vercel.svg` | Needed. |
| Technology data file | Carousel and portfolio tech list | `src/content/technologies.ts` | Needed. Should map name, category, logo path, and source status. |

### Authority Section Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| Super-Geeks logo | `Card / Ramos de Estudo`, `Card / Ramos de Experiencia` | `src/assets/logos/education/super-geeks.svg` | Needed. Confirm usage permission. |
| Univap logo | `Card / Ramos de Estudo`, `Card / Ramos de Experiencia` | `src/assets/logos/education/univap.svg` | Needed. Confirm usage permission. |
| Unifesp logo | `Card / Ramos de Estudo` | `src/assets/logos/education/unifesp.svg` | Needed. Confirm usage permission. |
| Grupo Experiencie logo | `Card / Ramos de Experiencia` | `src/assets/logos/companies/grupo-experiencie.svg` | Needed. Confirm exact spelling first. |
| Inove Corp. logo | `Card / Ramos de Experiencia` | `src/assets/logos/companies/inove-corp.svg` | Needed. Confirm usage permission. |
| Grupo Mega logo | `Card / Ramos de Experiencia` | `src/assets/logos/companies/grupo-mega.svg` | Needed. Confirm usage permission. |
| Projects delivered proof data | `Projetos entregues` | `src/content/proofs.ts` | Needed. Real number or curated list. |
| Automations proof data | `Automacoes criadas` | `src/content/proofs.ts` | Needed. Prints, flows, or stack list. |

### Mini-newsletter Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| Bruno portrait/editorial image | `Newsletter Issue Card` | `src/assets/profile/bruno-castelani-portrait.webp` | Needed. `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` may be a candidate. |
| Portrait mobile crop | `Newsletter Issue Card` | `src/assets/profile/bruno-castelani-portrait-mobile.webp` | Needed if desktop crop fails on mobile. |
| Institution logo collage | `Education Feature` | `src/assets/profile/education-collage.webp` | Needed. Can be generated from approved institution logos. |
| Partner logo/print collage | `Experience And Strategy Grid` | `src/assets/profile/partner-collage.webp` | Needed. Can be generated from approved partner logos or screenshots. |
| Promise to proof diagram | `Highlight card` | `src/assets/profile/promise-proof-retention-diagram.svg` | Needed. Wireframe shows promessa -> prova -> retencao. |
| Newsletter copy data | Entire Section 03 | `src/content/profileNewsletter.ts` | Needed. Store the full copy and chapter metadata. |
| Issue index data | `In This Issue` | `src/content/profileNewsletter.ts` | Needed. Five index items. |
| Strategy tags data | `StrategyTags` | `src/content/profileNewsletter.ts` | Needed. Pesquisa, ofertas, gatilhos, argumentacao, jornada. |

### Portfolio Assets

| Asset | Wireframe Location | File Location | Status / Notes |
| --- | --- | --- | --- |
| Design Systems project preview | `Project Card / Design Systems` | `src/assets/projects/design-systems-preview.webp` | Needed. Screenshot or composed preview. |
| Funnels project preview | `Project Card / Funnels` | `src/assets/projects/funnels-preview.webp` | Needed. Screenshot or composed preview. |
| Apps project preview | `Project Card / Apps` | `src/assets/projects/apps-preview.webp` | Needed. Screenshot or composed preview. |
| Design Systems project link | `Project Card / Design Systems` | `src/content/projects.ts` | Needed. |
| Funnels project link | `Project Card / Funnels` | `src/content/projects.ts` | Needed. |
| Apps project link | `Project Card / Apps` | `src/content/projects.ts` | Needed. |
| Project cards data | `Portfolio Cards` | `src/content/projects.ts` | Needed. Title, description, href, preview image, tags. |
| Portfolio technology data | `Portfolio Technology List` | `src/content/technologies.ts` | Needed. Can reuse technology data file. |

## Content and Data Files to Create

| File Location | Purpose | Used By |
| --- | --- | --- |
| `src/content/navigation.ts` | Anchor labels and section ids. | `SiteHeader`, `AnchorNav` |
| `src/content/copy.ts` | Hero copy, CTA labels, common microcopy. | `HeroSection`, shared CTA components |
| `src/content/contact.ts` | WhatsApp URL and contact constants. | Hero CTA, newsletter CTA, footer |
| `src/content/technologies.ts` | Technology list, logo paths, fallback labels. | Tech carousel, portfolio technology list |
| `src/content/authority.ts` | Study and experience entries. | Authority section |
| `src/content/proofs.ts` | Proof card values and supporting notes. | Authority proof cards |
| `src/content/profileNewsletter.ts` | Full mini-newsletter copy and chapter metadata. | Section 03 |
| `src/content/projects.ts` | Portfolio project cards and links. | Section 04 |

## Proposed Asset Folder Structure

```text
src/assets/
  brand/
    wordmark.svg
  hero/
    lunar-texture.webp
    lunar-texture-mobile.webp
  logos/
    tech/
    education/
    companies/
  profile/
    bruno-castelani-portrait.webp
    bruno-castelani-portrait-mobile.webp
    education-collage.webp
    partner-collage.webp
    promise-proof-retention-diagram.svg
  projects/
    design-systems-preview.webp
    funnels-preview.webp
    apps-preview.webp
```

## Validation Checklist Before Implementation

| Validation | Wireframe Location | File Location |
| --- | --- | --- |
| Confirm final WhatsApp number and message text. | Hero CTA, newsletter CTA | `src/content/contact.ts` |
| Verify Unifesp ranking claim before publishing. | Section 03 editorial note | `src/content/profileNewsletter.ts` |
| Confirm exact spelling of Instituto/Grupo Experiencie. | Authority and newsletter partnership copy | `src/content/authority.ts`, `src/content/profileNewsletter.ts` |
| Confirm third-party logo usage permission. | Tech carousel, authority cards, newsletter collages | `src/assets/logos/**` |
| Collect real proof for projects delivered. | `Projetos entregues` proof card | `src/content/proofs.ts` |
| Collect real proof for automations created. | `Automacoes criadas` proof card | `src/content/proofs.ts` |
| Define final project routes. | Portfolio cards | `src/content/projects.ts` |
| Decide whether existing untracked assets should be used. | Hero/profile/project previews | `src/assets/Frame Inicial.png`, `src/assets/Frame Final BG.png`, `src/assets/WhatsApp Image 2026-01-05 at 10.01.22.jpeg` |

