import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {WatchlistTableHeaderComponent} from './components/watchlist-table-header/watchlist-table-header.component';
import {WatchlistSectorChartComponent} from './components/watchlist-sector-chart/watchlist-sector-chart.component';
import {WatchlistCreationComponent} from './components/watchlist-creation/watchlist-creation.component';
import {StockDataFeatureModule} from '../stock-data-feature/stock-data-feature.module';
import {WatchlistTableBodyItemComponent} from './components/watchlist-table-body-item/watchlist-table-body-item.component';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableHeaderComponent,
        WatchlistSectorChartComponent,
        WatchlistCreationComponent,
        WatchlistTableBodyItemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StockDataFeatureModule
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableHeaderComponent,
        WatchlistSectorChartComponent,
        WatchlistCreationComponent,
        WatchlistTableBodyItemComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
})
export class StockWatchlistModule {
}
