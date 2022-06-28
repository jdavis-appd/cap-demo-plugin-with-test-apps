import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'ap';

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
    ADEUMMobileCapacitorPlugin.startSessionFrame({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      session_frame_name: this.sessionName,
    });
  }
}
