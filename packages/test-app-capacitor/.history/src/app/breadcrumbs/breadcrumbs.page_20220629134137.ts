import { Component, OnInit } from '@angular/core';

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
    const screenshotPromise = async () => {
      await ADEUMMobileCapacitorPlugin.blockScreenshots();
    };
    screenshotPromise();
    this.breadcrumbName = '';
  }

}
