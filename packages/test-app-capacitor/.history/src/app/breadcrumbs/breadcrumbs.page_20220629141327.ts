import { Component, OnInit } from '@angular/core';
import { ADEUMMobileCapacitorPlugin } from 'appd-ionic-capacitor-plugin';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
})
export class BreadcrumbsPage implements OnInit {
  breadcrumbName = '';
  crumbs = [];
  constructor() { }

  ngOnInit() {
  }

  newBreadCrumb(){
    this.crumbs.push(this.breadcrumbName);
    const crumbPromise = async () => {
      await ADEUMMobileCapacitorPlugin.leaveBreadcrumb({name: this.breadcrumbName});
      //TODO does not seem to be working with controller yet need to figure out
    };
    crumbPromise();
    this.breadcrumbName = '';
  }

}
