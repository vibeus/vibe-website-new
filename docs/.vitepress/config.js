const { resolve } = require('path');
const { createVitePlugins } = require('../../vite-config/plugin');
const nav = require('./configs/nav');
const sidebar = require('./configs/sidebar');

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
      // ssr: {
      //   noExternal: deps
      // },
      // optimizeDeps: {
      //   exclude: deps
      // },
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
          { find: '/@vcomp', replacement: pathResolve('../../src/components') }
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

      nav,

      sidebar,
    }
  }
})()
