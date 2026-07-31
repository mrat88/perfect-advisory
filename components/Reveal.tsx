import type { CSSProperties, ReactNode } from 'react'

// Scroll reveal, robust by default: renders a plain `.reveal` element that is
// FULLY VISIBLE without JS and under prefers-reduced-motion. Only when JS is
// active (html[data-js], set pre-paint in layout) and motion is allowed does CSS
// hide it, then RevealObserver adds `.is-visible` on scroll-in. Only
// opacity/transform animate, so no layout shift (CLS 0). `delay` (ms) staggers
// grid items via transition-delay.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined
  return (
    <div className={className ? `reveal ${className}` : 'reveal'} style={style}>
      {children}
    </div>
  )
}
