import LazyImg from './LazyImg.vue';
import SvgIcon from './SvgIcon.vue';
import MdFormat from './MdFormat.vue';

export default {
  install: (app) => {
    app.component('SvgIcon', SvgIcon);
    app.component('LazyImg', LazyImg);
    app.component('MdFormat', MdFormat);
  }
};
