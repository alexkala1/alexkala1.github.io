<template>
  <section id="projects">
    <h3 class="text-4xl font-bold mb-12 text-center">Projects</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <UCard v-for="project in projects" :key="project.title" class="flex flex-col h-full hover:shadow-lg transition-shadow">
        <template #header>
          <div class="flex justify-between items-start gap-4">
            <h4 class="font-bold text-xl">{{ project.title }}</h4>
            <UBadge v-if="project.isPrivate" color="red" variant="soft">Private</UBadge>
          </div>
        </template>
        
        <p class="text-base text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-6">
          <UBadge v-for="tech in project.technologies" :key="tech" color="primary" variant="subtle">{{ tech }}</UBadge>
        </div>
        
        <template #footer v-if="!project.isPrivate">
          <div class="flex gap-3">
            <UButton v-if="project.code" :to="project.code" target="_blank" icon="i-heroicons-code-bracket" size="sm" color="gray" variant="solid">Code</UButton>
            <UButton v-if="project.link" :to="project.link" target="_blank" icon="i-heroicons-arrow-top-right-on-square" size="sm" color="primary" variant="solid">Visit</UButton>
          </div>
        </template>
      </UCard>
    </div>
  </section>
</template>
<script setup>
import { projects } from '~/data/projects'
</script>
