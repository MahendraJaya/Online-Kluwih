import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpsimodalPageRoutingModule } from './opsimodal-routing.module';

import { OpsimodalPage } from './opsimodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpsimodalPageRoutingModule
  ],
  declarations: [OpsimodalPage]
})
export class OpsimodalPageModule {}
