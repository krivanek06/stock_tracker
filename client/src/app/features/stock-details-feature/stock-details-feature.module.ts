import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsDividendComponent} from './components/details-dividend/details-dividend.component';
import {DetailsValuationComponent} from './components/details-valuation/details-valuation.component';
import {DetailsFinancialStrengthComponent} from './components/details-financial-strength/details-financial-strength.component';
import {DetailsPerShareComponent} from './components/details-per-share/details-per-share.component';
import {DetailsStatementTableComponent} from './components/details-statement-table/details-statement-table.component';
import {DetailsRecommendationChartComponent} from './components/details-recommendation-chart/details-recommendation-chart.component';
import {DetailsFinancialStrengthRatioComponent} from './components/details-financial-strength-ratio/details-financial-strength-ratio.component';
import {DetailsFinancialReportModalComponent} from './entry-components/details-financial-report-modal/details-financial-report-modal.component';
import {DetailsEarningsPerShareChartComponent} from './components/details-earnings-per-share-chart/details-earnings-per-share-chart.component';
import {SharedModule} from '../../shared/shared.module';
import {GradingHistoryComponent} from './components/grading-history/grading-history.component';
import {StockTrendComponent} from './components/stock-trend/stock-trend.component';
import {SymbolLookupModalComponent} from './entry-components/symbol-lookup-modal/symbol-lookup-modal.component';
import {DetailsSummaryComponent} from './components/details-summary/details-summary.component';
import {DetailsRevenueEstimateComponent} from './components/details-revenue-estimate/details-revenue-estimate.component';
import {StockInfoListIdentificationComponent} from './components/stock-info-list-identification/stock-info-list-identification.component';
import {StockSearchComponent} from './containers/stock-search/stock-search.component';
import {RecommendationDirective} from '../../shared/directives/recommendation.directive';
import {SummarySectorChartComponent} from './components/summary-sector-chart/summary-sector-chart.component';
import {StockInfoListChangeComponent} from './components/stock-info-list-change/stock-info-list-change.component';
import {ArticleCardsComponent} from './components/card/article-cards/article-cards.component';
import {SymbolMovementTableCardComponent} from './components/card/symbol-movement-table-card/symbol-movement-table-card.component';


@NgModule({
    declarations: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementTableComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsFinancialReportModalComponent,
        DetailsEarningsPerShareChartComponent,
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryComponent,
        DetailsRevenueEstimateComponent,
        StockInfoListIdentificationComponent,
        StockSearchComponent,
        RecommendationDirective,
        SummarySectorChartComponent,
        StockInfoListChangeComponent,
        ArticleCardsComponent,
        SymbolMovementTableCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementTableComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsFinancialReportModalComponent,
        DetailsEarningsPerShareChartComponent,
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryComponent,
        DetailsRevenueEstimateComponent,
        StockInfoListIdentificationComponent,
        StockSearchComponent,
        RecommendationDirective,
        SummarySectorChartComponent,
        StockInfoListChangeComponent,
        ArticleCardsComponent,
        SymbolMovementTableCardComponent
    ],
    entryComponents: [
        DetailsFinancialReportModalComponent,
        SymbolLookupModalComponent
    ]
})
export class StockDetailsFeatureModule {
}
