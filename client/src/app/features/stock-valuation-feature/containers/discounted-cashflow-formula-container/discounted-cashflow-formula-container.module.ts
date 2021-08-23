import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiscountedCashflowFormulaContainerComponent} from "./discounted-cashflow-formula-container.component";
import {IonicModule} from "@ionic/angular";
import {GenericCardModule, NumberFormatterPipeModule, TableIncreasingItemModule} from "@shared";



@NgModule({
  declarations: [DiscountedCashflowFormulaContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    GenericCardModule,
    TableIncreasingItemModule,
    NumberFormatterPipeModule
  ],
  exports: [DiscountedCashflowFormulaContainerComponent]
})
export class DiscountedCashflowFormulaContainerModule { }
