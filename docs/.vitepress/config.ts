import { resolve } from 'path';
import { createVitePlugins } from '../../vite-config/plugin';
import { nav, sidebar, footer } from './configs';

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

async function config() {
  // const base = await getBase()
  const base = process.env.BASE || '/'

  return {
    // ...base,
    base: base,

    vite: {
      base: '/',
      // optimizeDeps: {
      //   include: ['element-plus'],
      // },
      ssr: {
        noExternal: ['swiper'],
      },
      plugins: createVitePlugins(),
      css: {
        postcss: {
          //remove build charset warning
          plugins: [
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule: {
                charset: (atRule) => {
                  if (atRule.name === 'charset') atRule.remove();
                }
              }
            }
          ]
        },
        // preprocessorOptions: {
        //   scss: { //define global scss variable
        //     // eslint-disable-next-line quotes
        //     additionalData: `import "@css/base/index.sass";`
        //   }
        // }
      },
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
          { find: '@', replacement: pathResolve('../../src') },
          { find: '@vcomp', replacement: pathResolve('../../src/components') },
          { find: '@img', replacement: pathResolve('../../src/assets/img') },
          { find: '@css', replacement: pathResolve('../../src/assets/css') },
          { find: '@js', replacement: pathResolve('../../src/assets/js') }
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

      footer,
    }
  }
}

export default config();
