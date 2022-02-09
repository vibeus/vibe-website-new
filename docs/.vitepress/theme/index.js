import DefaultTheme from "/@mytheme";
import SvgIcon from './components/SvgIcon.vue'; // svg component
import 'virtual:svg-icons-register';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('svg-icon', SvgIcon);
    // register global components
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
