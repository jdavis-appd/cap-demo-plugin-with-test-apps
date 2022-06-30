import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.page.html',
  styleUrls: ['./userdata.page.scss'],
})
export class UserdataPage implements OnInit {
  userDataKey: string = undefined;
  userDataValue: string = undefined;
  userData = [];
  constructor() {}

  ngOnInit() {}

  newUserData() {
    const metricPromise = async () => {
      await ADEUMMobileCapacitorPlugin.setUserData({
        key: this.userDataKey,
        value: this.userDataValue,
      });
    };
    metricPromise();
    this.userData.push({
      key: this.userDataKey,
      value: this.userDataValue,
    });
    this.userDataKey = undefined;
    this.userDataValue = undefined;
  }
  removeUserData(key) {
    const metricPromise = async () => {
      await ADEUMMobileCapacitorPlugin.removeUserData({
        key: this.userDataKey,
        value: this.userDataValue,
      });
    };
    metricPromise();
    this.userData.push({
      key: this.userDataKey,
      value: this.userDataValue,
    });
    this.userDataKey = undefined;
    this.userDataValue = undefined;
  }
}