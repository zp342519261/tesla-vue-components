import type { App, Plugin } from 'vue';

import { IButton } from './components/button';
import { Itabs } from './components/tabs';

const component = [IButton, Itabs] as Plugin[];

export const install = function (app: App) {
  component.forEach((i) => {
    return app.use(i);
  });
};

export default {
  install,
};
