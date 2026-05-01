# Portfolio Content Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder/removed projects with four real ones, humanise all copy, fix the hero gap, clean up the contact section, and expand the skills list.

**Architecture:** Content-only changes across data, components, CSS, and tests. No new files, no new dependencies. TDD: update tests to fail first, then fix the code.

**Tech Stack:** Nuxt 4, Vue 3, Nuxt UI 4, Tailwind CSS, Node built-in test runner

---

## File Map

| File | What changes |
|---|---|
| `test/portfolio-content.test.mjs` | Update assertions for new hero copy, new projects, new contact design |
| `app/data/projects.ts` | Replace 3 removed projects with 4 new featured ones; keep Fingerprint Attendance and Sacchon non-featured |
| `app/components/HeroSection.vue` | Personal copy, remove proof panel, fix two-column layout |
| `app/components/CvSection.vue` | Expand skill list, change "Request CV" to "View CV" Google Docs link |
| `app/components/ContactForm.vue` | Replace fake form with clean mailto card |
| `app/assets/css/main.css` | Fix hero gap, remove hero-proof styles, add contact-cta styles |

---

## Task 1: Update tests to fail for the new design (TDD red phase)

**Files:**
- Modify: `test/portfolio-content.test.mjs`

- [x] **Step 1: Replace the test file with updated assertions**

```js
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const read = (path) => readFileSync(join(root, path), 'utf8')

describe('portfolio content and structure', () => {
  it('positions Alex as a front-end engineer with specific work', () => {
    const hero = read('app/components/HeroSection.vue')

    assert.match(hero, /Alex Kalaitzidis/)
    assert.match(hero, /Front-end/i)
    assert.match(hero, /Vue|Nuxt/i)
    assert.match(hero, /See the work/i)
  })

  it('presents projects as case studies with outcomes and stacks', () => {
    const projectsData = read('app/data/projects.ts')
    const projectsSection = read('app/components/ProjectsSection.vue')

    assert.match(projectsData, /outcome/i)
    assert.match(projectsData, /highlights/i)
    assert.match(projectsData, /featured/i)
    assert.match(projectsSection, /project\.outcome/)
    assert.match(projectsSection, /project\.highlights/)
  })

  it('features the four real projects', () => {
    const projectsData = read('app/data/projects.ts')

    assert.match(projectsData, /Chess Venue/)
    assert.match(projectsData, /Aletheia/)
    assert.match(projectsData, /track-a-lot/i)
    assert.match(projectsData, /Nuxt Visualizer/)
  })

  it('keeps CV and contact as clear hiring actions', () => {
    const cv = read('app/components/CvSection.vue')
    const contact = read('app/components/ContactForm.vue')

    assert.match(cv, /Experience/i)
    assert.match(cv, /Technical strengths/i)
    assert.match(contact, /Let.s talk/i)
    assert.match(contact, /alexkalaitzidis2@gmail\.com/)
    assert.doesNotMatch(contact, /\$fetch\('\/api\/contact'/)
  })

  it('wraps Nuxt UI overlay components with the app provider', () => {
    const app = read('app/app.vue')
    const hero = read('app/components/HeroSection.vue')

    assert.match(hero, /UTooltip/)
    assert.match(app, /<UApp>/)
  })

  it('sets portfolio SEO metadata', () => {
    const page = read('app/pages/index.vue')

    assert.match(page, /useSeoMeta/)
    assert.match(page, /Alex Kalaitzidis/)
    assert.match(page, /Front-end/)
  })
})
```

- [x] **Step 2: Run tests — expect 3 failures**

```bash
npm test
```

Expected: tests 1, 3, and 4 fail. Tests 2, 5, 6 still pass. If more than 3 fail, check what changed.

---

## Task 2: Update projects data

**Files:**
- Modify: `app/data/projects.ts`

- [x] **Step 1: Replace the file content**

```ts
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
```

- [x] **Step 2: Run tests**

```bash
npm test
```

Expected: test "features the four real projects" now passes. Still 2 failing (hero copy, contact).

---

## Task 3: Redesign hero section

**Files:**
- Modify: `app/components/HeroSection.vue`
- Modify: `app/assets/css/main.css`

- [x] **Step 1: Replace HeroSection.vue**

