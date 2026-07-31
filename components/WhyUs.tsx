import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { PhotoSlot } from './Logo'
import { Reveal } from './Reveal'

export function WhyUs({ c }: { c: SiteContent }) {
  const w = c.why
  return (
    <section id="why">
      <div className="wrap why-grid">
        <Reveal className="why-photo">
          <PhotoSlot label={w.photoAlt} logoSize={52} />
        </Reveal>
        <Reveal className="why-copy" delay={120}>
          <span className="eyebrow">{w.eyebrow}</span>
          <h2 className="h2">{w.heading}</h2>
          <p>{w.body}</p>
          <div className="checks">
            {w.checks.map((ch, i) => (
              <div className="check" key={i}>
                <Icon name="check-circle" size={20} />
                <div>
                  {ch.title}
                  {ch.note && <small>{ch.note}</small>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
