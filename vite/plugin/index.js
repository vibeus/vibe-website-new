import { resolve } from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { AutoImportDeps } from './autoImport';
import { configVisualizerConfig } from './visualizer';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugins() {
  const vitePlugins = [
    AutoImportDeps(), // 自动按需引入依赖
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/theme-vibe/icons/svg')],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle: 'sass'})]
    }),
    configStyleImportPlugin(),
    configVisualizerConfig(),
  ];

  return vitePlugins;
}
