import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericListComponent} from "./generic-list.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [GenericListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GenericListComponent]
})
export class GenericListModule { }
