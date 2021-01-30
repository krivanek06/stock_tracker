import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './entry-components/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {WatchlistTableComponent} from './components/watchlist-table/watchlist-table.component';
import {WatchlistModificationContainerComponent} from './containers/watchlist-modification-container/watchlist-modification-container.component';
import {StockDetailsFeatureModule} from '../stock-details-feature/stock-details-feature.module';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
})
export class StockWatchlistModule {
}
