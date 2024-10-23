<template>
    <div class="flex justify-center space-x-4">
        <div v-for="link in socialLinks" :key="link.name" class="group relative">
            <a v-if="link.url !== '#'" :href="link.url" target="_blank" rel="noopener noreferrer" class="block">
                <div
                    class="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-transform transform group-hover:scale-110">
                    <Icon :icon="link.icon" class="w-6 h-6" :style="{ color: link.color }" />
                </div>
                <div class="w-0 h-1 mt-1 bg-transparent group-hover:bg-current transition-all duration-300" :style="{ backgroundColor: link.color }"></div>
            </a>
            <div v-else @mouseenter="showTooltip(link.name)" @mouseleave="hideTooltip" class="cursor-pointer">
                <div
                    class="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-transform transform group-hover:scale-110">
                    <Icon :icon="link.icon" class="w-6 h-6" :style="{ color: link.color }" />
                </div>
                <div class="w-0 h-1 mt-1 bg-transparent group-hover:bg-current transition-all duration-300" :style="{ backgroundColor: link.color }"></div>
            </div>
            <div v-if="activeTooltip === link.name"
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                {{ link.tooltip }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socialLinks = ref([
    { name: 'WeChat', url: '#', icon: 'ri:wechat-fill', color: '#5bc215', tooltip: t('socialLinks.wechatTooltip') },
    { name: 'QQ', url: 'http://wpa.qq.com/msgrd?v=3&uin=1834423612&site=qq&menu=yes', icon: 'ri:qq-fill', color: '#66ccff', tooltip: t('socialLinks.qqTooltip') },
    { name: 'Telegram', url: 'https://t.me/kjch666', icon: 'ri:telegram-fill', color: '#0088cc' },
    { name: 'Email', url: 'mailto:KevinKuang2007@gmail.com', icon: 'ri:mail-fill', color: '#F58930' },
    { name: 'Twitter', url: 'https://twitter.com/kevinkuang2007', icon: 'ri:twitter-fill', color: '#28a9e0' },
    { name: 'Bilibili', url: 'https://space.bilibili.com/267388489', icon: 'ri:bilibili-fill', color: '#f09199' },
    { name: '网易云音乐', url: 'https://music.163.com/#/user/home?id=586229528', icon: 'ri:netease-cloud-music-fill', color: '#f12d35' },
    { name: 'GitHub', url: 'https://github.com/1834423612', icon: 'ri:github-fill', color: '#555' },
    { name: 'Steam', url: 'https://steamcommunity.com/profiles/76561199375887525/', icon: 'ri:steam-fill', color: '#b600ff' },
    { name: 'Instagram', url: 'https://www.instagram.com/kjch0720/', icon: 'ri:instagram-fill', color: '#f700bf' },
    { name: 'Threads', url: 'https://www.threads.net/@kjch0720', icon: 'ri:threads-fill', color: '#000000' }
])

const activeTooltip = ref('')

const showTooltip = (name: string) => {
    activeTooltip.value = name
}

const hideTooltip = () => {
    activeTooltip.value = ''
}
</script>

<style scoped>
.group:hover .w-0.h-1 {
    animation: extend-line 0.3s forwards;
}

@keyframes extend-line {
    from {
        width: 0;
        margin-left: 50%;
    }
    to {
        width: 100%;
        margin-left: 0;
    }
}
</style>