<template>
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
            <p class="text-gray-400 mb-4">{{ excerpt }}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ formatDate(date) }}</span>
                <a :href="link"
                    class="inline-block px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200">
                    {{ t('common.readMore') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
    title: string
    excerpt: string
    date: string
    link: string
}>()

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>