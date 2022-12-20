<script lang="ts" setup>
  import { ISocial } from '../Social.vue'

  const img = {
    default: `https://avatars.dicebear.com/api/micah/${'arunstop-avatar'}.svg?radius=50&b=%23999999&mouth[]=smile&eyebrows[]=up&eyes[]=eyes&shirt[]=collared&hairProbability=100&baseColor=coast&&hairColor=black&hair[]=dannyPhantom&glassesProbability=0&earringsProbability=0&ears[]=attached&shirtColor=azure`,
    hover: `https://avatars.dicebear.com/api/micah/${'arunstop-avatar'}.svg?radius=50&b=%239ab999&mouth[]=laughing&eyebrows[]=down&eyes[]=smiling&shirt[]=collared&hairProbability=100&baseColor=coast&&hairColor=black&hair[]=dannyPhantom&glassesProbability=0&earringsProbability=0&ears[]=attached&shirtColor=azure`,
    active: `https://avatars.dicebear.com/api/micah/${'arunstop-avatar'}.svg?radius=50&b=%23F06A6A&mouth[]=nervous&eyebrows[]=down&eyes[]=eyesShadow&shirt[]=collared&hairProbability=100&baseColor=lavender&&hairColor=black&hair[]=dannyPhantom&glassesProbability=0&earringsProbability=0&ears[]=attached&shirtColor=azure`,
  }
  const socials: ISocial[] = [
    {
      icon: 'logos:github-icon',
      label: 'Github',
      link: 'https://github.com/arunstop/',
    },
    {
      icon: 'logos:linkedin-icon',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/arunseto-pambudi-978a6014b/',
    },
    // {
    //   icon: 'logos:google-gmail',
    //   label: 'Email',
    //   link: 'mailto:arunstop@gmail.com',
    // },
    {
      icon: 'logos:discord-icon',
      label: 'Discord',
      value: 'arunstop#1588',
    },
  ]
</script>
<template>
  <div
    class="flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-zinc-300 to-zinc-600"
  >
    <div
      class="grid sm:grid-cols-2 gap-4 sm:gap-8 max-sm:w-full sm:max-w-4xl p-2 sm:p-4 rounded-xl m-2 sm:m-4 backdrop-blur-sm "
    >
      <div class="flex m-auto group relative cursor-pointer transition-all hover:rotate-12 active:-rotate-12">
        <figure class="h-36 sm:h-48 aspect-square flex m-auto">
          <img class="h-full w-full" :src="img.default" />
        </figure>
        <figure
          class="h-36 sm:h-48 aspect-square m-auto absolute flex opacity-0 inset-0 group-hover:opacity-100 transition-all duration-300"
        >
          <img class="h-full w-full" :src="img.hover" />
        </figure>
        <figure
          class="h-36 sm:h-48 aspect-square m-auto absolute flex opacity-0 inset-0 group-active:opacity-100 group-active:scale-125 transition-all duration-300"
        >
          <img class="h-full w-full" :src="img.active" />
        </figure>
      </div>
      <div class="gap-2 sm:gap-8 flex my-auto text-center flex-col">
        <span class="text-3xl font-bold">Arunseto Pambudi</span>
        <span class="text-xl font-medium">
          Front End/Fullstack Web Developer
        </span>
        <span class="text-xl font-medium"> Batu, East Java </span>
      </div>
      <div class="max-sm:text-sm col-span-full text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quis
        laboriosam, doloribus animi numquam laborum ad minima placeat optio esse
        iure provident delectus minus nemo cum? Esse quas consectetur eveniet!
      </div>
      <div
        class="flex flex-wrap justify-evenly items-center gap-1 sm:gap-2 col-span-full"
      >
        <MainSocial
          v-for="(social, idx) in socials"
          :key="idx"
          v-bind="social"
        />
      </div>
      <div class="col-span-full flex justify-around">
        <CommonButton>
          <span class="transition-all group-hover:scale-110 max-sm:text-sm">Skills</span>
          <Icon
            name="mdi:arrow-right"
            class="text-xl sm:text-2xl group-hover:scale-110 transition-all duration-300 ease-out"
          />
        </CommonButton>
        <CommonButton>
          <span class="transition-all group-hover:scale-110 max-sm:text-sm">Projects</span>
          <Icon
            name="mdi:arrow-right"
            class="text-xl sm:text-2xl group-hover:scale-110 transition-all duration-300 ease-out"
          />
        </CommonButton>
      </div>
    </div>
  </div>
</template>
