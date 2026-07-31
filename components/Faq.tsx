import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Native <details> accordion: keyboard-accessible, no JS. The same items also
// feed FAQPage JSON-LD (see Landing / Seo).
export function Faq({ c }: { c: SiteContent }) {
  const f = c.faq
  return (
    <section id="faq">
      <div className="wrap faq-grid">
        <Reveal className="faq-head">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="h2">{f.heading}</h2>
          <p>{f.intro}</p>
        </Reveal>
        <Reveal className="faq-list" delay={120}>
          {f.items.map((it, i) => (
            <details key={i} open={i === 0}>
              <summary>
                {it.q}
                <Icon name="plus" size={20} />
              </summary>
              <p>{it.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
