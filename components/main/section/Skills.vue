<script lang="ts" setup>
  import { ISkill } from '../Skill.vue'

  const skills: ISkill[] = [
    {
      header: 'React',
      icon: 'logos:react',
      desc: 'Used in multiple projects, including my thesis',
    },
    {
      header: 'Vue.js',
      icon: 'logos:vue',
      desc: 'Using react something',
    },
    {
      header: 'Next.js',
      icon: 'logos:nextjs-icon',
      desc: 'Using react something',
    },
    {
      header: 'Nuxt',
      icon: 'logos:nuxt-icon',
      desc: 'Using react something',
    },
    {
      header: 'Tailwind CSS',
      icon: 'logos:tailwindcss-icon',
      desc: 'Using react something',
    },
    {
      header: 'Dart',
      icon: 'logos:dart',
      desc: 'Using react something',
    },
    {
      header: 'Flutter',
      icon: 'logos:flutter',
      desc: 'Using react something',
    },
    {
      header: 'Firebase',
      icon: 'logos:firebase',
      desc: 'Using react something',
    },
    {
      header: 'Typescript',
      icon: 'logos:typescript-icon',
      desc: 'Using react something',
    },
    {
      header: 'Javascript',
      icon: 'logos:javascript',
      desc: 'Using react something',
    },
    {
      header: 'Git ',
      icon: 'logos:git-icon',
      desc: 'Using react something',
    },
    {
      header: 'Electron.js',
      icon: 'logos:electron',
      desc: 'Using react something',
    },
    {
      header: 'Express.js',
      icon: 'logos:express',
      desc: 'Using react something',
    },
    {
      header: 'Java',
      icon: 'logos:java',
      desc: 'Using react something',
    },
    {
      header: 'Android',
      icon: 'logos:android-icon',
      desc: 'Using react something',
    },
    {
      header: 'MySQL',
      icon: 'logos:mysql-icon',
      desc: 'Using react something',
    },
    {
      header: 'PostgreSQL',
      icon: 'logos:postgresql',
      desc: 'Using react something',
    },
    {
      header: 'REST API',
      icon: 'carbon:api-1',
      desc: 'Using react something',
    },
    {
      header: 'Linux',
      icon: 'logos:linux-tux',
      desc: 'Using react something',
    },
    {
      header: 'HTML',
      icon: 'logos:html-5',
      desc: 'Using react something',
    },
    {
      header: 'CSS',
      icon: 'logos:css-3',
      desc: 'Using react something',
    },
    {
      header: 'PHP',
      icon: 'logos:php',
      desc: 'Using react something',
    },
    {
      header: 'Code Igniter',
      icon: 'logos:codeigniter-icon',
      desc: 'Using react something',
    },
  ]
</script>
<template>
  <div
    class="flex flex-col items-center justify-center gap-2 bg-gray-100 p-4 sm:gap-4 sm:p-8"
  >
    <div class="text-2xl sm:text-3xl">
      Skills
    </div>
    <div
      class="grid gap-2 max-sm:w-full max-sm:max-w-[80%] sm:min-w-[60%] sm:max-w-4xl sm:grid-cols-2 sm:gap-4 
      md:max-w-5xl md:grid-cols-3 lg:max-w-6xl lg:grid-cols-4 xl:max-w-7xl"
    >
      <MainSkill
        v-for="(skill, idx) in skills"
        :key="idx + Math.random()"
        v-bind="skill"
      >
        {{ idx }}
      </MainSkill>
    </div>
  </div>
</template>
