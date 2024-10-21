<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

defineEmits(['toggle-language'])
</script>

<template>
  <header class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-4 shadow-md">
    <nav class="container mx-auto px-4 flex flex-wrap justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">{{ t('siteName') }}</RouterLink>
      <div class="flex items-center space-x-4 mt-4 sm:mt-0">
        <RouterLink v-for="(route, index) in ['home', 'projects', 'blog', 'about']" :key="index" :to="{ name: route }" class="text-gray-300 hover:text-green-400 transition-colors">
          {{ t(`nav.${route}`) }}
        </RouterLink>
        <button @click="$emit('toggle-language')" class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors duration-300 ease-in-out transform hover:scale-105">
          {{ t('language') }}
        </button>
      </div>
    </nav>
  </header>
</template>