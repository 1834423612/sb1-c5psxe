<template>
    <div class="flex flex-col items-center my-12">
        <h2 class="text-3xl font-bold mb-6 text-center">{{ t('home.rollTag') }}</h2>
        <div class="relative w-64 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div ref="tagContainer" class="absolute w-full transition-all duration-500 ease-in-out"
                :style="{ transform: `translateY(${-currentIndex * 64}px)` }">
                <div v-for="(tag, index) in tags" :key="index" class="h-16 flex items-center justify-center">
                    <div class="text-2xl font-bold text-gray-800 dark:text-white">
                        <span class="text-blue-500 dark:text-blue-400">#</span>{{ tag }}
                    </div>
                </div>
            </div>
        </div>
        <button @click="rollTag"
            class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
            {{ t('home.rollButton') }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tags = [
    'Web Developer',
    'Vue Enthusiast',
    'TypeScript Lover',
    'Open Source Contributor',
    'UI/UX Hobbyist',
    'Continuous Learner'
]

const currentIndex = ref(0)
let rolling = false

const rollTag = async () => {
    if (rolling) return
    rolling = true

    const rolls = 20 + Math.floor(Math.random() * 10)
    const rollDuration = 50

    for (let i = 0; i < rolls; i++) {
        await new Promise(resolve => setTimeout(resolve, rollDuration))
        currentIndex.value = (currentIndex.value + 1) % tags.length
    }

    rolling = false
}
</script>