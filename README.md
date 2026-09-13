# Notexa — AI Collaborative Notes + Voice Collaboration Platform

This is the **frontend base** for Notexa, scaffolded from the architecture diagram
(React.js frontend / Node.js + Express backend / Socket.IO real-time layer / WebRTC voice).

This drop focuses on the **Frontend** box: a working, styled shell with a landing
page and an app dashboard, ready to wire up to the backend services shown in the
diagram (Auth, Notes, Voice Signaling, AI Assistant, etc).

## What's here

- **Landing page** — product story, live-voice-channel mock, feature grid, flow steps.
- **App shell** — sidebar navigation matching every module in the diagram
  (Dashboard, Notes, Voice Channels, Meetings, Chat, Tasks, File Manager, AI Assistant).
- **Dashboard** — live voice channel card, AI summary card, recent notes, tasks, presence.
- Other sections (Notes editor, Voice, Meetings, Chat, Tasks, Files, AI Assistant) are
  scaffolded as labeled placeholder screens, ready for real components + Socket.IO/WebRTC wiring.

## Design system

- **Display type:** Fraunces (serif, warm, characterful) for headings.
- **Body/UI type:** Manrope. **Data/labels:** JetBrains Mono.
- **Palette:** ink navy `#12131A`, paper cream `#F8F5EC`, amber `#F2B705` (notes/highlighter),
  teal `#2FC2B8` (voice/live), lavender `#8F7EF2` (AI), coral `#F2665E` (alerts/mute).
- **Signature motif:** a waveform that resolves into a blinking text cursor — voice becoming text.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
```

## Next steps (per the architecture diagram)

1. Stand up the **Node.js + Express** backend with the services shown (Auth, User,
   Workspace, Notes, Chat, Task, File, Meeting, Voice Signaling, AI).
2. Add **Socket.IO** for real-time note sync, cursors, typing indicators, presence,
   chat, and voice signaling.
3. Add **WebRTC** for voice channels and video meetings.
4. Connect **MongoDB** for data, **Cloudinary/Firebase Storage** for files, and the
   **AI services** (speech-to-text, meeting summaries, action item extraction, search).
5. Wire the placeholder screens in `src/components/` to real, connected components.
