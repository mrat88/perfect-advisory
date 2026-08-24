import type { MetadataRoute } from 'next'

const SITE = 'https://perfectadvisory.com.my'

// Static export (output: 'export') requires metadata routes to be static.
// This route returns only constants, so forcing it static is correct.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE}/sitemap.xml`,
  }
}
