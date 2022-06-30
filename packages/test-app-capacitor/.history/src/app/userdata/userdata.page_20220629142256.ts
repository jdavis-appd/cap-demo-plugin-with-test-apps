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
      await ADEUMMobileCapacitorPlugin.setUserData({key: this.userDataKey, value: this.userDataValue});
    };
    metricPromise();
    this.userdata.push({
      key: this.userDataKey,
      metricValue: this.metricValue,
    });
    this.metricName = undefined;
    this.metricValue = undefined;
  }

}
