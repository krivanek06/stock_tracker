import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsTableComponent} from "./transactions-table.component";
import {IonicModule} from "@ionic/angular";
import {PriceChangeItemModule} from "@shared";
import {DefaultImgDirectiveModule} from "../../../../../shared/directives/default-img-directive/default-img-directive.module";



@NgModule({
  declarations: [TransactionsTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceChangeItemModule,
    DefaultImgDirectiveModule
  ],
  exports: [TransactionsTableComponent]
})
export class TransactionsTableModule { }
