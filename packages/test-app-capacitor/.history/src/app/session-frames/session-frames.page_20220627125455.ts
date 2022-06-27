import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapaADEUMMobileCapacitorPlugincitorPluginPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-session-frames',
  templateUrl: './session-frames.page.html',
  styleUrls: ['./session-frames.page.scss'],
})
export class SessionFramesPage implements OnInit {
  sessionName = '';
  constructor() {}

  ngOnInit() {}

  newSession() {
    console.log(this.sessionName);
    ADEUMMobileCapacitorPluginPlugin.startSessionFrame({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      session_frame_name: this.sessionName,
    });
  }
}
