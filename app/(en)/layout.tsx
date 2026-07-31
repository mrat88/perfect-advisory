import type { Metadata } from 'next'
import { RootHtml } from '@/components/RootHtml'
import { en } from '@/content/en'

export const metadata: Metadata = {
  metadataBase: new URL('https://perfectadvisory.com.my'),
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: '/',
    languages: { 'en-MY': '/', zh: '/zh/', 'x-default': '/' },
  },
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    url: 'https://perfectadvisory.com.my/',
    locale: 'en_MY',
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>
}
