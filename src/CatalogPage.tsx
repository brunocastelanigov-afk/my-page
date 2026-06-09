import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Component,
  FileText,
  ImageIcon,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  Type,
} from 'lucide-react'

import appPreview from './assets/app-preview.webp'
import designSystemsPreview from './assets/design-systems-preview.webp'
import funnelsPreview from './assets/funnels-preview.webp'
import logo from './assets/logo.webp'
import proofDiagram from './assets/proof-diagram.webp'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import './catalog.css'

const tokenColors = [
  {
    name: 'Background',
    token: '--background',
    value: 'oklch(0.9892 0.0054 117.9205)',
    usage: 'Base page surface',
    className: 'swatch-background',
  },
  {
    name: 'Foreground',
    token: '--foreground',
    value: 'oklch(0.2077 0.0398 265.7549)',
    usage: 'Primary copy and headings',
    className: 'swatch-foreground',
  },
  {
    name: 'Primary',
    token: '--primary',
    value: 'oklch(0.8871 0.2122 128.5041)',
    usage: 'Main CTAs and active states',
    className: 'swatch-primary',
  },
  {
    name: 'Secondary',
    token: '--secondary',
    value: 'oklch(0.3717 0.0392 257.2870)',
    usage: 'Dense surfaces and contrast bands',
    className: 'swatch-secondary',
  },
  {
    name: 'Muted',
    token: '--muted',
    value: 'oklch(0.9683 0.0069 247.8956)',
    usage: 'Quiet panels and inactive rows',
    className: 'swatch-muted',
  },
  {
    name: 'Accent',
    token: '--accent',
    value: 'oklch(0.9819 0.0181 155.8263)',
    usage: 'Soft proof labels and highlights',
    className: 'swatch-accent',
  },
]

const componentInventory = [
  {
    name: 'Button',
    file: 'components/ui/button.tsx',
    usage: 'Hero CTA, portfolio actions, catalog links',
    variants: 'default, secondary, outline, ghost, link',
  },
  {
    name: 'Card',
    file: 'components/ui/card.tsx',
    usage: 'Authority, proof, portfolio, catalog examples',
    variants: 'Card, Header, Content, Description',
  },
  {
    name: 'Badge',
    file: 'components/ui/badge.tsx',
    usage: 'Technology pills, metadata labels, status markers',
    variants: 'default, secondary, outline, ghost, link',
  },
  {
    name: 'Avatar',
    file: 'components/ui/avatar.tsx',
    usage: 'Social proof, author identity, stakeholder sign-off',
    variants: 'image, fallback, group, badge',
  },
  {
    name: 'Accordion',
    file: 'components/ui/accordion.tsx',
    usage: 'FAQ, mobile issue index, design decisions',
    variants: 'single, collapsible',
  },
  {
    name: 'Carousel',
    file: 'components/ui/carousel.tsx',
    usage: 'Technology/logo rail',
    variants: 'Embla-powered gallery',
  },
]

const pageSections = [
  {
    section: 'Header',
    intent: 'Logo, compact navigation, clear primary action',
    base: 'Button, logo asset',
    status: 'Ready asset',
  },
  {
    section: 'Hero',
    intent: 'Immediate positioning for personal sales and product-design work',
    base: 'Button, Badge, image background',
    status: 'Ready assets',
  },
  {
    section: 'Authority',
    intent: 'Proof through education, projects, and technical credibility',
    base: 'Card, Badge, Avatar',
    status: 'Mapped',
  },
  {
    section: 'Portfolio',
    intent: 'Project previews for app, funnels, and design systems',
    base: 'Card, AspectRatio, Button',
    status: 'Ready assets',
  },
  {
    section: 'FAQ',
    intent: 'Conversion objections handled with calm disclosure behavior',
    base: 'Accordion, Badge',
    status: 'Ready',
  },
]

