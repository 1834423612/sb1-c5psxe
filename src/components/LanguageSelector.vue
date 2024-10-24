<template>
    <div class="relative" ref="dropdownRef">
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
                        class="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                        :class="{ 'bg-blue-100': currentLanguage === lang.code }">
                        <Icon :icon="lang.icon" />
                        <span>{{ $t(`language.${lang.code}`) }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { setI18nLanguage, getBrowserLocale, defaultLocale } from '../i18n'

const { locale } = useI18n()

const isOpen = ref(false)
const currentLanguage = ref(locale.value)
const dropdownRef = ref<HTMLElement | null>(null)

const languages = [
    { code: 'en', name: 'English', icon: 'emojione-v1:flag-for-united-states' },
    { code: 'zh', name: '中文', icon: 'emojione-v1:flag-for-china' },
]

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const changeLanguage = (lang: string) => {
    currentLanguage.value = lang
    setI18nLanguage({ global: { locale } }, lang)
    isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
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

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>