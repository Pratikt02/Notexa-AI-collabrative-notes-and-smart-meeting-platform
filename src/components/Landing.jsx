import Mark from './Mark'
import { Mic, FileText, Users, Sparkles, Video, CheckSquare, ArrowUpRight, Radio } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Notes that sync as you think',
    body: 'Every keystroke lands for your whole team, live. Cursors, edits, and highlights — never a stale copy.',
    accent: 'var(--color-amber)',
  },
  {
    icon: Mic,
    title: 'Voice channels, always on',
    body: 'Drop into a room the way you drop into a game lobby. Push to talk, mute, deafen — zero friction.',
    accent: 'var(--color-teal)',
  },
  {
    icon: Sparkles,
    title: 'An AI that was in the room',
    body: 'Notexa listens to your meetings and turns them into summaries, action items, and searchable notes.',
    accent: 'var(--color-lavender)',
  },
  {
    icon: CheckSquare,
    title: 'Tasks born from conversation',
    body: 'Say "I\'ll handle the deck" out loud — it becomes a tracked task assigned to you, automatically.',
    accent: 'var(--color-coral)',
  },
]

const steps = [
  { label: 'Open a workspace', body: 'Students, teams, and organizations get one shared home for notes, tasks, and calls.' },
  { label: 'Write or talk', body: 'Type in the live editor or jump on a voice channel — both feed the same source of truth.' },
  { label: 'Let Notexa listen', body: 'The AI assistant transcribes, summarizes, and extracts action items in the background.' },
  { label: 'Everyone stays aligned', body: 'Presence, notifications, and search keep the whole org moving on the same page.' },
]

export default function Landing({ onEnter }) {
  return (
    <div className="bg-ink text-paper" style={{ background: 'var(--color-ink)' }}>
      {/* Nav */}
      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <Mark />
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm" style={{ color: '#c9c7bc' }}>
          <a href="#features" className="hover:text-white transition">Product</a>
          <a href="#flow" className="hover:text-white transition">How it works</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </nav>
        <button
          onClick={onEnter}
          className="rounded-full px-5 py-2.5 font-semibold text-sm flex items-center gap-1.5 transition hover:-translate-y-0.5"
          style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}
        >
          Open workspace <ArrowUpRight size={16} />
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-7 text-xs font-mono uppercase tracking-widest"
               style={{ background: 'rgba(47,194,184,0.12)', color: 'var(--color-teal)', border: '1px solid rgba(47,194,184,0.3)' }}>
            <Radio size={12} /> Live now &middot; 214 people typing &amp; talking
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mb-7">
            Notes that listen.
            <br />
            Meetings that <span className="highlight-mark" style={{ color: 'var(--color-ink)' }}>write themselves.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-lg mb-9" style={{ color: '#c9c7bc' }}>
            Notexa fuses real-time collaborative notes with voice channels and an AI
            assistant that's always taking notes — so your team never loses a thought
            to a bad connection or a missed meeting.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onEnter}
              className="rounded-full px-7 py-3.5 font-semibold flex items-center gap-2 transition hover:-translate-y-0.5"
              style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}
            >
              Start a workspace <ArrowUpRight size={18} />
            </button>
            <button className="rounded-full px-7 py-3.5 font-semibold border transition hover:bg-white/5"
                    style={{ borderColor: '#3a3c48' }}>
              Watch a 90s demo
            </button>
          </div>
        </div>

        {/* Hero visual: mock voice + notes panel */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30" style={{ background: 'linear-gradient(135deg, var(--color-teal), var(--color-lavender))' }} />
          <div className="relative rounded-2xl border overflow-hidden" style={{ background: 'var(--color-ink-soft)', borderColor: '#2b2d3a' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#2b2d3a' }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-coral)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-amber)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-teal)' }} />
              <span className="ml-3 text-xs font-mono" style={{ color: '#8b8a80' }}>sprint-planning.notexa</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{ background: 'rgba(47,194,184,0.1)', border: '1px solid rgba(47,194,184,0.25)' }}>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-teal)' }}>
                  <Mic size={15} /> Voice channel &middot; 4 speaking
                </div>
                <div className="flex items-end gap-0.5 h-4">
                  {[0,1,2,3,4].map(i => (
                    <span key={i} className="wave-bar w-1 rounded-full" style={{ height: '100%', background: 'var(--color-teal)', animationDelay: `${i * 0.12}s` }} />
                  ))}
                </div>
              </div>
              <div className="space-y-2.5 font-mono text-[13px] leading-relaxed" style={{ color: '#c9c7bc' }}>
                <p><span style={{ color: 'var(--color-amber)' }}>Priya:</span> let's ship the notes sync fix before Friday</p>
                <p><span style={{ color: 'var(--color-lavender)' }}>AI Assistant:</span> action item created &rarr; "Ship notes sync fix" @Priya, due Fri</p>
                <p className="flex items-center gap-1.5" style={{ color: '#6f6e64' }}>typing<span className="blink-cursor">|</span></p>
              </div>
              <div className="flex gap-2 pt-1">
                {['Dashboard','Tasks','Files'].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: '#24263280', color: '#9d9c92', border: '1px solid #2b2d3a' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="border-t" style={{ borderColor: '#2b2d3a' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-teal)' }}>Built for how teams actually work</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-xl mb-14">One workspace for talking, writing, and doing.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, body, accent }) => (
              <div key={title} className="rounded-2xl p-7 border transition hover:-translate-y-1"
                   style={{ background: 'var(--color-ink-soft)', borderColor: '#2b2d3a' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${accent}1f` }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a5a49a' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="flow" className="border-t" style={{ borderColor: '#2b2d3a' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-amber)' }}>The flow</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-xl mb-14">From a thought to a tracked task, in one room.</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.label} className="relative pl-0">
                <div className="font-display text-4xl mb-4" style={{ color: '#3a3c48' }}>{String(i + 1).padStart(2, '0')}</div>
                <h4 className="font-semibold mb-2">{s.label}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#a5a49a' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t" style={{ borderColor: '#2b2d3a' }}>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6 max-w-2xl mx-auto">
            Your next meeting could just be <span className="highlight-mark" style={{ color: 'var(--color-ink)' }}>notes.</span>
          </h2>
          <p className="mb-9" style={{ color: '#a5a49a' }}>Free for students. Built for teams and organizations.</p>
          <button onClick={onEnter} className="rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2 transition hover:-translate-y-0.5"
                  style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}>
            Open your workspace <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      <footer className="border-t px-6 py-8" style={{ borderColor: '#2b2d3a' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono" style={{ color: '#6f6e64' }}>
          <span>&copy; {new Date().getFullYear()} Notexa</span>
          <span className="flex items-center gap-4">
            <Video size={14} /> <Users size={14} /> <FileText size={14} />
          </span>
        </div>
      </footer>
    </div>
  )
}
