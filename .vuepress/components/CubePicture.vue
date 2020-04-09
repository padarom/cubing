<template>
  <svg class="cube-picture" width="200" height="200" viewBox="-1.1 -1.1 5.2 5.2">
    <defs>
      <marker id="arrow-1"
        markerWidth="4"
        markerHeight="3"
        refX="2"
        refY="1.5"
        orient="auto-start-reverse"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,3 L4,1.5 z" fill="red" />
      </marker>

      <marker id="arrow-2"
        markerWidth="4"
        markerHeight="3"
        refX="2"
        refY="1.5"
        orient="auto-start-reverse"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,3 L4,1.5 z" fill="blue" />
      </marker>

      <marker id="arrow-background"
        markerWidth="3"
        markerHeight="2.25"
        refX="1.3"
        refY="1.125"
        orient="auto-start-reverse"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,2.25 L3,1.125 z" fill="black" />
      </marker>
    </defs>
    
    <!-- Side layers -->
    <g v-for="(side, i) in [faces.back, faces.right, faces.front, faces.left]" :key="i"
      stroke="#000000" stroke-width="0.06"
      :transform="`rotate(${i * 90} 1.5 1.5)`">
      <!-- Leftmost cubie -->
      <polygon points="0,0 1,0 1.05,-0.4 0.1,-0.4"
        :fill="colorScheme[side[2]]"
      />

      <!-- Center cubie -->
      <polygon points="1,0 2,0 1.95,-0.4 1.05,-0.4"
        :fill="colorScheme[side[1]]"
      />

      <!-- Rightmost cubie -->
      <polygon points="2,0 3,0 2.9,-0.4 1.95,-0.4"
        :fill="colorScheme[side[0]]"
      />
    </g>
    
    <!-- Top layer -->
    <g class="top">
      <rect
        v-for="(face, i) in faces.top"
        :key="i"
        :x="(i % 3)"
        :y="(i / 3).toString().substr(0,1)"
        width="1"
        height="1"
        :fill="colorScheme[face]"
        stroke="#000000"
        stroke-width="0.1"
        rx="0.02"
      />
    </g>

    <g class="arrows">
      <g class="arrow" v-for="(line, i) in arrows" :key="i">
        <!-- Background -->
        <line
          stroke-width="0.16" stroke="black"
          :x1="(line[0] % 3) + 0.5"
          :x2="(line[1] % 3) + 0.5"
          :y1="(line[0] / 3).toString().substr(0,1) + '.5'"
          :y2="(line[1] / 3).toString().substr(0,1) + '.5'"
          marker-end="url(#arrow-background)"
          :marker-start="!line[2] ? `url(#arrow-background)` : ''"
        />

        <!-- Main line -->
        <line
          stroke-width="0.08" :stroke="(line[3] || 1) == 1 ? 'red' : 'blue'"
          :x1="(line[0] % 3) + 0.5"
          :x2="(line[1] % 3) + 0.5"
          :y1="(line[0] / 3).toString().substr(0,1) + '.5'"
          :y2="(line[1] / 3).toString().substr(0,1) + '.5'"
          :marker-end="`url(#arrow-${line[3] || 1 })`"
          :marker-start="!line[2] ? `url(#arrow-${line[3] || 1 })` : ''"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import Cube from 'cubejs'

export default {
  props: {
    scramble: {
      type: String,
      default: "",
    },
    topColor: {
      type: String,
      default: "yellow",
    },
    grayscale: {
      type: Boolean,
      default: false,
    },
    arrows: {
      type: Array,
      default: [],
    },
  },

  computed: {
    cube () {
      const cube = new Cube()
      cube.move(this.scramble)

      return cube
    },

    faces () {
      const faces = this.cube.asString().match(/.{1,9}/g)

      return {
        top: faces[0],
        front: faces[2].substr(0, 3),
        left: faces[4].substr(0, 3),
        right: faces[1].substr(0, 3),
        back: faces[5].substr(0, 3),
      }
    },

    colorScheme () {
      const yellow = 'yellow'
      
      if (this.grayscale) {
        const gray = 'gray'

        return {
          U: yellow, R: gray, F: gray, L: gray, B: gray, D: gray
        }
      }

      return {
        U: yellow,
        R: '#63AD26',
        F: '#B20026',
        L: '#0060BA',
        B: 'orange',
        D: 'white',
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.cube-picture
  .arrows
    opacity: 0.2
    transition: opacity 0.2s

  &:hover .arrows
    opacity: 1
</style>
