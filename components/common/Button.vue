<script lang="ts" setup></script>
<template>
  <button
    class="group flex min-w-[6rem] items-center justify-center gap-1 rounded-lg bg-gradient-to-br from-zinc-300 to-gray-600 py-1.5 px-2
    text-lg font-semibold text-white ring-zinc-400 transition-all ease-linear hover:-translate-y-1 hover:gap-4
    hover:ring-1 active:scale-90 active:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:min-w-[12rem] sm:gap-2
    sm:rounded-xl sm:py-3 sm:px-4 sm:text-xl hover:sm:gap-8 sm:hover:ring-2 sm:active:ring-8
    "
  >
    <slot />
  </button>
</template>
