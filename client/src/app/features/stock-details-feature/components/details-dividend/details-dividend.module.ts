import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsDividendComponent} from "./details-dividend.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "@shared";



@NgModule({
  declarations: [DetailsDividendComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [DetailsDividendComponent]
})
export class DetailsDividendModule { }
