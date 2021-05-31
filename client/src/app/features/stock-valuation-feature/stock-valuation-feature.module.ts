import {NgModule} from '@angular/core';
import {
    DiscountedCashflowFormulaComponent,
    DividendDiscountedFormulaComponent,
    EarningsValuationFormulaComponent,
    EarningsValuationFormulaVariablesComponent, FreeCashflowFormulaCheckboxComponent,
    FreeCashflowFormulaComponent
} from './components';
import {SharedModule} from '@shared';
import {
    DiscountedCashflowFormulaContainerComponent,
    DividendDiscountedFormulaContainerComponent,
    EarningsValuationFormulaContainerComponent, FreeCashflowFormulaContainerComponent
} from './containers';


@NgModule({
    declarations: [
        DiscountedCashflowFormulaComponent,
        DividendDiscountedFormulaComponent,
        EarningsValuationFormulaComponent,
        FreeCashflowFormulaComponent,
        EarningsValuationFormulaContainerComponent,
        EarningsValuationFormulaVariablesComponent,
        DiscountedCashflowFormulaContainerComponent,
        DividendDiscountedFormulaContainerComponent,
        FreeCashflowFormulaContainerComponent,
        FreeCashflowFormulaCheckboxComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        EarningsValuationFormulaContainerComponent,
        DiscountedCashflowFormulaContainerComponent,
        DividendDiscountedFormulaContainerComponent,
        FreeCashflowFormulaContainerComponent
    ]
})
export class StockValuationFeatureModule {
}
