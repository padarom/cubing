<script setup lang="ts">
import { getCurrentInstance, onMounted, defineProps, PropType } from 'vue'
import { useData } from 'vitepress'
import { TwistyPlayer, TwistyPlayerConfig } from 'cubing/twisty'
import { Alg } from 'cubing/alg'
import merge from 'lodash/merge'

const props = defineProps({
  algorithm: String,
  name: {
    type: String,
    required: false,
  },
  config: {
    type: Object as PropType<Partial<TwistyPlayerConfig>>,
    default: () => ({}),
  },
  showInverse: {
    type: Boolean,
    default: false,
  },
  alternative: {
    type: String,
    required: false,
  },
})

const alg = new Alg(props.algorithm)

// Setup some default configuration options for the TwistyPlayer and pre-augment
// them by the frontmatter of the current page.
const defaultConfig: Partial<TwistyPlayerConfig> = merge(
  {
    background: 'none',
    controlPanel: 'none',
    alg: props.showInverse ? alg.invert() : alg,
  } as Partial<TwistyPlayerConfig>,
  useData().frontmatter.value.twisty || {}
)

onMounted(() => {
  const playerParent = getCurrentInstance().refs.player as HTMLElement

  // Finally merge in any options passed to this component as props
  const player = new TwistyPlayer(merge(defaultConfig, props.config))
  player.classList.add('w-full')
  playerParent.appendChild(player)
})
</script>

<template>
  <div class="flex w-full items-center">
    <div class="w-[120px] md:w-[200px] flex-shrink-0 -m-3 mr-3">
      <div ref="player" />
    </div>
    <div class="text-xl md:text-2xl pl-3">
      <div class="text-sm font-medium">{{ props.name || 'Algorithm' }}</div>
      <div>{{ algorithm }}</div>
      <div v-if="alternative">
        <span class="block text-sm">Or</span>
        {{ alternative }}
      </div>
    </div>
  </div>
</template>
