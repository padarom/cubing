import './tailwind.postcss'

import DefaultTheme from 'vitepress/theme'
import CustomAlgorithm from '../components/CustomAlgorithm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomAlgorithm', CustomAlgorithm)
  }
}
