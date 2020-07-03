import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {TimelineChartComponent, TimelineChartContainerDialogComponent} from './container/timeline-chart-container/timeline-chart.component';
import {TableTopComponent} from './components/table-top/table-top.component';
import {DashboardTopTableContainerComponent} from './container/dashboard-top-table-container/dashboard-top-table-container.component';
import {MarketArticleComponent} from './components/market-article/market-article.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StockWatchList} from './store/stockWatchList/stockWatchList.effects';
import {DetailsComponent} from './view/details/details.component';
import {WatchlistComponent} from './view/watchlist/watchlist.component';
import { WatchlistModalContainerComponent } from './container/watchlist-selector-modal-container/watchlist-modal-container.component';


import * as fromStockTracker from './store';
import { TableWatchlistComponent } from './components/table-watchlist/table-watchlist.component';
import { WatchlistTablesContainerComponent } from './container/watchlist-tables-container/watchlist-tables-container.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'details', component: DetailsComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [
    DashboardComponent,
    TimelineChartComponent,
    TableTopComponent,
    DashboardTopTableContainerComponent,
    MarketArticleComponent,
    TimelineChartContainerDialogComponent,
    DetailsComponent,
    WatchlistComponent,
    WatchlistModalContainerComponent,
    TableWatchlistComponent,
    WatchlistTablesContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([StockWatchList]),
    StoreModule.forFeature('stockTrackerModule', fromStockTracker.reducers)
  ],
  entryComponents: [
    TimelineChartContainerDialogComponent,
    WatchlistModalContainerComponent
  ]
})
export class StockTrackerModule {
}
