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
        await ADEUMMobileCapacitorPlugin.blockScreen();
        
      };
      sessionFramePromise();
      return;
    }
    this.action = 'Block';
  }

}