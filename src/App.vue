<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
    <Header @toggle-language="toggleLanguage" />
    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
@import './assets/tailwind.css';

body {
  font-family: 'Inter', sans-serif;
}
</style>