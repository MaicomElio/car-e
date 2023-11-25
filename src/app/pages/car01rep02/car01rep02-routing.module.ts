import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep02 } from './car01rep02.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep02
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep02PageRoutingModule {}
