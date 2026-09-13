export default function Mark({ size = 40, light = false }) {
  const bar = light ? '#12131a' : '#f8f5ec'
  const accent = '#2fc2b8'
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill={light ? '#f8f5ec' : '#12131a'} stroke={light ? '#e2dcc8' : '#2b2d3a'} />
        <rect className="wave-bar" x="10" y="14" width="2.6" height="12" rx="1.3" fill={accent} style={{ animationDelay: '0s' }} />
        <rect className="wave-bar" x="15" y="10" width="2.6" height="20" rx="1.3" fill="#f2b705" style={{ animationDelay: '0.15s' }} />
        <rect className="wave-bar" x="20" y="6" width="2.6" height="28" rx="1.3" fill={accent} style={{ animationDelay: '0.3s' }} />
        <rect x="25" y="10" width="2.6" height="20" rx="1.3" fill="#8f7ef2" className="blink-cursor" />
      </svg>
      <span className="font-display text-[1.35rem] tracking-tight" style={{ color: light ? '#12131a' : '#f8f5ec' }}>
        Notexa
      </span>
    </div>
  )
}
