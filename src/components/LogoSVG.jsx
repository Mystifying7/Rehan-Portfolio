export function LogoSVG({ className = "w-9 h-9" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Hexagonal Ring */}
      <polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        fill="url(#bgGrad)"
        stroke="url(#cyberGrad)"
        strokeWidth="3"
        filter="url(#glowEffect)"
      />

      {/* Inner Accent Ring */}
      <polygon
        points="50,14 81,32 81,68 50,86 19,68 19,32"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeDasharray="4,4"
        opacity="0.6"
      />

      {/* Stylized AI 'R' Path */}
      <path
        d="M 36 28 L 54 28 C 64 28 68 34 68 41 C 68 48 62 53 54 53 L 36 53 Z M 36 53 L 36 72 M 52 53 L 66 72"
        fill="none"
        stroke="url(#cyberGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glowEffect)"
      />

      {/* Neural Nodes */}
      <circle cx="36" cy="28" r="3.5" fill="#22d3ee" />
      <circle cx="54" cy="28" r="3.5" fill="#38bdf8" />
      <circle cx="68" cy="41" r="3.5" fill="#3b82f6" />
      <circle cx="36" cy="53" r="3.5" fill="#22d3ee" />
      <circle cx="54" cy="53" r="3.5" fill="#38bdf8" />
      <circle cx="36" cy="72" r="3.5" fill="#22d3ee" />
      <circle cx="66" cy="72" r="3.5" fill="#3b82f6" />
    </svg>
  );
}

export default LogoSVG;
