import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompassPage } from './compass';

@NgModule({
  declarations: [
    CompassPage,
  ],
  imports: [
    IonicPageModule.forChild(CompassPage),
  ],
})
export class CompassPageModule {}
