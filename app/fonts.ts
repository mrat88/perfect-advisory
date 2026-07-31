import { Outfit, Newsreader, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const sans = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

// Editorial serif with the register of a serious financial publication.
const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif-src',
  display: 'swap',
})

// Printed-statement vernacular for ledger figures and status.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-src',
  display: 'swap',
})

export const fontVars = `${sans.variable} ${serif.variable} ${mono.variable}`
