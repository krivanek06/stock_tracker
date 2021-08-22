import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesSharedModule } from '@pages-shared';
import { SharedModule } from '@shared';
import { SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM } from './models/pages.model';
import { SearchPage } from './search.page';

const routes: Routes = [
	{
		path: '',
		component: SearchPage,
		children: [
			{
				path: '',
				redirectTo: SEARCH_PAGE_ENUM.STOCK,
				pathMatch: 'full',
			},
			{
				path: SEARCH_PAGE_ENUM.USER,
				loadChildren: () => import('./pages/search-user-page/search-user-page.module').then((m) => m.SearchUserPageModule),
			},
			{
				path: SEARCH_PAGE_ENUM.GROUP,
				loadChildren: () => import('./pages/search-group-page/search-group-page.module').then((m) => m.SearchGroupPageModule),
			},
			{
				path: SEARCH_PAGE_ENUM.STOCK,
				children: [
					{
						path: '',
						redirectTo: SEARCH_PAGE_STOCK_ENUM.SCREENER,
						pathMatch: 'full',
					},
					{
						path: SEARCH_PAGE_STOCK_ENUM.SCREENER,
						loadChildren: () =>
							import('./pages/search-stock-page/search-stock-screener/search-stock-screener.module').then((m) => m.SearchStockScreenerModule),
					},
					{
						path: `${SEARCH_PAGE_STOCK_ENUM.DETAILS}/:symbol`,
						loadChildren: () =>
							import('./pages/search-stock-page/search-stock-details/search-stock-details.module').then((m) => m.SearchStockDetailsModule),
					},
				],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule, PagesSharedModule],
	declarations: [SearchPage],
})
export class SearchPageModule {}
