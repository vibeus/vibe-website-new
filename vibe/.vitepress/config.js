// const getBase = require('../../src/vitepress/config/baseConfig')
const { resolve } = require('path')
const { createVitePlugins } = require('../../vite/plugin');

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

module.exports = (async () => {
  // const base = await getBase()
  const base = process.env.BASE || '/'

  return {
    // ...base,
    base: base,

    vite: {
      ...base.vite,
      plugins: createVitePlugins(),
      build: {
        target: 'modules',
        assetsDir: 'assets', // 指定生成静态资源的存放路径
        minify: 'terser', // 混淆器，terser构建后文件体积更小
        terserOptions: {
          compress: {
            keep_infinity: true,
            // drop_console: VITE_DROP_CONSOLE,
          },
        },
      },
      resolve: {
        alias: {
          '/@': pathResolve('../../src')
        }
      },
      hot: true,
      hotOnly: false,
    },

    lang: 'en-US',
    title: 'Vue.js',
    description: 'Vue.js - The Progressive JavaScript Framework',

    themeConfig: {
      logo: '/img/logo-vue.svg',

      algolia: {
        indexName: 'vuejs-v3',
        appId: 'BH4D9OD16A',
        apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
      },

      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vue' },
        { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
      ],

      nav: [
        {
          text: 'Docs',
          activeMatch: `^/(blog|examples)/`,
          items: [
            {
              items: [
                { text: 'Guide', link: '/guide/introduction' },
                { text: 'Installtion', link: '/guide/installation' }
              ]
            }
          ]
        },
        {
          text: 'Website',
          link: '/website/'
        }
      ],

      sidebar: {
        '/blog/': [
          {
            text: 'Essentials',
            items: [
              { text: 'Introduction', link: '/blog/button' },
              { text: 'Installation', link: '/blog/test' },
            ]
          },
        ],
        '/api/': [
          {
            text: 'Global API',
            items: [
              { text: 'Application', link: '/api/application' },
              { text: 'Utilities', link: '/api/utilities' }
            ]
          },
          {
            text: 'Component',
            items: [
              { text: 'Options: State', link: '/api/options-state' },
              { text: 'Options: Rendering', link: '/api/options-rendering' },
              {
                text: 'Options: Lifecycle Hooks',
                link: '/api/options-lifecycle'
              },
              {
                text: 'Options: Composition',
                link: '/api/options-composition'
              },
              { text: 'Options: Misc', link: '/api/options-misc' },
              {
                text: 'Instance',
                link: '/api/component-instance'
              }
            ]
          },
          {
            text: 'Composition API',
            items: [
              { text: 'setup()', link: '/api/composition-setup' },
              { text: 'Reactivity', link: '/api/composition-reactivity' },
              { text: 'Lifecycle', link: '/api/composition-lifecycle' }
            ]
          },
          {
            text: 'Built-ins',
            items: [
              { text: 'Directives', link: '/api/built-in-directives' },
              { text: 'Components', link: '/api/built-in-components' },
              { text: 'Special Attributes', link: '/api/special-attributes' }
            ]
          },
          {
            text: 'Single File Component',
            items: [
              { text: 'Specification', link: '/api/sfc-spec' },
              { text: '<script setup>', link: '/api/sfc-script-setup' },
              { text: '<style> Features', link: '/api/sfc-style' }
            ]
          },
          {
            text: 'TypeScript',
            items: [{ text: 'Utility Types', link: '/api/types-utility' }]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Render Function Helpers', link: '/api/render-function' },
              { text: 'Compiler Transforms', link: '/api/compiler' },
              { text: 'Server-Side Rendering', link: '/api/ssr' },
              { text: 'Custom Renderer', link: '/api/custom-renderer' }
            ]
          }
        ]
      }
    }
  }
})()
