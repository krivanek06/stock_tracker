import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockDetailsValuationComponent} from "./stock-details-valuation.component";
import {RouterModule, Routes} from "@angular/router";
import {
    DiscountedCashflowFormulaContainerModule,
    DividendDiscountedFormulaContainerModule,
    EarningsValuationFormulaContainerModule,
    FreeCashflowFormulaContainerModule
} from "@stock-valuation-feature";


const routes: Routes = [
    {
        path: '',
        component: StockDetailsValuationComponent,
    }
]

@NgModule({
    declarations: [StockDetailsValuationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FreeCashflowFormulaContainerModule,
        DiscountedCashflowFormulaContainerModule,
        EarningsValuationFormulaContainerModule,
        DividendDiscountedFormulaContainerModule,
    ],
    exports: [StockDetailsValuationComponent]
})
export class StockDetailsValuationModule {
}
