import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { TableTopCardComponent } from "./components/cards/table-top-card/table-top-card.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StockWatchList } from "./store/stockWatchList/stockWatchList.effects";
import { WatchlistModalContainerComponent } from "./container/modal/watchlist-selector-modal-container/watchlist-modal-container.component";
import { TableWatchlistComponent } from "./components/table-watchlist/table-watchlist.component";
import { WatchlistTablesContainerComponent } from "./container/watchlist-tables-container/watchlist-tables-container.component";
import { ArticleCardsComponent } from "./components/cards/article-cards/article-cards.component";
import { EarningsCardComponent } from "./components/cards/earnings-card/earnings-card.component";
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {StockPriceRangeCardComponent} from './components/cards/stock-price-range-card/stock-price-range-card.component';
import {StockPriceCardComponent} from './components/cards/stock-price-card/stock-price-card.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {DetailsOverviewCardComponent} from './components/cards/details-overview-card/details-overview-card.component';
import {DetailsDividendCardComponent} from './components/cards/details-dividend-card/details-dividend-card.component';
import {DetailsValuationCardComponent} from './components/cards/details-valuation-card/details-valuation-card.component';
import {DetailsFinancialStrengthCardComponent} from './components/cards/details-financial-strength-card/details-financial-strength-card.component';
import {DetailsPerShareCardComponent} from './components/cards/details-per-share-card/details-per-share-card.component';
import {EarningsChartComponent} from './components/charts/earnings-chart/earnings-chart.component';
import {RecommendationChartComponent} from './components/charts/recommendation-chart/recommendation-chart.component';
import {DetailsIncomeStatementCardComponent} from './components/cards/details-income-statement-card/details-income-statement-card.component';
import {DetailsCashFlowCardComponent} from './components/cards/details-cash-flow-card/details-cash-flow-card.component';
import {DetailsBalanceSheetCardComponent} from './components/cards/details-balance-sheet-card/details-balance-sheet-card.component';
import {RevenueGrowthSliderComponent} from './components/charts/revenue-growth-slider/revenue-growth-slider.component';

// reducers
import * as fromStockTracker from "./store";
import {DetailsSummaryModalComponent} from './components/modal/details-summary-modal/details-summary-modal.component';
import {ArticleComponent} from './components/flat/article/article.component';
import {DetailsRevenueGrowthSliderCardComponent} from './components/cards/details-revenue-growth-slider-card/details-revenue-growth-slider-card.component';
import {DetialsFinancialStrengthRatioCardComponent} from './components/cards/detials-financial-strength-ratio-card/detials-financial-strength-ratio-card.component';
import {DetailsFinancialReportNamesCardComponent} from './components/cards/details-financial-report-names-card/details-financial-report-names-card.component';
import {DetailsFinancialReportModalComponent} from './components/modal/details-financial-report-modal/details-financial-report-modal.component';



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
    DetailsDividendCardComponent,
    DetailsValuationCardComponent,
    DetailsFinancialStrengthCardComponent,
    DetailsPerShareCardComponent,
    EarningsChartComponent,
    RecommendationChartComponent,
    DetailsIncomeStatementCardComponent,
    DetailsCashFlowCardComponent,
    DetailsBalanceSheetCardComponent,
    RevenueGrowthSliderComponent,
    DetailsSummaryModalComponent,
    ArticleComponent,
    DetailsRevenueGrowthSliderCardComponent,
    DetialsFinancialStrengthRatioCardComponent,
    DetailsFinancialReportNamesCardComponent,
    DetailsFinancialReportModalComponent
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
    DetailsDividendCardComponent,
    DetailsValuationCardComponent,
    DetailsFinancialStrengthCardComponent,
    DetailsPerShareCardComponent,
    EarningsChartComponent,
    RecommendationChartComponent,
    DetailsIncomeStatementCardComponent,
    DetailsCashFlowCardComponent,
    DetailsBalanceSheetCardComponent,
    RevenueGrowthSliderComponent,
    DetailsSummaryModalComponent,
    ArticleComponent,
    DetailsRevenueGrowthSliderCardComponent,
    DetialsFinancialStrengthRatioCardComponent,
    DetailsFinancialReportNamesCardComponent,
    DetailsFinancialReportModalComponent

  ],
  entryComponents: [
    WatchlistModalContainerComponent,
    FinancialChartCardModalContainerComponent,
    DetailsSummaryModalComponent,
    DetailsFinancialReportModalComponent
  ],
})
export class StockTrackerModule {}
