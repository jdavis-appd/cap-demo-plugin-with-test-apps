import { Component, OnInit } from '@angular/core';
import type { DemoPlugin } from 'cap-demo-plugin/cordova/definitions';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.testFunc();
    });
  }

  async testFunc() {
    const demo = (window as any).Demo as DemoPlugin;
    console.log('TEST!');
    console.log(`ECHO: ${(await demo.echo({value: 'ping'})).value}`);
  }

}
