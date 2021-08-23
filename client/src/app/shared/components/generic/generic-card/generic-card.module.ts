import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericCardComponent} from "./generic-card.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [GenericCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GenericCardComponent]
})
export class GenericCardModule { }
