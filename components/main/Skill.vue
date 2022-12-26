<script lang="ts" setup>
  export interface ISkill {
    icon: string
    header: string
    desc: string
  }
  defineProps<ISkill>()
</script>
<template>
  <div
    class="group relative flex flex-col gap-i overflow-hidden rounded-lg bg-gray-500/20 p-2 ring-0 ring-gray-500 
    backdrop-blur-sm transition-all hover:cursor-pointer hover:ring-4 sm:rounded-xl sm:p-4"
  >
    <div
      class="absolute inset-0 -z-[1] m-auto aspect-square w-full bg-gray-300 bg-center opacity-50 blur-lg 
      transition-all duration-500 ease-in group-hover:scale-[1.5] group-hover:bg-transparent group-hover:blur-sm"
    >
      <Icon
        :name="icon"
        class="h-full w-full   object-center transition-all duration-300"
      />
    </div>
    <div
      class="flex items-center justify-center gap-1.5 sm:justify-end sm:gap-3"
    >
      <div class="rounded-lg transition-all ease-in-out group-hover:-translate-x-4 group-hover:scale-125 sm:rounded-xl">
        <Icon :name="icon" class="text-3xl sm:text-4xl" />
      </div>
      <span class="font-medium sm:text-lg">{{ header }}</span>
    </div>
    <div class="p-1 max-sm:text-center sm:p-2">
      {{ desc }}
    </div>
  </div>
</template>
