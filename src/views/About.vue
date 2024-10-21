<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">{{ t('about.title') }}</h1>
    <div class="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4 text-green-400">{{ t('about.intro') }}</h2>
      <p class="mb-4 text-gray-300">{{ t('about.description') }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-green-400">{{ t('about.skills') }}</h2>
        <ul class="list-disc list-inside text-gray-300">
          <li>{{ t('about.skill1') }}</li>
          <li>{{ t('about.skill2') }}</li>
          <li>{{ t('about.skill3') }}</li>
          <li>{{ t('about.skill4') }}</li>
        </ul>
      </div>
      <div class="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-green-400">{{ t('about.interests') }}</h2>
        <ul class="list-disc list-inside text-gray-300">
          <li>{{ t('about.interest1') }}</li>
          <li>{{ t('about.interest2') }}</li>
          <li>{{ t('about.interest3') }}</li>
          <li>{{ t('about.interest4') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>