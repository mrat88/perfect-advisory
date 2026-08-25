// Client's real "PA" mark, a gold-gradient line drawing. The source vector lives
// in public/logo-mark.svg (traced from the client's file, then recolored to the
// brand gold gradient #C9971B → #F5D33F). Rendered as an <img> so it stays a plain
// server component and scales crisply at every size used (header 40, footer 34).

export function Logo({ size = 40 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized
    <img src="/logo-mark.svg" alt="" aria-hidden="true" width={size} height={size} />
  )
}

// Reusable placeholder photo slot (brand-tinted). Real client photo replaces it.
export function PhotoSlot({ label, logoSize = 56 }: { label: string; logoSize?: number }) {
  return (
    <div className="ph-slot">
      <Logo size={logoSize} />
      <span>{label}</span>
    </div>
  )
}
