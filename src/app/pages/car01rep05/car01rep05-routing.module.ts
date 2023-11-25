import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep05 } from './car01rep05.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep05
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep05PageRoutingModule {}
