import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01Page } from './car01.page';

const routes: Routes = [
  {
    path: '',
    component: Car01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01PageRoutingModule {}
