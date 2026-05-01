# Portfolio Polish Plan

## Scope

Make the Nuxt 4 portfolio stronger for front-end job applications without changing the deployment model or adding a heavy dependency stack.

## File Map

- `test/portfolio-content.test.mjs`: Node built-in tests for key portfolio content and structure.
- `package.json`: add a lightweight `test` script.
- `app/data/projects.ts`: richer project metadata for case-study cards.
- `app/pages/index.vue`: page composition and spacing.
- `app/components/HeroSection.vue`: stronger positioning, proof points, and primary actions.
- `app/components/ProjectsSection.vue`: project cards with outcomes, status, and links.
- `app/components/CvSection.vue`: compact experience/skills proof section with CV action.
- `app/components/ContactForm.vue`: cleaner static-safe contact section and form copy.
- `app/layouts/default.vue`: navigation and shell polish.
- `app/assets/css/main.css`: cohesive typography, palette, responsive utilities, and Nuxt UI surface overrides.

## Tasks

1. Add failing content tests that assert the new portfolio has a clear front-end positioning statement, featured projects with outcomes, a skills/CV section, and contact route structure.
2. Update portfolio data to support case-study style cards: status, summary, highlights, stack, code/demo/private states.
3. Rework hero, projects, CV, and contact components around hiring flow: who Alex is, what he builds, proof, then contact.
4. Replace split visual styles with one restrained dark/light system using Nuxt UI components and custom CSS only where useful.
5. Keep contact static-safe for GitHub Pages by using a mailto draft instead of a required server endpoint.
6. Verify with `npm test`, `npm run typecheck`, `npm run build`, `npm run generate`, and a browser screenshot pass.
