import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.page.html',
  styleUrls: ['./screenshots.page.scss'],
})
export class ScreenshotsPage implements OnInit {
  isScreenBlocked = false;
  action = 'Block';
  constructor() {}

  ngOnInit() {}

  changeScreen(action: string) {
    if (action === 'Block') {
      this.action = 'Unblock';
      const screenshotPromise = async () => {
        await ADEUMMobileCapacitorPlugin.blockScreenshots();
      };
      screenshotPromise();
      const getscreenPromise = async () => {
        const {
          session_frame,
        } = await ADEUMMobileCapacitorPlugin.startSesionFrame({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          session_frame_name: this.sessionName,
        });
        this.sessionFrameGuid = session_frame;
        console.log(session_frame);
        console.log(this.sessionFrameGuid);
        this.showList = true;
      };
      return;
    }
    this.action = 'Block';
  }
}
