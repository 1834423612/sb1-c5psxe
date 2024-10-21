import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import zh from './locales/zh.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./views/Home.vue') },
    { path: '/projects', name: 'projects', component: () => import('./views/Projects.vue') },
    { path: '/blog', name: 'blog', component: () => import('./views/Blog.vue') },
    { path: '/about', name: 'about', component: () => import('./views/About.vue') }
  ]
})

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')