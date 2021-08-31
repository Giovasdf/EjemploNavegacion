import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesMaterialPage } from './componentes-material.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesMaterialPageRoutingModule {}
