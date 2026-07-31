import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function TrustStrip({ c }: { c: SiteContent }) {
  return (
    <div className="strip">
      <div className="wrap strip-grid">
        {c.strip.map((s, i) => (
          <Reveal className="strip-item" delay={i * 70} key={i}>
            <Icon name={s.icon} size={24} weight={s.icon === 'whatsapp-logo' ? 'fill' : 'regular'} />
            <div>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
