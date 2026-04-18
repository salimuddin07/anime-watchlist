export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-4">
        <svg width="220" height="48" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed"/>
              <stop offset="100%" stopColor="#22d3ee"/>
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <text x="0" y="30" fontFamily="Orbitron, sans-serif" fontSize="30" fontWeight="700" fill="url(#neonGrad)" filter="url(#neonGlow)" letterSpacing="4">ANIME</text>
          <text x="2" y="45" fontFamily="Orbitron, sans-serif" fontSize="12" fill="#e5e7eb" letterSpacing="6" opacity="0.8">WATCHLIST</text>
          <line x1="0" y1="47.5" x2="218" y2="47.5" stroke="url(#neonGrad)" strokeWidth="1.5" opacity="0.5"/>
        </svg>
      </div>
    </header>
  );
}
