import type { Metadata } from 'next'
import { RootHtml } from '@/components/RootHtml'
import { zh } from '@/content/zh'

export const metadata: Metadata = {
  metadataBase: new URL('https://perfectadvisory.com.my'),
  title: zh.meta.title,
  description: zh.meta.description,
  alternates: {
    canonical: '/zh/',
    languages: { 'en-MY': '/', zh: '/zh/', 'x-default': '/' },
  },
  openGraph: {
    title: zh.meta.title,
    description: zh.meta.description,
    url: 'https://perfectadvisory.com.my/zh/',
    locale: 'zh_MY',
    type: 'website',
  },
}

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="zh">{children}</RootHtml>
}
