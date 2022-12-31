<script lang="ts" setup>
  export interface IProject {
    title: string
    thumbnail?: string
    link: {
      article?: string
      github?: string
      preview?: string
    }
    desc: string
    stacks: string[]
  }
  defineProps<IProject>()

  function openNewTab(url?: string) {
    if (!url) return
    window.open(url, '_blank')?.focus()
  }
</script>
<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl border-2 transition-all duration-300 ease-in-out hover:-translate-y-2"
  >
    <div class="relative flex flex-col">
      <NuxtLink class="h-32 sm:h-36 md:h-40 lg:h-48" :to="link.article">
        <img
          class="h-full w-full object-cover"
          :src="thumbnail ? thumbnail : `https://avatars.dicebear.com/api/identicon/${title}.svg`"
        />
      </NuxtLink>
      <div v-if="stacks.length" class="absolute inset-x-0 bottom-0 flex">
        <div
          class="mx-auto flex justify-center gap-1 rounded-t-lg bg-zinc-200 px-1.5 py-1 sm:gap-2 sm:rounded-t-xl sm:px-2 sm:py-1"
        >
          <span v-for="(icon, idx) in stacks" :key="idx" :title="icon">
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
      <div class="mt-auto grid gap-i sm:grid-cols-2">
        <CommonButton
          class="w-full !min-w-0 text-base sm:text-lg"
          :disabled="!link.github"
          @click.prevent="openNewTab(link.github)"
        >
          Github
        </CommonButton>
        <CommonButton
          class="w-full !min-w-0 text-base sm:text-lg"
          :disabled="!link.preview"
          @click.prevent="openNewTab(link.preview)"
        >
          Preview
        </CommonButton>
      </div>
    </div>
  </div>
</template>
