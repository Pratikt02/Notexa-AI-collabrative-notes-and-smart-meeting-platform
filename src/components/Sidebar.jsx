import Mark from './Mark'
import { LayoutDashboard, FileText, Mic, Video, MessageSquare, CheckSquare, FolderOpen, Sparkles, Settings, LogOut } from 'lucide-react'

const nav = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'notes', label: 'Notes', icon: FileText },
  { key: 'voice', label: 'Voice channels', icon: Mic },
  { key: 'meetings', label: 'Meetings', icon: Video },
  { key: 'chat', label: 'Chat', icon: MessageSquare },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'files', label: 'Files', icon: FolderOpen },
  { key: 'ai', label: 'AI Assistant', icon: Sparkles },
]

export default function Sidebar({ active, setActive, onExit }) {
  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 flex flex-col border-r"
           style={{ background: 'var(--color-ink)', borderColor: '#2b2d3a' }}>
      <div className="px-5 py-6 cursor-pointer" onClick={onExit}>
        <Mark size={34} />
      </div>

      <div className="px-4 mb-2">
        <div className="rounded-xl px-3 py-2.5 flex items-center gap-2.5" style={{ background: 'var(--color-ink-soft)' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-semibold text-sm" style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}>PW</div>
          <div className="leading-tight">
            <p className="text-sm font-semibold" style={{ color: '#f8f5ec' }}>Product Weekly</p>
            <p className="text-xs font-mono" style={{ color: '#8b8a80' }}>Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto no-scrollbar">
        {nav.map(({ key, label, icon: Icon }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition"
              style={{
                background: isActive ? 'rgba(242,183,5,0.12)' : 'transparent',
                color: isActive ? 'var(--color-amber)' : '#a5a49a',
              }}
            >
              <Icon size={17} />
              {label}
              {key === 'voice' && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-teal)' }} />
              )}
            </button>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t space-y-1" style={{ borderColor: '#2b2d3a' }}>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition" style={{ color: '#a5a49a' }}>
          <Settings size={17} /> Settings
        </button>
        <button onClick={onExit} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition" style={{ color: '#a5a49a' }}>
          <LogOut size={17} /> Exit workspace
        </button>
      </div>
    </aside>
  )
}
