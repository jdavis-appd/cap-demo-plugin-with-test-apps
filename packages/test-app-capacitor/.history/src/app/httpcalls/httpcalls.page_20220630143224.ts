/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-httpcalls',
  templateUrl: './httpcalls.page.html',
  styleUrls: ['./httpcalls.page.scss'],
})
export class HttpcallsPage implements OnInit {
  httpUrl: string = undefined;
  httpCalls = [];
  constructor() {}

  ngOnInit() {}

  newHttp() {
    console.log(this.httpUrl);
    const httpPromise = async () => {
      const {
        http_tracker,
      } = await ADEUMMobileCapacitorPlugin.beginHttpRequest({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        url: this.httpUrl,
      });
      this.httpCalls.push({
        http_tracker,
        url: this.httpUrl,
      });
      this.httpUrl = undefined;
    };
    httpPromise();
  }

  endHttp(httpTracker) {
    console.log(this.sessionName);
    const sessionFramePromise = async () => {
      await ADEUMMobileCapacitorPlugin.endSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame: this.sessionFrameGuid,
      });
      this.sessionFrameGuid = '';
      this.sessionName = '';
      this.sessionNameUpdate = '';
      this.showList = false;
    };
    sessionFramePromise();
  }
}
