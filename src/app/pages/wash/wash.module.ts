import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashPageRoutingModule } from './wash-routing.module';

import { WashPage } from './wash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPageRoutingModule
  ],
  declarations: [WashPage]
})
export class WashPageModule {}
