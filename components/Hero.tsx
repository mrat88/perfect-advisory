import { Fragment } from 'react'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Ledger } from './Ledger'

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
            {/* TODO: swap #contact for wa.me/<number> once confirmed */}
            <a className="btn btn-dark" href="#contact">
              <Icon name="whatsapp-logo" size={18} weight="fill" /> {c.cta.whatsapp}
            </a>
            <a className="btn btn-ghost" href="#services">
              {c.cta.explore}
            </a>
          </div>
          <div className="hero-badges">
            {h.creds.map((cr, i) => (
              <span className="cred" key={i}>
                <Icon name={cr.icon} className="ph" size={19} /> {cr.label}
                {cr.note && <em> {cr.note}</em>}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <Ledger l={h.ledger} />
        </div>
      </div>
    </section>
  )
}
