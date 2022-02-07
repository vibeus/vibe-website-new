import './styles/index.sass';
import App from './components/App.vue';
import NotFound from './components/NotFound.vue';
import { withConfigProvider } from './composables/config';

const VBTheme = {
  Layout: withConfigProvider(App),
  NotFound: NotFound
};

export { VBTheme };
