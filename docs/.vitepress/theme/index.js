import DefaultTheme from "/@/layout";
import Test from '/@/views/Test.vue';
import SvgIcon from '/@/components/SvgIcon.vue';
import 'virtual:svg-icons-register'; // Important

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // register global components
    app.component('Layout', DefaultTheme);
    app.component('Test', Test);
    app.component('svg-icon', SvgIcon);
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
