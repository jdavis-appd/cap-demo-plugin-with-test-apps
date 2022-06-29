import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomMetricsPage } from './custom-metrics.page';

const routes: Routes = [
  {
    path: '',
    component: CustomMetricsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomMetricsPageRoutingModule {}
