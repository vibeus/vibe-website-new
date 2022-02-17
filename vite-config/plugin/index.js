const { resolve } = require('path');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const Components = require('unplugin-vue-components/vite');
const { createSvgIconsPlugin } = require('vite-plugin-svg-icons');
// const AutoImportDeps = require('./autoImport');
const configVisualizerConfig = require('./visualizer');
// const { configStyleImportPlugin } = require('./styleImport');

module.exports =  function createVitePlugins() {
  const vitePlugins = [
    // AutoImportDeps(), // 自动按需引入依赖
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/icons/svg')],
    }),
    Components({
      resolvers: [ElementPlusResolver({constStyle: 'sass'})]
    }),
    // configStyleImportPlugin(),
    configVisualizerConfig(),
  ];

  return vitePlugins;
}
