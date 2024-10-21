<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 mt-auto">
    <div class="container mx-auto px-4 text-center">
      <div class="flex justify-center space-x-6 mb-6">
        <a v-for="(social, index) in ['wechat', 'qq', 'telegram', 'email', 'twitter', 'bilibili', 'github', 'steam', 'instagram']" :key="index" :href="`#${social}`" :title="t(`social.${social}`)" class="text-gray-400 hover:text-green-400 transition-colors duration-300">
          <i :class="`fab fa-${social} text-xl`"></i>
        </a>
      </div>
      <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} {{ t('siteName') }}. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>