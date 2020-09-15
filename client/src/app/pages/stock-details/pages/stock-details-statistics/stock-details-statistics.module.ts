import {NgModule} from '@angular/core';
import {StockDetailsStatisticsPageRoutingModule} from './stock-details-statistics-routing.module';
import {StockDetailsStatisticsPage} from './stock-details-statistics.page';
import {StockWatchlistModule} from "../../../../features/stock-watchlist-feature/stock-watchlist.module";
import {SharedModule} from "../../../../shared/shared.module";
import {StockDetailsFeatureModule} from "../../../../features/stock-details-feature/stock-details-feature.module";
import {StatisticsComponent} from "./containers/statistics/statistics.component";
import {StockDataFeatureModule} from "../../../../features/stock-data-feature/stock-data-feature.module";

@NgModule({
    imports: [
        StockWatchlistModule,
        SharedModule,
        StockDetailsStatisticsPageRoutingModule,
        StockDetailsFeatureModule,
        StockDataFeatureModule
    ],
    declarations: [
        StockDetailsStatisticsPage,
        StatisticsComponent
    ]
})
export class StockDetailsStatisticsPageModule {
}
