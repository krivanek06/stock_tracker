import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DividendDiscountedFormulaContainerComponent} from "./dividend-discounted-formula-container.component";
import {IonicModule} from "@ionic/angular";
import {GenericCardModule} from "@shared";



@NgModule({
  declarations: [DividendDiscountedFormulaContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    GenericCardModule
  ],
  exports: [DividendDiscountedFormulaContainerComponent]
})
export class DividendDiscountedFormulaContainerModule { }
