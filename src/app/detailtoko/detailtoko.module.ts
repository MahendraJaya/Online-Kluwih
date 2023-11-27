import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtokoPageRoutingModule } from './detailtoko-routing.module';

import { DetailtokoPage } from './detailtoko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtokoPageRoutingModule
  ],
  declarations: [DetailtokoPage]
})
export class DetailtokoPageModule {}
