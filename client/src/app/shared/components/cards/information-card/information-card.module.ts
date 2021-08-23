import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InformationCardComponent} from "./information-card.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [InformationCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [InformationCardComponent]
})
export class InformationCardModule { }
