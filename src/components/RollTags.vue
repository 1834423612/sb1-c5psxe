<template>
    <div class="bg-white bg-opacity-50 p-6 rounded-3xl shadow-lg">
        <h3 class="text-xl font-bold mb-4 text-kawaii-purple-600">Click me for a surprise! ✨</h3>
        <button @click="rollTags"
            class="px-6 py-3 bg-kawaii-pink-400 text-white rounded-full hover:bg-kawaii-pink-500 transition-colors duration-300 mb-6 shadow-md hover:shadow-lg transform hover:scale-105">
            Roll Tags
        </button>
        <div class="relative h-12 overflow-hidden bg-kawaii-blue-100 rounded-full shadow-inner">
            <transition-group name="roll" tag="div" class="absolute inset-0">
                <div v-for="(tag, index) in visibleTags" :key="tag + index"
                    class="absolute inset-0 flex items-center justify-center">
                    <span
                        class="bg-white px-4 py-2 rounded-full inline-flex items-center text-lg font-semibold shadow-md"
                        :style="{ color: getRandomColor() }">
                        <Icon icon="mdi:pound" class="mr-2" />
                        {{ tag }}
                    </span>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const allTags = [
    // 定义
    '内向却又有些外向', '喜欢狗狗', '善良', '生于河北', '来自北京',
    // 生活
    '熬夜冠军', '躺平爱好者', '一般通过路人', '话痨',
    // 动画 & 游戏
    '❤Minecraft', 'Steam白嫖爱好者',
    'Terraria(泰拉瑞亚)', '猫和老鼠',
    // 技术
    'PHP 小白', '熟练掌握html', 'JavaScript 入门',
    'Adobe 全家桶用户', 'VSCode 用户', 'Notepad 用户', 'Windows 用户',
    '开源轮子用户', '在该用 Linux 的时候使用 Linux',
    // 职业
    '日常摸鱼学生', '喜欢编程', '愿望是上学期间睡个好觉',
    // 文化
    '泛二次元（？）', '在亚文化海洋一边游泳一边喝水', '世界系作品爱好者', '次文化的主流群众',
    '钦点见习膜法师', '多元思维推崇者', '爱与和平', '爱好和平', '反向思维',
    '什么类型都可以吃一点',
    // 设备&工具
    '麦当劳与KFC通吃', 'LENOVO Legion用户', 'Linux服务器用户',
    '米粉', '微软大法好', '垃圾佬', '二手爱好者', '洋垃圾爱好者', '魔改硬件爱好者',
    '装机猿', '瞎折腾',
    // 短句
    '你记住我了吗，当你试着多roll几个标签的时候，我就赢了☜(ﾟヮﾟ☜)',
    '刚刚走神了，这个不算，再roll一个',
    '你很幸运，roll到了这个毫无意义的标签，请再roll一个',
    '感谢来访这个无名的小站点，祝你有个美好的一天~'
]

const visibleTags = ref<string[]>([])
const isRolling = ref(false)

const getRandomColor = () => {
    const colors = ['#FF9A9E', '#FAD0C4', '#FFECD2', '#FCB69F', '#A2D2FF', '#B5EAD7', '#C7CEEA']
    return colors[Math.floor(Math.random() * colors.length)]
}

const rollTags = () => {
    if (isRolling.value) return
    isRolling.value = true
    let counter = 0
    const maxRolls = 30 + Math.floor(Math.random() * 20)
    const interval = setInterval(() => {
        visibleTags.value = [allTags[Math.floor(Math.random() * allTags.length)]]
        counter++
        if (counter >= maxRolls) {
            clearInterval(interval)
            isRolling.value = false
        }
    }, 100)
}
</script>

<style scoped>
.roll-enter-active,
.roll-leave-active {
    transition: all 0.1s;
}

.roll-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.roll-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>