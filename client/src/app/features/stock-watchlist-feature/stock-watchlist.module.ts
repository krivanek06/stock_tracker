import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerPopOverContainerComponent} from './entry-components';
import {WatchlistTableComponent} from './components';
import {WatchlistModificationContainerComponent} from './containers';
import {StockDetailsFeatureModule} from '@stock-details-feature';


@NgModule({
    declarations: [
        WatchlistPickerPopOverContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
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
