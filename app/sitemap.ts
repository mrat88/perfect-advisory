import type { MetadataRoute } from 'next'

const SITE = 'https://perfectadvisory.com.my'

// Bump by hand when the copy changes; a build-time `new Date()` would tell
// crawlers the page changed every time we rebuild, which is not true.
const LAST_MODIFIED = '2026-08-24'

// Static export (output: 'export') requires metadata routes to be static.
// This route returns only constants, so forcing it static is correct.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { 'en-MY': `${SITE}/`, zh: `${SITE}/zh/` }
  return [
    {
      url: `${SITE}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE}/zh/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
  ]
}
