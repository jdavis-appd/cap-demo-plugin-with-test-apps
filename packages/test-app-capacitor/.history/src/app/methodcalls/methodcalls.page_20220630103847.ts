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
  args: string[] = [];
  calls = [];
  constructor() {}

  ngOnInit() {}

  beginCall() {
    const callPromise = async () => {
      if(this.argField.length > 0){ this.args = }
      const { call_tracker } = await ADEUMMobileCapacitorPlugin.beginCall({
        className: this.className,
        methodName: this.methodName,
        withArguments: ,
      });
      this.calls.push({
        callTracker: call_tracker,
        className: this.className,
        methodName: this.methodName,
        args: this.argField.split(','),
      });
      this.className = undefined;
      this.methodName = undefined;
      this.argField = [];
    };
    callPromise();
  }

  endCall(callTracker: string) {
    console.log(callTracker);
    const callPromise = async () => {
      await ADEUMMobileCapacitorPlugin.endCall({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        call_tracker: callTracker,
      });
      this.calls.forEach((val, idx) => {
        if (val.callTracker === callTracker) {
          this.calls.splice(idx, 1);
        }
      });
    };
    callPromise();
  }
}