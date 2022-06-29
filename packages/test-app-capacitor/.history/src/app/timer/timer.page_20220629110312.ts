import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  timers: string[] = [];
  showList = false;
  timer = '';
  constructor() {}

  ngOnInit() {}

  newTimer() {
    this.timers.push(this.timer);
    const timerPromise = async () => {
      await ADEUMMobileCapacitorPlugin.startTimer(this.timer);
    };
    timerPromise();
    this.timer = '';
  }
  stopTimer(timer) {
    this.timers.forEach((val, idx) => {
      if (val === timer) {
        this.timers.splice(idx);
      }
    });
  }
}
