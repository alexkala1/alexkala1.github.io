<template>
  <section class="hero-section">
    <UBadge color="primary" variant="subtle" class="section-kicker theme-badge theme-badge--accent">
      Front-end engineer
    </UBadge>

    <h1 class="hero-title">Alex Kalaitzidis</h1>

    <p class="hero-lede">
      I build product interfaces with Vue and Nuxt. Lately: a chess tournament
      platform running live in Greece, a government procurement scanner, and a
      finance tracker that actually makes sense.
    </p>

    <p class="hero-location" aria-label="Based in Thessaloniki, Greece">
      <span class="location-icon-wrap" aria-hidden="true">
        <UIcon name="i-lucide-map-pin" class="hero-location-icon" />
      </span>
      <span>Thessaloniki, Greece</span>
    </p>

    <div class="hero-actions">
      <UButton
        to="#projects"
        size="xl"
        color="primary"
        icon="i-lucide-arrow-down"
        class="theme-button theme-button--primary"
      >
        See the work
      </UButton>
      <UButton
        to="mailto:alexkalaitzidis2@gmail.com"
        size="xl"
        color="neutral"
        variant="outline"
        icon="i-lucide-mail"
        class="theme-button theme-button--outline"
      >
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
          class="theme-button theme-button--ghost theme-icon-button"
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
          class="theme-button theme-button--ghost theme-icon-button"
          aria-label="LinkedIn profile"
        />
      </UTooltip>
    </div>
  </section>
</template>
