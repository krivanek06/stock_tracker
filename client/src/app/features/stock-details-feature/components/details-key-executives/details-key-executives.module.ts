import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsKeyExecutivesComponent} from "./details-key-executives.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsKeyExecutivesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DetailsKeyExecutivesComponent]
})
export class DetailsKeyExecutivesModule { }
