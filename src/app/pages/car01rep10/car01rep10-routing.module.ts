import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep10 } from './car01rep10.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep10
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep10PageRoutingModule {}
