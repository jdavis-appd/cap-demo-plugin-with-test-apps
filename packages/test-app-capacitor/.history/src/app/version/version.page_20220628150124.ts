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
      await ADEUMMobileCapacitorPlugin.endSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame: this.sessionFrameGuid,
      });
      this.sessionFrameGuid = '';
      this.sessionName = '';
      this.sessionNameUpdate = '';
      this.showList = false;
    };
    versionPromise();
  }

}