import type { SiteContent } from '@/content/types'
import { Icon } from './Icon'

export function WhatsAppFab({ c }: { c: SiteContent }) {
  // TODO: swap #contact for wa.me/<number> once the client confirms the line.
  return (
    <a className="fab" href="#contact" aria-label={c.whatsappAria}>
      <Icon name="whatsapp-logo" size={28} weight="fill" />
    </a>
  )
}
