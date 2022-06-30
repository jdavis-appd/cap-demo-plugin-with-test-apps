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
      className: string;
      methodName: string;
      callTracker: string;
      args: string[];
    }
  ];
  constructor() {}

  ngOnInit() {}

  beginCall() {
    const callPromise = async () => {
      const {
        call_tracker,
      } = await ADEUMMobileCapacitorPlugin.beginCall({
        className: this.className,
        methodName: this.methodName,
        withArguments: this.argField.split(",")
      });
      this.calls.push({})
    };
    callPromise();
  }
  }

  endCall(callTracker: string) {
    console.log(callTracker);
  }
}
