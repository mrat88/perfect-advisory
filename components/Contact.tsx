import type { SiteContent, ContactCard } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { ContactForm } from './ContactForm'

// Two columns: on the left the direct channels plus what happens after you reach
// out; on the right a real form that emails the firm. Cards with an `href`
// (e.g. mailto:) render as links; others are static.
export function Contact({ c }: { c: SiteContent }) {
  const ct = c.contact
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-head">
          <span className="eyebrow">{ct.eyebrow}</span>
          <h2 className="h2">{ct.heading}</h2>
          <p>{ct.intro}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-left">
            <div className="contact-cards">
              {ct.cards.map((card, i) => (
                <Card key={i} card={card} />
              ))}
            </div>

            <ol className="contact-steps">
              {ct.steps.map((s, i) => (
                <li key={i}>
                  <span className="step-n">{i + 1}</span>
                  <div>
                    <b>{s.title}</b>
                    <span>{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="contact-reassure">
              <Icon name="translate" size={17} /> {ct.reassure}
            </p>
          </Reveal>

          <Reveal className="contact-right" delay={120}>
            <ContactForm c={c} />
          </Reveal>
        </div>
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
