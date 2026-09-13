import { Search, Bell, Plus, Mic, MicOff, FileText, CheckCircle2, Circle, Sparkles, Users, ArrowRight, Video } from 'lucide-react'

const notes = [
  { title: 'Sprint planning — Q3 wk4', snippet: 'Ship notes sync fix before Friday. Priya owns the WebSocket reconnect logic...', time: '2m ago', color: 'var(--color-amber)' },
  { title: 'Design crit: onboarding flow', snippet: 'Cut the third step entirely — merge workspace creation into signup...', time: '38m ago', color: 'var(--color-teal)' },
  { title: 'Investor update — August', snippet: 'MRR up 14% MoM. Voice channel usage now the top engagement driver...', time: '3h ago', color: 'var(--color-lavender)' },
]

const tasks = [
  { label: 'Ship notes sync fix', owner: 'Priya', done: false },
  { label: 'Record demo voiceover', owner: 'Arjun', done: false },
  { label: 'Review onboarding copy', owner: 'You', done: true },
  { label: 'Set up staging voice server', owner: 'Dev', done: false },
]

const people = ['PR', 'AR', 'MK', 'SL']

export default function Dashboard() {
  return (
    <div className="flex-1 min-w-0">
      {/* Topbar */}
      <header className="sticky top-0 z-10 flex items-center gap-4 px-8 py-4 border-b backdrop-blur"
              style={{ background: 'rgba(248,245,236,0.9)', borderColor: 'var(--color-paper-line)' }}>
        <div>
          <h1 className="font-display text-xl">Good morning, Sam.</h1>
          <p className="text-xs font-mono" style={{ color: '#8a8672' }}>Wednesday, Aug 12 &middot; Product Weekly</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#8a8672' }} />
            <input
              placeholder="Search notes, tasks, people…"
              className="pl-9 pr-4 py-2 rounded-full text-sm w-64 outline-none border focus:border-[var(--color-amber-deep)]"
              style={{ background: 'var(--color-paper-dim)', borderColor: 'var(--color-paper-line)' }}
            />
          </div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center border" style={{ borderColor: 'var(--color-paper-line)' }}>
            <Bell size={16} />
          </button>
          <button className="rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-1.5" style={{ background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
            <Plus size={15} /> New note
          </button>
        </div>
      </header>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live voice channel card */}
        <div className="lg:col-span-2 rounded-2xl p-6 text-paper relative overflow-hidden" style={{ background: 'var(--color-ink)' }}>
          <div className="absolute -right-10 -top-16 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: 'var(--color-teal)' }} />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-teal)' }}>Live voice channel</p>
              <h3 className="font-display text-2xl mb-1" style={{ color: '#f8f5ec' }}>#sprint-planning</h3>
              <p className="text-sm" style={{ color: '#a5a49a' }}>4 people talking &middot; AI is transcribing</p>
            </div>
            <div className="flex -space-x-2">
              {people.map((p, i) => (
                <div key={p} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border-2" style={{ background: ['var(--color-amber)','var(--color-teal)','var(--color-lavender)','var(--color-coral)'][i], color: 'var(--color-ink)', borderColor: 'var(--color-ink)' }}>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-end gap-1 h-10 mt-6">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="wave-bar w-1.5 rounded-full" style={{ height: '100%', background: i % 3 === 0 ? 'var(--color-amber)' : 'var(--color-teal)', animationDelay: `${(i % 6) * 0.1}s`, opacity: 0.85 }} />
            ))}
          </div>
          <div className="relative flex items-center gap-3 mt-6">
            <button className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'var(--color-coral)' }}>
              <MicOff size={18} color="#12131a" />
            </button>
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2" style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}>
              <Mic size={16} /> Join channel
            </button>
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold border flex items-center gap-2" style={{ borderColor: '#3a3c48', color: '#f8f5ec' }}>
              <Video size={16} /> Start video
            </button>
          </div>
        </div>

        {/* AI summary card */}
        <div className="rounded-2xl p-6 border" style={{ background: 'rgba(143,126,242,0.08)', borderColor: 'rgba(143,126,242,0.3)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={17} style={{ color: 'var(--color-lavender)' }} />
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-lavender)' }}>AI Assistant</p>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Your team created <strong>3 action items</strong> in the last hour and closed
            <strong> 2 open threads</strong> from yesterday's meeting.
          </p>
          <button className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--color-lavender)' }}>
            View full summary <ArrowRight size={14} />
          </button>
        </div>

        {/* Notes list */}
        <div className="lg:col-span-2 rounded-2xl border p-6" style={{ borderColor: 'var(--color-paper-line)', background: 'white' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-lg">Recent notes</h3>
            <button className="text-sm font-medium flex items-center gap-1" style={{ color: 'var(--color-amber-deep)' }}>
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-1">
            {notes.map((n) => (
              <div key={n.title} className="flex items-start gap-3 p-3 rounded-xl transition hover:bg-[var(--color-paper-dim)] cursor-pointer">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${n.color}22` }}>
                  <FileText size={16} style={{ color: n.color }} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{n.title}</p>
                    <span className="text-xs font-mono shrink-0" style={{ color: '#8a8672' }}>{n.time}</span>
                  </div>
                  <p className="text-sm truncate" style={{ color: '#75725f' }}>{n.snippet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="rounded-2xl border p-6" style={{ borderColor: 'var(--color-paper-line)', background: 'white' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-lg">Tasks</h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: 'var(--color-paper-dim)', color: '#8a8672' }}>1/4 done</span>
          </div>
          <div className="space-y-3">
            {tasks.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                {t.done ? (
                  <CheckCircle2 size={18} style={{ color: 'var(--color-teal)' }} />
                ) : (
                  <Circle size={18} style={{ color: '#c9c2a8' }} />
                )}
                <div className="min-w-0">
                  <p className={`text-sm font-medium ${t.done ? 'line-through' : ''}`} style={{ color: t.done ? '#a19d86' : 'var(--color-ink)' }}>{t.label}</p>
                  <p className="text-xs font-mono" style={{ color: '#8a8672' }}>{t.owner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team presence */}
        <div className="lg:col-span-3 rounded-2xl border p-6 flex flex-wrap items-center gap-6" style={{ borderColor: 'var(--color-paper-line)', background: 'white' }}>
          <div className="flex items-center gap-2">
            <Users size={17} style={{ color: 'var(--color-ink)' }} />
            <p className="font-display text-lg">Who's around</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {[
              ['Priya', 'writing in Notes', 'var(--color-amber)'],
              ['Arjun', 'in #sprint-planning', 'var(--color-teal)'],
              ['Meera', 'reviewing Files', 'var(--color-lavender)'],
              ['Sam (you)', 'on Dashboard', 'var(--color-coral)'],
            ].map(([name, status, color]) => (
              <div key={name} className="flex items-center gap-2 pr-4">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: color }} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs font-mono" style={{ color: '#8a8672' }}>{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
