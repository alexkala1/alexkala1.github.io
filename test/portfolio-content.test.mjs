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
    assert.match(projectsData, /https:\/\/github\.com\/alexkala1\/chess-venue/)
    assert.doesNotMatch(projectsData, /https:\/\/github\.com\/alexkala1\/ctm/)
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

  it('keeps buttons and mobile gutters aligned with the custom theme', () => {
    const css = read('app/assets/css/main.css')
    const hero = read('app/components/HeroSection.vue')
    const contact = read('app/components/ContactForm.vue')
    const projects = read('app/components/ProjectsSection.vue')
    const cv = read('app/components/CvSection.vue')

    assert.match(css, /--accent: #244b34/)
    assert.match(css, /\.theme-button--primary/)
    assert.match(css, /\.theme-button--outline/)
    assert.match(css, /\.theme-badge--accent/)
    assert.match(css, /width: min\(100% - 2rem, 1120px\)/)
    assert.doesNotMatch(css, /width: min\(100% - 1rem, 1120px\)/)
    assert.match(hero, /theme-button--primary/)
    assert.match(hero, /theme-badge--accent/)
    assert.match(contact, /theme-button--primary/)
    assert.match(contact, /theme-badge--muted/)
    assert.match(cv, /theme-badge--muted/)
    assert.match(projects, /theme-button--outline/)
    assert.match(projects, /theme-badge--accent/)
    assert.match(projects, /theme-badge--public/)
  })
})
