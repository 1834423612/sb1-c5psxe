<template>
    <div
        class="bg-white bg-opacity-70 p-4 sm:p-6 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img :src="project.image" :alt="project.title" class="w-full h-32 sm:h-48 object-cover rounded-2xl mb-4">
        <h3 class="text-lg sm:text-xl font-bold mb-2 text-kawaii-purple-600">{{ project.title }}</h3>
        <p class="text-sm sm:text-base text-kawaii-blue-700 mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag"
                class="px-2 py-1 bg-kawaii-pink-100 text-kawaii-pink-600 rounded-full text-xs sm:text-sm font-medium inline-flex items-center">
                <Icon icon="mdi:pound" class="mr-1" />
                {{ tag }}
            </span>
        </div>
        <a :href="project.link" target="_blank" rel="noopener noreferrer"
            class="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-kawaii-blue-500 text-white rounded-full hover:bg-kawaii-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            View Project
        </a>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
    project: {
        id: string
        title: string
        description: string
        image: string
        tags: string[]
        link: string
    }
}>()
</script>