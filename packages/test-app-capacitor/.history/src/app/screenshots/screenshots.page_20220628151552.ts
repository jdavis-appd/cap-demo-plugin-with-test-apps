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

  changeScreen(action) {
    if (action == 'Block'){ this.action = 'Unblock'}
  }

}
