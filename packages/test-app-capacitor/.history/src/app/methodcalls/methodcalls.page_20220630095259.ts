import { Component, OnInit } from '@angular/core';

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
    c
  }

  endCall(callTracker: string) {
    console.log(callTracker);
  }
}
