'use client'

import { useState, type FormEvent } from 'react'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

type Status = 'idle' | 'sending' | 'ok' | 'err'

// Free, backend-less form delivery via Web3Forms. The access key is tied to
// info@perfectadvisory.com.my (client signs up free). Falls back to a clear
// error + WhatsApp prompt if the key is missing or the request fails.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''

export function Contact({ c }: { c: SiteContent }) {
  const [status, setStatus] = useState<Status>('idle')
  const ct = c.contact

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', ACCESS_KEY)
    data.append('subject', 'New enquiry from perfectadvisory.com.my')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <h2 className="h2">{ct.heading}</h2>
          <form onSubmit={onSubmit}>
            {/* Honeypot: hidden from users, filled only by bots */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            <div>
              <label htmlFor="f-name">{ct.fields.name}</label>
              <input id="f-name" name="name" type="text" required placeholder={ct.placeholders.name} />
            </div>
            <div>
              <label htmlFor="f-contact">{ct.fields.contact}</label>
              <input id="f-contact" name="contact" type="text" required placeholder={ct.placeholders.contact} />
            </div>
            <div>
              <label htmlFor="f-msg">{ct.fields.message}</label>
              <textarea id="f-msg" name="message" rows={4} required placeholder={ct.placeholders.message} />
            </div>
            <div>
              <button className="btn btn-dark" type="submit" disabled={status === 'sending'}>
                <Icon name="paper-plane-tilt" size={18} /> {status === 'sending' ? ct.sending : c.cta.send}
              </button>
              {status === 'ok' && <p className="form-note ok" role="status">{ct.success}</p>}
              {status === 'err' && <p className="form-note err" role="alert">{ct.error}</p>}
            </div>
          </form>
        </Reveal>

        <Reveal className="contact-side" delay={120}>
          <div className="contact-cards">
            {ct.cards.map((card, i) => (
              <div className="ccard" key={i}>
                <Icon name={card.icon} size={24} weight={card.icon === 'whatsapp-logo' ? 'fill' : 'regular'} />
                <div>
                  <b>{card.label}</b>
                  <span>{card.value}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
