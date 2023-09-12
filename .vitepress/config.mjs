import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "codepedia",
  description: "A VitePress Site",
  cleanUrls: true,

  appearance: 'dark',

  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    search: {
      provider: 'local'
    },

    nav: [
      {text: 'Home', link: '/'},

      {text: 'Examples', link: '/examples/markdown-examples', activeMatch: '/examples/',},
      {
        text: 'Typescript',
        activeMatch: '/typescript/',
        items: [
          {text: 'TS Basics', link: '/typescript/'},
          {text: 'TS Compiler settings', link: '/typescript/compiler-settings'},
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              {text: 'Section A Item A', link: '/typescript/'},
              {text: 'Section B Item B', link: '/typescript/'}
            ]
          }
        ]
      },
    ],

    sidebar: {
      '/typescript/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            {text: 'Index', link: '/guide/'},
            {text: 'One', link: '/guide/one'},
            {text: 'Two', link: '/guide/two'}
          ]
        }
      ],
      '/examples/':  [
          {
            text: 'Sidebar',
            items: [
              {text: 'Markdown Examples', link: 'examples/markdown-examples'},
              {text: 'Runtime API Examples', link: 'examples/api-examples'}
            ]
          },
          {
            text: 'Section Title B',
            items: [
              { text: 'Item C', link: '/item-c' },
              { text: 'Item D', link: '/item-d' },
            ]
          },
          {
            text: 'Level 1',
            items: [
              {
                text: 'Level 2',
                collapsed: true,
                items: [
                  {
                    text: 'Level 3',
                    collapsed: false,
                    items: [
                      {
                        text: 'Level 4',
                      }
                    ]
                  }
                ]
              }
            ]
          },

        ]
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
})
