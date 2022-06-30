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
    const userDataPromise = async () => {
      await ADEUMMobileCapacitorPlugin.setUserData({
        key: this.userDataKey,
        value: this.userDataValue,
      });
    };
    userDataPromise();
    this.userData.push({
      key: this.userDataKey,
      value: this.userDataValue,
    });
    this.userDataKey = undefined;
    this.userDataValue = undefined;
  }
  removeUserData(key: string) {
    this.userData.forEach((val, idx) => {
      if(val.key === key){
        const userDataPromise = async () => {
          await ADEUMMobileCapacitorPlugin.removeUserData({
            key: key
          });
        };
        userDataPromise();
        this.userData.splice(idx, 1);
      }
    });
  }
}
