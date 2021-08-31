import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmisorPage } from './emisor.page';

const routes: Routes = [
  {
    path: '',
    component: EmisorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmisorPageRoutingModule {}
