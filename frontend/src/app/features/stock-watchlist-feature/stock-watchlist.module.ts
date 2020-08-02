import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './container/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {WatchlistTableComponent} from './components/watchlist-table/watchlist-table.component';
import {WatchlistTableWithSectorChartContainerComponent} from './container/watchlist-table-with-sector-chart-container/watchlist-table-with-sector-chart-container.component';
import {WatchlistSectorChartComponent} from './components/watchlist-sector-chart/watchlist-sector-chart.component';
import {WatchlistCreationComponent} from './components/watchlist-creation/watchlist-creation.component';
import {StockTrackerFeatureModule} from '../stock-tracker-feature/stock-tracker-feature.module';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistTableWithSectorChartContainerComponent,
        WatchlistSectorChartComponent,
        WatchlistCreationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StockTrackerFeatureModule
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistTableWithSectorChartContainerComponent,
        WatchlistSectorChartComponent,
        WatchlistCreationComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
})
export class StockWatchlistModule {
}
