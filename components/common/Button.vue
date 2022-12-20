<script lang="ts" setup></script>
<template>
  <button
    class="py-1.5 px-2 sm:py-3 sm:px-4 gap-1 sm:gap-2 text-white bg-gradient-to-br from-zinc-300 to-gray-600 min-w-[6rem] group
    sm:min-w-[12rem] rounded-lg sm:rounded-xl transition-all flex justify-center items-center ring-zinc-400
    hover:ring-1 sm:hover:ring-2 hover:-translate-y-1 active:scale-90 active:ring-4 sm:active:ring-8 ease-linear
    text-lg sm:text-xl hover:gap-4 hover:sm:gap-8 font-semibold
    "
  >
    <slot />
  </button>
</template>
