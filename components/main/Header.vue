<script lang="ts" setup>
  import { IHeaderItem } from './HeaderMenu.vue'

  const menus: IHeaderItem[] = [
    { label: 'Contact', link: '#contact' },
    { label: 'Service', link: '#service' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Portfolio', link: '#projects' },
  ]
</script>
<template>
  <nav class="fixed top-0 z-[1] hidden max-sm:flex">
    <CommonButton
      class="m-2 flex aspect-square h-9 !min-w-0 items-center justify-center rounded-full bg-black/20 !bg-none p-2"
    >
      <Icon name="mdi:menu" class="text-xl" />
    </CommonButton>
  </nav>
  <nav class="sticky top-0 z-[1] hidden w-full bg-zinc-500/50 p-2 sm:flex sm:p-4">
    <div class="flex w-full gap-2 sm:gap-4">
      <div class="">Arunseto Pambudi</div>
      <div class="grow"></div>
      <MainHeaderMenu v-for="(item, idx) in menus" :key="idx" v-bind="item" />
    </div>
  </nav>
</template>
