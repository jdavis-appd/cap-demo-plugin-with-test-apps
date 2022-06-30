import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodcallsPage } from './methodcalls.page';

const routes: Routes = [
  {
    path: '',
    component: MethodcallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodcallsPageRoutingModule {}
