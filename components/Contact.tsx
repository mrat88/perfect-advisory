import type { SiteContent, ContactCard } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Contact is a plain, form-less block: a real person on WhatsApp or email.
// Cards with an `href` (e.g. mailto:) render as links; others are static.
export function Contact({ c }: { c: SiteContent }) {
  const ct = c.contact
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <Reveal className="contact-head">
          <span className="eyebrow">{ct.eyebrow}</span>
          <h2 className="h2">{ct.heading}</h2>
          <p>{ct.intro}</p>
        </Reveal>
        <Reveal className="contact-cards" delay={120}>
          {ct.cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Card({ card }: { card: ContactCard }) {
  const inner = (
    <>
      <Icon name={card.icon} size={24} weight={card.icon === 'whatsapp-logo' ? 'fill' : 'regular'} />
      <div>
        <b>{card.label}</b>
        <span>{card.value}</span>
      </div>
    </>
  )
  return card.href ? (
    <a className="ccard" href={card.href}>
      {inner}
    </a>
  ) : (
    <div className="ccard">{inner}</div>
  )
}
