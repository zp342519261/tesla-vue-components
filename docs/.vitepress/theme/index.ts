import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '../components/v-demo.vue';
import '../styles/app.scss';

import teslaCom from '@tesla-vue-components/index';
import '@tesla-vue-components/theme-default/index.scss';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(teslaCom);
    app.component('Demo', Demo);
  },
};
