import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TableTopCardComponent} from './components/cards/table-top-card/table-top-card.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StockWatchList} from './store/stockWatchList/stockWatchList.effects';
import {WatchlistModalContainerComponent} from './container/modal/watchlist-selector-modal-container/watchlist-modal-container.component';
import {TableWatchlistComponent} from './components/table-watchlist/table-watchlist.component';
import {WatchlistTablesContainerComponent} from './container/watchlist-tables-container/watchlist-tables-container.component';
import {ArticleCardsComponent} from './components/cards/article-cards/article-cards.component';
import {EarningsCardComponent} from './components/cards/earnings-card/earnings-card.component';
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {StockPriceRangeCardComponent} from './components/cards/stock-price-range-card/stock-price-range-card.component';
import {StockPriceCardComponent} from './components/cards/stock-price-card/stock-price-card.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {DetailsEarningsChartCardComponent} from '../stock-details-feature/components/card/details-earnings-chart-card/details-earnings-chart-card.component';
import {ArticleComponent} from './components/flat/article/article.component';

// reducers
import * as fromStockTracker from './store';


@NgModule({
    declarations: [
        TableTopCardComponent,
        WatchlistModalContainerComponent,
        TableWatchlistComponent,
        WatchlistTablesContainerComponent,
        ArticleCardsComponent,
        EarningsCardComponent,
        FinancialChartCardModalContainerComponent,
        StockPriceRangeCardComponent,
        StockPriceCardComponent,
        FinancialChartContainerComponent,
        ArticleComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        EffectsModule.forFeature([StockWatchList]),
        StoreModule.forFeature('stockTrackerModule', fromStockTracker.reducers),
    ],
    exports: [
        TableTopCardComponent,
        WatchlistModalContainerComponent,
        TableWatchlistComponent,
        WatchlistTablesContainerComponent,
        ArticleCardsComponent,
        EarningsCardComponent,
        FinancialChartCardModalContainerComponent,
        StockPriceRangeCardComponent,
        StockPriceCardComponent,
        FinancialChartContainerComponent,
        ArticleComponent,
    ],
    entryComponents: [
        WatchlistModalContainerComponent,
        FinancialChartCardModalContainerComponent,
    ],
})
export class StockTrackerModule {
}
