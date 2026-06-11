import { ArrowUpRight, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { handleSmoothScroll } from '@/lib/utils'
import { GradientOverlay } from '@/components/ui/gradient-overlay'
import { FadeUp } from '@/components/ui/fade-up'
import { InfiniteLogoCarousel } from './components/InfiniteLogoCarousel'
import { ProfileSection } from './components/ProfileSection'
import { ProjectsSection } from './components/ProjectsSection'
import CatalogPage from './CatalogPage'
import footerBackground from './assets/footer-background.webp'
import heroBackground from './assets/hero-background.webp'
import logo from './assets/logo.webp'
import './App.css'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Experiências', href: '#resultados' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const studyBranches = [
  { id: '01', name: 'Super-Geeks', detail: 'Escola de Programação' },
  { id: '02', name: 'Univap', detail: 'Universidade do Vale do Paraíba' },
  { id: '03', name: 'Unifesp', detail: 'Universidade Federal de São Paulo' },
]

const experienceBranches = [
  { id: '01', name: 'Super-Geeks', detail: 'Professor & Dev' },
  { id: '02', name: 'Univap', detail: 'Pesquisa & Desenvolvimento' },
  { id: '03', name: 'Grupo Experiencie', detail: 'Desenvolvimento Full Stack' },
  { id: '04', name: 'Inove Corp.', detail: 'Automações & Marketing' },
  { id: '05', name: 'Grupo Mega', detail: 'Sistemas & Operações' },
]

const footerNavItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Experiência', href: '#resultados' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Projetos', href: '#projetos' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="/" aria-label="Bruno Castelani home">
        <img src={logo} alt="Bruno Castelani Logo" className="h-8 md:h-10 w-auto" />
      </a>

      {/* Desktop Nav */}
      <nav className="site-nav hidden md:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleSmoothScroll}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="sales-footer-nav mt-8" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} onClick={handleSmoothScroll}>
                    <span aria-hidden="true" />
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="sales-hero">
      <div className="sales-hero-content">
        <FadeUp delay={0.04}>
          <p className="sales-eyebrow">5+ anos em desenvolvimento, marketing e automações</p>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1>Eleve seu Time de Produtos para o Próximo Nível.</h1>
        </FadeUp>
        <FadeUp delay={0.20}>
          <p className="sales-hero-copy">
            Escale com um time focado em excelência, resultados e performance.
          </p>
        </FadeUp>
        <FadeUp delay={0.28}>
          <div className="sales-hero-actions">
            <Button asChild size="lg" className="sales-primary-cta">
              <a href="#contato" onClick={handleSmoothScroll}>
                Iniciar conversa
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="sales-secondary-cta">
              <a href="#projetos" onClick={handleSmoothScroll}>Ver projetos</a>
            </Button>
          </div>
        </FadeUp>
        <FadeUp delay={0.36}>
          <p className="sales-helper">Sem forms, direto no whatsapp</p>
        </FadeUp>
      </div>
    </section>
  )
}

function AuthoritySection() {
  return (
    <section id="resultados" className="authority-section">
      <FadeUp className="authority-header">
        <h2>
          Escolha quem Tem Resultados Dentro
          e Fora do Código.
        </h2>
      </FadeUp>

      <div className="authority-cards">
        <FadeUp className="h-full">
          <Card className="authority-card h-full">
            <CardHeader>
              <CardTitle>Ramos de Estudo</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="authority-list">
                {studyBranches.map((item) => (
                  <li key={item.id}>
                    <span className="authority-index">{item.id}.</span>
                    <div>
                      <strong>{item.name}</strong>
                      <span className="authority-detail">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </FadeUp>

        <FadeUp className="h-full">
          <Card className="authority-card h-full">
            <CardHeader>
              <CardTitle>Ramos de Experiência</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="authority-list">
                {experienceBranches.map((item) => (
                  <li key={item.id}>
                    <span className="authority-index">{item.id}.</span>
                    <div>
                      <strong>{item.name}</strong>
                      <span className="authority-detail">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>
  )
}

function FooterSection() {
  return (

    <footer
      id="contato"
      className="sales-footer"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <GradientOverlay variant="background" direction="b" layout="footer" />

      <div className="sales-footer-grid">
        <FadeUp className="sales-footer-column" aria-labelledby="footer-page-heading">
          <div className="sales-footer-heading-group">
            <h2 id="footer-page-heading">Página</h2>
            <span aria-hidden="true" className="sales-footer-accent" />
          </div>

          <nav className="sales-footer-nav" aria-label="Footer navigation">
            {footerNavItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleSmoothScroll}>
                <span aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </nav>
        </FadeUp>

        <FadeUp className="sales-footer-column" aria-labelledby="footer-contact-heading">
          <div className="sales-footer-heading-group">
            <h2 id="footer-contact-heading">Contato</h2>
            <span aria-hidden="true" className="sales-footer-accent" />
          </div>

          <Button asChild variant="outline" size="lg" className="sales-footer-cta">
            <a href="#contato" aria-label="Iniciar conversa com Bruno Castelani" onClick={handleSmoothScroll}>
              Iniciar conversa
            </a>
          </Button>
        </FadeUp>
      </div>

      <Separator className="sales-footer-separator" />

      <p className="sales-footer-copyright">© bruno castelani</p>
    </footer>
  )
}

function SalesPage() {
  return (
    <main className="sales-page">
      <SiteHeader />
      <div
        className="first-fold"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <HeroSection />
        <GradientOverlay variant="background" direction="t" layout="bottom" className="from-slate-50" />
      </div>

      <div className="pt-3 pb-2 bg-slate-50 border-y border-slate-100">
        <FadeUp delay={0.44} className="container mx-auto px-4 mb-1 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Entre as Tecnologias Dominadas
          </p>
        </FadeUp>
        <FadeUp delay={0.64}>
          <InfiniteLogoCarousel />
        </FadeUp>
      </div>

      <AuthoritySection />

      <ProfileSection />

      <ProjectsSection />

      <FooterSection />
    </main>
  )
}

function App() {
  if (window.location.pathname === '/catalog') {
    return <CatalogPage />
  }

  return <SalesPage />
}

export default App