```vue
<template>
  <section class="hero-section">
    <UBadge color="primary" variant="subtle" class="section-kicker">
      Front-end engineer
    </UBadge>

    <h1 class="hero-title">Alex Kalaitzidis</h1>

    <p class="hero-lede">
      I build product interfaces with Vue and Nuxt. Lately: a chess tournament platform running live in Greece, a government procurement scanner, and a finance tracker that actually makes sense.
    </p>

    <p class="hero-location">Greece &middot; Open to remote roles</p>

    <div class="hero-actions">
      <UButton to="#projects" size="xl" color="primary" icon="i-lucide-arrow-down">
        See the work
      </UButton>
      <UButton to="mailto:alexkalaitzidis2@gmail.com" size="xl" color="neutral" variant="outline" icon="i-lucide-mail">
        Get in touch
      </UButton>
    </div>

    <div class="social-row" aria-label="External profiles">
      <UTooltip text="GitHub profile">
        <UButton
          icon="i-lucide-github"
          to="https://github.com/alexkala1"
          target="_blank"
          color="neutral"
          variant="ghost"
          aria-label="GitHub profile"
        />
      </UTooltip>
      <UTooltip text="LinkedIn profile">
        <UButton
          icon="i-lucide-linkedin"
          to="https://www.linkedin.com/in/alex-kalaitzidis-a1386917b/"
          target="_blank"
          color="neutral"
          variant="ghost"
          aria-label="LinkedIn profile"
        />
      </UTooltip>
    </div>
  </section>
</template>
```

- [x] **Step 2: Update main.css — replace the hero-section block**

Find the existing `.hero-section` rule (around line 139) and replace the entire block plus the hero-proof rules. Here is the exact replacement — apply it by replacing from `.hero-section {` through the end of the `.hero-proof strong {` block:

**Remove these rules entirely:**
- `.hero-section { ... }` (the full block with min-height, align-items: end, grid-template-columns)
- `.hero-copy { ... }`
- `.hero-proof { ... }`
- `.hero-proof div { ... }`
- `.hero-proof div:last-child { ... }`
- `.hero-proof strong { ... }`

**Also remove `.proof-label` from the combined selector** that reads:
```css
.proof-label,
.eyebrow,
.project-outcome span {
```
Change it to:
```css
.eyebrow,
.project-outcome span {
```

**Insert these new rules** in place of the removed `.hero-section` block (after `.section-kicker`):

```css
.hero-section {
  display: grid;
  gap: 1.75rem;
  padding: 5rem 0 5rem;
  max-width: 52rem;
}

.hero-title {
  color: var(--text);
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-lede {
  max-width: 42rem;
  color: var(--muted);
  font-size: 1.2rem;
  line-height: 1.75;
}

.hero-location {
  color: var(--faint);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}
```

- [x] **Step 3: Fix mobile CSS**

Find the `@media (max-width: 860px)` block. It currently reads:

```css
.hero-section,
.cv-section {
  grid-template-columns: 1fr;
  min-height: auto;
}
```

Change it to (hero no longer needs the reset, cv-section still does):

```css
.cv-section {
  grid-template-columns: 1fr;
}
```

Also update the hero-title mobile rule from:

```css
.hero-title {
  max-width: 11ch;
  font-size: 3.25rem;
}
```

to:

```css
.hero-title {
  font-size: 3rem;
}
```

- [x] **Step 4: Run tests**

```bash
npm test
```

Expected: test "positions Alex as a front-end engineer with specific work" now passes. 1 failure remaining (contact).

---

## Task 4: Update CV section

**Files:**
- Modify: `app/components/CvSection.vue`

- [x] **Step 1: Replace CvSection.vue**

```vue
<template>
  <section id="cv" class="section-block cv-section">
    <div class="section-heading align-left">
      <UBadge color="neutral" variant="subtle" class="section-kicker">
        Experience
      </UBadge>
      <h2>Front-end foundation with full-stack context.</h2>
      <p>
        Technical strengths come from building complete application flows: UI state, API integration, data-backed screens, and deployment details.
      </p>
    </div>

    <div class="cv-grid">
      <div class="cv-panel">
        <h3>Technical strengths</h3>
        <div class="skill-list">
          <span>Vue</span>
          <span>Nuxt</span>
          <span>TypeScript</span>
          <span>Pinia</span>
          <span>Tailwind CSS</span>
          <span>Responsive UI</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Prisma</span>
          <span>Drizzle ORM</span>
          <span>Docker</span>
          <span>Python</span>
          <span>Git</span>
          <span>REST APIs</span>
          <span>Laravel</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div class="cv-panel">
        <h3>What I bring</h3>
        <ul class="proof-list">
          <li>Interfaces organised for real workflows, not just screenshots.</li>
          <li>Comfort moving between component work, APIs, and database-backed features.</li>
          <li>Project history across civic tech, operational tools, and personal products.</li>
        </ul>
        <UButton
          to="https://docs.google.com/document/d/1fjE3pQXjtzUNfUc2Udb2tSb9EhLWyLIJttVD8mP-xoo/edit?usp=sharing"
          target="_blank"
          icon="i-lucide-file-text"
          color="primary"
          size="lg"
        >
          View CV
        </UButton>
      </div>
    </div>
  </section>
</template>
```

