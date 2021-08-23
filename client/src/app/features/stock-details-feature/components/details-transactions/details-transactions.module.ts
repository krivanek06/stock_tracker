import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsTransactionsComponent} from "./details-transactions.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule, ReverseArrayPipeModule} from "@shared";



@NgModule({
  declarations: [DetailsTransactionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReverseArrayPipeModule,
    NumberFormatterPipeModule
  ],
  exports: [DetailsTransactionsComponent]
})
export class DetailsTransactionsModule { }
