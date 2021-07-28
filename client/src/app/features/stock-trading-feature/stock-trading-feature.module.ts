import {NgModule} from '@angular/core';
import {TransactionsChartComponent, TransactionsTableComponent} from './components/transactions';
import {
    PortfolioChangeChartComponent,
    PortfolioChangeComponent,
    PortfolioGrowthChartComponent,
    PortfolioIncreaseChartComponent,
    PortfolioStateComponent
} from './components/portfolio';
import {HoldingsAllocationGroupChartComponent, HoldingsTableComponent} from './components/holdings';
import {SharedModule} from '@shared';
import {TradeConfirmationPopOverComponent} from './entry-components';
import {HoldingsToSectorChartSeriesPipe} from './pipes/holdings-to-sector-chart-series.pipe';
import {HoldingsToPortfolioChartSeriesPipe} from './pipes/holdings-to-portfolio-chart-series.pipe';


@NgModule({
    declarations: [
        TransactionsTableComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent,
        PortfolioChangeChartComponent,
        PortfolioGrowthChartComponent,
        PortfolioStateComponent,
        PortfolioIncreaseChartComponent,
        HoldingsAllocationGroupChartComponent,
        HoldingsToSectorChartSeriesPipe,
        HoldingsToPortfolioChartSeriesPipe
    ],
    imports: [
        SharedModule
    ],
    exports: [
        TransactionsTableComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent,
        PortfolioChangeChartComponent,
        PortfolioGrowthChartComponent,
        PortfolioStateComponent,
        PortfolioIncreaseChartComponent,
        HoldingsAllocationGroupChartComponent,
        HoldingsToSectorChartSeriesPipe,
        HoldingsToPortfolioChartSeriesPipe
    ]
})
export class StockTradingFeatureModule {
}
