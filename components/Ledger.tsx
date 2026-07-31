import type { Ledger as LedgerData } from '@/content/types'

// Hero signature: a stylized compliance ledger, the firm's own artifact.
// Illustrative, not a live product UI or fabricated financials.
export function Ledger({ l }: { l: LedgerData }) {
  return (
    <div className="ledger" role="img" aria-label={`${l.title}: ${l.status}`}>
      <div className="ledger-head">
        <span className="lh-title">{l.title}</span>
        <span className="lh-status">
          <span className="lh-dot" aria-hidden="true" />
          {l.status}
        </span>
      </div>
      <div className="ledger-rows">
        {l.rows.map((r, i) => (
          <div className="ledger-row" key={i}>
            <span className="lr-label">{r.label}</span>
            <span className={r.due ? 'lr-value due' : 'lr-value'}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className="ledger-foot">{l.footer}</div>
    </div>
  )
}
