<template>
  <section id="contact" class="section-block contact-section">
    <div class="section-heading">
      <UBadge color="neutral" variant="subtle" class="section-kicker theme-badge theme-badge--muted">
        Contact
      </UBadge>
      <h2>Let's talk.</h2>
      <p>
        Available for front-end roles, freelance projects, and interesting collaborations.
      </p>
    </div>

    <div class="contact-cta">
      <p class="contact-email">alexkalaitzidis2@gmail.com</p>
      <UButton :to="mailtoHref" icon="i-lucide-mail" size="xl" color="primary" class="theme-button theme-button--primary">
        Send email
      </UButton>
      <p class="contact-note">Opens your mail client. I reply within a day or two.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const mailtoHref = 'mailto:alexkalaitzidis2@gmail.com?subject=Portfolio%20contact'
</script>
