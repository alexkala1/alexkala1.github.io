<template>
  <section id="contact" class="max-w-2xl mx-auto">
    <h3 class="text-4xl font-bold mb-10 text-center">Get In Touch</h3>
    <UCard class="shadow-xl">
      <UForm :state="state" @submit="onSubmit" class="space-y-6">
        <UFormGroup label="Name" name="name" required>
          <UInput v-model="state.name" placeholder="John Doe" size="lg" />
        </UFormGroup>
        
        <UFormGroup label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="john@example.com" size="lg" />
        </UFormGroup>
        
        <UFormGroup label="Message" name="message" required>
          <UTextarea v-model="state.message" placeholder="How can I help you?" :rows="6" size="lg" />
        </UFormGroup>
        
        <UButton type="submit" color="primary" block size="xl" :loading="loading" class="mt-4">
          Send Message
        </UButton>
        
        <UAlert v-if="success" color="green" variant="soft" icon="i-heroicons-check-circle" title="Message sent successfully!" class="mt-6" />
        <UAlert v-if="error" color="red" variant="soft" icon="i-heroicons-x-circle" title="Failed to send message. Please try again later." class="mt-6" />
      </UForm>
    </UCard>
  </section>
</template>
<script setup>
const state = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref(false)

async function onSubmit() {
  loading.value = true
  success.value = false
  error.value = false
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: state
    })
    success.value = true
    state.name = ''
    state.email = ''
    state.message = ''
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
