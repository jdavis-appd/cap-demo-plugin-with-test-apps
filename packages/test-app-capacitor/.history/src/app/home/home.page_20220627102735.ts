import { Component, OnInit } from '@angular/core';
import { Demo } from 'cap-demo-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    this.testFunc();
  }

  newSession() {}

  async testFunc() {
    console.log(`ECHO: ${(await Demo.echo({value: 'ping'})).value}`);
  }

}
