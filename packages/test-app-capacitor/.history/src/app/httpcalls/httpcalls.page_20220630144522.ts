/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-httpcalls',
  templateUrl: './httpcalls.page.html',
  styleUrls: ['./httpcalls.page.scss'],
})
export class HttpcallsPage implements OnInit {
  httpUrl: string = undefined;
  httpCalls = [];
  constructor() {}

  ngOnInit() {}

  newHttp() {
    console.log(this.httpUrl);
    const httpPromise = async () => {
      const {
        http_tracker,
      } = await ADEUMMobileCapacitorPlugin.beginHttpRequest({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        url: this.httpUrl,
      });
      this.httpCalls.push({
        http_tracker,
        url: this.httpUrl,
      });
      this.httpUrl = undefined;
    };
    httpPromise();
  }
  
  endHttp(httpTracker: string) {
    console.log(httpTracker);
    const httpPromise = async () => {
      await ADEUMMobileCapacitorPlugin.reportDone({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        http_tracker: httpTracker,
      });
      this.httpCalls.forEach((val, idx) => {
        if (val.http_tracker === httpTracker) {
          this.httpCalls.splice(idx, 1);
        }
      });
    };
    httpPromise();
  }
}
