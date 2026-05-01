<template>
  <section id="cv" class="section-block cv-section">
    <div class="section-heading align-left">
      <UBadge color="neutral" variant="subtle" class="section-kicker theme-badge theme-badge--muted">
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
          <li>Interfaces organized for real workflows, not just screenshots.</li>
          <li>Comfort moving between component work, APIs, and database-backed features.</li>
          <li>Project history across civic tech, operational tools, and personal products.</li>
        </ul>
        <UButton
          to="https://docs.google.com/document/d/1fjE3pQXjtzUNfUc2Udb2tSb9EhLWyLIJttVD8mP-xoo/edit?usp=sharing"
          target="_blank"
          icon="i-lucide-file-text"
          color="primary"
          size="lg"
          class="theme-button theme-button--primary"
        >
          View CV
        </UButton>
      </div>
    </div>
  </section>
</template>
