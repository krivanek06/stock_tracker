import { NgModule } from '@angular/core';
import { AccountPage } from './account.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {AccountFeatureModule} from '../../features/account-feature/account-feature.module';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AccountFeatureModule,
        StockWatchlistModule
    ],
  declarations: [
      AccountPage
  ]
})
export class AccountPageModule {}
