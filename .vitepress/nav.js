export default [
      // {text: 'Home', link: '/'},

      { text: 'HTML', link: '/html/', activeMatch: '/html/' },
      { text: 'CSS', link: '/css/', activeMatch: '/css/' },
      {
        text: 'Javascript',
        activeMatch: '/javascript/',
        items: [
          { text: 'JavaScript', link: '/javascript/js/' },
          { text: 'JS for Web', link: '/javascript/js-web/' },
          { text: 'Async JS', link: '/javascript/js-async/' },
          { text: 'JQuery', link: '/javascript/jquery/' },
        ],
      },
      {
        text: 'Typescript',
        link: '/typescript/',
        activeMatch: '/typescript/',
      },
      {
        text: 'Backend',
        activeMatch: '/backend/',
        items: [
          { text: 'Backend Basics', link: '/backend/basics/' },
          { text: 'Node', link: '/backend/node/' },
          { text: 'Express', link: '/backend/express/' },
          { text: 'Connect Node to DB', link: '/backend/node-db-connect/' },
        ],
      },
      {
        text: 'GIT',
        link: '/git/',
        activeMatch: '/git/',
      },
      {
        text: 'Databases',
        activeMatch: '/databases/',
        items: [
          { text: 'DB Basics', link: '/databases/basics/' },
          { text: 'SQL', link: '/databases/sql/' },
          { text: 'No-SQL', link: '/databases/no-sql/' },
        ],
  },
            {
        text: 'Java',
        activeMatch: '/java/',
        items: [
          { text: 'Java Basics', link: '/java/basics/' },
        ],
      },
       {
        text: 'Vue',
        activeMatch: '/vue/',
        items: [
          { text: 'Vue Basics', link: '/vue/basics/' },
          { text: 'Vue Router', link: '/vue/router/' },
          { text: 'Vue State Management', link: '/vue/state/' },
          { text: 'Vite', link: '/vue/vite/' },
          { text: 'Quasar', link: '/vue/quasar/' },
          { text: 'Nuxt', link: '/vue/nuxt/' },
          { text: 'Vue Animation', link: '/vue/animation/' },
        ],
      },
      {
        text: 'Examples',
        link: '/examples/markdown-examples',
        activeMatch: '/examples/',
      }
    ]
