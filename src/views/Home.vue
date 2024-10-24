<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 relative">
      <div class="kawaii-border mb-12"></div>
      <img src="https://placehold.co/60x60/12a5ff/FFFFFF?text=Hello" alt="Kawaii Avatar" class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full border-4 border-kawaii-pink-300 animate-bounce">
      <h2 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 animate-wiggle text-kawaii-purple-600 break-words">
        {{ $t('title') }}
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl text-kawaii-blue-600">{{ $t('subtitle') }}</p>
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none kawaii-stars"></div>
      <div class="kawaii-border mt-8"></div>
    </div>

    <SocialLinks class="mb-8" />
    
    <RollTags class="mb-8" @click="rollOnce" />

    <section class="bg-white bg-opacity-50 p-4 sm:p-6 rounded-3xl shadow-lg mb-8">
      <h2 class="text-xl sm:text-2xl font-bold mb-4 text-kawaii-green-700">{{ $t('about.title') }}</h2>
      <p class="text-sm sm:text-base text-kawaii-blue-800 relative z-10">
        {{ $t('about.content') }}
      </p>
      <p class="text-sm sm:text-base text-kawaii-blue-800 relative z-10 mt-4">
        <span class="font-bold">{{ $t('about.intro') }}</span> <span class="font-bold"><span class="text-xs align-top">@kjch</span>(<span class="text-blue-500 font-bold">K</span><span class="text-sm">uang</span> <span class="text-blue-500 font-bold">J</span><span class="text-sm">ia</span><span class="text-blue-500 font-bold">CH</span><span class="text-sm">eng</span>)</span>
        <br> {{ $t('about.description') }}
        <br> {{ $t('about.current') }}
      </p>
      <p class="text-sm sm:text-base text-kawaii-blue-800 relative z-10 mt-4">
        {{ $t('about.interest') }}
      </p>
      <p class="text-sm sm:text-base text-kawaii-blue-800 relative z-10 mt-4">
        {{ $t('about.hope') }}
      </p>
    </section>

    <section class="bg-white bg-opacity-50 p-4 sm:p-6 rounded-3xl shadow-lg mb-8">
      <h2 class="text-xl sm:text-2xl font-bold mb-4 text-kawaii-orange-500">{{ $t('skills.title') }}</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li v-for="skill in skills" :key="skill" class="flex items-center">
          <span class="w-3 h-3 sm:w-4 sm:h-4 mr-2 rounded-full bg-kawaii-pink-300"></span>
          <span class="text-sm sm:text-base">{{ skill }}</span>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-bold mb-4 text-kawaii-purple-500">{{ $t('projects.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProjectCard v-for="project in latestProjects" :key="project.id" :project="project" />
      </div>
      <div class="text-center mt-4">
        <router-link to="/projects" class="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-kawaii-pink-400 text-white text-sm sm:text-base rounded-full hover:bg-kawaii-pink-500 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          {{ $t('projects.viewAll') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialLinks from '../components/SocialLinks.vue'
import RollTags from '../components/RollTags.vue'
import ProjectCard from '../components/ProjectCard.vue'
import projectsData from '../data/projects.json'

const { t, locale } = useI18n()

const setTitle = () => {
  document.title = t('pageTitle')
}

onMounted(() => {
  setTitle()
})

watch(locale, () => {
  setTitle()
})

const skills = ref([
  'Vue.js / React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'UI/UX Design',
  'GraphQL',
  'Responsive Design',
  '游戏开发'
])

const latestProjects = computed(() => {
  return projectsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2)
})

const rollOnce = () => {
  // Implement the roll functionality here
  console.log('Rolling a tag about me')
}
</script>

<style scoped>
.kawaii-border {
  background-image: repeating-linear-gradient(45deg, #A2D2FF, #A2D2FF 10px, #BDE0FE 10px, #BDE0FE 20px);
  height: 10px;
  width: 100%;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(-10%);
        animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
}
.animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.kawaii-stars {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Cpath fill='%23A2D2FF' d='M50 0l12 38h38l-30 22 11 38-31-23-31 23 11-38-30-22h38z'/%3E%3C/svg%3E");
  opacity: 0.1;
}
</style>