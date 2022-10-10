import './tailwind.postcss'

import DefaultTheme from 'vitepress/theme'
import CubingAlgorithm from '../components/CubingAlgorithm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CubingAlgorithm', CubingAlgorithm)
  }
}
