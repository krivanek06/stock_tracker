import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './entry-components/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {WatchlistTableHeaderComponent} from './components/watchlist-table-header/watchlist-table-header.component';
import {WatchlistSectorChartComponent} from './components/watchlist-sector-chart/watchlist-sector-chart.component';
import {StockDataFeatureModule} from '../stock-data-feature/stock-data-feature.module';
import {WatchlistTableBodyItemComponent} from './components/watchlist-table-body-item/watchlist-table-body-item.component';
import {WatchlistTableTitleComponent} from './components/watchlist-table-title/watchlist-table-title.component';
import {WatchlistTableComponent} from './components/watchlist-table/watchlist-table.component';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableHeaderComponent,
        WatchlistSectorChartComponent,
        WatchlistTableBodyItemComponent,
        WatchlistTableTitleComponent,
        WatchlistTableComponent
    ],
    imports: [
        SharedModule,
        StockDataFeatureModule
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        WatchlistSectorChartComponent,
        WatchlistTableComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
})
export class StockWatchlistModule {
}
