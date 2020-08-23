import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardsComponent} from './components/article-cards/article-cards.component';
import {FinancialChartModalContainerComponent} from './container/modal/financial-chart-modal-container/financial-chart-modal-container.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {SharedModule} from '../../shared/shared.module';
import {SymbolMovementTableCardComponent} from './components/symbol-movement-table-card/symbol-movement-table-card.component';
import {EconomicChartModalContainerComponent} from './container/modal/economic-chart-modal-container/economic-chart-modal-container.component';


@NgModule({
    declarations: [
        ArticleCardsComponent,
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        SymbolMovementTableCardComponent,
        EconomicChartModalContainerComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        SymbolMovementTableCardComponent,
        EconomicChartModalContainerComponent,
        ArticleCardsComponent
    ],
    entryComponents: [
        FinancialChartModalContainerComponent,
        EconomicChartModalContainerComponent
    ],
})
export class StockDataFeatureModule {
}
