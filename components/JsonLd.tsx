import type { SiteContent } from '@/content/types'

const SITE = 'https://perfectadvisory.com.my'

// Structured data for the current locale: the firm itself plus the FAQ block,
// both built from the same dictionary the page renders, so they can never drift
// apart. Only facts already visible on the page go in here — no credential or
// address claims the client has not confirmed.
export function JsonLd({ c }: { c: SiteContent }) {
  const url = c.locale === 'zh' ? `${SITE}/zh/` : `${SITE}/`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AccountingService',
        '@id': `${SITE}/#firm`,
        name: c.brand.name,
        description: c.meta.description,
        url,
        logo: `${SITE}/logo-mark.png`,
        email: 'info@perfectadvisory.com.my',
        areaServed: { '@type': 'Country', name: 'Malaysia' },
        knowsLanguage: ['en', 'ms', 'zh-Hans', 'yue'],
        serviceType: c.services.items.map((s) => s.title),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: c.locale === 'zh' ? 'zh-Hans-MY' : 'en-MY',
        mainEntity: c.faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so a stray angle bracket in the copy can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
