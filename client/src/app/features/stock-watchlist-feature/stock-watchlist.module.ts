import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistPickerModalContainerComponent} from './entry-components';
import {WatchlistTableComponent} from './components';
import {WatchlistModificationContainerComponent} from './containers';
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
