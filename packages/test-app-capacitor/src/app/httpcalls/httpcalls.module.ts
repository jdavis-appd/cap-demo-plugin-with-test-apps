import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpcallsPageRoutingModule } from './httpcalls-routing.module';

import { HttpcallsPage } from './httpcalls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpcallsPageRoutingModule
  ],
  declarations: [HttpcallsPage]
})
export class HttpcallsPageModule {}
