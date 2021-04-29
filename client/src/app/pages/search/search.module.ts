import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {AccountFeatureModule} from '@account-feature';
import {GroupFeatureModule} from '@group-feature';
import {PagesSharedModule} from '@pages-shared';
import {SearchPage} from './search.page';
import {SearchStockComponent} from './pages/search-stock/search-stock.component';
import {SearchGroupComponent} from './pages/search-group/search-group.component';
import {SearchUserComponent} from './pages/search-user/search-user.component';
import {SearchPageRoutingModule} from './search-routing.module.ts.module';


@NgModule({
    imports: [
        SharedModule,
        SearchPageRoutingModule,
        AccountFeatureModule,
        GroupFeatureModule,
        PagesSharedModule
    ],
    declarations: [
        SearchPage,
        SearchStockComponent,
        SearchGroupComponent,
        SearchUserComponent,
    ]
})
export class SearchPageModule {
}
