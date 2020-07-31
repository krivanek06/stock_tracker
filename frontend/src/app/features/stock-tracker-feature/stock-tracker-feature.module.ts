import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardsComponent} from './components/cards/article-cards/article-cards.component';
import {EarningsCardComponent} from './components/cards/earnings-card/earnings-card.component';
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {StockPriceRangeCardComponent} from './components/cards/stock-price-range-card/stock-price-range-card.component';
import {StockPriceCardComponent} from './components/cards/stock-price-card/stock-price-card.component';
import {TableTopCardComponent} from './components/cards/table-top-card/table-top-card.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {ArticleComponent} from './components/flat/article/article.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        ArticleCardsComponent,
        EarningsCardComponent,
        FinancialChartCardModalContainerComponent,
        StockPriceRangeCardComponent,
        StockPriceCardComponent,
        TableTopCardComponent,
        FinancialChartContainerComponent,
        ArticleComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ArticleCardsComponent,
        EarningsCardComponent,
        FinancialChartCardModalContainerComponent,
        StockPriceRangeCardComponent,
        StockPriceCardComponent,
        TableTopCardComponent,
        FinancialChartContainerComponent,
        ArticleComponent
    ],
    entryComponents: [
        FinancialChartCardModalContainerComponent,
    ],
})
export class StockTrackerFeatureModule {
}
