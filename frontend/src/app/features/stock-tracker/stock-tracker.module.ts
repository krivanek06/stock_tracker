import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { TableTopCardComponent } from "./components/cards/table-top-card/table-top-card.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StockWatchList } from "./store/stockWatchList/stockWatchList.effects";
import { WatchlistModalContainerComponent } from "./container/modal/watchlist-selector-modal-container/watchlist-modal-container.component";
import { TableWatchlistComponent } from "./components/cards/table-watchlist/table-watchlist.component";
import { WatchlistTablesContainerComponent } from "./container/watchlist-tables-container/watchlist-tables-container.component";
import { ArticleCardsComponent } from "./components/cards/article-cards/article-cards.component";
import { EarningsCardComponent } from "./components/cards/earnings-card/earnings-card.component";
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {StockPriceRangeCardComponent} from './components/cards/stock-price-range-card/stock-price-range-card.component';
import {StockPriceCardComponent} from './components/cards/stock-price-card/stock-price-card.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {DetailsOverviewCardComponent} from './components/cards/details-overview-card/details-overview-card.component';
import {DetailsDividendInfoComponent} from './components/cards/details-dividend-info/details-dividend-info.component';
import {DetailsMoneyInfoComponent} from './components/cards/details-money-info/details-money-info.component';
import {DetailsPercentageInfoComponent} from './components/cards/details-percentage-info/details-percentage-info.component';
import {DetailsRatioInfoComponent} from './components/cards/details-ratio-info/details-ratio-info.component';
import {EarningsChartComponent} from './components/charts/earnings-chart/earnings-chart.component';
import {RecommendationChartComponent} from './components/charts/recommendation-chart/recommendation-chart.component';
import {GrowthChartComponent} from './components/charts/growth-chart/growth-chart.component';
import {DetailsIncomeStatementComponent} from './components/cards/details-income-statement/details-income-statement.component';
import {DetailsCashFlowComponent} from './components/cards/details-cash-flow/details-cash-flow.component';
import {DetailsBalanceSheetComponent} from './components/cards/details-balance-sheet/details-balance-sheet.component';
import {RevenueGrowthSliderComponent} from './components/charts/revenue-growth-slider/revenue-growth-slider.component';

// reducers
import * as fromStockTracker from "./store";
import {DetailsSummaryModalComponent} from './components/modal/details-summary-modal/details-summary-modal.component';
import {ArticleComponent} from './components/flat/article/article.component';
import {DetailsRevenueGrowthSliderCardComponent} from './components/cards/details-revenue-growth-slider-card/details-revenue-growth-slider-card.component';



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
    DetailsOverviewCardComponent,
    DetailsDividendInfoComponent,
    DetailsMoneyInfoComponent,
    DetailsPercentageInfoComponent,
    DetailsRatioInfoComponent,
    EarningsChartComponent,
    RecommendationChartComponent,
    GrowthChartComponent,
    DetailsIncomeStatementComponent,
    DetailsCashFlowComponent,
    DetailsBalanceSheetComponent,
    RevenueGrowthSliderComponent,
    DetailsSummaryModalComponent,
    ArticleComponent,
    DetailsRevenueGrowthSliderCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([StockWatchList]),
    StoreModule.forFeature("stockTrackerModule", fromStockTracker.reducers),
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
    DetailsOverviewCardComponent,
    DetailsDividendInfoComponent,
    DetailsMoneyInfoComponent,
    DetailsPercentageInfoComponent,
    DetailsRatioInfoComponent,
    EarningsChartComponent,
    RecommendationChartComponent,
    GrowthChartComponent,
    DetailsIncomeStatementComponent,
    DetailsCashFlowComponent,
    DetailsBalanceSheetComponent,
    RevenueGrowthSliderComponent,
    DetailsSummaryModalComponent,
    ArticleComponent,
    DetailsRevenueGrowthSliderCardComponent

  ],
  entryComponents: [
    WatchlistModalContainerComponent,
    FinancialChartCardModalContainerComponent,
    DetailsSummaryModalComponent
  ],
})
export class StockTrackerModule {}
