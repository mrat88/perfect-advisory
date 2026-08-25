import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'
import { waHref } from './whatsapp'

export function WhatsAppFab({ c }: { c: SiteContent }) {
  return (
    <a
      className="fab"
      href={waHref(c.whatsappText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.whatsappAria}
    >
      <Icon name="whatsapp-logo" size={28} weight="fill" />
    </a>
  )
}
