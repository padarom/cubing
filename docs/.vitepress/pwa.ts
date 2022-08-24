import { resolveConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'

export const PwaPlugin = VitePWA({
  outDir: '.vitepress/dist',
  registerType: 'autoUpdate',
  includeManifestIcons: false,
  devOptions: {
    enabled: true,
  },
  manifest: {
    id: '/',
    name: 'Padarom\'s Cubing Library',
    short_name: 'Cubing Library',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'icon_light.svg',
        sizes: '155x155',
        type: 'image/svg',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'jsdelivr-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
})

export async function buildPwa() {
  const config = await resolveConfig({}, 'build', 'production')
  
  // when `vite-plugin-pwa` is presented, use it to regenerate SW after rendering
  const pwaPlugin: VitePluginPWAAPI = config.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
  if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled) {
    await pwaPlugin.generateSW()
  }

  console.log('Generated Service WOrker')
}
