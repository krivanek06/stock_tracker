import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import { SearchUserPageComponent } from './search-user-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchUserPageComponent,
	},
];

@NgModule({
	declarations: [SearchUserPageComponent],
	imports: [RouterModule.forChild(routes), StockTradingFeatureModule, SharedModule, AccountFeatureModule],
})
export class SearchUserPageModule {}
