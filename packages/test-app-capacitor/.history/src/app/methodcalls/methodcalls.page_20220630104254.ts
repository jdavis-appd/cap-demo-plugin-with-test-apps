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
  args: [] = [];
  calls = [];
  constructor() {}

  ngOnInit() {}

  beginCall() {
    const callPromise = async () => {
      if (this.argFieldthis.argField.length > 0) {
        this.args = this.argField.split(',');
      }
      const { call_tracker } = await ADEUMMobileCapacitorPlugin.beginCall({
        className: this.className,
        methodName: this.methodName,
        withArguments: this.args,
      });
      this.calls.push({
        callTracker: call_tracker,
        className: this.className,
        methodName: this.methodName,
        args: this.args,
      });
      this.className = undefined;
      this.methodName = undefined;
      this.argField = undefined;
      this.args = [];
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
