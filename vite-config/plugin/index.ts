import { resolve } from 'path';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { configVisualizerConfig } from './visualizer';

export function createVitePlugins() {
  const vitePlugins = [
    // ElementPlus(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/icons/svg')],
    }),
    AutoImport({ // 自动按需引入依赖
      // resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vitepress', 'pinia'],
      dts: '../typings/auto-imports.d.ts',
    }),
    // Components({
    //   resolvers: [ElementPlusResolver({sass: true})],
    // }),
    configVisualizerConfig()
  ];

  return vitePlugins;
}
