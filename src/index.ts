import { registerPlugin } from '@capacitor/core';

import type { DemoPlugin } from './definitions';

const Demo = registerPlugin<DemoPlugin>('Demo', {
  web: () => import('./web').then(m => new m.DemoWeb()),
});

export * from './definitions';
export { Demo };