const assetInventory = [
  {
    name: 'Logo',
    file: 'src/assets/logo.webp',
    usage: 'Header brand mark',
    image: logo,
  },
  {
    name: 'App Preview',
    file: 'src/assets/app-preview.webp',
    usage: 'Portfolio project card',
    image: appPreview,
  },
  {
    name: 'Funnels Preview',
    file: 'src/assets/funnels-preview.webp',
    usage: 'Portfolio project card',
    image: funnelsPreview,
  },
  {
    name: 'Design Systems Preview',
    file: 'src/assets/design-systems-preview.webp',
    usage: 'Portfolio project card and this catalog topic',
    image: designSystemsPreview,
  },
  {
    name: 'Proof Diagram',
    file: 'src/assets/proof-diagram.webp',
    usage: 'Promise/proof/retention visual',
    image: proofDiagram,
  },
]

const designDecisions = [
  {
    title: 'Components come from the design system first',
    detail: 'Every reusable primitive on this page is imported from components/ui before local composition is added.',
  },
  {
    title: 'Assets are imported from src when bundled',
    detail: 'Catalog visuals use Vite asset imports so production URLs are hashed and verified during build.',
  },
  {
    title: 'Catalog data mirrors local docs',
    detail: 'Inventory content follows docs/wireframe-asset-component-map.md and the dashboard catalog reference.',
  },
]

function CatalogSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="catalog-section">
      <div className="section-heading">
        <Badge variant="outline" className="section-eyebrow">
          {eyebrow}
        </Badge>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}

function SwatchCard({ className, name, token, value, usage }: (typeof tokenColors)[number]) {
  return (
    <Card className="swatch-card">
      <div className={`swatch-fill ${className}`}>
        <span>{name}</span>
      </div>
      <CardContent>
        <code>{token}</code>
        <p>{value}</p>
        <small>{usage}</small>
      </CardContent>
    </Card>
  )
}

function ComponentRow({
  name,
  file,
  usage,
  variants,
  isLast,
}: (typeof componentInventory)[number] & { isLast: boolean }) {
  return (
    <div className={`inventory-row ${isLast ? 'is-last' : ''}`}>
      <div className="inventory-title">
        <span>
          <Component size={18} aria-hidden="true" />
        </span>
        <strong>{name}</strong>
      </div>
      <p>{usage}</p>
      <code>{file}</code>
      <Badge variant="secondary">{variants}</Badge>
    </div>
  )
}

function AssetCard({ name, file, usage, image }: (typeof assetInventory)[number]) {
  return (
    <Card className="asset-card">
      <div className="asset-frame">
        <img src={image} alt={`${name} preview`} />
      </div>
      <CardContent>
        <div>
          <h3>{name}</h3>
          <Badge variant="outline">Bundled asset</Badge>
        </div>
        <p>{usage}</p>
        <code>{file}</code>
      </CardContent>
    </Card>
  )
}

