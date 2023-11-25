import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01rep03 } from './car01rep03.page';

const routes: Routes = [
  {
    path: '',
    component: Car01rep03
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01rep03PageRoutingModule {}
