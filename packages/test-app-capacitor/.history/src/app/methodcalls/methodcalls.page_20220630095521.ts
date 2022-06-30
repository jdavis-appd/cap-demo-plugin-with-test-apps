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
      } = await ADEUMMobileCapacitorPlugin.startSessionFrame({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        session_frame_name: this.sessionName,
      });
      this.sessionFrameGuid = session_frame;
      console.log(session_frame);
      console.log(this.sessionFrameGuid);
      this.showList = true;
    };
    callPromise();
  }
  }

  endCall(callTracker: string) {
    console.log(callTracker);
  }
}
