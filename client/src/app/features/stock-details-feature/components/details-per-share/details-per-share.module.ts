import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsPerShareComponent} from "./details-per-share.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "@shared";



@NgModule({
  declarations: [DetailsPerShareComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [DetailsPerShareComponent]
})
export class DetailsPerShareModule { }
