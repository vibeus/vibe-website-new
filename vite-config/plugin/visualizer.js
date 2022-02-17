/**
 * Package file volume analysis
 */
const visualizer = require('rollup-plugin-visualizer');
const { ANALYSIS } = require('../constant');

module.exports = function configVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    });
  }
  return [];
}
