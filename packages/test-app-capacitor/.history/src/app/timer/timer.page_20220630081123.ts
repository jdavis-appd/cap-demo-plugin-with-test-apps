import { Component, OnInit } from '@angular/core';
//import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

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
      await ADEUMMobileCapacitorPlugin.startTimer({ name: this.timer });
    };
    timerPromise();
    this.timer = '';
  }
  stopTimer(timer) {
    this.timers.forEach((val, idx) => {
      if (val === timer) {
        const timerPromise = async () => {
          await ADEUMMobileCapacitorPlugin.stopTimer({ name: timer });
        };
        timerPromise();
        this.timers.splice(idx, 1);
      }
    });
  }
}
