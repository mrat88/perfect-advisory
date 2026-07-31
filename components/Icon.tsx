import type { ComponentProps } from 'react'
import {
  WhatsappLogo, SealCheck, ShieldCheck, Translate, FileText, UserFocus,
  Receipt, CalendarCheck, Calculator, User, Money, ChartLineUp, Handshake,
  CheckCircle, Plus, EnvelopeSimple, MapPin, PaperPlaneTilt, List, X,
} from '@phosphor-icons/react/dist/ssr'

type IconProps = ComponentProps<typeof WhatsappLogo>

// String-keyed map so content dictionaries can name icons as plain data.
const map = {
  'whatsapp-logo': WhatsappLogo,
  'seal-check': SealCheck,
  'shield-check': ShieldCheck,
  translate: Translate,
  'file-text': FileText,
  'user-focus': UserFocus,
  receipt: Receipt,
  'calendar-check': CalendarCheck,
  calculator: Calculator,
  user: User,
  money: Money,
  'chart-line-up': ChartLineUp,
  handshake: Handshake,
  'check-circle': CheckCircle,
  plus: Plus,
  'envelope-simple': EnvelopeSimple,
  'map-pin': MapPin,
  'paper-plane-tilt': PaperPlaneTilt,
  list: List,
  x: X,
} as const

export type IconName = keyof typeof map

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const C = map[name as IconName]
  return C ? <C {...props} /> : null
}
