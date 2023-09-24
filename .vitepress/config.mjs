import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "codepedia",
  description: "A VitePress Site",
  cleanUrls: true,

  srcDir: './src',

  appearance: true,

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
        text: 'Javascript',
        activeMatch: '/javascript/',
        items: [
          {text: 'JavaScript', link: '/javascript/js/'},
          {text: 'JS for Web', link: '/javascript/js-web/'},
          {text: 'Async JS', link: '/javascript/js-async/'},
          {text: 'JQuery', link: '/javascript/jquery/'},
        ]
      },
      {
        text: 'Typescript',
        link: '/typescript/',
        activeMatch: '/typescript/'
      },
      {
        text: 'Backend',
        activeMatch: '/backend/',
        items: [
          {text: 'Backend Basics', link: '/backend/basics/'},
          {text: 'Node', link: '/backend/node/'},
          {text: 'Express', link: '/backend/express/'},
          {text: 'Connect Node to DB', link: '/backend/node-db-connect/'},
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
      '/javascript/': [
        {
          text: 'JavaScript Basics',
          items: [
            {text: 'Basics', link: '/javascript/js/'},
            {text: 'Variables', link: '/javascript/js/variables'},
            {text: 'Operators', link: '/javascript/js/operators'},
            {text: 'Numbers', link: '/javascript/js/numbers'},
            {text: 'Strings', link: '/javascript/js/strings'},
            {text: 'Arrays', link: '/javascript/js/arrays'},
            {text: 'Conditional statements', link: '/javascript/js/conditional-statements'},
            {text: 'Functions', link: '/javascript/js/functions'},
            {text: 'Loops', link: '/javascript/js/loops'},
            {text: 'Objects', link: '/javascript/js/objects'},
            {text: 'JS this', link: '/javascript/js/this'},
            {text: 'Maps & Sets', link: '/javascript/js/maps-sets'},
            {text: 'Destructuring', link: '/javascript/js/destructuring'},
            {text: 'Modules', link: '/javascript/js/modules'},
            {text: 'Play audio', link: '/javascript/js/play-audio'},
            {text: 'Classes JS', link: '/javascript/js/classes'},
            {text: 'Dates', link: '/javascript/js/dates'},
            {text: 'Links & Infos', link: '/javascript/js/links'},
          ]
        }
      ],
      '/javascript/js-web/': [
        {
          text: 'JavaScript for Web',
          items: [
            {text: 'Adding Javascript', link: '/javascript/js-web/'},
            {text: 'The DOM', link: '/javascript/js-web/the-dom'},
            {text: 'Selecting DOM-Elements', link: '/javascript/js-web/dom-selecting'},
            {text: 'Manipulating the DOM', link: '/javascript/js-web/dom-manipulation'},
            {text: 'Working with Browser Events', link: '/javascript/js-web/browser-events'}
          ]
        }
      ],
      '/javascript/js-async/': [
        {
          text: 'Async JavaScript',
          items: [
            {text: 'Async JavaScript', link: '/javascript/js-async/'},
            {text: 'Nested Callbacks', link: '/javascript/js-async/nested-callbacks'},
            {text: 'Promises', link: '/javascript/js-async/promises'},
            {text: 'Async-Await', link: '/javascript/js-async/async-await'},
            {text: 'Helper function to()', link: '/javascript/js-async/to-function'},
          ]
        }
      ],
      '/javascript/jquery/': [
        {
          text: 'JQuery'
        }
      ],
      '/typescript/': [
        {
          text: 'Typescript',
          items: [
            {text: 'Typescript Basics', link: '/typescript/'},
            {text: 'Compiler Settings', link: '/typescript/compiler-settings'},
          ]
        }
      ],
      '/backend/basics/': [
        {
          text: 'Backend Basics',
        }
      ],
      '/backend/node/': [
        {
          text: 'Node',
          items: [
            {text: 'Node Basics', link: '/backend/node/'},
            {text: 'NPM', link: '/backend/node/npm'},
            {text: 'YARN', link: '/backend/node/yarn'},
            {text: 'NVM Node Version Manager', link: '/backend/node/nvm'},
            {text: 'Debugging', link: '/backend/node/debugging'},
            {text: 'Node - The Process Object', link: '/backend/node/process-object'},
            {text: 'Node - Event-driven architecture', link: '/backend/node/event-architecture'},
            {text: 'Node - Modules', link: '/backend/node/modules'},
            {text: 'Node - Filesystem & Streams', link: '/backend/node/filesystem'},
            {text: 'Node - Errors', link: '/backend/node/errors'},
            {text: 'Node - Links', link: '/backend/node/links'},
          ]
        }
      ],
      '/backend/node-db-connect/': [
        {
          text: 'Connect Node to DB',
          items: [
            {text: 'Node Connect', link: '/backend/node-db-connect/'},
            {text: 'Sequelize', link: '/backend/node-db-connect/sequelize'}
          ]
        }
      ],
      '/backend/express/': [
        {
          text: 'Express',
          items: [
            {text: 'Express', link: '/backend/express/'},
            {text: 'Route Handlers', link: '/backend/express/route-handlers'},
            {text: 'Router', link: '/backend/express/router'},
            {text: 'Middleware', link: '/backend/express/middleware'},
            {text: 'Requests', link: '/backend/express/requests'},
            {text: 'Responses', link: '/backend/express/responses'},
            {text: 'File Path', link: '/backend/express/file-path'},
            {text: 'Static Files', link: '/backend/express/static-files'},
            {text: 'Error Handling', link: '/backend/express/error-handling'},
            {text: 'Templating Engines', link: '/backend/express/templating-engines'},
            {text: 'Model-View-Controller MVC', link: '/backend/express/mvc'},
            {text: '.ENV', link: '/backend/express/env'},
            {text: 'Express Links', link: '/backend/express/links'},
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
