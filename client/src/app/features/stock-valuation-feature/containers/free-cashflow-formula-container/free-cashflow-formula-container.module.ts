import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FreeCashflowFormulaContainerComponent} from "./free-cashflow-formula-container.component";
import {IonicModule} from "@ionic/angular";
import {GenericCardModule, NumberFormatterPipeModule, TableIncreasingItemModule} from "@shared";



@NgModule({
  declarations: [FreeCashflowFormulaContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule,
    TableIncreasingItemModule,
    GenericCardModule
  ],
  exports: [FreeCashflowFormulaContainerComponent]
})
export class FreeCashflowFormulaContainerModule { }
