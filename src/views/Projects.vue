<template>
    <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-kawaii-purple-500">{{ $t('projects.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="project in projects" :key="project.id" class="bg-white bg-opacity-50 p-6 rounded-3xl shadow-lg">
                <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                <p class="text-gray-600 mb-4">{{ project.details }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tag in project.tags.split(',')" :key="tag"
                        class="bg-kawaii-pink-200 text-kawaii-pink-800 px-2 py-1 rounded-full text-sm">
                        {{ tag.trim() }}
                    </span>
                </div>
                <a :href="project.link" target="_blank" rel="noopener noreferrer"
                    class="inline-block px-4 py-2 bg-kawaii-blue-500 text-white rounded-full hover:bg-kawaii-blue-600 transition-colors duration-300">
                    {{ $t('projects.viewProject') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = ref([
    {
        id: "zdSchool",
        title: t('projects.zdSchool.title'),
        description: t('projects.zdSchool.description'),
        details: t('projects.zdSchool.details'),
        image: "https://cdn.jsdelivr.net/gh/1834423612/new-home@master/source/img/website.png",
        tags: t('projects.zdSchool.tags', { returnObjects: true }),
        link: "https://zd.kjchmc.cn",
        date: "2022-07"
    },
    {
        id: "graduationVideo",
        title: t('projects.graduationVideo.title'),
        description: t('projects.graduationVideo.description'),
        details: t('projects.graduationVideo.details'),
        image: "https://cdn.jsdelivr.net/gh/1834423612/new-home@master/source/img/poster.png",
        tags: t('projects.graduationVideo.tags', { returnObjects: true }),
        link: "https://zd.kjchmc.cn/video.html",
        date: "2022-07-01"
    },
    {
        id: "zdSchoolMinecraft",
        title: t('projects.zdSchoolMinecraft.title'),
        description: t('projects.zdSchoolMinecraft.description'),
        details: t('projects.zdSchoolMinecraft.details'),
        image: "https://cdn.jsdelivr.net/gh/1834423612/new-home@master/source/img/mc.png",
        tags: t('projects.zdSchoolMinecraft.tags', { returnObjects: true }),
        link: "http://mc.kjchmc.cn:8123",
        date: "2022-06-25"
    },
    {
        id: "frcStrategyCharts",
        title: t('projects.frcStrategyCharts.title'),
        description: t('projects.frcStrategyCharts.description'),
        details: t('projects.frcStrategyCharts.details'),
        image: "/source/img/Robotics-Strategy-Charts.png",
        tags: t('projects.frcStrategyCharts.tags', { returnObjects: true }),
        link: "https://scoutify-test.vercel.app",
        date: "2023-12"
    },
    {
        id: "frcWebsite",
        title: t('projects.frcWebsite.title'),
        description: t('projects.frcWebsite.description'),
        details: t('projects.frcWebsite.details'),
        image: "/source/img/Team-695-Official-Website.png",
        tags: t('projects.frcWebsite.tags', { returnObjects: true }),
        link: "https://www.frc695.com/?from=www.kjchmc.cn/lab",
        date: "2024-07"
    }
])
</script>