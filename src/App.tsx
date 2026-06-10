import { ArrowUpRight, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import CatalogPage from './CatalogPage'
import heroBackground from './assets/hero-background.webp'
import logo from './assets/logo.webp'
import './App.css'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
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
          <a key={item.href} href={item.href}>
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
            <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-lg font-medium text-slate-800 uppercase tracking-widest hover:text-slate-500 transition-colors">
                  {item.label}
                </a>
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
    <section
      id="inicio"
      className="sales-hero"
      style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.86)), url(${heroBackground})` }}
    >
      <div className="sales-hero-content">
        <p className="sales-eyebrow">5+ anos em desenvolvimento, marketing e automações</p>
        <h1>Eleve seu Time de Produtos para o Próximo Nível.</h1>
        <p className="sales-hero-copy">
          Sales page pessoal com foco em produto, código, marketing e automações.
          A primeira dobra precisa explicar rapidamente por que Bruno é um bom fit.
        </p>
        <div className="sales-hero-actions">
          <Button asChild size="lg" className="sales-primary-cta">
            <a href="https://wa.me/" aria-label="Iniciar conversa pelo WhatsApp">
              Iniciar conversa
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="sales-secondary-cta">
            <a href="#projetos">Ver projetos</a>
          </Button>
        </div>
        <p className="sales-helper">Sem forms, direto no whatsapp</p>
      </div>
    </section>
  )
}

function SalesPage() {
  return (
    <main className="sales-page">
      <div className="first-fold">
        <SiteHeader />
        <HeroSection />
      </div>
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
