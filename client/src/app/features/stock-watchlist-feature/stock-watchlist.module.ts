import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {SymbolLookupModalComponent} from './entry-components';
import {WatchlistTableComponent} from './components';
import {WatchlistModificationContainerComponent} from './containers';

@NgModule({
    declarations: [
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ]
})
export class StockWatchlistModule {
}
