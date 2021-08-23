import {NgModule} from '@angular/core';
import {StockDetailsFinancialComponent} from './stock-details-financial.component';
import {FinancialReportsContainerComponent, FinancialStatementsContainerComponent} from './containers';
import {SharedModule} from '@shared';
import {StockDetailsFeatureModule} from '@stock-details-feature';


@NgModule({
    declarations: [
        StockDetailsFinancialComponent,
        FinancialStatementsContainerComponent,
        FinancialReportsContainerComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
    ]
})
export class StockDetailsFinancialModule {
}
