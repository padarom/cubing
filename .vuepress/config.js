module.exports = {
  title: 'Padarom\'s Cubing Library',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      }
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Qube', link: 'https://qube.padarom.xyz' },
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: '3x3x3',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/algorithms/333/f2l',
          '/algorithms/333/oll',
          '/algorithms/333/pll',
        ]
      },
    ],
  },
}
