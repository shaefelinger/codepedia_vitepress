import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "codepedia",
  description: "A VitePress Site",
  cleanUrls: true,

  srcDir: './src',

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
      // {text: 'Home', link: '/'},

      {text: 'HTML', link: '/html/', activeMatch: '/html/',},
      {text: 'CSS', link: '/css/', activeMatch: '/css/',},
      {
        text: 'Typescript',
        activeMatch: '/typescript/',
        items: [
          {text: 'TS Basics', link: '/typescript/'},
          {text: 'TS Compiler settings', link: '/typescript/compiler-settings'},
        ]
      },
      {text: 'Examples', link: '/examples/markdown-examples', activeMatch: '/examples/',},
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
      '/html/': [
        {
          text: 'HTML',
          items: [
            {text: 'HTML-Basics', link: '/html/'},
            {text: 'Forms', link: '/html/forms'},
            {text: 'HTML Links', link: '/html/reference-links'}
          ]
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          items: [
            {text: 'CSS-Basics', link: '/css/'},
            {text: 'Selectors', link: '/css/selectors'},
            {text: 'Color', link: '/css/color'},
            {text: 'Units', link: '/css/units'},
            {text: 'Typography', link: '/css/typography'},
            {text: 'Specifity', link: '/css/specifity'},
            {text: 'Box-Model', link: '/css/box-model'},
            {text: 'Positioning', link: '/css/positioning'},
            {text: 'Float & Clear', link: '/css/float-clear'},
            {text: 'Display-type', link: '/css/display-type'},
            {text: 'Centering', link: '/css/centering'},
            {text: 'Flexbox', link: '/css/flexbox'},
            {text: 'Grid', link: '/css/grid'},
            {text: 'Responsiveness', link: '/css/responsiveness'},
            {text: 'Transition', link: '/css/transition'},
            {text: 'Animation', link: '/css/animation'},
            {text: 'CSS-misc', link: '/css/css-misc'},
            {text: 'SCSS & SASS', link: '/css/scss-sass'},
            {text: 'CSS Links', link: '/css/css-links'}
          ]
        }
      ],
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
