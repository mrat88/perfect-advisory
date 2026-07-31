import type { ReactNode } from 'react'
import { fontVars } from '@/app/fonts'

// Shared <html>/<body> shell so each locale route group can set its own lang.
export function RootHtml({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={fontVars} suppressHydrationWarning>
      <body className="antialiased">
        {/* Pre-paint marker so scroll-reveal only hides content when JS is active
            (no-JS users always see everything). */}
        <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.js='1'}catch(e){}" }} />
        {children}
      </body>
    </html>
  )
}
