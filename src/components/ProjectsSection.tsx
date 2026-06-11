import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { FadeUp } from '@/components/ui/fade-up'

import designSystemsImg from '../assets/design-systems-preview.webp'
import funnelsImg from '../assets/funnels-preview.webp'
import appImg from '../assets/App-preview.png'

const projects = [
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Página com meus design systems, componentes e padrões visuais.',
    image: designSystemsImg,
    link: 'https://design-systems-sigma.vercel.app/',
  },
  {
    id: 'funnels',
    title: 'Funnels',
    description: 'Página com funis, automações, checkout, VTurb e tracking.',
    image: funnelsImg,
    link: 'https://fundaris.space/main/quiz',
  },
  {
    id: 'apps',
    title: 'Apps',
    description: 'Página com app construído, features, stack, screenshots e link.',
    image: appImg,
    link: 'https://app.fundaris.space/de/home',
  }
]

const technologies = [
  "Meta API e Coexistência", "React", "React DOM", "Next.js", "TypeScript", 
  "JavaScript", "HTML", "Vite", "n8n", "Supabase", "Cloudflare", 
  "Framer Motion", "shadcn/ui", "Radix UI", "VTurb", "Stripe", 
  "Hotmart", "ESLint", "npm", "Vercel"
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="projects-section" style={{ paddingTop: 0 }}>
      <FadeUp amount={0.12} className="projects-header">
        <h2>
          Projetos construídos como exemplo.
        </h2>
        <p>
          Cada card deve apontar para uma página/case real. O wireframe assume três rotas principais: design systems, funnels e apps.
        </p>
      </FadeUp>

      <div className="projects-grid">
        {projects.map((project) => (
          <FadeUp key={project.id} className="flex flex-col h-full">
            <Card className="flex flex-col overflow-hidden h-full">
              <AspectRatio ratio={16 / 9} className="bg-slate-100 border-b border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button variant="default" className="w-full uppercase tracking-widest text-[13px] font-bold" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Abrir Link</a>
                </Button>
              </CardContent>
            </Card>
          </FadeUp>
        ))}
      </div>

      <FadeUp amount={0.12} className="projects-tech-wrapper">
        <div className="projects-tech-title">
          Lista de tecnologias para seção de projetos
        </div>
        <div className="projects-tech-tags">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-slate-100 text-[#0d2444] hover:bg-slate-200 border-transparent">
              {tech}
            </Badge>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
