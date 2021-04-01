import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerModalContainerComponent} from './entry-components';
import {WatchlistTableComponent} from './components';
import {WatchlistModificationContainerComponent} from './containers';
import {StockDetailsFeatureModule} from '@stock-details-feature';
import {WatchlistFeatureFacadeService} from './services';


@NgModule({
    declarations: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
    ],
    exports: [
        WatchlistPickerModalContainerComponent,
        WatchlistTableComponent,
        WatchlistModificationContainerComponent,
        SymbolLookupModalComponent
    ],
    entryComponents: [
        WatchlistPickerModalContainerComponent,
    ],
    providers: [
        WatchlistFeatureFacadeService
    ]
})
export class StockWatchlistModule {
}
