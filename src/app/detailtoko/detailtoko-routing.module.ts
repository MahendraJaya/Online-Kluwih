import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailtokoPage } from './detailtoko.page';

const routes: Routes = [
  {
    path: '',
    component: DetailtokoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailtokoPageRoutingModule {}
