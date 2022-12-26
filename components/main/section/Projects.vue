<script lang="ts" setup>
  import { IProject } from '../ProjectItem.vue'

  const projects: IProject[] = [
    {
      title: `Tuturku`,
      desc: `Blogging web app with markdown.`,
      link: {
        article:'article/tuturku',
        github : 'https://github.com/arunstop/scuffed-blogger',
        preview: 'https://tuturku.vercel.app'
      },
      stacks: ['logos:nextjs-icon', 'logos:react', 'logos:firebase', 'logos:typescript-icon', 'logos:tailwindcss-icon'],
    },
    {
      title: `Scuffed Wordle`,
      desc: `Imitation of the infamous wordle game.`,
      link: {
        article:'article/scuffed-wordle',
        github : 'https://github.com/arunstop/scuffed_wordle',
        preview: 'https://scuffed-wordle.vercel.app'
      },
      stacks: ['logos:dart', 'logos:flutter', 'logos:express'],
    },
    {
      title: `Scuffed Country Profiles`,
      desc: `Web app to show world's country profiles.`,
      link: {
        article:'article/scuffed-country-profiles',
        github : 'https://github.com/arunstop/scuffed-country-profiles',
        preview: 'https://countryprofiles.vercel.app'
      },
      stacks: ['logos:nextjs-icon', 'logos:react', 'logos:typescript-icon', 'logos:tailwindcss-icon'],
    },
    {
      title: `Scuffed Password Saver`,
      desc: `Offline first password manager.`,
      link: {
        article:'article/scuffed-password-saver',
        github : 'https://github.com/arunstop/scuffed-password-saver',
        preview: 'https://github.com/arunstop/scuffed-password-saver'
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:electron', 'logos:vuetifyjs', 'logos:javascript'],
    },
    {
      title: `Windows 11 Cosplay`,
      desc: `Windows 11 in web.`,
      link: {
        article:'article/windows-11-cosplay',
        github : 'https://github.com/arunstop/windows-11-cosplay-vue',
        preview: 'https://windows11-cosplay.netlify.app/'
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:vuetifyjs','logos:javascript'],
    },
     {
      title: `Game Portal`,
      desc: `Up to date web app about video games`,
      link: {
        article:'article/game-portal',
        github : 'https://github.com/arunstop/game-portal',
        preview: 'https://game-portal.netlify.app/'
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:vuetifyjs','logos:javascript'],
    },
    {
      title: `MHD`,
      desc: `Mobile app to detect early stage of mental health problem`,
      link: {
        article:'article/mhd',
        github : 'https://github.com/arunstop/scuffed_wordle',
        preview: 'https://play.google.com/store/apps/details?id=id.ac.stiki.doleno.mhd'
      },
      stacks: ['logos:java', 'logos:android-icon', 'logos:firebase'],
    },
    {
      title: `Restaurant Locator`,
      desc: `App to detect nearby restaurants`,
      link: {
        article:'article/restaurant-locator',
        github : 'https://github.com/arunstop/scuffed_wordle',
        preview: 'https://play.google.com/store/apps/details?id=id.ac.stiki.doleno.restaurant_locator'
      },
      stacks: ['logos:java', 'logos:android-icon', 'logos:firebase'],
    },
  ]
</script>
<template>
  <div class="flex flex-col items-center gap-2 p-4 sm:gap-4 sm:p-8">
    <div class="text-2xl sm:text-3xl">
      Projects
    </div>
    <div
      class="grid gap-2 max-sm:w-full max-sm:max-w-[80%] sm:min-w-[60%] sm:max-w-4xl sm:grid-cols-2 sm:gap-4 
      md:max-w-5xl md:grid-cols-3 lg:max-w-6xl lg:grid-cols-4 xl:max-w-7xl"
    >
      <MainProjectItem v-for="(data, idx) in projects" :key="idx" v-bind="data" />
    </div>
  </div>
</template>
