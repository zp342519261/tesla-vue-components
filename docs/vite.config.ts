import path from 'path';
import type { UserConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-macros/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform';

export default (): UserConfig => {
  return {
    base: 'comdocs',
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, './.vitepress')}/`,
        },
        {
          find: '@tesla-vue-components',
          replacement: `${path.resolve(__dirname, '../packages')}/`,
        },
      ],
    },
    server: {
      host: true,
    },
    plugins: [
      DefineOptions({
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
      Inspect(), // only applies in dev mode
      MarkdownTransform(),
      VitePWA({
        includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'tesla-vue-components',
          short_name: '组件库',
          description: 'vue 组件',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  };
};
