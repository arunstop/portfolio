<script lang="ts" setup>
  import { IProject } from '../ProjectItem.vue'

  const projects: IProject[] = [
    { title: `Tuturku`, desc: `Blogging web app with markdown.`, link: '', stacks: ['logos:vue','logos:nuxt-icon'] },
    { title: `Scuffed Wordle`, desc: `Imitation of the infamous wordle game.`, link: '', stacks: ['logos:vue','logos:nuxt-icon'] },
    { title: `Scuffed Country Profiles`, desc: `Web app to show world's country profiles.`, link: '', stacks: ['logos:vue','logos:nuxt-icon'] },
    { title: `Scuffed Password Saver`, desc: `Offline first password manager.`, link: '', stacks: ['logos:vue','logos:nuxt-icon'] },
    { title: `Windows 11 Cosplay`, desc: `Windows 11 in web.`, link: '', stacks: ['logos:vue','logos:nuxt-icon'] },
  ]
</script>
<template>
  <div class="flex flex-col items-center gap-2 p-4 sm:gap-4 sm:p-8">
    <div class="text-2xl sm:text-3xl">
      Projects
    </div>
    <div class="m-2 grid gap-2 p-[inherit] sm:m-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <MainProjectItem v-for="(data, idx) in projects" :key="idx" v-bind="data" />
    </div>
  </div>
</template>
