import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenshotsPage } from './screenshots.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenshotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenshotsPageRoutingModule {}
