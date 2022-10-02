<script setup lang="ts">
import Illustration3x3 from './illustrations/3x3.vue'
</script>

<template>
  <div class="flex w-full items-center">
    <div class="w-[120px] md:w-[200px] flex-shrink-0">
      <Illustration3x3 v-bind="$attrs" />
    </div>
    <div class="text-xl md:text-2xl">
      <div class="text-sm">Algorithm</div>
      <slot />
    </div>
  </div>
</template>
