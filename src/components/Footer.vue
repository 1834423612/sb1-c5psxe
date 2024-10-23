<template>
  <footer class="bg-gray-800 py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-4 mb-6">
        <a v-for="link in socialLinks" :key="link.icon" :href="link.url" target="_blank" rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
          <Icon :icon="link.icon" class="w-6 h-6" />
        </a>
      </div>
      <div class="text-center text-gray-400 text-sm">
        <p>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <p class="mt-2">{{ t('footer.icp') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const socialLinks = [
  { icon: 'ri:wechat-fill', url: '#' },
  { icon: 'ri:notification-4-fill', url: '#' },
  { icon: 'ri:send-plane-fill', url: '#' },
  { icon: 'ri:mail-fill', url: '#' },
  { icon: 'ri:twitter-fill', url: '#' },
  { icon: 'ri:youtube-fill', url: '#' },
  { icon: 'ri:time-fill', url: '#' },
  { icon: 'ri:github-fill', url: '#' },
  { icon: 'ri:steam-fill', url: '#' },
  { icon: 'ri:instagram-fill', url: '#' },
  { icon: 'ri:threads-fill', url: '#' },
]
</script>