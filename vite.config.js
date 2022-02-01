// yarn build 用到的vite配置
import { defineConfig } from "vite";
import { resolve } from 'path';
import { createVitePlugins } from './config/vite/plugin';
import { VITE_DROP_CONSOLE } from './config/constant';

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}
export default (({command}) => {
  const isBuild = command === 'build';

  return defineConfig({
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: [
        { find: '/~', replacement: pathResolve("node_modules") },
        { find: '/@', replacement: pathResolve("src"), }
      ]
    },
    build: {
      lib: {
        entry: resolve('./src/index.js'),
        name: 'vibe-web-new',
      },
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
  });
});
