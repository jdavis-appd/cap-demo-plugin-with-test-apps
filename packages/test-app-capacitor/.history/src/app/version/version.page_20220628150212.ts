import { Component, OnInit } from '@angular/core';

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
      this.
      this.showList = false;
    };
    versionPromise();
  }

}
