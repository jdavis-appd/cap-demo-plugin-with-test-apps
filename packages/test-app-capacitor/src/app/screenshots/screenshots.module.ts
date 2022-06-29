import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenshotsPageRoutingModule } from './screenshots-routing.module';

import { ScreenshotsPage } from './screenshots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenshotsPageRoutingModule
  ],
  declarations: [ScreenshotsPage]
})
export class ScreenshotsPageModule {}
