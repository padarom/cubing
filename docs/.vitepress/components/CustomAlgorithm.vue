<script setup lang="ts">
import Illustration3x3 from './illustrations/3x3.vue'
</script>

<template>
  <div>
    <Illustration3x3 v-bind="$attrs" />
    <slot />
  </div>
</template>

