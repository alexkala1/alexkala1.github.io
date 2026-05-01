export type Project = {
  title: string
  category: string
  summary: string
  outcome: string
  highlights: string[]
  stack: string[]
  code?: string
  demo?: string
  isPrivate?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Chess Venue',
    category: 'Tournament platform',
    summary:
      'Full-stack chess tournament management platform running live events in Greece. Handles registration, pairings, boards, and real-time results across multiple organiser roles.',
    outcome:
      'Powers real tournaments. Multi-role access, live tournament state, and a public-facing registration flow used by actual players.',
    highlights: [
      'Multi-role auth (Google OAuth + JWT) — organiser, arbiter, player',
      'Greek/English i18n with dynamic locale switching',
      'Real-time tournament state and board assignment',
    ],
    stack: ['Nuxt 4', 'TypeScript', 'Prisma', 'PostgreSQL', 'i18n'],
    demo: 'https://chess-venue.vercel.app',
    code: 'https://github.com/alexkala1/chess-venue',
    isPrivate: true,
    featured: true,
  },
  {
    title: 'Aletheia',
    category: 'Civic tech',
    summary:
      'Anomaly detection engine for Greek government procurement decisions published on Διαύγεια. Parses PDFs, indexes decisions, and flags patterns that suggest irregularities.',
    outcome:
      'Turns a wall of raw government XML into a searchable dashboard with risk scoring, org graphs, and procurement timelines.',
    highlights: [
      'PDF parsing and full-text indexing of public government decisions',
      'Configurable risk scoring engine with per-signal weights',
      'Procurement timeline and organisation comparison views',
    ],
    stack: ['Nuxt 4', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'PDF.js'],
    featured: true,
  },
  {
    title: 'track-a-lot',
    category: 'Personal finance',
    summary:
      'Financial tracker that automatically categorises recurring expenses — rent, bills, subscriptions — and surfaces spending patterns over time.',
    outcome:
      'Replaces manual spreadsheet upkeep with a dashboard that understands what your money is doing month to month.',
    highlights: [
      'Smart recurring expense detection and auto-categorisation',
      'Month-over-month spending breakdown with visual summaries',
      'Clean import flow for bank transaction data',
    ],
    stack: ['Vue', 'Nuxt', 'TypeScript'],
    code: 'https://github.com/alexkala1/track-a-lot',
    isPrivate: true,
    featured: true,
  },
  {
    title: 'Nuxt Visualizer',
    category: 'Creative tool',
    summary:
      'Browser-based music visualiser with retro Windows Media Player aesthetics. Reactive animations sync to audio frequency data in real time.',
    outcome:
      'A technically interesting UI exercise — Web Audio API frequency analysis driving a canvas animation loop with a nostalgic skin.',
    highlights: [
      'Frequency-reactive visuals using Web Audio API',
      'Retro WMP-inspired design and colour palette',
      'Canvas animation loop tied to playback state',
    ],
    stack: ['Nuxt', 'Vue', 'Web Audio API', 'Canvas API'],
    demo: 'https://alexkala1.github.io/nuxt-visualizer/',
    code: 'https://github.com/alexkala1/nuxt-visualizer',
    featured: true,
  },
  {
    title: 'Fingerprint Attendance',
    category: 'University thesis',
    summary:
      'Role-based attendance platform for students, secretaries, and teachers using fingerprint authentication.',
    outcome:
      'Turned a hardware-backed authentication workflow into a usable web application for academic operations.',
    highlights: [
      'Role-specific access flows',
      'Dockerised services',
      'MongoDB-backed attendance records',
    ],
    stack: ['Vue', 'Node.js', 'MongoDB', 'Docker'],
    code: 'https://github.com/alexkala1/fattendancepublic',
  },
  {
    title: 'Sacchon',
    category: 'Bootcamp healthcare app',
    summary:
      'Diabetes management app where patients enter health data and doctors review it for consultation.',
    outcome:
      'Connected patient input flows with doctor-facing diagnosis and consultation screens.',
    highlights: [
      'Patient and doctor roles',
      'Health data entry and history',
      'Consultation workflow',
    ],
    stack: ['Angular', 'Java', 'Restlet', 'MSSQL'],
    code: 'https://github.com/alexkala1/pfizer-final-project',
  },
]
