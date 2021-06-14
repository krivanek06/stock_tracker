import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerPopOverContainerComponent} from './entry-components';
import {WatchlistTableComponent} from './components';
import {WatchlistModificationContainerComponent} from './containers';

@NgModule({
    declarations: [
        WatchlistPickerPopOverContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        WatchlistPickerPopOverContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    entryComponents: [
        WatchlistPickerPopOverContainerComponent,
    ]
})
export class StockWatchlistModule {
}
