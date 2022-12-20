<script lang="ts" setup>
 
</script>
<template>
  <div class="p-2 sm:p-4  flex gap-2 sm:gap-4 flex-col items-center sticky top-0">
    <figure class="h-24 aspect-square">
      <img
        class="h-full w-full"
        :src="`https://avatars.dicebear.com/api/personas/${'arunstop'}.svg?radius=50&b=%23999999&mouth[]=smirk`"
      />
    </figure>
    <div class="gap-i grid text-center">
      <span class="text-2xl font-bold">Arunseto Pambudi</span>
      <span class="text-1xl font-medium"
        >Front End/Fullstack Web Developer</span
      >
    </div>
    <!-- <div class="flex flex-col gap-1 sm:gap-2">
      <MainSocial v-for="(social, idx) in socials" :key="idx" v-bind="social" />
    </div> -->
  </div>
</template>
