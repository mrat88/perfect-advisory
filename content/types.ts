// Shared content shape. EN and ZH dictionaries both implement `SiteContent`,
// so every section component is language-agnostic and renders from a dict.

export type Locale = 'en' | 'zh'

export interface NavLink {
  href: string
  label: string
}

export interface Cred {
  icon: string // Phosphor icon name (see components/Icon.tsx map)
  label: string
  note?: string // small "(placeholder)" style suffix
}

export interface LedgerRow {
  label: string
  value: string
  due?: boolean // highlight an upcoming deadline in gold
}

export interface Ledger {
  title: string
  status: string
  rows: LedgerRow[]
  footer: string
}

export interface StripItem {
  icon: string
  title: string
  text: string
}

export interface Stat {
  value: string
  text: string
  source: string
}

export interface Service {
  icon: string
  title: string
  text: string
  badge?: string
}

export interface Check {
  title: string
  note?: string
}

export interface Faq {
  q: string
  a: string
}

export interface ContactCard {
  icon: string
  label: string
  value: string
  href?: string // makes the card a link (e.g. mailto: or wa.me); omitted = plain card
}

export interface SiteContent {
  locale: Locale
  meta: { title: string; description: string }
  brand: { name: string; sub: string }
  nav: NavLink[]
  langToggle: { active: Locale; enHref: string; zhHref: string }
  cta: { whatsapp: string; explore: string; send: string }
  hero: {
    eyebrow: string
    headline: string[] // rendered on separate lines
    subtext: string
    creds: Cred[]
    ledger: Ledger
  }
  strip: StripItem[]
  about: { eyebrow: string; heading: string; body: string[] }
  stats: { eyebrow: string; heading: string; intro: string; items: Stat[] }
  services: { eyebrow: string; heading: string; intro: string; items: Service[] }
  why: { eyebrow: string; heading: string; body: string; photoAlt: string; checks: Check[] }
  faq: { eyebrow: string; heading: string; intro: string; items: Faq[] }
  contact: {
    eyebrow: string
    heading: string
    intro: string
    steps: { title: string; text: string }[]
    reassure: string
    formTitle: string
    fields: { name: string; contact: string; message: string }
    placeholders: { name: string; contact: string; message: string }
    cards: ContactCard[]
    sending: string
    success: string
    error: string
  }
  footer: { rights: string; regNo: string }
  whatsappAria: string
  whatsappText: string // pre-filled message for wa.me links
}
