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
    class="bg-gray-500/20 p-[inherit] rounded-lg sm:rounded-xl flex flex-col gap-i backdrop-blur-sm relative 
    overflow-hidden group ring-0 hover:ring-4 ring-gray-500 transition-all hover:cursor-pointer"
  >
    <div
      class="w-full aspect-square bg-center m-auto absolute inset-0 -z-[1] bg-gray-300 opacity-50 transition-all 
      duration-500 group-hover:bg-transparent blur-lg group-hover:scale-[1.5] group-hover:blur-sm ease-in"
    >
      <Icon
        :name="icon"
        class="w-full h-full   transition-all duration-300 object-center"
      />
    </div>
    <div
      class="flex items-center gap-1.5 sm:gap-3 justify-center sm:justify-end"
    >
      <div class="rounded-lg sm:rounded-xl transition-all group-hover:scale-125 group-hover:-translate-x-4 ease-in-out">
        <Icon :name="icon" class="text-3xl sm:text-4xl" />
      </div>
      <span class="font-medium sm:text-lg">{{ header }}</span>
    </div>
    <div class="max-sm:text-center p-1 sm:p-2">
      {{ desc }}
    </div>
  </div>
</template>
