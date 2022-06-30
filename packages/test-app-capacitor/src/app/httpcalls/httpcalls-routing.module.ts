import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpcallsPage } from './httpcalls.page';

const routes: Routes = [
  {
    path: '',
    component: HttpcallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpcallsPageRoutingModule {}
