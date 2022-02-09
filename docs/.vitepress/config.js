const { resolve } = require('path')
const { createVitePlugins } = require('../../vite/plugin');
const nav = require('./configs/nav')

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

module.exports = (async () => {
  // const base = await getBase()
  const base = process.env.BASE || '/'
  console.log('base: ', base);

  return {
    // ...base,
    base: base,

    vite: {
      base: '/',
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
        alias: [
          { find: '/@', replacement: pathResolve('../../src') },
          { find: '/@mytheme', replacement: pathResolve('../../src/theme-vibe') }
        ]
      },
      hot: true,
      hotOnly: false,
    },

    lang: 'en-US',
    title: 'Vibe Website',
    description: 'Vibe product',

    themeConfig: {
      logoName: 'vibe',
      docsDir: "/",

      // algolia: {
      //   indexName: 'vuejs-v3',
      //   appId: 'BH4D9OD16A',
      //   apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
      // },

      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vue' },
        { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
      ],

      nav,

      sidebar: {
        '/blog/': [
          {
            text: 'Essentials',
            items: [
              { text: 'Introduction', link: '/blog/guide' },
              { text: 'Installation', link: '/blog/test' },
            ]
          },
        ],
      }
    }
  }
})()
