import DefaultTheme from "/@/layout";
import SvgIcon from '/@/components/SvgIcon.vue';
import 'virtual:svg-icons-register'; // Important

let modules = {};
const websiteVueFiles = import.meta.globEager('./website/*.vue');
const lpVueFiles = import.meta.globEager('./lp/*.vue');
for (const path in websiteVueFiles) {
  const name = path.match(/(\w|-)+.vue/)[0].replace('.vue', '');
  if (modules[name])
    throw new Error(`${name} already exists`);
  modules[name] = websiteVueFiles[path].default;
}
console.log('modules: ', modules);

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // register global components
    app.component('Layout', DefaultTheme);
    app.component('svg-icon', SvgIcon);

    // register website and lp page components

    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
