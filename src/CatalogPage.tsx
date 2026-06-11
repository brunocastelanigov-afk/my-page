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
import superGeeks from './assets/super-geeks-unifesp-univap.png'
import frameFinalBg from './assets/Frame Final BG.png'
import frameInicial from './assets/Frame Inicial.png'
import { InfiniteLogoCarousel } from './components/InfiniteLogoCarousel'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import './catalog.css'

const tokenColors = [
  {
    name: 'Background',
    token: '--background',
    value: 'oklch(0.9431 0 0)',
    usage: 'Base page surface',
    className: 'swatch-background',
  },
  {
    name: 'Foreground',
    token: '--foreground',
    value: 'oklch(0.1417 0.0331 274.4047)',
    usage: 'Primary copy and headings',
    className: 'swatch-foreground',
  },
  {
    name: 'Primary',
    token: '--primary',
    value: 'oklch(0.9431 0 0)',
    usage: 'Main CTAs and active states',
    className: 'swatch-primary',
  },
  {
    name: 'Secondary',
    token: '--secondary',
    value: 'oklch(0.7839 0.0228 239.5203)',
    usage: 'Dense surfaces and contrast bands',
    className: 'swatch-secondary',
  },
  {
    name: 'Muted',
    token: '--muted',
    value: 'oklch(0.8906 0.0102 238.5257)',
    usage: 'Quiet panels and inactive rows',
    className: 'swatch-muted',
  },
  {
    name: 'Accent',
    token: '--accent',
    value: 'oklch(0.2775 0.0797 266.4735)',
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
    variants: 'default, secondary, outline, destructive, link',
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
  {
    name: 'AspectRatio',
    file: 'components/ui/aspect-ratio.tsx',
    usage: 'Image containers',
    variants: 'ratio property',
  },
  {
    name: 'ButtonGroup',
    file: 'components/ui/button-group.tsx',
    usage: 'Grouped actions',
    variants: 'horizontal, vertical',
  },
  {
    name: 'Collapsible',
    file: 'components/ui/collapsible.tsx',
    usage: 'Expandable sections',
    variants: 'controlled, uncontrolled',
  },
  {
    name: 'NavigationMenu',
    file: 'components/ui/navigation-menu.tsx',
    usage: 'Main site navigation',
    variants: 'lists, dropdowns',
  },
  {
    name: 'ScrollArea',
    file: 'components/ui/scroll-area.tsx',
    usage: 'Custom scrollbars',
    variants: 'vertical, horizontal',
  },
  {
    name: 'Sheet',
    file: 'components/ui/sheet.tsx',
    usage: 'Off-canvas panels',
    variants: 'top, right, bottom, left',
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
  {
    name: 'Super Geeks',
    file: 'src/assets/super-geeks-unifesp-univap.png',
    usage: 'Approved project visual',
    image: superGeeks,
  },
  {
    name: 'Frame Final BG',
    file: 'src/assets/Frame Final BG.png',
    usage: 'Approved project visual',
    image: frameFinalBg,
  },
  {
    name: 'Frame Inicial',
    file: 'src/assets/Frame Inicial.png',
    usage: 'Approved project visual',
    image: frameInicial,
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
                <strong>13</strong>
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
              <Badge variant="destructive">Deprecated</Badge>
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

          <Card>
            <CardHeader>
              <CardTitle>Advanced Groups</CardTitle>
              <CardDescription>Grouped actions and combined elements.</CardDescription>
            </CardHeader>
            <CardContent className="button-preview">
              <ButtonGroup>
                <Button variant="secondary">Start</Button>
                <ButtonGroupSeparator />
                <Button>Middle</Button>
                <ButtonGroupSeparator />
                <Button variant="secondary">End</Button>
              </ButtonGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Container</CardTitle>
              <CardDescription>Locked aspect ratio for media.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ width: "200px" }}>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border">
                  <img src={appPreview} alt="Preview" className="object-cover w-full h-full" />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expandable Area</CardTitle>
              <CardDescription>Collapsible content for dense info.</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <Layers3 className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="px-4 py-3 border rounded-md text-sm text-muted-foreground">
                  Hidden content revealed when triggered.
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scroll Boundaries</CardTitle>
              <CardDescription>Custom styled scrollbars.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32 w-full rounded-md border p-4">
                <p className="text-sm text-muted-foreground mb-4">Top of scroll area</p>
                <p className="text-sm text-muted-foreground mb-4">Middle content...</p>
                <p className="text-sm text-muted-foreground mb-4">More content...</p>
                <p className="text-sm text-muted-foreground mb-4">Even more content...</p>
                <p className="text-sm text-muted-foreground">Bottom of scroll area</p>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Off-Canvas Panel</CardTitle>
              <CardDescription>Sheet overlay for details or config.</CardDescription>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Configuration</SheetTitle>
                    <SheetDescription>
                      This is a panel that slides in from the right edge.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infinite Logo Rail</CardTitle>
              <CardDescription>Current technology logos in a CSS-only continuous loop.</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <InfiniteLogoCarousel />
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Site Navigation</CardTitle>
              <CardDescription>Navigation menu with dropdowns.</CardDescription>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Sparkles className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Design System
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Introduction</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Re-usable components built using Radix UI.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
