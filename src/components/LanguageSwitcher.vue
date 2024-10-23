<template>
    <div class="relative">
        <button @click="toggleDropdown" class="flex items-center space-x-2 text-gray-800 dark:text-white">
            <Icon icon="mdi:translate" class="w-5 h-5" />
            <span>{{ currentLanguage.name }}</span>
            <Icon icon="mdi:chevron-down" class="w-4 h-4" />
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-xl z-20">
            <a v-for="lang in availableLanguages" :key="lang.code" href="#" @click.prevent="changeLanguage(lang.code)"
                class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" :class="{
                    'text-blue-600 dark:text-blue-400 font-bold': lang.code === currentLanguage.code,
                    'text-gray-800 dark:text-gray-200': lang.code !== currentLanguage.code
                }">
                {{ lang.name }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { locale, availableLocales } = useI18n()
const isOpen = ref(false)

const availableLanguages = [
    { code: 'zh', name: '中文' },
    { code: 'en', name: 'English' },
]

const currentLanguage = computed(() => {
    return availableLanguages.find(lang => lang.code === locale.value) || availableLanguages[0]
})

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const changeLanguage = (code: string) => {
    locale.value = code
    isOpen.value = false
}
</script>