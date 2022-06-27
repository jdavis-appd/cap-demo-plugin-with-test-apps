import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

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
    await ADEUMMobileCapacitorPlugin.;
  }
}
