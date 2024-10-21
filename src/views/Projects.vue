<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = ref([
  { id: 1, name: 'ZDSchool Project', year: '2022', type: 'Website', image: '/images/zdschool.jpg' },
  { id: 2, name: '2022暑假三年中考试卷分析', year: '2022', type: 'Video', image: '/images/analysis.jpg' },
  { id: 3, name: 'ZDSchool on Minecraft', year: '2022', type: 'Minecraft', image: '/images/minecraft.jpg' },
  { id: 4, name: 'FRC Robotics Strategy Charts', year: '2023', type: 'FRC', image: '/images/frc-charts.jpg' },
  { id: 5, name: 'FRC Team 695 Bison Robotics', year: '2024', type: 'Website', image: '/images/frc-website.jpg' },
])
</script>

<template>
  <div>
    <h1 class="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">{{ t('projects.title') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
        <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2 text-green-400">{{ project.name }}</h2>
          <p class="text-gray-400">{{ project.year }} - {{ project.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>