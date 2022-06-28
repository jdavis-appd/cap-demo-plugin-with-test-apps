/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-session-frames',
  templateUrl: './session-frames.page.html',
  styleUrls: ['./session-frames.page.scss'],
})
export class SessionFramesPage implements OnInit {
  sessionName = '';
  sessionNameUpdate = '';
  showList = false;
  sessionFrameGuid = '';
  constructor() {}

  ngOnInit() {}

  newSession() {
    console.log(this.sessionName);
    const { session_frame } = async () => {
      await ADEUMMobileCapacitorPlugin.startSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame_name: this.sessionName,
      });
    };
    console.log(session_frame);
    this.showList = true;
  }
  updateSession() {
    console.log(this.sessionName);
    ADEUMMobileCapacitorPlugin.startSessionFrame({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      session_frame_name: this.sessionName,
    });
    this.showList = true;
  }
}
