import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SymbolLookupModalComponent} from "./symbol-lookup-modal.component";
import {IonicModule} from "@ionic/angular";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FinancialChartContainerModule, GenericListModule, StockSummaryContainerModule} from "@shared";



@NgModule({
  declarations: [SymbolLookupModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatTooltipModule,
    FinancialChartContainerModule,
    GenericListModule,
    StockSummaryContainerModule
  ]
})
export class SymbolLookupModalModule { }
