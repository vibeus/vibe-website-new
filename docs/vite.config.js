// yarn dev 用到的vite配置
import { defineConfig } from "vite";
import { createVitePlugins } from '../../config/vite/plugin';

export default (({command}) => {
  const isBuild = command === 'build';

  return defineConfig({
    optimizeDeps: {
      include: ['vitepress-for-component/dist/client/theme-default'],
    },
    plugins: createVitePlugins(isBuild),
  });
});
