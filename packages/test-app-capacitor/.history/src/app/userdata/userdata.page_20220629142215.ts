import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.page.html',
  styleUrls: ['./userdata.page.scss'],
})
export class UserdataPage implements OnInit {

  userDataKey: string = undefined;
  userDataValue: string = undefined;
  userdata = [];
  constructor() {}

  ngOnInit() {}

  newUserData() {
    const metricPromise = async () => {
      await ADEUMMobileCapacitorPlugin.setUserData({key: this.metricName, value: this.metricValue});
    };
    metricPromise();
    this.metrics.push({
      metricName: this.metricName,
      metricValue: this.metricValue,
    });
    this.metricName = undefined;
    this.metricValue = undefined;
  }

}
