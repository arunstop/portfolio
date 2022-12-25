<script lang="ts" setup>
  export interface IProject {
    title: string
    thumbnail?: string
    link: string
    desc: string
    stacks: string[]
  }
  defineProps<IProject>()
</script>
<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl border-2 transition-all ease-in-out hover:-translate-y-2 
    duration-300"
  >
    <div class="relative flex flex-col">
      <figure class="h-full sm:h-32 md:h-40 lg:h-48">
        <img class="h-full w-full" :src="`https://avatars.dicebear.com/api/identicon/${title}.svg`" />
      </figure>
      <div
        v-if="stacks.length" 
        class="absolute inset-x-0 bottom-0 flex"
      >
        <div
          class=" mx-auto flex justify-center gap-1 rounded-t-lg bg-zinc-200 px-1.5 py-1 sm:gap-2 sm:rounded-t-xl 
          sm:px-2 sm:py-1"
        >
          <span 
            v-for="(icon, idx) in stacks"
            :key="idx"
            
            :title="icon"
          >
            <Icon :name="icon" class="text-2xl" />
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col gap-1 bg-zinc-200 p-2 sm:gap-2 sm:p-4">
      <p class="text-base font-bold sm:text-lg">
        {{ title }}
      </p>
      <p class="max-sm:text-sm">
        {{ desc }}
      </p>
      <div class="mt-auto grid gap-i sm:grid-cols-2 sm:last:children:col-span-full">
        <CommonButton class="w-full !min-w-0 text-base sm:text-lg">
          Github
        </CommonButton>
        <CommonButton class="w-full !min-w-0 text-base sm:text-lg">
          Read
        </CommonButton>
        <CommonButton class="w-full !min-w-0 text-base sm:text-lg">
          Visit
        </CommonButton>
      </div>
    </div>
  </div>
</template>
