import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeUp } from '@/components/ui/fade-up'

import brunoPortrait from '../assets/bruno-portrait.webp'
import educationLogos from '../assets/super-geeks-unifesp-univap.webp'
import proofDiagram from '../assets/proof-diagram.webp'

const tableOfContents = [
  { id: '01', title: 'Origem competitiva' },
  { id: '02', title: 'Formação técnica' },
  { id: '03', title: 'Experiência em marketing' },
  { id: '04', title: 'Oferta, prova e retenção' },
  { id: '05', title: 'Convite para conversa' },
]

export function ProfileSection() {
  return (
    <section id="perfil" className="authority-section" style={{ paddingTop: 0 }}>
      <div className="authority-container">
        {/* Header da Seção */}
        <FadeUp className="authority-header">
          <h2>Não é Sobre Código, é Sobre perfil.</h2>
          <p className="sales-hero-copy" style={{ marginTop: '16px' }}>
            Uma edição curta sobre origem, formação, marketing, produto e por que esse
            conjunto importa para um time de produtos.
          </p>
        </FadeUp>

        {/* Grid Principal (Sidebar + Content) */}
        <div className="profile-grid">

          {/* Sidebar (Índice + Portrait) */}
          <aside className="profile-sidebar">
            <FadeUp className="profile-portrait-wrapper">
              <Card className="authority-card" style={{ overflow: 'hidden', padding: 0, gap: 0, width: '100%' }}>
                <img
                  src={brunoPortrait}
                  alt="Bruno Castelani Portrait"
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </Card>
              <strong style={{ color: '#0d2444', fontSize: '18px' }}>Bruno Castelani, 21 anos</strong>
            </FadeUp>

            {/* Índice Desktop */}
            <FadeUp className="profile-index-desktop">
              <h4 className="sales-eyebrow" style={{ marginBottom: '16px' }}>Nesta Edição</h4>
              <ul className="authority-list">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <span className="authority-index">{item.id}.</span>
                    <a href={`#capitulo-${item.id}`} style={{ color: '#0d2444', textDecoration: 'none', fontWeight: 600 }}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Índice Mobile */}
            <FadeUp className="profile-index-mobile">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="index" style={{ borderBottom: 'none' }}>
                  <AccordionTrigger className="sales-eyebrow" style={{ padding: '12px 0' }}>
                    Nesta Edição
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="authority-list" style={{ marginTop: '12px' }}>
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <span className="authority-index">{item.id}.</span>
                          <a href={`#capitulo-${item.id}`} style={{ color: '#0d2444', textDecoration: 'none', fontWeight: 600 }}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeUp>
          </aside>

          {/* Conteúdo Principal (Capítulos) */}
          <div className="profile-content">

            {/* Carta de Abertura */}
            <FadeUp id="capitulo-01" className="profile-chapter">
              <p className="sales-eyebrow">Carta de Abertura</p>
              <h3 className="profile-chapter-title">
                Eu sou Bruno Castelani, tenho 21 anos e apesar de que hoje em dia sou
                alguém apaixonado em construir coisas com novas técnicas e tecnologias
                que eu aprendo, nem sempre foi assim.
              </h3>
              <div className="profile-copy">
                <p>
                  Durante a infância, os meus maiores hobbies eram esportes e jogos digitais, onde eu vivia
                  curtindo as experiências de competição e desenvolvimento que eles proporcionavam.
                </p>
                <p>
                  But graças a influência familiar e reflexão sobre o futuro. Acabei realizando uma troca de
                  "esportes" para "tecnologia" e foi quando eu comecei a cursar e estudar a fundo matérias como
                  inglês, desenvolvimento e tecnologia.
                </p>
              </div>
            </FadeUp>

            <Separator style={{ backgroundColor: '#e6ecf2', margin: '32px 0' }} />

            {/* Capítulo 01 */}
            <FadeUp id="capitulo-02" className="profile-chapter">
              <p className="sales-eyebrow">Capítulo 01 / Formação</p>
              <h3 className="profile-chapter-title">
                Tecnologia como escolha de futuro.
              </h3>

              <img
                src={educationLogos}
                alt="Logos Super-Geeks, Univap e Unifesp"
                style={{ width: '100%', borderRadius: '8px', margin: '24px 0', border: '1px solid #e6ecf2' }}
                loading="lazy"
              />

              <div className="profile-copy">
                <p>
                  Com isso, tive o privilégio de estudar na primeira escola de programação, robótica, tecnologia e inovação
                  voltada para jovens do Brasil, a super-geeks, além de ter cursado técnico de informática pela instituição
                  responsável por criar o primeiro parque tecnológico no estado de São Paulo, a Universidade do Vale do Paraíba
                  ( Univap ).
                </p>
                <p>
                  Além disso, cursei engenharia da computação pela Unifesp, que foi considerada a terceira maior Universidade do
                  Brasil, pela Times Higher Education. Todas essas oportunidades me deram experiências que tornaram possível
                  não só trabalhar com tecnologia, mas também com marketing e vendas online.
                </p>
              </div>
            </FadeUp>

            <Separator style={{ backgroundColor: '#e6ecf2', margin: '32px 0' }} />

            {/* Capítulo 02 */}
            <FadeUp id="capitulo-03" className="profile-chapter">
              <p className="sales-eyebrow">Capítulo 02 / Parcerias</p>
              <h3 className="profile-chapter-title">
                Do código para marketing e vendas online.
              </h3>
              <div className="profile-copy">
                <p>
                  Onde realizei parcerias das quais tenho profundo orgulho e gratidão, em
                  empresas como Instituto Experience, Grupo Mega e Inove Corp.
                </p>
              </div>
            </FadeUp>

            <Separator style={{ backgroundColor: '#e6ecf2', margin: '32px 0' }} />

            {/* Capítulo 03 */}
            <FadeUp id="capitulo-04" className="profile-chapter">
              <p className="sales-eyebrow">Capítulo 03 / Estratégia</p>
              <h3 className="profile-chapter-title">
                Valor percebido também é produto.
              </h3>
              <div className="profile-copy">
                <p>
                  Tendo garantido profundas experiências com marketing online, pude
                  aprender sobre conceitos e técnicas cruciais sobre psicologia humana que
                  me permitem criar soluções pensadas estrategicamente, para aumentar a
                  percepção de valor sobre um produto.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
                  <Badge variant="outline" style={{ color: '#4d657f', borderColor: '#a8b6c7' }}>Pesquisa de público</Badge>
                  <Badge variant="outline" style={{ color: '#4d657f', borderColor: '#a8b6c7' }}>Criação de ofertas</Badge>
                  <Badge variant="outline" style={{ color: '#4d657f', borderColor: '#a8b6c7' }}>Gatilhos psicológicos</Badge>
                  <Badge variant="outline" style={{ color: '#4d657f', borderColor: '#a8b6c7' }}>Argumentação clara</Badge>
                  <Badge variant="outline" style={{ color: '#4d657f', borderColor: '#a8b6c7' }}>Jornada do cliente</Badge>
                </div>

                <p>
                  Algumas delas são, pesquisa aprofundada de público, criação de ofertas,
                  gatilhos psicológicos, argumentação clara e entendimento sobre a jornada
                  psicológica do cliente sobre o seu produto.
                </p>
              </div>
            </FadeUp>

            <Separator style={{ backgroundColor: '#e6ecf2', margin: '32px 0' }} />

            {/* Exemplo Claro */}
            <FadeUp className="profile-chapter">
              <p className="sales-eyebrow">Exemplo Claro</p>
              <h3 className="profile-chapter-title">
                Toda promessa precisa de uma prova.
              </h3>
              <div className="profile-copy">
                <p>
                  Um exemplo claro que posso fornecer, para aumentar a taxa de retenção do seu produto e evitar
                  chargeback.
                </p>
                <p>
                  Se você faz uma oferta forte, o seu produto precisa ser congruente e superar as expectativas dessa
                  oferta. Um conceito básico por trás disso é que toda promessa precisa de uma prova, LOGO, se você
                  promete algo incrível, mas não entrega isso seu cliente deixa de acreditar em você. Em contra partida, se
                  promete algo incrível, mas entrega algo ainda melhor, a confiança do seu cliente sobre você aumenta
                  ainda mais.
                </p>
              </div>

              {/* Highlight Card */}
              <Card style={{ backgroundColor: '#0d2444', color: '#ffffff', border: 'none', margin: '32px 0' }}>
                <CardContent style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                    Oferta forte + entrega melhor = confiança maior.
                  </h4>
                  <img
                    src={proofDiagram}
                    alt="Diagrama: promessa -> prova -> retenção"
                    style={{ width: '100%', maxWidth: '400px', margin: '0 auto', borderRadius: '8px' }}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </FadeUp>

            <Separator style={{ backgroundColor: '#e6ecf2', margin: '32px 0' }} />

            {/* Carta Final */}
            <FadeUp id="capitulo-05" className="profile-chapter" style={{ marginBottom: '48px' }}>
              <p className="sales-eyebrow">Carta Final</p>
              <div className="profile-copy">
                <p>
                  Existem várias outros conhecimentos adquiridos que me permitem ser um ótimo fit para o seu time de
                  produtos. E é por isso, que tenho confiança de que eu posso somar para o seu time. E se existe alguma
                  coisa em minha apresentação que fez você acreditar que eu seria uma boa escolha, você pode me
                  contatar pelo meu whatsapp que coloquei no botão abaixo, para facilitar o acesso, no melhor dos casos,
                  você fez uma boa contratação, no pior dos casos, mandou uma mensagem.
                </p>
              </div>
              <h3 className="profile-chapter-title" style={{ marginTop: '24px' }}>
                Foi um prazer ter você aqui, te espero do outro lado!
              </h3>
            </FadeUp>

            {/* CTA da Newsletter */}
            <FadeUp className="profile-cta-box">
              <p className="sales-eyebrow">CTA da Newsletter</p>
              <h4 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, margin: 0, color: '#0d2444' }}>
                Vamos direto para a conversa.
              </h4>
              <Button asChild size="lg" className="sales-primary-cta" style={{ minWidth: '240px' }}>
                <a href="https://wa.me/5512997838616" target="_blank">
                  INICIAR A CONVERSA
                  <ArrowUpRight size={16} aria-hidden="true" style={{ marginLeft: '8px' }} />
                </a>
              </Button>
              <p className="sales-helper">Sem forms, direto no WhatsApp.</p>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  )
}