function CatalogPage() {
  return (
    <main className="catalog-page">
      <header className="catalog-topbar">
        <a className="brand-link" href="/" aria-label="Back to home">
          <img src={logo} alt="Bruno Castelani" />
          <span>Design System</span>
        </a>
        <nav aria-label="Catalog navigation">
          <a href="#components">Components</a>
          <a href="#assets">Assets</a>
          <a href="#decisions">Decisions</a>
        </nav>
      </header>

      <section className="catalog-hero">
        <div className="hero-copy">
          <Badge className="hero-badge">
            <Sparkles size={14} aria-hidden="true" />
            Source of truth
          </Badge>
          <h1>Catalog for every component and design choice.</h1>
          <p>
            A living reference for the personal sales page design system, component inventory,
            chosen tokens, approved assets, and implementation notes.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <a href="#components">
                View components
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#decisions">Read rules</a>
            </Button>
          </div>
        </div>
        <Card className="hero-panel">
          <CardHeader>
            <CardTitle>Catalog coverage</CardTitle>
            <CardDescription>Current source files represented by this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="metric-grid">
              <div>
                <strong>6</strong>
                <span>UI primitives</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Ready assets</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Theme tokens</span>
              </div>
            </div>
            <Separator />
            <div className="proof-strip">
              <AvatarGroup>
                <Avatar>
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+3</AvatarGroupCount>
              </AvatarGroup>
              <span>Mapped from local docs and the dashboard catalog reference.</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <CatalogSection
        eyebrow="Tokens"
        title="Chosen visual language"
        description="The active palette is copied from the project token source and presented as approval-ready swatches."
      >
        <div className="swatch-grid">
          {tokenColors.map((color) => (
            <SwatchCard key={color.token} {...color} />
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        eyebrow="Components"
        title="Reusable primitive inventory"
        description="Only existing design-system primitives are cataloged here; no local mocks are introduced."
      >
        <Card id="components" className="inventory-card">
          <CardContent>
            {componentInventory.map((item, index) => (
              <ComponentRow
                key={item.name}
                {...item}
                isLast={index === componentInventory.length - 1}
              />
            ))}
          </CardContent>
        </Card>
      </CatalogSection>

      <CatalogSection
        eyebrow="Page Map"
        title="How the sales page should be assembled"
        description="Section intent stays visible next to the design-system base that should support it."
      >
        <div className="section-map">
          {pageSections.map((item, index) => (
            <Card key={item.section} className="map-card">
              <CardHeader>
                <span className="map-index">{String(index + 1).padStart(2, '0')}</span>
                <CardTitle>{item.section}</CardTitle>
                <CardDescription>{item.intent}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.base}</p>
                <Badge variant={item.status === 'Ready' ? 'default' : 'outline'}>{item.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        eyebrow="Assets"
        title="Approved project visuals"
        description="These are real assets already available in the app and ready to be reused by the sales page."
      >
        <div id="assets" className="asset-grid">
          {assetInventory.map((asset) => (
            <AssetCard key={asset.file} {...asset} />
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        eyebrow="Examples"
        title="Primitive behavior preview"
        description="A compact set of rendered states to keep interaction patterns and copy tone aligned."
      >
        <div className="example-grid">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>Button variants available to page sections.</CardDescription>
            </CardHeader>
            <CardContent className="button-preview">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Labels</CardTitle>
              <CardDescription>Compact metadata for components and assets.</CardDescription>
            </CardHeader>
            <CardContent className="badge-preview">
              <Badge>Ready</Badge>
              <Badge variant="secondary">Mapped</Badge>
              <Badge variant="outline">Needs approval</Badge>
              <Badge variant="ghost">Documented</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design Notes</CardTitle>
              <CardDescription>Accordion copy for decisions and approval criteria.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="item-0">
                {designDecisions.map((decision, index) => (
                  <AccordionItem key={decision.title} value={`item-${index}`}>
                    <AccordionTrigger>{decision.title}</AccordionTrigger>
                    <AccordionContent>{decision.detail}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </CatalogSection>

      <section id="decisions" className="catalog-footer">
        <div>
          <Badge variant="outline">
            <ShieldCheck size={14} aria-hidden="true" />
            Handoff ready
          </Badge>
          <h2>Catalog rules to keep future work aligned.</h2>
        </div>
        <div className="rules-grid">
          <p>
            <Palette size={18} aria-hidden="true" />
            Tokens come from <code>styles/global.css</code>.
          </p>
          <p>
            <Boxes size={18} aria-hidden="true" />
            Components come from <code>components/ui</code>.
          </p>
          <p>
            <ImageIcon size={18} aria-hidden="true" />
            Assets come from <code>src/assets</code>.
          </p>
          <p>
            <FileText size={18} aria-hidden="true" />
            Inventory docs live in <code>docs/</code>.
          </p>
          <p>
            <Layers3 size={18} aria-hidden="true" />
            New sections should map to this catalog first.
          </p>
          <p>
            <Type size={18} aria-hidden="true" />
            Letter spacing stays neutral for app UI.
          </p>
        </div>
        <div className="done-line">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>Reference: dashboard/app/catalog/page.tsx adapted for this Vite app.</span>
        </div>
      </section>
    </main>
  )
}

export default CatalogPage
