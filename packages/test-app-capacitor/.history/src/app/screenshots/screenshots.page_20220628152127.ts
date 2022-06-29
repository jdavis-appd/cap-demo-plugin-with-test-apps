import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.page.html',
  styleUrls: ['./screenshots.page.scss'],
})
export class ScreenshotsPage implements OnInit {
  isScreenBlocked = false;
  action = 'Block';
  constructor() { }

  ngOnInit() {
  }

  changeScreen(action: string) {

    if (action === 'Block'){
      this.action = 'Unblock';
      const screenshotPromise = async () => {
        await ADEUMMobileCapacitorPlugin.bl({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          session_frame: this.sessionFrameGuid,
        });
        this.sessionFrameGuid = '';
        this.sessionName = '';
        this.sessionNameUpdate = '';
        this.showList = false;
      };
      sessionFramePromise();
      return;
    }
    this.action = 'Block';
  }

}
