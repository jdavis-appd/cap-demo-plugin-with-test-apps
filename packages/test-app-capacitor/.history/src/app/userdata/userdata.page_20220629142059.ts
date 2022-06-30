import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.page.html',
  styleUrls: ['./userdata.page.scss'],
})
export class UserdataPage implements OnInit {

  metricName: string = undefined;
  metricValue: number = undefined;
  metrics = [];
  constructor() {}

  ngOnInit() {}

  newMetric() {
    const metricPromise = async () => {
      await ADEUMMobileCapacitorPlugin.reportMetricWithName({name: this.metricName, value: this.metricValue});
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
