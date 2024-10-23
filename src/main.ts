import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue';
import './style.css'

import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.component('icon', Icon)
app.use(i18n)
app.mount('#app')