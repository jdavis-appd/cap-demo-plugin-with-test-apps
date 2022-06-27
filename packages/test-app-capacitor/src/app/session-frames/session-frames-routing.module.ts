import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionFramesPage } from './session-frames.page';

const routes: Routes = [
  {
    path: '',
    component: SessionFramesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionFramesPageRoutingModule {}
