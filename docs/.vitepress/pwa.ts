import { resolveConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'

export const PwaPlugin = VitePWA({
  outDir: 'docs/.vitepress/dist',
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
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
})

export async function buildPwa() {
  const config = await resolveConfig({ plugins: [PwaPlugin] }, 'build', 'production')
  
  // when `vite-plugin-pwa` is presented, use it to regenerate SW after rendering
  const pwaPlugin: VitePluginPWAAPI = config.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
  if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled) {
    await pwaPlugin.generateSW()
  }
}
