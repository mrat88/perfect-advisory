'use client'

import { useState } from 'react'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'

// Submits to Web3Forms (free, no backend) which emails info@perfectadvisory.com.my.
// The access key is public by design (it only allows sending to the pre-registered
// address, rate-limited). Set NEXT_PUBLIC_WEB3FORMS_KEY before `next build`; until
// then submissions fall through to the error note pointing people to WhatsApp.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''

type Status = 'idle' | 'sending' | 'ok' | 'err'

export function ContactForm({ c }: { c: SiteContent }) {
  const ct = c.contact
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const body = new FormData(form)
    body.append('access_key', ACCESS_KEY)
    body.append('subject', 'New enquiry from perfectadvisory.com.my')
    body.append('from_name', 'Perfect Advisory website')
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      const data = await res.json()
      if (data.success) {
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
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <p className="form-title">{ct.formTitle}</p>

      {/* Honeypot: real users never see or fill this; bots that do get dropped. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <div className="field">
        <label htmlFor="cf-name">{ct.fields.name}</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder={ct.placeholders.name} />
      </div>
      <div className="field">
        <label htmlFor="cf-contact">{ct.fields.contact}</label>
        <input id="cf-contact" name="contact" type="text" required placeholder={ct.placeholders.contact} />
      </div>
      <div className="field">
        <label htmlFor="cf-message">{ct.fields.message}</label>
        <textarea id="cf-message" name="message" rows={4} required placeholder={ct.placeholders.message} />
      </div>

      <button type="submit" className="btn btn-dark" disabled={status === 'sending'}>
        <Icon name="paper-plane-tilt" size={17} weight="fill" /> {status === 'sending' ? ct.sending : c.cta.send}
      </button>

      {status === 'ok' && (
        <p className="form-note ok" role="status">
          {ct.success}
        </p>
      )}
      {status === 'err' && (
        <p className="form-note err" role="alert">
          {ct.error}
        </p>
      )}
    </form>
  )
}
