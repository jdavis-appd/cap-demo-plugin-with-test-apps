import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methodcalls',
  templateUrl: './methodcalls.page.html',
  styleUrls: ['./methodcalls.page.scss'],
})
export class MethodcallsPage implements OnInit {
  methodName = undefined;
  className = undefined;
  args: string[] = [];
  constructor() {}

  ngOnInit() {}

  beginCall(){}

  endCall(call){}
}
