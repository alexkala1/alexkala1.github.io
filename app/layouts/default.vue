<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <header class="p-6 flex justify-between items-center max-w-7xl mx-auto">
      <div class="font-bold text-2xl tracking-tight">Alex Kalaitzidis</div>
      <ClientOnly>
        <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
      </ClientOnly>
    </header>
    <main class="max-w-7xl mx-auto p-6">
      <slot />
    </main>
    <footer class="p-8 mt-12 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
      &copy; {{ new Date().getFullYear() }} Alex Kalaitzidis. All rights reserved.
    </footer>
  </div>
</template>
<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
})
</script>
