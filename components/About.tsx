import type { SiteContent } from '@/content/types'
import { Reveal } from './Reveal'

// Calm, prose-led "who we are" block. A deliberate rhythm break from the
// list-heavy sections around it, so it never duplicates the trust strip or Why Us.
export function About({ c }: { c: SiteContent }) {
  const a = c.about
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-head">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="h2">{a.heading}</h2>
        </Reveal>
        <Reveal className="about-body" delay={120}>
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
