import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-metrics',
  templateUrl: './custom-metrics.page.html',
  styleUrls: ['./custom-metrics.page.scss'],
})
export class CustomMetricsPage implements OnInit {
  metricName: string = undefined;
  metricValue: number = undefined;
  metrics = [];
  constructor() {}

  ngOnInit() {}

  newMetric() {
    const metricPromise = async () => {
      await ADEUMMobileCapacitorPlugin.stopTimer({name: timer});
    };
    timerPromise();
    this.metrics.push({
      metricName: this.metricName,
      metricValue: this.metricValue,
    });
    this.metricName = undefined;
    this.metricValue = undefined;
  }
}