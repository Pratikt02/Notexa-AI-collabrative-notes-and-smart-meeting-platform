export default function ComingNext({ icon: Icon, title, body }) {
  return (
    <div className="flex-1 min-w-0 flex items-center justify-center p-8">
      <div className="max-w-sm text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'var(--color-paper-dim)' }}>
          <Icon size={24} style={{ color: 'var(--color-amber-deep)' }} />
        </div>
        <h2 className="font-display text-2xl mb-2">{title}</h2>
        <p className="text-sm leading-relaxed" style={{ color: '#75725f' }}>{body}</p>
      </div>
    </div>
  )
}
