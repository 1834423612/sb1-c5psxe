<template>
  <div class="min-h-screen bg-kawaii-blue-100 text-kawaii-blue-900 font-kawaii flex flex-col justify-between">
    <header class="py-4 mb-6 flex justify-center items-center flex-grow">
      <nav class="flex justify-between items-center max-w-4xl mx-auto px-4 w-full">
        <img src="https://placehold.co/60x60/12a5ff/FFFFFF?text=Hello" alt="Kawaii Avatar" class="w-12 h-12 rounded-full border-4 border-kawaii-pink-300" />
        <div class="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl px-6 py-3 border-solid border-2 border-blue-400">
          <ul class="flex justify-center space-x-6">
            <li v-for="route in routes" :key="route.path">
              <router-link :to="route.path" class="text-lg font-medium hover:text-kawaii-pink-500 transition-colors duration-300" :class="{ 'text-kawaii-purple-500': route.path === currentRoute }">
                {{ route.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <LanguageSelector />
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-4 flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="mt-12 text-center text-kawaii-blue-600 pb-8">
      <p>{{ $t('footer.copyright') }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LanguageSelector from './components/LanguageSelector.vue'

const router = useRouter()
const route = useRoute()
const routes = ref(router.options.routes)
const currentRoute = computed(() => route.path)
</script>

<style>
@font-face {
  font-family: 'Kawaii';
  src: url('/fonts/kawaii-font.woff2') format('woff2');
}

.font-kawaii {
  font-family: 'Kawaii', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>