<script lang="ts" setup>
  export interface ISocial {
    icon: string
    label: string
    link?: string
    value?: string
  }
  defineProps<ISocial>()

  function copyValue(v?: string) {
    if (!v) return
    navigator.clipboard.writeText(v)
    alert('Copied to clipboard')
  }
</script>
<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    class="flex gap-1 sm:gap-2 items-center hover:underline"
  >
    <Icon class="text-xl sm:text-2xl" :name="icon" />
    <span class="font-medium text-base sm:text-lg">{{ label }}</span>
  </a>
  <span
    v-else
    class="flex gap-1 sm:gap-2 items-center  hover:underline"
    role="button"
    @click="copyValue(value)"
  >
    <Icon class="text-xl sm:text-2xl" :name="icon" />
    <span class="font-medium text-base sm:text-lg">{{ label }}</span>
  </span>
</template>
