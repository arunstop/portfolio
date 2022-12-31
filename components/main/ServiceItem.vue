<script lang="ts" setup>
  export interface IServiceItem {
    title: string
    desc: string
    icon: string
    img?: string
  }
  defineProps<IServiceItem>()
</script>
<template>
  <div class="group relative isolate flex flex-col gap-i overflow-hidden rounded-lg bg-zinc-500/20 p-2 sm:rounded-xl sm:p-4">
    <div
      class="absolute inset-0 -z-[1] m-auto aspect-square w-full scale-[1.5] bg-gray-300 bg-center opacity-50 blur-lg 
      transition-all duration-500 ease-in group-hover:scale-[1] group-hover:bg-transparent group-hover:blur-sm rotate-[24deg]
      group-hover:rotate-0"
    >
      <Icon :name="icon" class="h-full w-full " />
    </div>
    <span class="mx-auto">
      <Icon :name="icon" class="text-[6rem]" />
    </span>
    <span class="text-lg font-semibold sm:text-xl">
      {{ title }}
    </span>
    <span class="text-sm sm:text-base">
      {{
        desc ||
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi adipisci enim distinctio modi quia accusantium veniam, animi non repellendus, ullam temporibus repellat a aliquid id necessitatibus ad eligendi perspiciatis omnis.'
      }}
    </span>
  </div>
</template>
