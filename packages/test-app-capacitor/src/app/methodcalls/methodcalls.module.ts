import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MethodcallsPageRoutingModule } from './methodcalls-routing.module';

import { MethodcallsPage } from './methodcalls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodcallsPageRoutingModule
  ],
  declarations: [MethodcallsPage]
})
export class MethodcallsPageModule {}
