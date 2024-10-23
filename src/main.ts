import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import { i18n } from './i18n'
// import Swal from 'sweetalert2'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.component('icon', Icon)
// app.config.globalProperties.$swal = Swal
app.mount('#app')
