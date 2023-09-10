import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01newrepPage } from './car01newrep.page';

const routes: Routes = [
  {
    path: '',
    component: Car01newrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01newrepPageRoutingModule {}
