import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketFeatureModule } from '@market-feature';
import { SharedModule } from '@shared';
import { SearchStockScreenerComponent } from './search-stock-screener.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockScreenerComponent,
	},
];

@NgModule({
	declarations: [SearchStockScreenerComponent],
	imports: [MarketFeatureModule, SharedModule, RouterModule.forChild(routes)],
})
export class SearchStockScreenerModule {}
