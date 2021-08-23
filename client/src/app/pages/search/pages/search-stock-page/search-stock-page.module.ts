import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketFeatureModule } from '@market-feature';
import { SharedModule } from '@shared';
import { SearchStockPageComponent } from './search-stock-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockPageComponent,
	},
];

@NgModule({
	declarations: [SearchStockPageComponent],
	imports: [MarketFeatureModule, SharedModule, RouterModule.forChild(routes)],
})
export class SearchStockPageModule {}
