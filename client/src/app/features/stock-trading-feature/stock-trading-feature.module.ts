import {NgModule} from '@angular/core';
import {TransactionsTableComponent} from './components/transactions/transactions-table/transactions-table.component';
import {PortfolioChangeComponent} from './components/portfolio/portfolio-change/portfolio-change.component';
import {HoldingsTableComponent} from './components/holdings/holdings-table/holdings-table.component';
import {SharedModule} from '../../shared/shared.module';
import {HoldingsTableBodyItemComponent} from './components/holdings/holdings-table-body-item/holdings-table-body-item.component';
import {StockDetailsFeatureModule} from '../stock-details-feature/stock-details-feature.module';
import {TradeConfirmationPopOverComponent} from './entry-components/trade-confirmation-pop-over/trade-confirmation-pop-over.component';
import {TransactionsChartComponent} from './components/transactions/transactions-chart/transactions-chart.component';
import {PortfolioChangeChartComponent} from './components/portfolio/portfolio-change-chart/portfolio-change-chart.component';
import {PortfolioGrowthChartComponent} from './components/portfolio/portfolio-growth-chart/portfolio-growth-chart.component';
import {PortfolioStateComponent} from './components/portfolio/portfolio-state/portfolio-state.component';
import {HoldingsAllocationChartComponent} from './components/holdings/holdings-allocation-chart/holdings-allocation-chart.component';
import {TradingScreenUpdateBaseDirective} from './utils/trading-screen-update-base.directive';


@NgModule({
    declarations: [
        TransactionsTableComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        HoldingsTableBodyItemComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent,
        PortfolioChangeChartComponent,
        PortfolioGrowthChartComponent,
        PortfolioStateComponent,
        HoldingsAllocationChartComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
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
        HoldingsAllocationChartComponent
    ]
})
export class StockTradingFeatureModule {
}
