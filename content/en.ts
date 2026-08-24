import type { SiteContent } from './types'

// English content. Facts marked "(placeholder)" are confirmed by the client
// before launch. Data figures are cited (see docs/design/content-and-seo.md).
export const en: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Accounting, Tax & Payroll for Malaysian SMEs | Perfect Advisory Resources',
    description:
      'Perfect Advisory Resources is a one-stop accounting firm for Malaysian SMEs: bookkeeping, personal tax, payroll, cash flow, e-invoice (MyInvois) and auditor liaison.',
  },
  brand: { name: 'Perfect Advisory Resources', sub: 'Accounting & Advisory' },
  nav: [
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Us' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ],
  langToggle: { active: 'en', enHref: '/', zhHref: '/zh/' },
  cta: { whatsapp: 'WhatsApp Us', explore: 'Explore services', send: 'Send message' },
  hero: {
    eyebrow: 'Accounting & advisory for Malaysian SMEs',
    headline: ['Books in order.', 'Taxes on time.', 'Business moving.'],
    subtext:
      'One team for your books, payroll, tax and e-invoice, so filings never slip and you stay focused on growing the business.',
    creds: [
      { icon: 'seal-check', label: 'MIA-qualified team', note: '(placeholder)' },
      { icon: 'shield-check', label: 'Licensed tax agent', note: '(placeholder)' },
    ],
    ledger: {
      title: 'Compliance status',
      status: 'On track',
      rows: [
        { label: 'Bookkeeping', value: 'Up to date' },
        { label: 'Payroll · EPF, SOCSO', value: 'Filed' },
        { label: 'SST', value: 'Filed' },
        { label: 'e-Invoice · MyInvois', value: 'On track' },
        { label: 'Form E · annual', value: 'Due 31 Mar', due: true },
      ],
      footer: 'Handled in English, Malay, Mandarin and Cantonese',
    },
  },
  strip: [
    { icon: 'user-focus', title: 'One point of contact', text: 'The same person handles your books, payroll and tax.' },
    { icon: 'receipt', title: 'Clear agreed fees', text: 'Scope agreed up front. No surprise bills.' },
    { icon: 'calendar-check', title: 'Deadline discipline', text: 'SSM, LHDN, EPF and SOCSO dates tracked for you.' },
    { icon: 'whatsapp-logo', title: 'Replies on WhatsApp', text: 'Reach a real person, not a call centre.' },
  ],
  stats: {
    eyebrow: 'Why it matters',
    heading: 'SMEs run the Malaysian economy. Compliance runs on deadlines.',
    intro:
      'Small and medium businesses power the country, yet the same owners juggle SSM, LHDN, EPF and now e-invoice on their own. Getting the numbers right is not admin; it decides your tax, your financing and your peace of mind.',
    items: [
      { value: '39.5%', text: "of Malaysia's GDP came from MSMEs in 2024, worth RM652.4 billion.", source: 'Dept. of Statistics Malaysia, 2025' },
      { value: '48.7%', text: 'of the national workforce, 8.1 million people, are employed by MSMEs.', source: 'Dept. of Statistics Malaysia, 2025' },
      { value: 'RM1m', text: 'is the turnover line that now decides both audit exemption and whether e-invoice applies to you.', source: 'SSM & LHDN, 2025' },
    ],
  },
  services: {
    eyebrow: 'Our Services',
    heading: 'Accounting services built around your business',
    intro: 'From monthly books to dealing with your auditors, we cover the lot.',
    items: [
      { icon: 'calculator', title: 'Accounting', text: 'Monthly bookkeeping, management accounts and year-end financial statements ready for SSM lodgement, audited or unaudited.' },
      { icon: 'user', title: 'Personal Tax', text: 'Income tax e-Filing (Borang BE / B), reliefs and rebates, and any LHDN queries handled on your behalf.' },
      { icon: 'money', title: 'Payroll', text: 'Payslips plus EPF (KWSP), SOCSO (PERKESO), EIS and PCB (MTD) submissions, on time every month.' },
      { icon: 'chart-line-up', title: 'Cash Flow Advice', text: 'Cash flow forecasts and costing so you always know what is coming in, going out and safe to spend.' },
      { icon: 'file-text', title: 'E-Invoice', text: 'MyInvois setup, system integration and staff training for Phase 4. Not sure if it applies to you? We will confirm first.', badge: 'LHDN MyInvois' },
      { icon: 'handshake', title: 'Audit & Tax Agent Liaison', text: 'We prepare the schedules and deal directly with your auditors and licensed tax agents, so you do not have to.' },
    ],
  },
  why: {
    eyebrow: 'Why hand it to us',
    heading: 'Cheaper than a mistake, faster than doing it yourself',
    body:
      'A missed EPF or tax deadline costs penalties and interest. A full-time accountant costs a salary. We sit in between: a qualified team on call for a fixed monthly fee, so you get it right without the overhead.',
    photoAlt: 'An adviser and a client reviewing financial reports together',
    checks: [
      { title: 'Qualified, experienced professionals', note: 'Credentials placeholder, client to confirm' },
      { title: 'Every statutory deadline tracked', note: 'SSM, LHDN, EPF, SOCSO, SST and e-invoice' },
      { title: 'Deal with us in your own language', note: 'English, Malay, Mandarin and Cantonese' },
      { title: 'Right-sized for SMEs and startups', note: 'No big-firm overhead, responsive on WhatsApp' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Straight answers on Malaysian compliance',
    intro: 'The rules changed in 2025. Here is where most SME owners stand today.',
    items: [
      {
        q: 'Does my company still need an audit?',
        a: 'Since 1 January 2025, a private company can be audit-exempt if it meets any two of: annual revenue up to RM1 million, total assets up to RM1 million, and no more than 10 employees. You still have to prepare and lodge unaudited financial statements and a directors’ report with SSM. We check your status and handle the filing either way.',
      },
      {
        q: 'Do I need to do e-invoice (MyInvois)?',
        a: 'Phase 4, for businesses with turnover between RM1 million and RM5 million, starts on 1 January 2026 with a penalty-free relaxation period to 31 December 2027. Businesses below RM1 million turnover are currently exempt. We confirm where you stand and set up MyInvois only if you actually need it.',
      },
      {
        q: 'Which deadlines do you keep track of?',
        a: 'Monthly: EPF (KWSP), SOCSO (PERKESO), EIS and PCB. Bi-monthly: SST, if you are registered. Yearly: Form E, company tax (Form C) and personal tax (Borang BE / B). We diarise all of them so nothing is filed late.',
      },
      {
        q: 'Can you take over from my current accountant?',
        a: 'Yes. We arrange the handover of your records and your SSM and LHDN files with no gap in compliance. Most switches happen within a few weeks.',
      },
      {
        q: 'What does it cost?',
        a: 'We agree a fixed monthly fee based on your transaction volume and the services you need, so there are no surprise year-end bills. Message us for a quote.',
      },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    heading: 'Talk to us',
    intro: 'WhatsApp us for a quick reply, or send an email. Either way you reach the same team that handles your books.',
    fields: { name: 'Name', contact: 'Phone or email', message: 'What do you need help with?' },
    placeholders: { name: 'Your name', contact: '+60 12 345 6789 or yourmail@email.com', message: 'e.g. e-invoice setup for my Sdn Bhd' },
    cards: [
      { icon: 'whatsapp-logo', label: 'WhatsApp', value: '+60 1X XXX XXXX (placeholder)' },
      { icon: 'envelope-simple', label: 'Email', value: 'info@perfectadvisory.com.my', href: 'mailto:info@perfectadvisory.com.my' },
      // { icon: 'map-pin', label: 'Office', value: 'Address placeholder, Kuala Lumpur (client to confirm)' },
    ],
    sending: 'Sending…',
    success: 'Thanks. We will reply shortly.',
    error: 'Something went wrong. Please WhatsApp us instead.',
  },
  footer: { rights: '© 2026 Perfect Advisory Resources. All rights reserved.', regNo: 'Co. Reg. No: placeholder' },
  whatsappAria: 'Chat with us on WhatsApp',
}
