<template>
  <svg width="200" height="200" viewBox="-1.1 -1.1 5.2 5.2">
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
      />
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
      return {
        U: 'yellow',
        R: 'green',
        F: 'red',
        L: 'blue',
        B: 'orange',
        D: 'white',
      }
    },
  },
}
</script>
