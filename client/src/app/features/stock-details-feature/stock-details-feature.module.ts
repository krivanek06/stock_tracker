import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsOverviewComponent} from './components/details-overview/details-overview.component';
import {DetailsDividendComponent} from './components/details-dividend/details-dividend.component';
import {DetailsValuationComponent} from './components/details-valuation/details-valuation.component';
import {DetailsFinancialStrengthComponent} from './components/details-financial-strength/details-financial-strength.component';
import {DetailsPerShareComponent} from './components/details-per-share/details-per-share.component';
import {DetailsIncomeStatementCardComponent} from './components/card/details-income-statement-card/details-income-statement-card.component';
import {DetailsCashFlowCardComponent} from './components/card/details-cash-flow-card/details-cash-flow-card.component';
import {DetailsBalanceSheetCardComponent} from './components/card/details-balance-sheet-card/details-balance-sheet-card.component';
import {DetailsRecommendationChartComponent} from './components/details-recommendation-chart/details-recommendation-chart.component';
import {DetailsFinancialStrengthRatioComponent} from './components/details-financial-strength-ratio/details-financial-strength-ratio.component';
import {DetailsFinancialReportModalComponent} from './components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {DetailsEarningsPerShareChartComponent} from './components/details-earnings-per-share-chart/details-earnings-per-share-chart.component';
import {SharedModule} from '../../shared/shared.module';
import {GradingHistoryComponent} from './components/grading-history/grading-history.component';
import {StockTrendComponent} from './components/stock-trend/stock-trend.component';
import {SymbolLookupModalComponent} from './components/modal/symbol-lookup-modal/symbol-lookup-modal.component';
import {DetailsSummaryComponent} from './components/details-summary/details-summary.component';


@NgModule({
    declarations: [
        DetailsOverviewComponent,
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsIncomeStatementCardComponent,
        DetailsCashFlowCardComponent,
        DetailsBalanceSheetCardComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsFinancialReportModalComponent,
        DetailsEarningsPerShareChartComponent,
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        DetailsOverviewComponent,
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsIncomeStatementCardComponent,
        DetailsCashFlowCardComponent,
        DetailsBalanceSheetCardComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsFinancialReportModalComponent,
        DetailsEarningsPerShareChartComponent,
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryComponent
    ],
    entryComponents: [
        DetailsFinancialReportModalComponent,
        SymbolLookupModalComponent
    ]
})
export class StockDetailsFeatureModule {
}
