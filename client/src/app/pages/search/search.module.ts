import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuHeaderModule } from '@pages-shared';
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
			// {
			// 	path: SEARCH_PAGE_ENUM.USER,
			// 	loadChildren: () => import('./pages/search-basic/search-user-page/search-user-page.module').then((m) => m.SearchUserPageModule),
			// },
			// {
			// 	path: SEARCH_PAGE_ENUM.GROUP,
			// 	loadChildren: () => import('./pages/search-group-page/search-group-page.module').then((m) => m.SearchGroupPageModule),
			// },
			// {
			// 	path: SEARCH_PAGE_ENUM.STOCK,
			// 	loadChildren: () => import('./pages/search-stock-page/search-stock-page.module').then((m) => m.SearchStockPageModule),
			// },
			{
				path: `${SEARCH_PAGE_ENUM.STOCK_DETAILS}/:symbol`,
				loadChildren: () => import('./pages/search-stock-details-page/search-stock-details.module').then((m) => m.SearchStockDetailsModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), CommonModule, IonicModule, HeaderModule, MenuHeaderModule],
	declarations: [SearchPage],
})
export class SearchPageModule {}
