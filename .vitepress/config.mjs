import { defineConfig } from 'vitepress'

import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'codepedia',
  description: 'A VitePress Site',
  cleanUrls: true,

  srcDir: './src',

  appearance: true,

  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
