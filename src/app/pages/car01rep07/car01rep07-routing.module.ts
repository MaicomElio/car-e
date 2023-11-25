import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep07 } from './car01rep07.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep07
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep07PageRoutingModule {}
