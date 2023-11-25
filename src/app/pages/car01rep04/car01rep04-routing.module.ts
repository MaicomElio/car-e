import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep04 } from './car01rep04.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep04
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep04PageRoutingModule {}
