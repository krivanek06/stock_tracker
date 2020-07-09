import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { TableTopCardComponent } from "./components/table-top-card/table-top-card.component";
import { DashboardTopTableContainerComponent } from "./container/dashboard-top-table-container/dashboard-top-table-container.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StockWatchList } from "./store/stockWatchList/stockWatchList.effects";
import { WatchlistModalContainerComponent } from "./container/modal/watchlist-selector-modal-container/watchlist-modal-container.component";
import { TableWatchlistComponent } from "./components/table-watchlist/table-watchlist.component";
import { WatchlistTablesContainerComponent } from "./container/watchlist-tables-container/watchlist-tables-container.component";

// reducers
import * as fromStockTracker from "./store";
import { ArticleCardsComponent } from "./components/article-cards/article-cards.component";
import { EarningsCardComponent } from "./components/earnings-card/earnings-card.component";
import {DashboardChartContainerComponent} from './container/dashboard-chart-container/dashboard-chart-container.component';
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {StockPriceRangeCardComponent} from './components/stock-price-range-card/stock-price-range-card.component';
import {StockPriceCardComponent} from './components/stock-price-card/stock-price-card.component';
import {DashboardNewsContainerComponent} from './container/dashboard-news-container/dashboard-news-container.component';

@NgModule({
  declarations: [
    TableTopCardComponent,
    DashboardTopTableContainerComponent,
    WatchlistModalContainerComponent,
    TableWatchlistComponent,
    WatchlistTablesContainerComponent,
    ArticleCardsComponent,
    EarningsCardComponent,
    DashboardChartContainerComponent,
    FinancialChartCardModalContainerComponent,
    StockPriceRangeCardComponent,
    StockPriceCardComponent,
    DashboardNewsContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([StockWatchList]),
    StoreModule.forFeature("stockTrackerModule", fromStockTracker.reducers),
  ],
  exports: [
    TableTopCardComponent,
    DashboardTopTableContainerComponent,
    WatchlistModalContainerComponent,
    TableWatchlistComponent,
    WatchlistTablesContainerComponent,
    ArticleCardsComponent,
    EarningsCardComponent,
    DashboardChartContainerComponent,
    FinancialChartCardModalContainerComponent,
    StockPriceRangeCardComponent,
    StockPriceCardComponent,
    DashboardNewsContainerComponent
  ],
  entryComponents: [
    WatchlistModalContainerComponent,
    FinancialChartCardModalContainerComponent
  ],
})
export class StockTrackerModule {}
