import type { SiteContent } from '@/content/types'
import { Logo } from './Logo'

export function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo size={34} />
            {c.brand.name}
          </div>
          <nav className="foot-links">
            {c.nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-meta">
          <span>{c.footer.rights}</span>
          <span>{c.footer.regNo}</span>
        </div>
      </div>
    </footer>
  )
}
