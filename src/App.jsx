import { useState } from 'react'
import Landing from './components/Landing'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import ComingNext from './components/ComingNext'
import { FileText, Mic, Video, MessageSquare, CheckSquare, FolderOpen, Sparkles } from 'lucide-react'

const placeholders = {
  notes: { icon: FileText, title: 'Notes editor', body: 'The real-time collaborative editor — live cursors, typing indicators, and version history — plugs in here next.' },
  voice: { icon: Mic, title: 'Voice channels', body: 'BGMI-style always-on voice rooms with mute, deafen, and admin controls will live here.' },
  meetings: { icon: Video, title: 'Meetings', body: 'Scheduled video meetings with AI-generated summaries and action items will live here.' },
  chat: { icon: MessageSquare, title: 'Chat', body: 'Threaded team chat, synced with Socket.IO for instant delivery, will live here.' },
  tasks: { icon: CheckSquare, title: 'Tasks', body: 'Kanban and list views for tasks pulled from notes and meetings will live here.' },
  files: { icon: FolderOpen, title: 'File manager', body: 'Uploads and shared files, backed by Cloudinary and Firebase Storage, will live here.' },
  ai: { icon: Sparkles, title: 'AI Assistant', body: 'Speech-to-text, meeting summaries, action item extraction, and smart search will live here.' },
}

function App() {
  const [entered, setEntered] = useState(false)
  const [active, setActive] = useState('dashboard')

  if (!entered) {
    return <Landing onEnter={() => setEntered(true)} />
  }

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--color-paper)' }}>
      <Sidebar active={active} setActive={setActive} onExit={() => setEntered(false)} />
      {active === 'dashboard' ? (
        <Dashboard />
      ) : (
        <ComingNext {...placeholders[active]} />
      )}
    </div>
  )
}

export default App
