import { NgModule } from '@angular/core';
import {UserAccountInfoComponent} from './components/user-account-info/user-account-info.component';
import {SharedModule} from '../../shared/shared.module';
import {UserAccountInfoListComponent} from './components/user-account-info-list/user-account-info-list.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {PortfolioGrowthComponent} from './components/portfolio-growth/portfolio-growth.component';
import {PortfolioChangeComponent} from './components/portfolio-change/portfolio-change.component';
import {HoldingsComponent} from './components/holdings/holdings.component';



@NgModule({
  declarations: [
    UserAccountInfoComponent,
    UserAccountInfoListComponent,
    TransactionsComponent,
    PortfolioGrowthComponent,
    PortfolioChangeComponent,
    HoldingsComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    UserAccountInfoComponent,
    UserAccountInfoListComponent,
    TransactionsComponent,
    PortfolioGrowthComponent,
    PortfolioChangeComponent,
    HoldingsComponent
  ]
})
export class AccountFeatureModule { }
