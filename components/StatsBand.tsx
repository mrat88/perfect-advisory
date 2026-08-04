import type { SiteContent } from '@/content/types'
import { Reveal } from './Reveal'

export function StatsBand({ c }: { c: SiteContent }) {
  const s = c.stats
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-panel">
          <Reveal className="stats-head">
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="h2">{s.heading}</h2>
            <p>{s.intro}</p>
          </Reveal>
          <div className="stats-grid">
            {s.items.map((it, i) => (
              <Reveal className="stat" delay={i * 80} key={i}>
                <b>{it.value}</b>
                <span>{it.text}</span>
                <cite>{it.source}</cite>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
