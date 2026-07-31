import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Services({ c }: { c: SiteContent }) {
  const s = c.services
  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal className="svc-head">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="h2">{s.heading}</h2>
          <p>{s.intro}</p>
        </Reveal>
        <div className="svc-grid">
          {s.items.map((it, i) => (
            <Reveal className="svc" delay={(i % 3) * 60} key={i}>
              {it.badge && <span className="badge">{it.badge}</span>}
              <Icon name={it.icon} size={28} />
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
