import LazyImg from './LazyImg.vue';
import SvgIcon from './SvgIcon.vue';
import MdFormat from './MdFormat.vue';

export default {
  install: (app) => {
    app.component('svg-icon', SvgIcon);
    app.component('lazy-img', LazyImg);
    app.component('md-format', MdFormat);
  }
};
