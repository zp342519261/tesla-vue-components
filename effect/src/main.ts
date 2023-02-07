import { createApp } from 'vue';
import teslaCom from '@tesla-vue-components/index';
// import '@tesla-vue-components/theme-chalk/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(teslaCom);

app.mount('#app');
