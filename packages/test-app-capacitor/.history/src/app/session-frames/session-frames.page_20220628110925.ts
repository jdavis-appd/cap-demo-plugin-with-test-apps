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
    ADEUMMobileCapacitorPlugin.getVersion().then((data) => {
      console.log(data);
    });
    const agent_version = async () => {
      const status = await ADEUMMobileCapacitorPlugin.getVersion();

      console.log('Network status:', status);
    };

    console.log(agent_version);
    /* const sessionFramePromise = async () => {
      const {
        session_frame,
      } = await ADEUMMobileCapacitorPlugin.startSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame_name: this.sessionName,
      });
      this.sessionFrameGuid = session_frame;
      console.log(session_frame);
    };
    console.log(sessionFramePromise);
    console.log(this.sessionFrameGuid); */
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
