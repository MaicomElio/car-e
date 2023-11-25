import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep08 } from './car01rep08.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep08
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep08PageRoutingModule {}
