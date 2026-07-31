// Placeholder "PA" mark. Replace with the client's real logo SVG before launch.
// The gold gradient is defined once via <GoldGradientDef/> (rendered in Landing)
// and referenced by id, so the mark stays a server component with no hooks.

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="10" stroke="url(#pa-gold)" strokeWidth="3.5" />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="700"
        fontSize="21"
        fill="url(#pa-gold)"
      >
        PA
      </text>
    </svg>
  )
}

export function GoldGradientDef() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="pa-gold" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c9971b" />
          <stop offset="1" stopColor="#f5d33f" />
        </linearGradient>
      </defs>
    </svg>
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
