import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomMetricsPageRoutingModule } from './custom-metrics-routing.module';

import { CustomMetricsPage } from './custom-metrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomMetricsPageRoutingModule
  ],
  declarations: [CustomMetricsPage]
})
export class CustomMetricsPageModule {}
