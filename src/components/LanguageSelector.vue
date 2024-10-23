<template>
    <div class="relative">
        <button @click="toggleDropdown" class="flex items-center space-x-2 bg-white bg-opacity-70 px-3 py-2 rounded-md">
            <Icon
                :icon="currentLanguage === 'en' ? 'emojione-v1:flag-for-united-states' : 'emojione-v1:flag-for-china'" />
            <span>{{ $t(`language.${currentLanguage}`) }}</span>
            <Icon icon="mdi:chevron-down" />
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul>
                <li v-for="lang in languages" :key="lang.code">
                    <button @click="changeLanguage(lang.code)"
                        class="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        :class="{ 'bg-blue-100': currentLanguage === lang.code }">
                        {{ $t(`language.${lang.code}`) }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { setI18nLanguage, getBrowserLocale, defaultLocale } from '../i18n'

const { locale } = useI18n()

const isOpen = ref(false)
const currentLanguage = ref(locale.value)

const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
]

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const changeLanguage = (lang: string) => {
    currentLanguage.value = lang
    setI18nLanguage({ global: { locale } }, lang)
    isOpen.value = false
}

onMounted(() => {
    const savedLocale = localStorage.getItem('user-locale')
    if (!savedLocale) {
        const browserLocale = getBrowserLocale()
        if (browserLocale && languages.some(lang => lang.code === browserLocale)) {
            changeLanguage(browserLocale)
        } else {
            changeLanguage(defaultLocale)
        }
    } else {
        changeLanguage(savedLocale)
    }
})
</script>