import { defineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'
import { PwaPlugin, buildPwa } from './pwa'

export default defineConfig({
  title: 'Padarom\'s Cubing Library',
  cleanUrls: 'without-subfolders',

  vite: {
    plugins: [
      PwaPlugin,
    ],
  },

  buildEnd: buildPwa,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'mask-icon', href: '/mask-icon.svg', color: '#FFFFFF' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['script', { src: '/registerSW.js' }],
  ],

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
