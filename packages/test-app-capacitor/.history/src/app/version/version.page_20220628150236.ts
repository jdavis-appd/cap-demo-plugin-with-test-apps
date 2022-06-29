import { Component, OnInit } from '@angular/core';import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.scss'],
})
export class VersionPage implements OnInit {
  showList = false;
  version = '';
  constructor() { }

  ngOnInit() {
  }

  getVersion(){
    console.log(this.version);
    const versionPromise = async () => {
      const {version} = await ADEUMMobileCapacitorPlugin.getVersion();
      this.version = version;
      this.showList = false;
    };
    versionPromise();
  }

}
