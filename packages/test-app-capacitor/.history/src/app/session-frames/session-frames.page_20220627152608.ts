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
  sessionFrame_guid = '';
  constructor() {}

  ngOnInit() {}

  newSession() {
    console.log(this.sessionName);
    let sessionFramePromise = async () => {
      await ADEUMMobileCapacitorPlugin.startSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame_name: this.sessionName,
      });
    };
    this.session_frame_guid = sessionFramePromise;
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
