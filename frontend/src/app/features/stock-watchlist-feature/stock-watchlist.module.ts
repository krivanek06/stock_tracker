import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './container/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {TableWatchlistComponent} from './components/table-watchlist/table-watchlist.component';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        TableWatchlistComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        TableWatchlistComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
})
export class StockWatchlistModule {
}
