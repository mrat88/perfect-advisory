'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Header({ c }: { c: SiteContent }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Scrollspy: highlight the nav link for the section near the viewport centre.
  useEffect(() => {
    const ids = c.nav.map((n) => n.href.replace('#', '')).filter(Boolean)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [c.nav])

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
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? 'is-active' : undefined}>
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
          <a className="btn btn-dark btn-sm" href="#contact" aria-label={c.cta.whatsapp}>
            <Icon name="whatsapp-logo" size={16} weight="fill" /> <span className="btn-label">{c.cta.whatsapp}</span>
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
