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
    };
    httpPromise();
  }
  updateSession() {
    console.log(this.sessionName);
    const sessionFramePromise = async () => {
      const {
        session_frame,
      } = await ADEUMMobileCapacitorPlugin.updateSessionFrameName({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame: this.sessionFrameGuid,
        session_frame_name: this.sessionNameUpdate,
      });
      this.sessionFrameGuid = session_frame;
      this.sessionName = this.sessionNameUpdate;
      this.sessionNameUpdate = '';
      console.log(session_frame);
      console.log(this.sessionFrameGuid);
      this.showList = true;
    };
    sessionFramePromise();
  }
  endSession() {
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
