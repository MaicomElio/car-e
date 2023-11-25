import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep09 } from './car01rep09.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep09
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep09PageRoutingModule {}
