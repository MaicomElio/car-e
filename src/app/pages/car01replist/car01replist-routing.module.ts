import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car01replistPage } from './car01replist.page';

const routes: Routes = [
  {
    path: '',
    component: Car01replistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car01replistPageRoutingModule {}
