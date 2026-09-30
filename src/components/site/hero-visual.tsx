// Self-contained futuristic biotech hero visual: a peptide vial, a syringe, a
// capsule, and a molecular lattice, drawn as inline SVG with animated glow.
// No external assets — safe for strict CSP and instant load.
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="hv-fluid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="hv-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <filter id="hv-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* ambient glow */}
        <circle cx="200" cy="200" r="170" fill="url(#hv-glow)">
          <animate attributeName="r" values="160;185;160" dur="6s" repeatCount="indefinite" />
        </circle>

        {/* molecular lattice */}
        <g stroke="#818cf8" strokeOpacity="0.5" strokeWidth="1.5">
          <line x1="70" y1="90" x2="130" y2="120" />
          <line x1="130" y1="120" x2="110" y2="185" />
          <line x1="300" y1="110" x2="330" y2="170" />
          <line x1="300" y1="110" x2="255" y2="80" />
          <line x1="290" y1="300" x2="330" y2="250" />
        </g>
        {[
          [70, 90],
          [130, 120],
          [110, 185],
          [300, 110],
          [330, 170],
          [255, 80],
          [290, 300],
          [330, 250],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#38bdf8">
            <animate
              attributeName="fill-opacity"
              values="0.4;1;0.4"
              dur={`${2 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* vial */}
        <g transform="translate(150 90)">
          <rect x="0" y="20" width="52" height="150" rx="14" fill="url(#hv-glass)" stroke="#c7d2fe" strokeWidth="2" />
          <rect x="0" y="90" width="52" height="80" rx="14" fill="url(#hv-fluid)" opacity="0.85" />
          <rect x="10" y="6" width="32" height="20" rx="4" fill="#94a3b8" />
          <rect x="14" y="0" width="24" height="10" rx="3" fill="#64748b" />
          {/* bubbles */}
          <circle cx="20" cy="150" r="3" fill="#e0f2fe">
            <animate attributeName="cy" values="160;110" dur="3s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.9;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="34" cy="150" r="2" fill="#e0f2fe">
            <animate attributeName="cy" values="160;120" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* syringe */}
        <g transform="rotate(38 300 300)">
          <rect x="250" y="292" width="120" height="18" rx="6" fill="url(#hv-glass)" stroke="#c7d2fe" strokeWidth="2" />
          <rect x="250" y="292" width="60" height="18" rx="6" fill="url(#hv-fluid)" opacity="0.8" />
          <rect x="366" y="296" width="26" height="10" rx="3" fill="#94a3b8" />
          <line x1="392" y1="301" x2="418" y2="301" stroke="#94a3b8" strokeWidth="2" />
          <rect x="236" y="286" width="10" height="30" rx="3" fill="#818cf8" />
        </g>

        {/* capsule / pill */}
        <g transform="rotate(-25 96 300)">
          <rect x="60" y="288" width="72" height="30" rx="15" fill="url(#hv-glass)" stroke="#c7d2fe" strokeWidth="2" />
          <rect x="60" y="288" width="36" height="30" rx="15" fill="url(#hv-fluid)" opacity="0.85" />
          <circle cx="150" cy="150" r="0" fill="none" />
        </g>
      </svg>
    </div>
  )
}
