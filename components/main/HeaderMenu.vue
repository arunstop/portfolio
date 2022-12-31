<script lang="ts" setup>
  export interface IHeaderItem {
    label: string
    link: string
    action?: () => void
  }
  defineProps<IHeaderItem>()
</script>
<template>
  <NuxtLink
    :to="link"
    class="flex font-bold transition-all hover:-translate-y-2 transition-all duration-500 ease-in-out"
  >
    <span>
      {{ label }}
    </span>
  </NuxtLink>
</template>
