<script lang="ts" setup>
  import { IServiceItem } from '../ServiceItem.vue'

  const services: IServiceItem[] = [
    { title: 'Strong app core', desc: '', icon:'twemoji:flexed-biceps-medium-dark-skin-tone',img: '' },
    { title: 'Creative and Unique UI design', desc: '', icon:'twemoji:artist-palette',img: '' },
    { title: 'Squeaky clean codes', desc: '', icon:'twemoji:sparkles',img: '' },
    { title: 'Lightning fast app performance', desc: '', icon:'twemoji:rocket',img: '' },
    { title: 'Easy to maintain codebases', desc: '', icon:'twemoji:hammer-and-wrench',img: '' },
    { title: 'SEO friendly apps', desc: '', icon:'twemoji:magnifying-glass-tilted-left',img: '' },
    { title: 'Up-to-date technology', desc: '', icon:'twemoji:top-arrow',img: '' },
    { title: 'Secure apps', desc: '', icon:'twemoji:locked',img: '' },
    { title: 'Seamless collaboration', desc: '', icon:'twemoji:robot',img: '' },
  ]
</script>
<template>
  <div class="flex flex-col items-center gap-2 p-4 sm:gap-4 sm:p-8">
    <div class="text-2xl sm:text-3xl">What can i do</div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 sm:gap-4">
      <MainServiceItem v-for="(service, idx) in services" :key="idx" v-bind="service" />
    </div>
  </div>
</template>
