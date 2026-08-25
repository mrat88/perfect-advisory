import { Fragment } from 'react'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Ledger } from './Ledger'
import { waHref } from './whatsapp'

export function Hero({ c }: { c: SiteContent }) {
  const h = c.hero
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="hero-eyebrow">{h.eyebrow}</span>
          <h1>
            {h.headline.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p>{h.subtext}</p>
          <div className="hero-ctas">
            <a className="btn btn-dark" href={waHref(c.whatsappText)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp-logo" size={18} weight="fill" /> {c.cta.whatsapp}
            </a>
            <a className="btn btn-ghost" href="#services">
              {c.cta.explore}
            </a>
          </div>
          {h.creds.length > 0 && (
            <div className="hero-badges">
              {h.creds.map((cr, i) => (
                <span className="cred" key={i}>
                  <Icon name={cr.icon} className="ph" size={19} /> {cr.label}
                  {cr.note && <em> {cr.note}</em>}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="hero-visual">
          <Ledger l={h.ledger} />
        </div>
      </div>
    </section>
  )
}
