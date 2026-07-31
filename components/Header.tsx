'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Header({ c }: { c: SiteContent }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Logo size={40} />
          <span className="brand-txt">
            <span className="brand-name">{c.brand.name}</span>
            <span className="brand-sub">{c.brand.sub}</span>
          </span>
        </a>

        <nav className="nav-links">
          {c.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <span className="lang">
            {c.langToggle.active === 'en' ? <b>EN</b> : <Link href={c.langToggle.enHref}>EN</Link>}
            {' | '}
            {c.langToggle.active === 'zh' ? <b>中文</b> : <Link href={c.langToggle.zhHref}>中文</Link>}
          </span>
          {/* TODO: swap #contact for wa.me/<number> once the client confirms the WhatsApp line */}
          <a className="btn btn-dark btn-sm" href="#contact">
            <Icon name="whatsapp-logo" size={16} weight="fill" /> {c.cta.whatsapp}
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'list'} size={26} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu">
          {c.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          {c.langToggle.active === 'en' ? (
            <Link href={c.langToggle.zhHref} onClick={() => setOpen(false)}>
              中文
            </Link>
          ) : (
            <Link href={c.langToggle.enHref} onClick={() => setOpen(false)}>
              English
            </Link>
          )}
        </nav>
      )}
    </header>
  )
}
