<template>
  <div class="min-h-screen bg-kawaii-blue-100 text-kawaii-blue-900 font-kawaii">
    <div class="max-w-4xl mx-auto p-8">
      <nav class="mb-8">
        <ul class="flex justify-center space-x-6">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="text-xl hover:text-kawaii-pink-500 transition-colors duration-300">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <footer class="mt-12 text-center text-kawaii-blue-600">
      <p>&copy; 2024 Yuki-chan. All rights reserved. Made with 💖</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref(router.options.routes)
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

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

/* Decorative elements */
.kawaii-border {
  background-image: repeating-linear-gradient(45deg, #A2D2FF, #A2D2FF 10px, #BDE0FE 10px, #BDE0FE 20px);
  height: 10px;
  width: 100%;
}

.kawaii-stars {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Cpath fill='%23A2D2FF' d='M50 0l12 38h38l-30 22 11 38-31-23-31 23 11-38-30-22h38z'/%3E%3C/svg%3E");
  opacity: 0.1;
}
</style>