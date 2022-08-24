import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Padarom\'s Cubing Library',
  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: [
      { text: 'Qube', link: 'https://qube.padarom.xyz' },
    ],
    sidebar: [
      {
        text: '3x3x3',
        collapsible: false,
        items: [
          { text: 'F2L', link: '/algorithms/333/f2l' },
          { text: 'OLL', link: '/algorithms/333/oll' },
          { text: 'PLL', link: '/algorithms/333/pll' },
        ]
      },
    ],
  },
})
