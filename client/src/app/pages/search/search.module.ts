import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared';
import { SEARCH_PAGE_ENUM } from './models/pages.model';
import { SearchPage } from './search.page';

const routes: Routes = [
	{
		path: '',
		component: SearchPage,
		children: [
			{
				path: '',
				loadChildren: () => import('./pages/search-basic/search-basic.module').then((m) => m.SearchBasicModule),
			},
			{
				path: `${SEARCH_PAGE_ENUM.STOCK_DETAILS}/:symbol`,
				loadChildren: () => import('./pages/search-stock-details-page/search-stock-details.module').then((m) => m.SearchStockDetailsModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), CommonModule, IonicModule, HeaderModule],
	declarations: [SearchPage],
})
export class SearchPageModule {}
