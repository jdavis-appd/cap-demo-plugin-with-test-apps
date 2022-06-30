/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-methodcalls',
  templateUrl: './methodcalls.page.html',
  styleUrls: ['./methodcalls.page.scss'],
})
export class MethodcallsPage implements OnInit {
  methodName = undefined;
  className = undefined;
  argField = undefined;
  //args: string[] = [];
  calls: [
    {
      callTracker: string;
      className: string;
      methodName: string;
      args: string[];
    }
  ];
  constructor() {}

  ngOnInit() {}

  beginCall() {
    const callPromise = async () => {
      const { call_tracker } = await ADEUMMobileCapacitorPlugin.beginCall({
        className: this.className,
        methodName: this.methodName,
        withArguments: this.argField.split(','),
      });
      this.calls.push({
        callTracker: call_tracker,
        className: this.className,
        methodName: this.methodName,
        args: this.argField.split(','),
      });
    };
    callPromise();
    this.className = undefined;
    this.me
  }

  endCall(callTracker: string) {
    console.log(callTracker);
  }
}
