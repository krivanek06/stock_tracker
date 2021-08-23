import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EarningsValuationFormulaContainerComponent} from "./earnings-valuation-formula-container.component";
import {GenericCardModule, RangeRatingSliderModule} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [EarningsValuationFormulaContainerComponent],
  imports: [
    CommonModule,
    RangeRatingSliderModule,
    IonicModule,
    GenericCardModule
  ],
  exports: [EarningsValuationFormulaContainerComponent]
})
export class EarningsValuationFormulaContainerModule { }
