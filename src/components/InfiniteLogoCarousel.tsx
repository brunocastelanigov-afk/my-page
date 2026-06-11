import { coloredTechIcons } from '../data/tech-icons'

export function TechIconCard({ name, icon }: { name: string, icon: string }) {
  return (
    <div className="tech-icon-card">
      <span className="tech-icon-mark">
        <img
          src={icon}
          alt=""
          width={44}
          height={44}
          className="tech-icon"
        />
      </span>
      <span className="tech-icon-label">{name}</span>
    </div>
  )
}

export function InfiniteLogoCarousel() {
  const duplicatedLogos = [
    { group: 'a', items: coloredTechIcons },
    { group: 'b', items: coloredTechIcons },
  ]

  return (
    <div className="logo-marquee" aria-label="Technology logo carousel">
      <div className="logo-marquee-track">
        {duplicatedLogos.map(({ group, items }) => (
          <div key={group} className="logo-marquee-group" aria-hidden={group === 'b'}>
            {items.map((tech) => (
              <TechIconCard key={tech.name} {...tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
