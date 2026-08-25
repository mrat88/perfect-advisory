// Single source of truth for the WhatsApp contact link. wa.me needs the number
// in international format with no '+', spaces or leading zero (MY: 60 + number).
// Local 010-201 3633 -> 60102013633.
export const WHATSAPP_NUMBER = '60102013633'

export function waHref(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
