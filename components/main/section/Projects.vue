<script lang="ts" setup>
  import { IProject } from '../ProjectItem.vue'

  const projects: IProject[] = [
    {
      title: `Tuturku`,
      desc: `Blogging web app with markdown.`,
      thumbnail: 'https://raw.githubusercontent.com/arunstop/scuffed-blogger/main/public/screenshots/3.png',
      link: {
        article: 'article/tuturku',
        github: 'https://github.com/arunstop/scuffed-blogger',
        preview: 'https://tuturku.vercel.app',
      },
      stacks: ['logos:nextjs-icon', 'logos:react', 'logos:firebase', 'logos:typescript-icon', 'logos:tailwindcss-icon'],
    },
    {
      title: `Scuffed Wordle`,
      desc: `Imitation of the infamous wordle game.`,
      thumbnail: 'https://raw.githubusercontent.com/arunstop/scuffed_wordle/v2/assets/screenshots/3.png',
      link: {
        article: 'article/scuffed-wordle',
        github: 'https://github.com/arunstop/scuffed_wordle',
        preview: 'https://scuffed-wordle.vercel.app',
      },
      stacks: ['logos:dart', 'logos:flutter', 'logos:express'],
    },
    {
      title: `Scuffed Country Profiles`,
      desc: `Web app to show world's country profiles.`,
      thumbnail: 'https://raw.githubusercontent.com/arunstop/scuffed-country-profiles/master/screenshots/3.png',
      link: {
        article: 'article/scuffed-country-profiles',
        github: 'https://github.com/arunstop/scuffed-country-profiles',
        preview: 'https://countryprofiles.vercel.app',
      },
      stacks: ['logos:nextjs-icon', 'logos:react', 'logos:typescript-icon', 'logos:tailwindcss-icon'],
    },
    {
      title: `Scuffed Password Saver`,
      desc: `Offline first password manager.`,
      thumbnail: 'https://raw.githubusercontent.com/arunstop/scuffed-password-saver/master/screenshots/1.png',
      link: {
        article: 'article/scuffed-password-saver',
        github: 'https://github.com/arunstop/scuffed-password-saver',
        preview: 'https://github.com/arunstop/scuffed-password-saver',
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:electron', 'logos:vuetifyjs', 'logos:javascript'],
    },
    {
      title: `Windows 11 Cosplay`,
      desc: `Windows 11 in web.`,
      thumbnail: 'https://raw.githubusercontent.com/arunstop/windows-11-cosplay-vue/master/static/screenshots/3.png',
      link: {
        article: 'article/windows-11-cosplay',
        github: 'https://github.com/arunstop/windows-11-cosplay-vue',
        preview: 'https://windows11-cosplay.netlify.app/',
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:vuetifyjs', 'logos:javascript'],
    },
    {
      title: `Game Portal`,
      desc: `Up to date web app about video games`,
      thumbnail: '',
      link: {
        article: 'article/game-portal',
        github: 'https://github.com/arunstop/game-portal',
        preview: 'https://game-portal.netlify.app/',
      },
      stacks: ['logos:vue', 'logos:nuxt-icon', 'logos:vuetifyjs', 'logos:javascript'],
    },
    {
      title: `MHD`,
      desc: `Mobile app to detect early stage of mental health problem`,
      thumbnail: 'https://play-lh.googleusercontent.com/C68GFd_J0FrPggcXKJDA6ITtKiVpwJxPqspjM08WqSoquO7yCQj6TZ-Due32gWaGK2w=w2560-h1440-rw',
      link: {
        article: '',
        github: '',
        preview: 'https://play.google.com/store/apps/details?id=id.ac.stiki.doleno.mhd',
      },
      stacks: ['logos:java', 'logos:android-icon', 'logos:firebase'],
    },
    {
      title: `Restaurant Locator`,
      desc: `App to detect nearby restaurants`,
      thumbnail: 'https://play-lh.googleusercontent.com/8_-UQQxlb1IgEYgqhnXXlFAF1ChbCveszzHlgDxtgRvFNWsJFYyKXmiIH9eCU2pvY6M=w2560-h1440-rw',
      link: {
        article: '',
        github: '',
        preview: 'https://play.google.com/store/apps/details?id=id.ac.stiki.doleno.restaurant_locator',
      },
      stacks: ['logos:java', 'logos:android-icon', 'logos:firebase'],
    },
  ]
</script>
<template>
  <div class="flex flex-col items-center gap-2 p-4 sm:gap-4 sm:p-8">
    <div class="text-2xl sm:text-3xl">Projects</div>
    <div
      class="grid gap-2 max-sm:w-full max-sm:max-w-[80%] sm:min-w-[60%] sm:max-w-4xl sm:grid-cols-2 sm:gap-4 md:max-w-5xl md:grid-cols-3 lg:max-w-6xl lg:grid-cols-4 xl:max-w-7xl"
    >
      <MainProjectItem v-for="(data, idx) in projects" :key="idx" v-bind="data" />
    </div>
  </div>
</template>
