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
  calls: [];
  constructor() {}

  ngOnInit() {}

  beginCall() {}

  endCall(callTracker: string) {
    console.log(callTracker);
  }
}
