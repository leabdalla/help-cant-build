import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPage } from './wash.page';

const routes: Routes = [
  {
    path: '',
    component: WashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPageRoutingModule {}
