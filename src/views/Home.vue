<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-green-400">{{ t('home.greeting') }}</h1>
    <p class="text-xl mb-8 text-gray-300">{{ t('home.subgreeting') }}</p>
    <div class="max-w-3xl mx-auto">
      <p class="mb-8 text-lg">{{ t('home.intro') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          <h2 class="text-2xl font-bold mb-4 text-green-400">{{ t('home.blog') }}</h2>
          <p class="text-gray-300">{{ t('home.blogDesc') }}</p>
        </div>
        <div class="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          <h2 class="text-2xl font-bold mb-4 text-green-400">{{ t('home.projects') }}</h2>
          <p class="text-gray-300">{{ t('home.projectsDesc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>