- [x] **Step 2: Run tests — still 1 failure (contact)**

```bash
npm test
```

Expected: 1 failure on "keeps CV and contact as clear hiring actions" (contact section only). CV assertions pass.

---

## Task 5: Replace contact form with clean mailto card

**Files:**
- Modify: `app/components/ContactForm.vue`
- Modify: `app/assets/css/main.css`

- [x] **Step 1: Replace ContactForm.vue**

```vue
<template>
  <section id="contact" class="section-block contact-section">
    <div class="section-heading">
      <UBadge color="neutral" variant="subtle" class="section-kicker">
        Contact
      </UBadge>
      <h2>Let's talk.</h2>
      <p>
        Available for front-end roles, freelance projects, and interesting collaborations.
      </p>
    </div>

    <div class="contact-cta">
      <p class="contact-email">alexkalaitzidis2@gmail.com</p>
      <UButton :to="mailtoHref" icon="i-lucide-mail" size="xl" color="primary">
        Send email
      </UButton>
      <p class="contact-note">Opens your mail client. I reply within a day or two.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const mailtoHref = 'mailto:alexkalaitzidis2@gmail.com?subject=Portfolio%20contact'
</script>
```

- [x] **Step 2: Update main.css — replace contact styles**

Find the `.contact-section` rule block. Remove:
- `.contact-section { ... }`
- `.contact-form { ... }`
- `.contact-card { ... }` (inside the `.project-card, .contact-card` combined selector — just remove `, .contact-card` from that selector)

Add these rules (insert after the `.cv-panel` block):

```css
.contact-section {
  max-width: 44rem;
  margin: 0 auto;
  padding-bottom: 6rem;
}

.contact-cta {
  display: grid;
  justify-items: center;
  gap: 1.25rem;
  padding: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  text-align: center;
}

.contact-email {
  color: var(--text);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.contact-note {
  color: var(--faint);
  font-size: 0.88rem;
}
```

- [x] **Step 3: Run all tests — expect all 6 to pass**

```bash
npm test
```

Expected output:
```
▶ portfolio content and structure
  ✔ positions Alex as a front-end engineer with specific work
  ✔ presents projects as case studies with outcomes and stacks
  ✔ features the four real projects
  ✔ keeps CV and contact as clear hiring actions
  ✔ wraps Nuxt UI overlay components with the app provider
  ✔ sets portfolio SEO metadata
✔ portfolio content and structure
ℹ pass 6
ℹ fail 0
```

If any fail, read the assertion error — it will name the exact string that didn't match.

- [ ] **Step 4: Commit**

```bash
git add test/portfolio-content.test.mjs app/data/projects.ts app/components/HeroSection.vue app/components/CvSection.vue app/components/ContactForm.vue app/assets/css/main.css
git commit -m "feat: redesign portfolio content — new projects, hero, contact, skills"
```

---

## Task 6: Full verification

- [x] **Step 1: TypeScript check**

```bash
npm run typecheck
```

Expected: clean output, no errors.

- [x] **Step 2: Production build**

```bash
npm run build
```

Expected: `✨ Build complete!` with no errors.

- [x] **Step 3: Static generation**

```bash
npm run generate
```

Expected: `✨ You can now deploy .output/public to any static hosting!` — 5 routes prerendered.

- [x] **Step 4: Browser check** — start dev server and confirm visually

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Hero: "Alex Kalaitzidis" heading, no large gap at top
- Projects grid: Chess Venue, Aletheia, track-a-lot, Nuxt Visualizer (4 cards)
- CV: expanded skill list with Docker, Python, Prisma, etc.; "View CV" button
- Contact: clean card with email + single button, no form fields

- [ ] **Step 5: Commit verification state**

```bash
git add -p  # only if there are any fixes from the browser check
git commit -m "chore: verify portfolio redesign — all checks pass"
```

---

## Notes for implementer

- **Google Docs URL**: `https://docs.google.com/document/d/1fjE3pQXjtzUNfUc2Udb2tSb9EhLWyLIJttVD8mP-xoo/edit?usp=sharing` — already in the plan, no placeholder.
- **Aletheia**: No public URL — the project card shows no demo/code links. This is correct.
- **track-a-lot**: Private GitHub repo — the card shows the code link but marks `isPrivate: true`.
- **chess-venue.vercel.app**: Live demo link — make sure the `demo` field in projects.ts points there and the card's "Live" button renders.
