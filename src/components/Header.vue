<template>
  <header class="dark:bg-gray-800 shadow-md py-4">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Left: Website Icon -->
        <div class="w-10 h-10">
          <img src="https://placehold.co/40x40" alt="Website Icon" class="rounded-full" />
        </div>

        <!-- Center: Menu with frosted glass effect -->
        <div class="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-full shadow-lg px-6 py-2">
          <div class="flex space-x-6">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              :class="{ 'text-purple-600 dark:text-purple-400': link.name === 'Home' }"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Right: Language Switcher -->
        <div class="bg-blue-100 dark:bg-blue-900 rounded-full px-3 py-1">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Short', path: '/short' },
  { name: 'Project', path: '/project' },
  { name: 'Friend', path: '/friend' },
  { name: 'About', path: '/about' },
  { name: 'Admin', path: '/admin' },
]
</script>