import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep06 } from './car01rep06.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep06
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep06PageRoutingModule {}
