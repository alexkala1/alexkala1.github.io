<template>
  <div class="portfolio-shell">
    <header class="site-header">
      <nav class="site-nav" aria-label="Main navigation">
        <NuxtLink to="/" class="brand-mark" aria-label="Alex Kalaitzidis home">
          <span>Alex</span>
          <strong>Kalaitzidis</strong>
        </NuxtLink>

        <div class="nav-links">
          <UButton
            type="button"
            variant="ghost"
            color="neutral"
            size="sm"
            class="theme-button theme-button--ghost nav-section-link"
            @click="scrollToSection('projects')"
          >
            Projects
          </UButton>
          <UButton
            type="button"
            variant="ghost"
            color="neutral"
            size="sm"
            class="theme-button theme-button--ghost nav-section-link"
            @click="scrollToSection('cv')"
          >
            Experience
          </UButton>
          <UButton
            type="button"
            variant="ghost"
            color="neutral"
            size="sm"
            class="theme-button theme-button--ghost nav-section-link"
            @click="scrollToSection('contact')"
          >
            Contact
          </UButton>
          <ClientOnly>
            <UButton
              color="neutral"
              variant="outline"
              class="theme-button theme-button--outline theme-icon-button theme-toggle-button"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="isDark = !isDark"
            >
              <UIcon
                v-show="!isDark"
                name="i-lucide-sun"
                class="theme-toggle-icon"
                aria-hidden="true"
              />
              <UIcon
                v-show="isDark"
                name="i-lucide-moon"
                class="theme-toggle-icon"
                aria-hidden="true"
              />
            </UButton>
            <template #fallback>
              <UButton
                color="neutral"
                variant="outline"
                class="theme-button theme-button--outline theme-icon-button theme-toggle-button"
                aria-label="Switch color mode"
              >
                <UIcon name="i-lucide-sun" class="theme-toggle-icon" aria-hidden="true" />
                <UIcon name="i-lucide-moon" class="theme-toggle-icon theme-toggle-icon--hidden" aria-hidden="true" />
              </UButton>
            </template>
          </ClientOnly>
        </div>
      </nav>
    </header>

    <main class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <p>Designed and built by Alex Kalaitzidis. &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { scrollToSection } = useSectionScroll()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
