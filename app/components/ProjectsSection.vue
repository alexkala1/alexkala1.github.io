<template>
  <section id="projects" class="section-block">
    <div class="section-heading">
      <UBadge color="neutral" variant="subtle" class="section-kicker theme-badge theme-badge--muted">
        Selected work
      </UBadge>
      <h2>Projects with real product shape.</h2>
      <p>
        A focused set of applications showing front-end implementation, role-based flows, dashboards, and full-stack collaboration.
      </p>
    </div>

    <div class="projects-grid">
      <UCard v-for="project in featuredProjects" :key="project.title" class="project-card">
        <template #header>
          <div class="project-card-header">
            <div>
              <p class="eyebrow">{{ project.category }}</p>
              <h3>{{ project.title }}</h3>
            </div>
            <UBadge v-if="project.isPrivate" color="warning" variant="soft" class="theme-badge theme-badge--private">
              Private
            </UBadge>
            <UBadge v-else color="success" variant="soft" class="theme-badge theme-badge--public">
              Public
            </UBadge>
          </div>
        </template>

        <p class="project-summary">{{ project.summary }}</p>

        <div class="project-outcome">
          <span>Outcome</span>
          <p>{{ project.outcome }}</p>
        </div>

        <ul class="project-highlights">
          <li v-for="highlight in project.highlights" :key="highlight">
            <UIcon name="i-lucide-check" />
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <div class="stack-row">
          <UBadge v-for="tech in project.stack" :key="tech" color="primary" variant="subtle" class="theme-badge theme-badge--accent">
            {{ tech }}
          </UBadge>
        </div>

        <template #footer>
          <div class="project-actions">
            <UButton v-if="project.code" :to="project.code" target="_blank" icon="i-lucide-code" size="sm" color="neutral" variant="outline" class="theme-button theme-button--outline">
              Code
            </UButton>
            <UButton v-if="project.demo" :to="project.demo" target="_blank" icon="i-lucide-external-link" size="sm" color="primary" variant="solid" class="theme-button theme-button--primary">
              Live
            </UButton>
            <span v-if="project.isPrivate" class="private-note">Details available in conversation.</span>
          </div>
        </template>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects.filter((project) => project.featured)
</script>
