import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmisorPageRoutingModule } from './emisor-routing.module';

import { EmisorPage } from './emisor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmisorPageRoutingModule
  ],
  declarations: [EmisorPage]
})
export class EmisorPageModule {}
