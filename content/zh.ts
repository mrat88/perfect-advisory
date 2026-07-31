import type { SiteContent } from './types'

// 简体中文内容（马来西亚语境）。标注「待定」的事实由客户上线前确认。
// 数据均有出处（见 docs/design/content-and-seo.md）。
export const zh: SiteContent = {
  locale: 'zh',
  meta: {
    title: '马来西亚中小企业会计・税务・薪资服务 | Perfect Advisory Resources',
    description:
      'Perfect Advisory Resources 是马来西亚中小企业的一站式会计事务所：记账、个人所得税、薪资、现金流、电子发票（MyInvois）与审计对接。',
  },
  brand: { name: 'Perfect Advisory Resources', sub: '会计与咨询' },
  nav: [
    { href: '#services', label: '服务' },
    { href: '#why', label: '为何选我们' },
    { href: '#faq', label: '常见问题' },
    { href: '#contact', label: '联系' },
  ],
  langToggle: { active: 'zh', enHref: '/', zhHref: '/zh/' },
  cta: { whatsapp: 'WhatsApp 联系', explore: '查看服务', send: '发送' },
  hero: {
    eyebrow: '马来西亚中小企业的特许会计与咨询',
    headline: ['账目清楚。', '报税准时。', '生意向前。'],
    subtext: '记账、薪资、税务、电子发票，一个团队全包，让报税不再脱期，你能专心把生意做大。',
    creds: [
      { icon: 'seal-check', label: 'MIA 特许会计团队', note: '（待定）' },
      { icon: 'shield-check', label: '持牌税务代理', note: '（待定）' },
    ],
    ledger: {
      title: '合规状态',
      status: '正常',
      rows: [
        { label: '记账', value: '已更新' },
        { label: '薪资 · EPF、SOCSO', value: '已呈报' },
        { label: 'SST', value: '已呈报' },
        { label: '电子发票 · MyInvois', value: '进行中' },
        { label: 'Form E · 年度', value: '3月31日截止', due: true },
      ],
      footer: '以英语、马来语、华语与粤语为你处理',
    },
  },
  strip: [
    { icon: 'user-focus', title: '单一对接人', text: '同一个人处理你的账目、薪资与税务。' },
    { icon: 'receipt', title: '费用清楚透明', text: '范围事先讲好，账单没有惊喜。' },
    { icon: 'calendar-check', title: '截止日不脱期', text: 'SSM、LHDN、EPF、SOCSO 的日期都替你盯着。' },
    { icon: 'whatsapp-logo', title: 'WhatsApp 找得到人', text: '找到的是真人，不是客服中心。' },
  ],
  stats: {
    eyebrow: '为什么重要',
    heading: '中小企业撑起马来西亚经济，合规却靠死线在跑。',
    intro:
      '中小企业撑起整个国家，但老板们还得自己应付 SSM、LHDN、EPF，现在还多了电子发票。把数字做对不是杂务，它决定你的税、你的融资，和你的安心。',
    items: [
      { value: '39.5%', text: '2024 年马来西亚 GDP 来自中小微企业，达 6,524 亿令吉。', source: '马来西亚统计局，2025' },
      { value: '48.7%', text: '全国就业人口、810 万人，受雇于中小微企业。', source: '马来西亚统计局，2025' },
      { value: 'RM1m', text: '这条营业额分界线，如今同时决定审计豁免与你是否需要做电子发票。', source: 'SSM 与 LHDN，2025' },
    ],
  },
  services: {
    eyebrow: '我们的服务',
    heading: '围绕你的生意打造的会计服务',
    intro: '从每月账目到对接审计师，我们全都包办。',
    items: [
      { icon: 'calculator', title: '会计记账', text: '每月簿记、管理账目，到可呈交 SSM 的年终财报，无论需不需要审计。' },
      { icon: 'user', title: '个人所得税', text: '所得税电子报税（Borang BE / B）、扣税与回扣，LHDN 的往来也替你处理。' },
      { icon: 'money', title: '薪资处理', text: '薪金单，加上 EPF（KWSP）、SOCSO（PERKESO）、EIS 与 PCB（MTD），每月准时呈报。' },
      { icon: 'chart-line-up', title: '现金流咨询', text: '现金流预测与成本分析，让你随时清楚钱怎么进、怎么出、能花多少。' },
      { icon: 'file-text', title: '电子发票', text: 'MyInvois 设置、系统对接与员工培训，为第四阶段做好准备。不确定要不要做？我们先帮你确认。', badge: 'LHDN MyInvois' },
      { icon: 'handshake', title: '审计与税务代理对接', text: '我们准备好底稿，直接与你的审计师和持牌税务代理往来，你不必操心。' },
    ],
  },
  why: {
    eyebrow: '为什么交给我们',
    heading: '比出错便宜，比自己做快',
    body:
      '漏了 EPF 或报税死线，罚款加利息；请个全职会计，是一份薪水。我们夹在中间：固定月费、随传随到的专业团队，让你做对，又不必背负开销。',
    photoAlt: '占位图：客户会议',
    checks: [
      { title: '合格且经验丰富的专业团队', note: '资质待定，由客户确认' },
      { title: '每个法定截止日都盯着', note: 'SSM、LHDN、EPF、SOCSO、SST 与电子发票' },
      { title: '用你自己的语言沟通', note: '英语、马来语、华语与粤语' },
      { title: '为中小企业与初创量身打造', note: '没有大所的开销，WhatsApp 回覆快' },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    heading: '马来西亚合规，直接给你答案',
    intro: '规则在 2025 年变了。以下是大多数中小企业老板现在的处境。',
    items: [
      {
        q: '我的公司还需要审计吗？',
        a: '从 2025 年 1 月 1 日起，私人有限公司若符合以下任两项，即可豁免审计：年营业额不超过 100 万令吉、总资产不超过 100 万令吉、雇员不超过 10 人。但你仍须编制并向 SSM 呈交未经审计的财务报表和董事报告。无论哪种情况，我们都会帮你确认状态并处理呈交。',
      },
      {
        q: '我需要做电子发票（MyInvois）吗？',
        a: '第四阶段针对营业额介于 100 万至 500 万令吉的企业，从 2026 年 1 月 1 日起实施，并设有宽限期至 2027 年 12 月 31 日（期间不罚款）。营业额低于 100 万令吉的企业目前获豁免。我们会先确认你的情况，真正需要时才为你设置 MyInvois。',
      },
      {
        q: '你们会盯着哪些截止日？',
        a: '每月：EPF（KWSP）、SOCSO（PERKESO）、EIS 与 PCB。每两个月：若有注册，SST。每年：Form E、公司税（Form C）与个人所得税（Borang BE / B）。我们全都记进行事历，绝不迟交。',
      },
      {
        q: '可以从我现有的会计师接手吗？',
        a: '可以。我们会安排你的账目记录，以及 SSM 与 LHDN 档案的交接，合规不留空档。大多数转换在几周内完成。',
      },
      {
        q: '收费怎么算？',
        a: '我们根据你的交易量和所需服务，谈定一个固定月费，年底不会有惊喜账单。想要报价，随时联系我们。',
      },
    ],
  },
  contact: {
    heading: '联系我们',
    fields: { name: '姓名', contact: '电话或电邮', message: '需要什么帮助？' },
    placeholders: { name: '你的名字', contact: '+60 12 345 6789', message: '例如：为我的 Sdn Bhd 设置电子发票' },
    cards: [
      { icon: 'whatsapp-logo', label: 'WhatsApp', value: '+60 1X XXX XXXX（待定）' },
      { icon: 'envelope-simple', label: '电邮', value: 'info@perfectadvisory.com.my' },
      { icon: 'map-pin', label: '办公室', value: '地址待定，吉隆坡（由客户确认）' },
    ],
    sending: '发送中…',
    success: '谢谢，我们会尽快回覆。',
    error: '出了点问题，请改用 WhatsApp 联系我们。',
  },
  footer: { rights: '© 2026 Perfect Advisory Resources. 版权所有。', regNo: '公司注册号：待定' },
  whatsappAria: '用 WhatsApp 联系我们',
}
