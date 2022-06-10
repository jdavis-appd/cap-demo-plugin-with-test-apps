import { WebPlugin } from '@capacitor/core';

import type { DemoPlugin } from './definitions';

export class DemoWeb extends WebPlugin implements DemoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
