import type { SiteContent } from '@/content/types'
import { JsonLd } from './JsonLd'
import { RevealObserver } from './RevealObserver'
import { Header } from './Header'
import { Hero } from './Hero'
import { TrustStrip } from './TrustStrip'
import { About } from './About'
import { StatsBand } from './StatsBand'
import { Services } from './Services'
import { WhyUs } from './WhyUs'
import { Faq } from './Faq'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { WhatsAppFab } from './WhatsAppFab'

// Composes the whole one-page site from a language dictionary. Language-agnostic:
// pass `en` or `zh` and every section renders from that dict.
export function Landing({ c }: { c: SiteContent }) {
  return (
    <>
      <JsonLd c={c} />
      <RevealObserver />
      <Header c={c} />
      <main>
        <Hero c={c} />
        <TrustStrip c={c} />
        <About c={c} />
        <StatsBand c={c} />
        <Services c={c} />
        <WhyUs c={c} />
        <Faq c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <WhatsAppFab c={c} />
    </>
  )
}
