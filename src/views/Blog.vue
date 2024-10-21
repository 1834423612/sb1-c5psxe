<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const blogPosts = ref([
  { id: 1, title: 'My Journey in FRC Robotics', date: '2024-02-15', excerpt: t('blog.post1Excerpt') },
  { id: 2, title: 'Reflections on the ZDSchool Project', date: '2023-12-01', excerpt: t('blog.post2Excerpt') },
  { id: 3, title: 'The Future of Education Technology', date: '2023-10-20', excerpt: t('blog.post3Excerpt') },
])
</script>

<template>
  <div>
    <h1 class="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">{{ t('blog.title') }}</h1>
    <div class="space-y-8">
      <article v-for="post in blogPosts" :key="post.id" class="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
        <h2 class="text-2xl font-bold mb-2 text-green-400">{{ post.title }}</h2>
        <p class="text-gray-400 mb-4">{{ new Date(post.date).toLocaleDateString() }}</p>
        <p class="mb-4 text-gray-300">{{ post.excerpt }}</p>
        <a href="#" class="text-green-400 hover:text-green-300 transition-colors inline-block">
          {{ t('blog.readMore') }}
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </article>
    </div>
  </div>
</template>