import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionFramesPageRoutingModule } from './session-frames-routing.module';

import { SessionFramesPage } from './session-frames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionFramesPageRoutingModule
  ],
  declarations: [SessionFramesPage]
})
export class SessionFramesPageModule {}
