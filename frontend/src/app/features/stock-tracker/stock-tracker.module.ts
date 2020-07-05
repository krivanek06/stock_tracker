import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TimelineChartComponent, TimelineChartContainerDialogComponent} from './container/timeline-chart-container/timeline-chart.component';
import {TableTopComponent} from './components/table-top/table-top.component';
import {DashboardTopTableContainerComponent} from './container/dashboard-top-table-container/dashboard-top-table-container.component';
import {MarketArticleComponent} from './components/market-article/market-article.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StockWatchList} from './store/stockWatchList/stockWatchList.effects';
import {WatchlistModalContainerComponent} from './container/watchlist-selector-modal-container/watchlist-modal-container.component';
import {TableWatchlistComponent} from './components/table-watchlist/table-watchlist.component';
import {WatchlistTablesContainerComponent} from './container/watchlist-tables-container/watchlist-tables-container.component';

// reducers
import * as fromStockTracker from './store';

@NgModule({
  declarations: [
    TimelineChartComponent,
    TableTopComponent,
    DashboardTopTableContainerComponent,
    MarketArticleComponent,
    TimelineChartContainerDialogComponent,
    WatchlistModalContainerComponent,
    TableWatchlistComponent,
    WatchlistTablesContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([StockWatchList]),
    StoreModule.forFeature('stockTrackerModule', fromStockTracker.reducers)
  ],
  exports: [
    TimelineChartComponent,
    TableTopComponent,
    DashboardTopTableContainerComponent,
    MarketArticleComponent,
    TimelineChartContainerDialogComponent,
    WatchlistModalContainerComponent,
    TableWatchlistComponent,
    WatchlistTablesContainerComponent
  ],
  entryComponents: [
    TimelineChartContainerDialogComponent,
    WatchlistModalContainerComponent
  ]
})
export class StockTrackerModule {
}
