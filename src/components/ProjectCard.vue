<template>
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <img :src="image" :alt="title" class="w-full h-48 object-cover" />
        <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
            <p class="text-gray-400 mb-4">{{ description }}</p>
            <a :href="link"
                class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                {{ t('common.learnMore') }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
    title: string
    description: string
    image: string
    link: string
}>()
</script>