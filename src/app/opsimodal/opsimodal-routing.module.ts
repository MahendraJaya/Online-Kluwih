import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpsimodalPage } from './opsimodal.page';

const routes: Routes = [
  {
    path: '',
    component: OpsimodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsimodalPageRoutingModule {}
